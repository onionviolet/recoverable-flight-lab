import {seedRecords} from './data.js';
export const humanCriteria=[
 'Build a real university engineering project, not just a digital concept.',
 'Make it visually impressive and easy to explain through physics.',
 'Learn by building and testing in person, in stages.',
 'Recover useful hardware and demonstrate it again.',
 'Explore folding wings, aircraft-like descent, flight measurement, and simulation.',
 'Leave behind a working physical demonstrator, readable design records, and honest evidence.'
];
export const engineeringLabels={
 'Recoverable flight':'The flight concept','One ambitious idea. Many questions worth exploring.':'Folding wings. Recoverable parts.',
 'Cone payload with an altimeter, other hardware, and two fins. Intended to detach and glide; the cone is not a validated glider. Lift, balance, control, and recovery for every separated piece remain open.':'Instruments and two fins in a detachable nose. Glide recovery is still an open question.',
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
 'Extend, fork, or build?':'Which way should the simulator go?','Flightory Stallion reference':'Flightory Stallion','What could Stallion teach us?':'Could Stallion fit a useful first mission?','What makes FPV usable?':'What makes an FPV system work well?','What would prove it is fast?':'How would we prove a speed result?','Which drone mission is worth proving?':'Which drone project should come first?'
};
const steps={
 vision:{label:'Project overview',explain:'Explore the three modules, follow an open question, then decide what evidence to gather. The logic map lays out that reasoning; the review desk helps plan the next session.',next:'wing',action:'Explore modules'},
 wing:{label:'Original wish',explain:'The middle section is meant to hold two folding wings. The biggest question is whether the wings, mechanism, wiring, and recovery hardware can fit and move without colliding.',next:'pack',back:'vision',action:'Follow the packaging question'},
 pack:{label:'Open question',explain:'We need real component dimensions and clearances. A possible answer exists, but it is only an assumption until a mockup checks it.',next:'hyp',back:'wing',action:'See the possible answer'},
 hyp:{label:'Assumption',explain:'An internal segmented fold might fit. That is a working guess, not a result. Dimensions, mass, and a continuous motion path are still missing.',next:'test',back:'pack',action:'See the proposed test'},
 test:{label:'Unperformed test',explain:'The draft test is an inert packaging mockup. It has not happened, and its setup, reviewer, and pass criteria still need to be set.',next:'decision',back:'hyp',action:'See the draft decision'},
 decision:{label:'Draft decision',explain:'Keep the layout open until measurements show adequate clearance with no interference. Documentary context alone should not close this choice.',next:'evidence',back:'test',action:'Check the evidence'},
 evidence:{label:'Documentary evidence only',explain:'The repository has intent, requirements, and plans. It has no packaging measurements, flight logs, manufacturing design, or validated simulation result.',next:'baseline',back:'decision',action:'Compare a smaller path'},
 baseline:{label:'Proposed option',explain:'C0, C1, and C2 are proposed separate development articles. They may reduce integration risk, but the team has not accepted them as the architecture.',next:'gate',back:'evidence',action:'See what must be decided'},
 gate:{label:'Open gate',explain:'G0 needs agreement on mission, budget, owners, test access, and evidence criteria. It is not complete.',back:'baseline'},
 nose:{label:'Original wish',explain:'The nose carries instruments and is intended to detach and glide. Whether it can do that is an open question.',next:'recover',back:'vision',action:'Follow the recovery question'},
 recover:{label:'Open question',explain:'Follow the saved connections for proposed answers and tests. To extend this question, describe how each piece might return, then identify the observations needed to check that answer. A draft is not a recovery result.',back:'nose',draft:true,draftType:'hypothesis',draftRelationship:'from-new:investigates',draftLabel:'Draft a possible answer'},
 aft:{label:'Original wish',explain:'The aft section has fighter-jet-inspired styling and two fins. No engine architecture or performance requirement is selected.',back:'vision',draft:true,draftRelationship:'from-new:concerns',draftLabel:'Draft the propulsion question',proposal:'Proposed next step: define the mission and constraints, compare certified commercial propulsion data, and set an advisor-reviewed test plan. A selected system plus reviewed requirements and measured results could support a later decision.'},
 goals:{label:'Open question',explain:'Several impressive goals are listed, but no priority order is selected. Choose the first demonstration before turning a wish into a requirement.',next:'gate',action:'See the scope gate'},
 guidance:{label:'Engineering guidance',explain:'Define the behavior meant by “self-orient” before choosing actuators or software. This guidance is not proof that the vehicle can do it.'},
 drone:{label:'Optional proposal',explain:'A carried drone and a separate search drone solve different problems. Neither is part of the baseline, and both need mass, operations, and safety review.'},
 sim:{label:'Open workstream',explain:'Extending, forking, or building a simulator are options. No route has been chosen or run, and the 3D concept view is not solver output.'},
 'drone-lab':{label:'Proposed project family',explain:'This branch collects independent drone ideas. It does not make a drone part of the rocket architecture or select a vehicle, radio system, or flight operation.',next:'mission-question',action:'Choose a useful mission'},
 stallion:{label:'Reference platform',explain:'Stallion is a documented commercial file set worth comparing with the team’s mission and fabrication access. Manufacturer specifications are not local build or flight evidence.',next:'stallion-question',back:'drone-lab',action:'Open the comparison question'},
 fpv:{label:'System idea',explain:'FPV combines video, control, telemetry, recording, pilot workload, and operating rules. A component list alone does not show that the whole link is usable.',next:'fpv-question',back:'drone-lab',action:'Define a usable FPV link'},
 'fast-drone':{label:'Performance branch',explain:'High speed can mean a racing quadcopter, a fast fixed wing, or a short burst. The vehicle class and evidence method must be named before the number means anything.',next:'speed-question',back:'drone-lab',action:'Define the speed evidence'},
 'drone-missions':{label:'Mission menu',explain:'Endurance, VTOL, mapping, search, payloads, and simulated autonomy reward different aircraft and tests. Choose the job before choosing the airframe.',next:'mission-question',back:'drone-lab',action:'Compare the mission options'},
 'stallion-question':{label:'Open comparison',explain:'Compare the official design and license with a specific team mission. Do not treat a product page or published CFD image as local validation.',back:'stallion',draft:true,draftType:'hypothesis',draftRelationship:'from-new:investigates',draftLabel:'Draft a comparison answer'},
 'fpv-question':{label:'Open systems question',explain:'Define latency, visibility, fallback behavior, recording, interference, observer roles, and legal operating limits before selecting an FPV stack.',back:'fpv',draft:true,draftType:'hypothesis',draftRelationship:'from-new:investigates',draftLabel:'Draft a testable answer'},
 'speed-question':{label:'Open evidence question',explain:'A speed result needs a vehicle class, repeatable method, uncertainty, logs, video, control margin, and intact recovery. A display peak alone is not enough.',back:'fast-drone',draft:true,draftType:'hypothesis',draftRelationship:'from-new:investigates',draftLabel:'Draft a measurement hypothesis'},
 'mission-question':{label:'Open scope choice',explain:'Pick one primary drone mission and at most one extension. That keeps the first article reviewable and stops every cool feature from landing on one airframe.',back:'drone-lab',draft:true,draftType:'decision',draftRelationship:'from-new:resolves',draftLabel:'Draft a mission choice'},
 'flightory-source':{label:'Manufacturer source',explain:'This records Flightory’s published Stallion description and license boundary. It is not independent test evidence or a purchase recommendation.'},
 'ardupilot-fpv-source':{label:'Official software documentation',explain:'This source provides an FPV systems checklist and loss-awareness guidance. It does not select an autopilot or approve a wiring layout.'},
 'faa-drone-source':{label:'Official operating source',explain:'This source summarizes the federal recreational baseline. The purpose, airspace, vehicle, campus, and current rules still need review before a flight.'},
 'vision-source':{label:'Original intent record',explain:'This repository snapshot preserves the team’s words without publishing the private whiteboard. It records aspiration, not approval.'},
 'spec-source':{label:'Preliminary document',explain:'This source records questions and interfaces. It is not an approved architecture, test result, or flight authorization.'}
};
export function displayText(record,key){const value=record[key];const original=seedRecords.find(r=>r.id===record.id);return original?.[key]===value?(engineeringLabels[value]||value):value;}
export function matchesRecord(record,query){return [record.title,record.summary,record.id,record.type,displayText(record,'title'),displayText(record,'summary')].join(' ').toLowerCase().includes(query.toLowerCase());}
export function edgeLabel(edge){return edge.from==='evidence'&&edge.verb==='supports'?'provides documentary context for':({contains:'contains',concerns:'asks about',investigates:'explores',tests:'tests',informs:'informs',supports:'supports',requires:'requires',resolves:'addresses'})[edge.verb]||edge.verb;}
export function contextStep(record){
 const original=seedRecords.find(item=>item.id===record.id);
 if(original&&!original.locked&&['title','summary','detail'].some(key=>record[key]!==original[key]))return {label:'Edited proposal',explain:'Your current wording is shown above and in the full record. Follow its saved connections or open the logic map to see how it fits.'};
 return steps[record.id]||{label:record.claim==='proposal'?'Local proposal':'Project record',explain:'Read this record, then use its saved relationships or the project index for wider context.'};
}
