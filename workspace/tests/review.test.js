import test from 'node:test';
import assert from 'node:assert/strict';
import {newProject,validateProject} from '../src/data.js';
import {missionPrompts,relationshipOptions,buildReviewBrief,projectIdeas,validateNotebookUrl} from '../src/review.js';

test('mission prompts remain five optional local-review questions',()=>{
 const project=newProject();
 assert.equal(missionPrompts.length,5);
 assert.deepEqual(missionPrompts.map(prompt=>prompt.type),Array(5).fill('question'));
 assert.ok(missionPrompts.every(prompt=>project.records.some(record=>record.id===prompt.recordId)));
 assert.ok(missionPrompts.every(prompt=>/Draft for review/.test(prompt.detail)));
 assert.ok(missionPrompts.every(prompt=>/Proposed answer:\nWhy:\nOwner to confirm:\nEvidence needed:\nStill open:/.test(prompt.detail)));
 assert.ok(missionPrompts.every(prompt=>!/^An optional draft question/.test(prompt.summary)));
});

test('relationship options respect directed typed relationships and current starter text',()=>{
 const project=newProject(),hypothesis=project.records.find(record=>record.id==='hyp');
 hypothesis.title='My revised packaging idea';
 const outgoing=relationshipOptions(project.records,'pack','hypothesis');
 assert.deepEqual(outgoing,[{verb:'investigates',direction:'from-new',label:'New hypothesis explores Can everything fit?'}]);
 const incoming=relationshipOptions(project.records,'vision','module');
 assert.deepEqual(incoming,[{verb:'contains',direction:'to-new',label:'The flight concept contains new module'}]);
 assert.deepEqual(relationshipOptions(project.records,'missing','question'),[]);
 assert.deepEqual(relationshipOptions(project.records,'pack','not-a-record-type'),[]);
});

test('review brief includes only selected current records and their internal relationships without mutation',()=>{
 const project=newProject();
 project.records.find(record=>record.id==='hyp').title='A current local packaging hypothesis';
 project.records.push({id:'local-private-note',type:'question',title:'Private note',summary:'Do not share',detail:'Outside this brief',claim:'proposal',locked:false,x:1,y:2});
 const before=JSON.stringify(project);
 const brief=buildReviewBrief(project,['hyp','test'],{date:'2026-09-19'});
 assert.match(brief,/Date: 2026\\-09\\-19/);
 assert.match(brief,/A current local packaging hypothesis/);
 assert.match(brief,/Claim status: PROPOSAL/);
 assert.match(brief,/Build an inert packaging mockup → tests → A current local packaging hypothesis/);
 assert.doesNotMatch(brief,/Private note|Do not share|Outside this brief/);
 assert.doesNotMatch(brief,/How does it all fit\?/);
 assert.match(brief,/not a selected architecture, and it does not establish measured or flight validation/);
 assert.match(brief,/There is no live collaboration/);
 assert.equal(JSON.stringify(project),before);
});

test('review brief excludes edges that leave the selected snapshot and omits a date by default',()=>{
 const project=newProject(),before=JSON.stringify(project);
 const brief=buildReviewBrief(project,['wing','recover']);
 assert.match(brief,/No saved relationships connect the selected records/);
 assert.doesNotMatch(brief,/Date:/);
 assert.equal(JSON.stringify(project),before);
});

test('review brief preserves imported plain text without creating Markdown structure or raw HTML',()=>{
 const imported=newProject();
 imported.records.push({
  id:'literal-import',type:'question',title:'Literal title\n## Not a heading',
  summary:'<b>Not formatted</b> and [not a link](https://example.invalid)',
  detail:'<img src=x onerror=alert(1)>\n- Not a list\n* Not emphasis\n---\n===\n1. Not an ordered list',
  claim:'proposal',locked:false,x:0,y:0
 });
 const project=validateProject(JSON.parse(JSON.stringify(imported)));
 const brief=buildReviewBrief(project,['literal-import']);

 assert.ok(brief.includes('## Literal title\n\\#\\# Not a heading'));
 assert.ok(brief.includes('&lt;b&gt;Not formatted&lt;\\/b&gt; and \\[not a link\\]\\(https\\:\\/\\/example\\.invalid\\)'));
 assert.ok(brief.includes('&lt;img src\\=x onerror\\=alert\\(1\\)&gt;\n\\- Not a list\n\\* Not emphasis\n\\-\\-\\-\n\\=\\=\\=\n1\\. Not an ordered list'));
 assert.doesNotMatch(brief,/<b>|<img|\n## Not a heading|\[not a link\]\(|\n---\n|\n===\n|\n1\. Not an ordered list/);
});

test('review brief fences imported indentation with a fence longer than its content without altering source text',()=>{
 const imported=newProject();
 imported.records.push({id:'indented-import',type:'question',title:'Indented note',summary:'Plain summary',detail:'    <b>raw & text</b>\n\n\n```` nested fence',claim:'proposal',locked:false,x:0,y:0});
 const brief=buildReviewBrief(validateProject(JSON.parse(JSON.stringify(imported))),['indented-import']);
 assert.ok(brief.includes('`````text\n    <b>raw & text</b>\n\n\n```` nested fence\n`````'));
 assert.doesNotMatch(brief,/&lt;b&gt;raw &amp; text&lt;\/b&gt;/);
});

test('review brief keeps relationship labels inline when a selected title needs a fenced block',()=>{
 const project=newProject();
 project.records.find(record=>record.id==='hyp').title='    Indented hypothesis\nwith a second line';
 const brief=buildReviewBrief(project,['hyp','test']);
 assert.ok(brief.includes('## Record title\n\n```text\n    Indented hypothesis\nwith a second line\n```'));
 assert.match(brief,/- Build an inert packaging mockup → tests → Indented hypothesis with a second line/);
 assert.doesNotMatch(brief,/- ```/);
});

test('project ideas point to existing board context and remain local proposals when copied in',()=>{
 const project=newProject();
 assert.ok(projectIdeas.length>0);
 assert.ok(projectIdeas.every(idea=>project.records.some(record=>record.id===idea.recordId)));
 for(const [index,idea] of projectIdeas.entries())project.records.push({
  id:`local-idea-${index}`,type:idea.type,title:idea.title,summary:idea.summary,detail:idea.detail,
  claim:'proposal',locked:false,x:index*20,y:index*20
 });
 validateProject(project);
 const copied=project.records.slice(-projectIdeas.length);
 assert.ok(copied.every(record=>record.claim==='proposal'&&!record.locked));
 assert.deepEqual(copied.map(record=>record.title),projectIdeas.map(idea=>idea.title));
});

test('notebook URLs accept only credential-free HTTPS OneNote or SharePoint hosts',()=>{
 for(const value of ['https://contoso.sharepoint.com/sites/revival', 'https://www.onenote.com/notebooks/revival', 'https://onenote.com/notebooks/revival']){
  assert.equal(validateNotebookUrl(value),value);
 }
 for(const value of ['javascript:alert(1)', 'http://contoso.sharepoint.com/sites/revival', 'https://contoso.sharepoint.com.evil.example/sites/revival', 'https://notsharepoint.com/sites/revival', 'https://user:pass@contoso.sharepoint.com/sites/revival', 'https://contoso.sharepoint.com:8443/sites/revival']){
  assert.throws(()=>validateNotebookUrl(value),/Use an HTTPS OneNote or SharePoint notebook link/);
 }
});
