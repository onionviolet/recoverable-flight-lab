export const sections=[
 {id:'vehicle',title:'Vehicle concept',subtitle:'Configuration C4 · module interfaces',number:'01'},
 {id:'questions',title:'Open questions',subtitle:'Unresolved requirements and feasibility',number:'02'},
 {id:'experiments',title:'Experiments & decisions',subtitle:'Hypotheses, test proposals, and dispositions',number:'03'},
 {id:'directions',title:'Development paths',subtitle:'Candidate configurations and milestones',number:'04'},
 {id:'sources',title:'Sources & evidence',subtitle:'Reference documents and evidence status',number:'05'}
];
export function sectionFor(r){
 if(['vision','nose','wing','aft'].includes(r.id))return 'vehicle';
 if(['baseline','goals','gate','guidance','drone','sim'].includes(r.id))return 'directions';
 if(['source','evidence'].includes(r.type))return 'sources';
 if(['hypothesis','experiment','decision'].includes(r.type))return 'experiments';
 return 'questions';
}
export function sectionBounds(records,id){
 const items=records.filter(r=>r.id!=='vision'&&sectionFor(r)===id).map(r=>({x:r.x,y:r.y,w:300,h:220}));
 if(id==='vehicle')items.push({x:398,y:25,w:570,h:690});
 if(!items.length)return null;
 const x=Math.min(...items.map(r=>r.x))-16,y=Math.min(...items.map(r=>r.y))-80;
 return {x,y,w:Math.max(...items.map(r=>r.x+r.w))-x+16,h:Math.max(...items.map(r=>r.y+r.h))-y+22};
}
export function organizeBoard(records){
 const layouts={questions:{x:60,y:95,cols:1},experiments:{x:60,y:925,cols:4},directions:{x:60,y:1320,cols:4},sources:{x:60,y:2010,cols:4}};
 const indices={};
 for(const r of records){if(r.id==='vision')continue;const section=sectionFor(r);if(section==='vehicle'){r.x=1020;r.y={nose:95,wing:335,aft:575}[r.id];continue;}const n=indices[section]||0,l=layouts[section];r.x=l.x+(n%l.cols)*345;r.y=l.y+Math.floor(n/l.cols)*270;indices[section]=n+1;}
}
// Connect card edges rather than their hidden centers. Keep arrows directed from subject to object.
export function connectionGeometry(a,b){
 const ac={x:a.x+a.w/2,y:a.y+a.h/2},bc={x:b.x+b.w/2,y:b.y+b.h/2};
 const horizontal=Math.abs(bc.x-ac.x)>Math.abs(bc.y-ac.y);
 let start,end,c1,c2;
 if(horizontal){const right=bc.x>=ac.x;start={x:right?a.x+a.w:a.x,y:ac.y};end={x:right?b.x:b.x+b.w,y:bc.y};const bend=Math.max(45,Math.abs(end.x-start.x)/2);c1={x:start.x+(right?bend:-bend),y:start.y};c2={x:end.x+(right?-bend:bend),y:end.y};}
 else{const down=bc.y>=ac.y;start={x:ac.x,y:down?a.y+a.h:a.y};end={x:bc.x,y:down?b.y:b.y+b.h};const bend=Math.max(45,Math.abs(end.y-start.y)/2);c1={x:start.x,y:start.y+(down?bend:-bend)};c2={x:end.x,y:end.y+(down?-bend:bend)};}
 const mid={x:(start.x+3*c1.x+3*c2.x+end.x)/8,y:(start.y+3*c1.y+3*c2.y+end.y)/8};
 return {path:`M ${start.x} ${start.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${end.x} ${end.y}`,mid,start,end};
}
export const relationshipLabels={contains:'contains',concerns:'asks about',investigates:'explores',tests:'tests',informs:'informs',supports:'supports',requires:'requires',resolves:'addresses'};
