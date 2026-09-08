import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const root=new URL('../',import.meta.url),entries={};
await mkdir(new URL('public/sources/',root),{recursive:true});
for(const path of ['USER-VISION.md','docs/SYSTEM-SPEC.md']){
 const text=await readFile(new URL('../'+path,root),'utf8');
 if(/\/Users\/|\/var\/folders\//.test(text))throw Error('Private workstation path in source snapshot');
 const filename=path.split('/').at(-1);await writeFile(new URL('public/sources/'+filename,root),text);
 entries[path]={sha256:createHash('sha256').update(text).digest('hex'),section:'complete document',captured:'2026-09-08'};
}
const id='flight-seed-'+createHash('sha256').update(JSON.stringify(entries)).digest('hex').slice(0,16);
await writeFile(new URL('public/sources/manifest.json',root),JSON.stringify({id,entries},null,2));
await writeFile(new URL('src/manifest.js',root),`export const manifestId=${JSON.stringify(id)};\n`);
