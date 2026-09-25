import assert from 'node:assert/strict';

// Optional browser check. Point PLAYWRIGHT_MODULE at an installed Playwright
// entrypoint when it is supplied by your development runtime rather than npm.
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
const base=process.env.RFL_BASE_URL||'http://127.0.0.1:4175';
const key='recoverable-flight-board-v1';
const browser=await chromium.launch({headless:true});
const context=await browser.newContext({viewport:{width:1440,height:1000}});
const errors=[];
const page=await context.newPage();
page.on('pageerror',error=>errors.push(error.message));

async function enter(){
 await page.goto(base);
 await page.locator('#enter-board').click();
 await page.locator('#inspect:enabled').waitFor();
}
async function newQuestion(title){
 await page.locator('#quick-add').click();
 await page.locator('[data-new-type="question"]').click();
 await page.locator('[name="title"]').fill(title);
 await page.locator('#edit-form button[type="submit"]').click();
}
async function exportBoard(){
 await page.locator('#project-menu-toggle').click();
 const download=page.waitForEvent('download');
 await page.locator('#export').click();
 const stream=await (await download).createReadStream();
 let text='';
 for await(const chunk of stream)text+=chunk.toString();
 return JSON.parse(text);
}

try{
 await enter();
 await newQuestion('Browser check: keep my question');
 await page.reload();
 await page.locator('#enter-board').click();
 let saved=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)),key);
 assert.ok(saved.records.some(record=>record.title==='Browser check: keep my question'));

 await page.locator('#review-desk').click();
 await page.locator('[data-mission-draft]').first().click();
 assert.match(await page.locator('#capture-relationship').innerText(),/separate proposal/);
 assert.equal(await page.locator('#capture-relationship select').count(),0);
 assert.match(await page.locator('[name="detail"]').inputValue(),/^Context:/);
 await page.locator('.dialog-close').click();

 // Create two recovery branches without tests, then use the rendered map to
 // choose the second branch. Imported fixtures obey the real project contract.
 await page.evaluate(async key=>{
  const {newProject,validateProject}=await import(new URL('src/data.js',location.href).href);
  const project=newProject();
  for(const id of ['local-first','local-second']){
   project.records.push({id,type:'hypothesis',title:id,summary:'A recovery proposal',detail:'Unreviewed',claim:'proposal',locked:false,x:100,y:100});
   project.edges.push({id:`edge-${id}`,from:id,to:'recover',verb:'investigates'});
  }
  localStorage.setItem(key,JSON.stringify(validateProject(project)));
 },key);
 await page.reload();await page.locator('#enter-board').click();
 await page.locator('#workflow-view').click();
 await page.locator('[data-flow-track="nose"]').click();
 assert.equal(await page.locator('[data-flow-add="experiment"]').count(),0);
 await page.locator('[data-flow-record="local-second"]').click();
 await page.locator('[data-flow-add="experiment"]').click();
 assert.match(await page.locator('#capture-relationship').innerText(),/local-second/);
 await page.locator('#edit-form button[type="submit"]').click();
 saved=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)),key);
 assert.ok(saved.edges.some(edge=>edge.verb==='tests'&&edge.to==='local-second'));
 assert.equal(saved.edges.some(edge=>edge.verb==='tests'&&edge.to==='local-first'),false);

 // A failed write must preserve saved bytes, keep the draft exportable, and
 // never replace the warning with a success message.
 await page.locator('#workspace-board').click();
 const beforeFailure=await page.evaluate(key=>localStorage.getItem(key),key);
 await page.evaluate(()=>{Storage.prototype.setItem=function(){throw new DOMException('Storage quota reached','QuotaExceededError');};});
 await newQuestion('Browser check: unsaved but exportable');
 assert.match(await page.locator('#toast').innerText(),/only in this tab.*Saving failed/);
 assert.match(await page.locator('#save-state').innerText(),/Unsaved/);
 assert.equal(await page.evaluate(key=>localStorage.getItem(key),key),beforeFailure);
 const unsaved=await exportBoard();
 assert.ok(unsaved.records.some(record=>record.title==='Browser check: unsaved but exportable'));

 // A small-screen tour must still export a valid board. Import the actual
 // downloaded snapshot through the file control and reload it afterward.
 await page.setViewportSize({width:320,height:568});
 await page.locator('#tour-start').click();
 await page.locator('#tour-next').click();
 const tourBoard=await exportBoard();
 assert.ok(tourBoard.view.z>=.25&&tourBoard.view.z<=1.6);
 const imported=await context.newPage();
 imported.on('pageerror',error=>errors.push(error.message));
 await imported.goto(base);await imported.locator('#enter-board').click();
 await imported.locator('#file-input').setInputFiles({name:'board.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(tourBoard))});
 await imported.locator('#replace').click();
 assert.match(await imported.locator('#toast').innerText(),/Imported board saved/);
 await imported.reload();await imported.locator('#enter-board').click();
 assert.match(await imported.locator('#save-state').innerText(),/Saved on this device/);
 const roundtrip=await imported.evaluate(key=>JSON.parse(localStorage.getItem(key)),key);
 assert.deepEqual(roundtrip.records,tourBoard.records);
 assert.deepEqual(roundtrip.edges,tourBoard.edges);
 assert.deepEqual(roundtrip.story,tourBoard.story);
 await imported.close();
 assert.deepEqual(errors,[]);
 console.log('Browser checks passed: reload, review context, selected branch, failed-save export, small-screen tour, file import roundtrip.');
}finally{
 await browser.close();
}
