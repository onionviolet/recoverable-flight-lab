import test from 'node:test';
import assert from 'node:assert/strict';
import {newProject} from '../src/data.js';
import {organizeBoard,sectionBounds,sectionFor,connectionGeometry,sections} from '../src/board.js';
test('organization preserves record content and every connection',()=>{const p=newProject(),content=p.records.map(({x,y,...r})=>r),edges=JSON.stringify(p.edges);organizeBoard(p.records);assert.deepEqual(p.records.map(({x,y,...r})=>r),content);assert.equal(JSON.stringify(p.edges),edges);assert.equal(new Set(p.records.map(sectionFor)).size,5);});
test('organized section frames do not overlap',()=>{const p=newProject();organizeBoard(p.records);const bounds=sections.map(s=>sectionBounds(p.records,s.id));for(let i=0;i<bounds.length;i++)for(let j=i+1;j<bounds.length;j++){const a=bounds[i],b=bounds[j];assert.ok(a.x+a.w<=b.x||b.x+b.w<=a.x||a.y+a.h<=b.y||b.y+b.h<=a.y,`${sections[i].id} overlaps ${sections[j].id}`);}});
test('horizontal connections terminate at card boundaries',()=>{const g=connectionGeometry({x:0,y:0,w:300,h:200},{x:500,y:0,w:300,h:200});assert.deepEqual(g.start,{x:300,y:100});assert.deepEqual(g.end,{x:500,y:100});assert.deepEqual(g.mid,{x:400,y:100});});
