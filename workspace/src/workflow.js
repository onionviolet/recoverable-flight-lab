export const workflowTracks=[
 {id:'wing',label:'Folding wings'},
 {id:'nose',label:'Recovery'},
 {id:'aft',label:'Propulsion'}
];

const stages=[
 ['module','Module'],
 ['question','Question'],
 ['hypothesis','Hypothesis'],
 ['experiment','Experiment'],
 ['decision','Decision'],
 ['evidence','Evidence']
];

const linked=(project,fromIds,verb)=>{
 const ids=new Set(fromIds);
 return project.edges.filter(edge=>edge.verb===verb&&ids.has(edge.to)).map(edge=>edge.from);
};

const recordsFor=(project,ids,type)=>{
 const wanted=new Set(ids);
 return project.records.filter(record=>record.type===type&&wanted.has(record.id));
};

export function buildWorkflow(project,trackId){
 const moduleId=workflowTracks.some(track=>track.id===trackId)?trackId:'wing';
 const module=recordsFor(project,[moduleId],'module');
 const questions=recordsFor(project,linked(project,module.map(record=>record.id),'concerns'),'question');
 const hypotheses=recordsFor(project,linked(project,questions.map(record=>record.id),'investigates'),'hypothesis');
 const experiments=recordsFor(project,linked(project,hypotheses.map(record=>record.id),'tests'),'experiment');
 const decisions=recordsFor(project,linked(project,questions.map(record=>record.id),'resolves'),'decision');
 const evidence=recordsFor(project,linked(project,decisions.map(record=>record.id),'supports'),'evidence');
 const byStage={module,question:questions,hypothesis:hypotheses,experiment:experiments,decision:decisions,evidence};
 return {
  moduleId,
  steps:stages.map(([key,label])=>({key,label,records:byStage[key],missing:byStage[key].length===0}))
 };
}
