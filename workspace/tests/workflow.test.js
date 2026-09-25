import test from 'node:test';
import assert from 'node:assert/strict';
import {newProject} from '../src/data.js';
import {buildWorkflow,workflowTracks} from '../src/workflow.js';
import {workflowDraft,workflowMarkup} from '../src/workflow-view.js';

const step=(workflow,key)=>workflow.steps.find(candidate=>candidate.key===key);
const ids=(workflow,key)=>step(workflow,key).records.map(record=>record.id);

test('seeded folding-wing trail follows its saved relationships',()=>{
 const workflow=buildWorkflow(newProject(),'wing');
 assert.equal(workflow.moduleId,'wing');
 assert.deepEqual(workflowTracks.map(track=>track.id),['wing','nose','aft']);
 assert.deepEqual(workflow.steps.map(candidate=>candidate.key),['module','question','hypothesis','experiment','decision','evidence']);
 assert.deepEqual(workflow.steps.map(candidate=>candidate.records.map(record=>record.id)),[['wing'],['pack'],['hyp'],['test'],['decision'],['evidence']]);
 assert.ok(workflow.steps.every(candidate=>!candidate.missing));
});

test('recovery keeps absent stages visibly missing',()=>{
 const workflow=buildWorkflow(newProject(),'nose');
 assert.deepEqual(ids(workflow,'module'),['nose']);
 assert.deepEqual(ids(workflow,'question'),['recover']);
 for(const key of ['hypothesis','experiment','decision','evidence'])assert.equal(step(workflow,key).missing,true);
});

test('added and removed local proposal relationships change the map',()=>{
 const project=newProject();
 project.records.push({id:'recovery-hyp',type:'hypothesis',title:'Try a recovery plan',summary:'Proposal',detail:'Notes',x:0,y:0,claim:'proposal',locked:false});
 project.edges.push({id:'local-investigates',from:'recovery-hyp',to:'recover',verb:'investigates'});
 assert.deepEqual(ids(buildWorkflow(project,'nose'),'hypothesis'),['recovery-hyp']);
 project.edges=project.edges.filter(edge=>edge.id!=='local-investigates');
 assert.equal(step(buildWorkflow(project,'nose'),'hypothesis').missing,true);
});

test('branches retain every record at each workflow stage',()=>{
 const project=newProject();
 for(const record of [
  {id:'hyp-two',type:'hypothesis'}, {id:'test-two',type:'experiment'}, {id:'decision-two',type:'decision'}
 ])project.records.push({title:record.id,summary:'Proposal',detail:'Notes',x:0,y:0,claim:'proposal',locked:false,...record});
 project.edges.push(
  {id:'edge-hyp-two',from:'hyp-two',to:'pack',verb:'investigates'},
  {id:'edge-test-two',from:'test-two',to:'hyp-two',verb:'tests'},
  {id:'edge-decision-two',from:'decision-two',to:'pack',verb:'resolves'},
  {id:'edge-evidence-two',from:'evidence',to:'decision-two',verb:'supports'}
 );
 const workflow=buildWorkflow(project,'wing');
 assert.deepEqual(ids(workflow,'hypothesis'),['hyp','hyp-two']);
 assert.deepEqual(ids(workflow,'experiment'),['test','test-two']);
 assert.deepEqual(ids(workflow,'decision'),['decision','decision-two']);
 assert.deepEqual(ids(workflow,'evidence'),['evidence']);
});

test('workflow is read-only and falls back to folding wings',()=>{
 const project=newProject(),before=structuredClone(project);
 const workflow=buildWorkflow(project,'unknown-track');
 assert.equal(workflow.moduleId,'wing');
 assert.strictEqual(step(workflow,'module').records[0],project.records.find(record=>record.id==='wing'));
 assert.deepEqual(project,before);
});

test('workflow markup escapes edited local record text and keeps evidence documentary-only',()=>{
 const project=newProject();
 project.records.push({id:'unsafe-hyp',type:'hypothesis',title:'<img src=x onerror=alert(1)>',summary:'<script>steal()</script> & "quotes"',detail:'Notes',x:0,y:0,claim:'proposal',locked:false});
 project.edges.push({id:'unsafe-investigates',from:'unsafe-hyp',to:'pack',verb:'investigates'});
 const markup=workflowMarkup(project,'wing');
 assert.match(markup,/&lt;img src=x onerror=alert\(1\)&gt;/);
 assert.match(markup,/&lt;script&gt;steal\(\)&lt;\/script&gt; &amp; &quot;quotes&quot;/);
 assert.doesNotMatch(markup,/<script>steal\(\)<\/script>|<img src=x/);
 assert.match(markup,/Documents only · no test result/);
 assert.match(markup,/A connected record is a place to think, not a completed milestone/);
});

test('workflow drafts use the correct prerequisite and typed relationship',()=>{
 const project=newProject();
 for(const [key,anchorId,relationship] of [
  ['question','wing','from-new:concerns'],
  ['hypothesis','pack','from-new:investigates'],
  ['experiment','hyp','from-new:tests'],
  ['decision','pack','from-new:resolves']
 ]){
  const draft=workflowDraft(project,'wing',key);
  assert.equal(draft.type,key);
  assert.equal(draft.anchorId,anchorId);
  assert.equal(draft.relationship,relationship);
 }
});

test('workflow draft is unavailable without its saved prerequisite',()=>{
 const project=newProject();
 assert.equal(workflowDraft(project,'nose','experiment'),null);
 project.edges=project.edges.filter(edge=>!(edge.from==='pack'&&edge.to==='wing'&&edge.verb==='concerns'));
 assert.equal(workflowDraft(project,'wing','decision'),null);
});

test('workflow drafts use the selected prerequisite for a branch and require a choice when ambiguous',()=>{
 const project=newProject();
 project.records.push({id:'hyp-two',type:'hypothesis',title:'Second packaging idea',summary:'Proposal',detail:'Notes',x:0,y:0,claim:'proposal',locked:false});
 project.edges.push({id:'edge-hyp-two',from:'hyp-two',to:'pack',verb:'investigates'});
 project.edges=project.edges.filter(edge=>edge.id!=='edge-6');

 assert.equal(workflowDraft(project,'wing','experiment'),null);
 assert.equal(workflowDraft(project,'wing','experiment','hyp-two').anchorId,'hyp-two');

 const ambiguous=workflowMarkup(project,'wing','pack');
 assert.match(ambiguous,/Select one possible answer above before drafting this step/);
 assert.doesNotMatch(ambiguous,/data-flow-add="experiment"/);
 const selected=workflowMarkup(project,'wing','hyp-two');
 assert.match(selected,/data-flow-add="experiment"/);
});
