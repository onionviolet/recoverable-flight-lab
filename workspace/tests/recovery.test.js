import test from 'node:test';
import assert from 'node:assert/strict';
import {recoverProject,validateProject} from '../src/data.js';
const fixture=()=>{const values=new Map([['board','{broken-data']]);return {getItem:k=>values.get(k)??null,setItem:(k,v)=>values.set(k,v)};};
test('recovery saves original bytes before creating a valid fresh board',()=>{const s=fixture();const p=recoverProject(s,'board','{broken-data');assert.equal(s.getItem('board:recovery'),'{broken-data');assert.deepEqual(validateProject(JSON.parse(s.getItem('board'))),p);});
test('recovery refuses to overwrite data changed after observation',()=>{const s=fixture();s.setItem('board','newer');assert.throws(()=>recoverProject(s,'board','{broken-data'),/changed/);assert.equal(s.getItem('board'),'newer');});
test('failure to store recovery copy leaves original untouched',()=>{const s=fixture();assert.throws(()=>recoverProject({getItem:s.getItem,setItem:()=>{throw Error('quota');}},'board','{broken-data'));assert.equal(s.getItem('board'),'{broken-data');});
