import test from 'node:test';
import assert from 'node:assert/strict';
import {newProject,validateProject} from '../src/data.js';
import {displayText,matchesRecord,edgeLabel,contextStep,humanCriteria} from '../src/presentation.js';
test('human criteria preserve the original team goals without engineering corrections',()=>{
 assert.equal(humanCriteria.length,6);
 assert.ok(humanCriteria.some(item=>/visually impressive/.test(item)));
 assert.ok(humanCriteria.some(item=>/building and testing in person/.test(item)));
 assert.ok(humanCriteria.some(item=>/Recover useful hardware/.test(item)));
 assert.ok(humanCriteria.every(item=>!/(does not|not a validated|unproven)/i.test(item)));
});
test('search finds visible labels and original source wording without changing saved records',()=>{
 const p=newProject(),before=JSON.stringify(p),r=p.records.find(r=>r.id==='pack');
 assert.ok(matchesRecord(r,'Can everything fit'));
 assert.ok(matchesRecord(r,'How does it all fit'));
 assert.equal(JSON.stringify(validateProject(p)),before);
});
test('local text is never rewritten just because it matches a display alias',()=>{
 const p=newProject(),r=p.records.find(r=>r.id==='hyp');
 r.title='How does it all fit?';
 assert.equal(displayText(r,'title'),r.title);
 assert.equal(displayText({...r,id:'local-example'},'title'),r.title);
});
test('documentary placeholder edge is qualified without relabeling real evidence relationships',()=>{
 assert.equal(edgeLabel({from:'evidence',verb:'supports'}),'provides documentary context for');
 assert.equal(edgeLabel({from:'other-evidence',verb:'supports'}),'supports');
});
test('packaging trail moves from function through unknown, test, decision, and evidence',()=>{
 const p=newProject(),byId=id=>p.records.find(r=>r.id===id);
 assert.equal(contextStep(byId('wing')).next,'pack');
 assert.equal(contextStep(byId('pack')).next,'hyp');
 assert.equal(contextStep(byId('hyp')).next,'test');
 assert.equal(contextStep(byId('test')).label,'Unperformed test');
 assert.equal(contextStep(byId('test')).next,'decision');
 assert.equal(contextStep(byId('decision')).next,'evidence');
 assert.equal(contextStep(byId('evidence')).label,'Documentary evidence only');
});
test('nose and propulsion trails state their missing test work as proposals',()=>{
 const p=newProject(),byId=id=>p.records.find(r=>r.id===id);
 assert.equal(contextStep(byId('nose')).next,'recover');
 assert.match(contextStep(byId('recover')).explain,/No recovery hypothesis or test record exists yet/);
 assert.equal(contextStep(byId('recover')).draft,true);
 assert.equal(contextStep(byId('recover')).draftType,'experiment');
 assert.match(contextStep(byId('aft')).proposal,/Proposed next step/);
 assert.equal(contextStep(byId('aft')).draft,true);
});
