import {verbs} from './data.js';
import {displayText,edgeLabel} from './presentation.js';

// These are prompts for a review, not accepted decisions or assigned roles.
export const missionPrompts=[
 {id:'review-primary-achievement',title:'What should we try first?',question:'What should we try first: recovery, wing deployment, measurement, or speed?',recordId:'goals',type:'question',summary:'Which demonstration the team should attempt first.',detail:'Draft for review.\n\nWhat should we try first: recovery, wing deployment, measurement, or speed?\n\nProposed answer:\nWhy:\nOwner to confirm:\nEvidence needed:\nStill open:'},
 {id:'review-budget-boundary',title:'What can we support?',question:'What budget ceiling and deadline can we support?',recordId:'gate',type:'question',summary:'A realistic budget and deadline for the next reviewable step.',detail:'Draft for review.\n\nWhat budget ceiling and deadline can we support?\n\nProposed answer:\nWhy:\nOwner to confirm:\nEvidence needed:\nStill open:'},
 {id:'review-reviewer-roles',title:'Who needs to review?',question:'What experience and review coverage do we need next?',recordId:'gate',type:'question',summary:'The review coverage needed before the next step.',detail:'Draft for review.\n\nWhat experience and review coverage do we need next?\n\nProposed answer:\nWhy:\nOwner to confirm:\nEvidence needed:\nStill open:'},
 {id:'review-test-access',title:'Where can we test?',question:'Which workshop and test access should we confirm?',recordId:'gate',type:'question',summary:'The workshop and test access to confirm before planning work.',detail:'Draft for review.\n\nWhich workshop and test access should we confirm?\n\nProposed answer:\nWhy:\nOwner to confirm:\nEvidence needed:\nStill open:'},
 {id:'review-success-evidence',title:'What would count as useful?',question:'What evidence would make this review useful?',recordId:'evidence',type:'question',summary:'The evidence that would make the next review informative.',detail:'Draft for review.\n\nWhat evidence would make this review useful?\n\nProposed answer:\nWhy:\nOwner to confirm:\nEvidence needed:\nStill open:'}
];

export function relationshipOptions(records,anchorId,newType){
 if(!Array.isArray(records)||typeof anchorId!=='string'||typeof newType!=='string')return [];
 const anchor=records.find(record=>record?.id===anchorId);
 if(!anchor||!anchor.type)return [];
 const title=displayText(anchor,'title');
 return Object.entries(verbs).flatMap(([verb,[fromType,toType]])=>{
  const options=[];
  if(fromType===newType&&toType===anchor.type)options.push({verb,direction:'from-new',label:`New ${newType} ${edgeLabel({from:'new',verb})} ${title}`});
  if(fromType===anchor.type&&toType===newType)options.push({verb,direction:'to-new',label:`${title} ${edgeLabel({from:anchor.id,verb})} new ${newType}`});
  return options;
 });
}

const escapeHtml=value=>String(value??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const escapeInline=value=>escapeHtml(String(value??'').replace(/\\/g,'\\\\').replace(/[!"#$%'()*+,\-./:;=?@\[\]^_`{|}~]/g,'\\$&'));
const relationshipLabel=value=>escapeInline(String(value??'').replace(/\s*[\r\n]+\s*/g,' ').trim());

// Board fields are plain text. Escape Markdown punctuation so copied briefs retain
// their source text instead of interpreting it as headings, links, lists, or HTML.
// Indented text needs a fence because spaces alone can start a Markdown code block.
const markdown=value=>{
 const source=String(value??'');
 if(/(^|\n)(?: {4}|\t)/.test(source)){
  const fence='`'.repeat(Math.max(3,...(source.match(/`+/g)||[]).map(run=>run.length+1)));
  return {block:true,text:`${fence}text\n${source}\n${fence}`};
 }
 return {block:false,text:escapeInline(source)};
};
const claimLabel=claim=>String(claim||'unknown').toUpperCase();

export function buildReviewBrief(project,recordIds,options={}){
 const records=Array.isArray(project?.records)?project.records:[];
 const selectedIds=[...new Set(Array.isArray(recordIds)?recordIds:[])];
 const selected=selectedIds.map(id=>records.find(record=>record?.id===id)).filter(Boolean);
 const selectedSet=new Set(selected.map(record=>record.id));
 const edges=Array.isArray(project?.edges)?project.edges:[];
 const selectedById=new Map(selected.map(record=>[record.id,record]));
 const lines=['# Recoverable Flight Lab review brief'];
 if(options.date!==undefined&&options.date!==null&&String(options.date)!=='')lines.push('',`Date: ${markdown(options.date).text}`);
 lines.push('', 'Local board snapshot for review. This is an illustrative concept, not a selected architecture, and it does not establish measured or flight validation. There is no live collaboration in this local snapshot.', '');
 if(!selected.length)lines.push('No records were selected for this brief.');
 for(const record of selected){
  const title=markdown(record.title),summary=markdown(record.summary),detail=markdown(record.detail);
  lines.push(title.block?'## Record title':`## ${title.text}`, ...(title.block?['',title.text]:[]), '', `Claim status: ${claimLabel(record.claim)}`, '', summary.text, '', detail.text, '');
 }
 const included=edges.filter(edge=>edge&&selectedSet.has(edge.from)&&selectedSet.has(edge.to)&&selectedById.has(edge.from)&&selectedById.has(edge.to));
 lines.push('## Selected relationships', '');
 if(!included.length)lines.push('No saved relationships connect the selected records.');
 else for(const edge of included){
  const from=selectedById.get(edge.from),to=selectedById.get(edge.to);
  lines.push(`- ${relationshipLabel(from.title)} → ${relationshipLabel(edgeLabel(edge))} → ${relationshipLabel(to.title)}`);
 }
 return lines.join('\n').trimEnd()+'\n';
}

// Proposed directions from the Revival planning material, never automatically added.
export const projectIdeas=[
 {id:'replay',title:'Flight replay',type:'experiment',recordId:'sim',summary:'Turn a recorded session into a story you can inspect.',question:'Can someone explain what happened from the data alone?',detail:'Draft for review. Start with a recorded bench sensor session and an explicitly labeled sample log.\n\nDeliverable: a time-aligned plot, event notes, and an explanation of missing or uncertain data. Add flight data only when it exists.\nInputs and units:\nFile / recording reference:\nClock alignment and gaps:\nWhat we observed:\nOwner to confirm:\nNext check:'},
 {id:'payload',title:'Swappable payload bay',type:'experiment',recordId:'nose',summary:'Let the next teammate add an experiment without starting over.',question:'What would make one payload easy to remove, inspect, and replace?',detail:'Draft for review. Develop an inert interface demonstrator before selecting a flight installation.\n\nDeliverable: a labeled interface sketch, measured mass and envelope, and an assembly/access checklist another teammate can follow.\nInterface revision:\nMeasurements and units:\nHow a teammate checks the fit:\nUnresolved connections:\nOwner to confirm:\nNext review:'},
 {id:'wing-demo',title:'Inert wing demonstrator',type:'experiment',recordId:'pack',summary:'Make the most distinctive idea tangible on the bench.',question:'Where does the proposed mechanism need space to move?',detail:'Draft for review. Explore packaging on a non-flight mockup with no live motor. The rendered poses do not prove the mechanism.\n\nDeliverable: a labeled mockup, measurements, and an interference log reviewed before any integration decision.\nArticle revision:\nMeasured envelope and units:\nObserved interference:\nPhotos / observations:\nReviewer and criteria to confirm:\nWhat remains unresolved:'},
 {id:'prediction',title:'Prediction versus observation',type:'experiment',recordId:'sim',summary:'Show where a model helps, and where it is wrong.',question:'Can a prediction be compared fairly with independent observations?',detail:'Draft for review. Choose one bounded model question and preserve a prediction before reviewing independent observations.\n\nDeliverable: assumptions, input provenance, a predicted-versus-observed comparison, and a short explanation of disagreement. Start with a documented reference example.\nModel and version:\nInputs and units:\nPrediction / date:\nIndependent observation source:\nDifference and uncertainty:\nReviewer to confirm:'},
 {id:'stallion-study',title:'Stallion reference study',type:'experiment',recordId:'stallion-question',summary:'Compare a documented fixed-wing platform with one real team mission.',question:'Does the Flightory Stallion answer a need we can name and test?',detail:'Draft for review. Use public manufacturer documentation first. Do not purchase files or copy proprietary geometry as part of this study.\n\nDeliverable: a source-backed comparison of mission, mass range, fabrication access, payload interface, repair path, controls, license, and missing evidence.\nMission being compared:\nPublished facts and dates:\nLocal capabilities to verify:\nLicense or access limits:\nEvidence still missing:\nDecision owner:'},
 {id:'fpv-bench',title:'FPV link bench',type:'experiment',recordId:'fpv-question',summary:'Treat video, control, telemetry, and recording as one system.',question:'Can the team observe latency, interference, and loss behavior without a flight?',detail:'Draft for review. Keep the first check unpowered or bench-contained as the reviewer directs. Do not transmit until frequency, power, licensing, and location constraints are confirmed.\n\nDeliverable: a block diagram, equipment identifiers, observed latency method, recording path, interference notes, loss indication, fallback concept, and reviewer-set pass criteria.\nBench boundary:\nVideo path:\nControl and telemetry path:\nObserved behavior:\nOperating rule review:\nNext evidence:'},
 {id:'speed-evidence',title:'Speed evidence plan',type:'experiment',recordId:'speed-question',summary:'Define a credible result before optimizing for a headline number.',question:'Which method would make a speed claim repeatable and reviewable?',detail:'Draft for review. Start with recorded or simulated data and a reviewer-approved method. Do not turn this template into flight authorization or component sizing.\n\nDeliverable: vehicle class, course definition, measurement source, sampling rate, uncertainty, synchronized video, energy and thermal observations, control margin, and recovery condition.\nVehicle class:\nMeasurement method:\nUncertainty and failure modes:\nControl and video margins:\nRecovery condition:\nReviewer to confirm:'},
 {id:'drone-sitl',title:'Drone simulation mission',type:'experiment',recordId:'mission-question',summary:'Learn autonomy and mission logic without risking an airframe.',question:'Can one useful mission be reproduced and reviewed in software-in-the-loop?',detail:'Draft for review. Choose a documented simulator and one bounded mission such as a waypoint survey, return behavior, or VTOL transition reference case. Simulation is not flight validation.\n\nDeliverable: tool and version, scenario inputs, expected behavior, logs, replay, observed mismatch, and a decision about the next evidence needed.\nMission:\nTool and version:\nInputs and assumptions:\nExpected behavior:\nObserved behavior:\nNext evidence:'}
];

export function validateNotebookUrl(value){
 const url=new URL(value.trim());
 const host=url.hostname.toLowerCase();
 if(url.protocol!=='https:'||url.username||url.password||url.port||!(host.endsWith('.sharepoint.com')||host==='onenote.com'||host.endsWith('.onenote.com')||host==='onenote.cloud.microsoft'))throw Error('Use an HTTPS OneNote or SharePoint notebook link.');
 return url.href;
}
