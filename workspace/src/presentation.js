import {seedRecords} from './data.js';
export const engineeringLabels={
 'Recoverable flight':'The flight concept','One ambitious idea. Many questions worth exploring.':'A vehicle idea, and what we still need to figure out.',
 '01 / Recovery payload':'01 / Nose & payload','Recovery payload':'01 / Nose & payload','A detachable nose. A different way down.':'Instruments up front. How will the nose come back?',
 '02 / Deployable wings':'02 / Folding wings','Deployable wings':'02 / Folding wings','Stow within. Open possibilities.':'Wings inside the body, opening out for descent.',
 '03 / Propulsion concept':'03 / Propulsion','Propulsion concept':'03 / Propulsion','Jet-inspired form. Architecture still open.':'The engine choice is still open.',
 'How does it all fit?':'Can everything fit?','Internal wings, hardware, and room to move.':'Wings, motors, wiring, recovery gear. Space adds up.',
 'What comes back?':'How does each piece come back?','Every separated piece needs a plan.':'Every piece needs a way down and a way to find it.',
 'An internal folding arrangement':'Could the wings fold inside?','A packaging hypothesis, ready to investigate.':'One possible arrangement. We still need dimensions.',
 'Build an inert packaging mockup':'Try a non-flight mockup','A proposed first step, before flight hardware.':'A test idea. Setup and pass criteria still need work.',
 'Keep packaging open':'Keep the layout open','Let measured evidence decide.':'Measure the parts and check for collisions before choosing.',
 'Start with independent articles':'Try the pieces separately','A proposed path to the larger idea.':'A mechanism, a small rocket, and a separate glider. A proposed route.',
 'What should we prove first?':'What should we try first?','Evidence starts with provenance':'What evidence do we have?','Documentation exists. Flight evidence does not.':'Notes and plans so far. No test results yet.',
 'Captured project vision':'The original idea','The idea, in its own terms.':'What we want to explore, before choosing a design.',
 'What does “self-orient” mean?':'What should self-orienting do?','Could a drone help recovery?':'Could a drone help?','Carried payload or a separate search tool?':'Carry it along, or use it to search afterward?',
 'Extend, fork, or build?':'Which way should the simulator go?'
};
const steps={
 vision:{label:'Original wish',explain:'C4 is the integrated aspiration: a modular vehicle with internal folding wings and recoverable parts. The model explains that idea. It is not a chosen architecture, CAD model, or simulation.',next:'wing',action:'Pick a module'},
 wing:{label:'Original wish',explain:'The middle section is meant to hold two folding wings. The biggest question is whether the wings, mechanism, wiring, and recovery hardware can fit and move without colliding.',next:'pack',back:'vision',action:'Follow the packaging question'},
 pack:{label:'Open question',explain:'We need real component dimensions and clearances. A possible answer exists, but it is only an assumption until a mockup checks it.',next:'hyp',back:'wing',action:'See the possible answer'},
 hyp:{label:'Assumption',explain:'An internal segmented fold might fit. That is a working guess, not a result. Dimensions, mass, and a continuous motion path are still missing.',next:'test',back:'pack',action:'See the proposed test'},
 test:{label:'Unperformed test',explain:'The draft test is an inert packaging mockup. It has not happened, and its setup, reviewer, and pass criteria still need to be set.',next:'decision',back:'hyp',action:'See the draft decision'},
 decision:{label:'Draft decision',explain:'Keep the layout open until measurements show adequate clearance with no interference. Documentary context alone should not close this choice.',next:'evidence',back:'test',action:'Check the evidence'},
 evidence:{label:'Documentary evidence only',explain:'The repository has intent, requirements, and plans. It has no packaging measurements, flight logs, manufacturing design, or validated simulation result.',next:'baseline',back:'decision',action:'Compare a smaller path'},
 baseline:{label:'Proposed option',explain:'C0, C1, and C2 are proposed separate development articles. They may reduce integration risk, but the team has not accepted them as the architecture.',next:'gate',back:'evidence',action:'See what must be decided'},
 gate:{label:'Open gate',explain:'G0 needs agreement on mission, budget, owners, test access, and evidence criteria. It is not complete.',back:'baseline'},
 nose:{label:'Original wish',explain:'The nose carries instruments and is intended to detach and glide. The cone shape does not prove lift, stability, control, or recoverability.',next:'recover',back:'vision',action:'Follow the recovery question'},
 recover:{label:'Open question',explain:'No recovery hypothesis or test record exists yet. Proposed next step: draft a piece-by-piece recovery table, then plan a separately reviewed low-energy descent test. Evidence that could change a decision: measured descent behavior, tracking success, and safe retrieval for every piece.',back:'nose',draft:true,draftType:'experiment',draftLabel:'Draft the missing test'},
 aft:{label:'Original wish',explain:'The aft section has fighter-jet-inspired styling and two fins. No engine architecture or performance requirement is selected.',back:'vision',draft:true,draftLabel:'Draft the propulsion question',proposal:'Proposed next step: define the mission and constraints, compare certified commercial propulsion data, and set an advisor-reviewed test plan. A selected system plus reviewed requirements and measured results could support a later decision.'},
 goals:{label:'Open question',explain:'Several impressive goals are listed, but no priority order is selected. Choose the first demonstration before turning a wish into a requirement.',next:'gate',action:'See the scope gate'},
 guidance:{label:'Engineering guidance',explain:'Define the behavior meant by “self-orient” before choosing actuators or software. This guidance is not proof that the vehicle can do it.'},
 drone:{label:'Optional proposal',explain:'A carried drone and a separate search drone solve different problems. Neither is part of the baseline, and both need mass, operations, and safety review.'},
 sim:{label:'Open workstream',explain:'Extending, forking, or building a simulator are options. No route has been chosen or run, and the 3D concept view is not solver output.'},
 'vision-source':{label:'Original intent record',explain:'This repository snapshot preserves the team’s words without publishing the private whiteboard. It records aspiration, not approval.'},
 'spec-source':{label:'Preliminary document',explain:'This source records questions and interfaces. It is not an approved architecture, test result, or flight authorization.'}
};
export function displayText(record,key){const value=record[key];const original=seedRecords.find(r=>r.id===record.id);return original?.[key]===value?(engineeringLabels[value]||value):value;}
export function matchesRecord(record,query){return [record.title,record.summary,record.id,record.type,displayText(record,'title'),displayText(record,'summary')].join(' ').toLowerCase().includes(query.toLowerCase());}
export function edgeLabel(edge){return edge.from==='evidence'&&edge.verb==='supports'?'provides documentary context for':({contains:'contains',concerns:'asks about',investigates:'explores',tests:'tests',informs:'informs',supports:'supports',requires:'requires',resolves:'addresses'})[edge.verb]||edge.verb;}
export function contextStep(record){return steps[record.id]||{label:record.claim==='proposal'?'Local proposal':'Project record',explain:'Read this record, then use its saved relationships or the project index for wider context.'};}
