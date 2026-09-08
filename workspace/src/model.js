import * as T from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
export const stowedVertices=[[-.31,-1.15,.16],[-.08,1.12,.16],[-.08,-1.15,.16],[.31,-1.15,-.16],[.08,1.12,-.16],[.08,-1.15,-.16]];
export const deployedVertices=[[-.48,1.3,0],[-1.75,-.72,0],[-1.75,-1.35,0],[-.48,-.65,0],[.48,1.3,0],[1.75,-.72,0],[1.75,-1.35,0],[.48,-.65,0]];
function foil(points,mat){const shape=new T.Shape();points.forEach(([x,y],i)=>i?shape.lineTo(x,y):shape.moveTo(x,y));shape.closePath();const m=new T.Mesh(new T.ExtrudeGeometry(shape,{depth:.045,bevelEnabled:true,bevelSize:.009,bevelThickness:.009,bevelSegments:1,steps:1}),mat);m.position.z=-.0225;return m;}
export function createVehicle(){
 const root=new T.Group(),nose=new T.Group(),wing=new T.Group(),aft=new T.Group();root.add(nose,wing,aft);
 const white=new T.MeshStandardMaterial({color:0xc2cbd0,metalness:.28,roughness:.6}),dark=new T.MeshStandardMaterial({color:0x293638,metalness:.68,roughness:.35}),orange=new T.MeshStandardMaterial({color:0xb49c65,metalness:.25,roughness:.6}),black=new T.MeshStandardMaterial({color:0x0d171b,metalness:.2,roughness:.5}),panel=new T.MeshStandardMaterial({color:0x859491,metalness:.5,roughness:.4});
 const shells=[];const noseMaterial=new T.MeshStandardMaterial({color:0xe0e1da,metalness:.15,roughness:.7});
 function cyl(group,r1,r2,h,y,mat=white,open=false,start=0,len=Math.PI*2){const m=new T.Mesh(new T.CylinderGeometry(r1,r2,h,64,1,open,start,len),mat);m.position.y=y;group.add(m);return m;}
 function ring(group,y,r=.5,mat=dark){const m=new T.Mesh(new T.TorusGeometry(r,.025,8,64),mat);m.rotation.x=Math.PI/2;m.position.y=y;group.add(m);return m;}
 // Axis units are feet; nominal envelope 7.5 ft from -3.75 to +3.75.
 const profile=[new T.Vector2(0,3.75),new T.Vector2(.06,3.61),new T.Vector2(.17,3.32),new T.Vector2(.3,2.99),new T.Vector2(.42,2.68),new T.Vector2(.5,2.45)];
 nose.add(new T.Mesh(new T.LatheGeometry(profile.reverse(),64),noseMaterial));cyl(nose,.5,.5,.75,2.075,noseMaterial);ring(nose,1.7);ring(nose,2.45,.5,panel);
 cyl(nose,.16,.16,.55,2.2,black);for(let a of [-1,1]){const f=foil([[a*.47,2.4],[a*.96,1.6],[a*.88,1.3],[a*.46,1.7]],panel);nose.add(f);}
 // Split shell makes a real opening instead of a transparent cylinder.
 shells.push(cyl(wing,.5,.5,4.3,-.45,white,true,-Math.PI*.25,Math.PI));
 cyl(wing,.5,.5,4.3,-.45,white,true,Math.PI*.75,Math.PI);
 for(let y of [-2.6,-1.8,.6,1.7])ring(wing,y,.5,y===.6?orange:dark);
 for(let y of [-2.59,-1.81,.61,1.69])ring(wing,y,.505,panel);
 cyl(wing,.18,.18,2.8,-.35,dark);cyl(wing,.25,.25,.4,-1.5,orange);
 // Interior trays, mounting rings, and a conceptual gear/axle volume.
 for(let y of [-1.4,.2,1.2]){cyl(wing,.43,.43,.055,y,panel);ring(wing,y,.38,dark);}
 const motor=new T.Mesh(new T.BoxGeometry(.26,.36,.25),dark);motor.position.set(0,.92,.18);wing.add(motor);
 for(let s of [-1,1]){const gear=new T.Mesh(new T.CylinderGeometry(.13,.13,.08,20),orange);gear.rotation.z=Math.PI/2;gear.position.set(s*.28,.84,0);wing.add(gear);for(let j=0;j<12;j++){const tooth=new T.Mesh(new T.BoxGeometry(.08,.055,.055),orange);tooth.position.set(s*.28,.84+Math.cos(j*Math.PI/6)*.14,Math.sin(j*Math.PI/6)*.14);wing.add(tooth);}}
 const deployed=new T.Group(),stowed=new T.Group();wing.add(deployed,stowed);
 for(let s of [-1,1]){
  const f=foil([[s*.48,1.3],[s*1.75,-.72],[s*1.75,-1.35],[s*.48,-.65]],white);deployed.add(f);
  const edge=foil([[s*1.59,-.5],[s*1.75,-.72],[s*1.75,-1.35],[s*1.59,-1.26]],orange);edge.position.z=.035;deployed.add(edge);
  const inset=foil([[s*.64,.74],[s*1.5,-.74],[s*1.5,-1.08],[s*.64,-.52]],panel);inset.position.z=.035;deployed.add(inset);
  for(let i=0;i<3;i++){const f=foil([[s*.31,-1.15],[s*.08,1.12],[s*.08,-1.15]],i===0?orange:panel);f.position.z=s*.16+i*.045;stowed.add(f);}
 }
 stowed.visible=false;
 cyl(aft,.5,.43,.65,-2.925,dark);ring(aft,-2.66,.5,orange);cyl(aft,.34,.43,.43,-3.465,panel,true);cyl(aft,.22,.31,.38,-3.48,black,true);ring(aft,-3.69,.425,dark);
 for(let a=0;a<16;a++){const rib=new T.Mesh(new T.BoxGeometry(.035,.42,.035),orange);rib.position.set(Math.cos(a*Math.PI/8)*.39,-3.4,Math.sin(a*Math.PI/8)*.39);aft.add(rib);}
 for(let s of [-1,1])aft.add(foil([[s*.47,-2.25],[s*.9,-3.12],[s*.85,-3.46],[s*.4,-3.15]],dark));
 // Visible interface flanges distinguish the modules; these are illustrative, not joint designs.
 for(const [group,y] of [[nose,1.7],[wing,1.7],[wing,-2.6],[aft,-2.6]]){cyl(group,.53,.53,.07,y,panel);ring(group,y,.535,dark);}
 // Repeated fasteners and panel strips establish readable construction layers.
 for(let y of [-2.5,1.59,2.36])for(let a=0;a<12;a++){const bolt=new T.Mesh(new T.SphereGeometry(.025,6,4),orange);bolt.position.set(.505*Math.cos(a*Math.PI/6),y,.505*Math.sin(a*Math.PI/6));(y>1.7?nose:wing).add(bolt);}
 for(let a of [0,Math.PI]){const stripe=new T.Mesh(new T.BoxGeometry(.065,1.18,.025),dark);stripe.position.set(Math.sin(a)*.5,-.4,Math.cos(a)*.5);wing.add(stripe);}
 for(const [id,g] of Object.entries({nose,wing,aft}))g.traverse(o=>{if(o.isMesh){o.userData.module=id;o.userData.originalMaterial=o.material;}});
 return {root,nose,wing,aft,stowed,deployed,shells};
}
export function initModel(host,onSelect){
 const renderer=new T.WebGLRenderer({alpha:true,antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setClearColor(0,0);renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.0;host.append(renderer.domElement);
 const scene=new T.Scene(),camera=new T.OrthographicCamera(-5,5,5.5,-5.5,.1,100);camera.position.set(8,5,14);camera.lookAt(0,0,0);
 scene.add(new T.HemisphereLight(0xe1f4ff,0x334439,2.5));for(const [color,intensity,pos] of [[0xffffff,4,[5,8,6]],[0xd0dce6,2,[-5,0,-3]],[0xffffff,1,[3,-4,1]]]){const l=new T.DirectionalLight(color,intensity);l.position.set(...pos);scene.add(l);}
 const vehicle=createVehicle();scene.add(vehicle.root);vehicle.root.rotation.z=0;
 const controls=new OrbitControls(camera,renderer.domElement);controls.enabled=false;controls.enablePan=false;controls.minDistance=9;controls.maxDistance=27;controls.enableDamping=false;controls.minZoom=.5;controls.maxZoom=2;
 let dirty=true;function render(){dirty=true;requestAnimationFrame(()=>{if(dirty){renderer.render(scene,camera);dirty=false;}});}controls.addEventListener('change',render);
 const ro=new ResizeObserver(()=>{const {width,height}=host.getBoundingClientRect();renderer.setSize(width,height,false);camera.left=-5.5*width/height;camera.right=5.5*width/height;camera.updateProjectionMatrix();render();});ro.observe(host);
 const ray=new T.Raycaster(),pointer=new T.Vector2();let down,hovered=null,selected=null;
 const names={nose:'M01 · Payload module',wing:'M02 · Deployment module',aft:'M03 · Propulsion module'};
 function highlight(){vehicle.root.traverse(o=>{if(!o.isMesh)return;if(o.material!==o.userData.originalMaterial)o.material.dispose();o.material=o.userData.originalMaterial;if(o.userData.module===hovered||o.userData.module===selected){o.material=o.material.clone();o.material.emissive=new T.Color(o.userData.module===hovered?0x507d9e:0x35291d);o.material.emissiveIntensity=o.userData.module===hovered?.65:.35;}});render();}
 function hitAt(e){const r=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);ray.setFromCamera(pointer,camera);return ray.intersectObject(vehicle.root,true).find(h=>{let o=h.object;while(o){if(!o.visible)return false;o=o.parent;}return true;})?.object.userData.module||null;}
 function hover(id){if(id===hovered)return;hovered=id;host.dataset.hoverModule=id||'';host.title=id?names[id]+' · Click to open record':'Hover a module to identify it';renderer.domElement.style.cursor=id?'pointer':controls.enabled?'grab':'default';highlight();host.dispatchEvent(new CustomEvent('module-hover',{detail:id?names[id]:''}));}
 renderer.domElement.addEventListener('pointermove',e=>hover(hitAt(e)));
 renderer.domElement.addEventListener('pointerleave',()=>hover(null));
 renderer.domElement.addEventListener('pointerdown',e=>down=[e.clientX,e.clientY]);renderer.domElement.addEventListener('pointerup',e=>{if(!down||Math.hypot(e.clientX-down[0],e.clientY-down[1])>5){down=null;return;}down=null;const id=hitAt(e);if(id)onSelect(id);});
 renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();host.dispatchEvent(new CustomEvent('model-failed'));});
 return {setMode(v){controls.enabled=v;render();},setPose(p){vehicle.stowed.visible=p==='stowed';vehicle.deployed.visible=p!=='stowed';render();},cutaway(v){vehicle.shells.forEach(m=>m.visible=!v);render();},explode(v){vehicle.nose.position.y=v?.65:0;vehicle.aft.position.y=v?-.65:0;render();},preset(p){const pos={home:[8,5,14],front:[0,0,17],side:[17,0,0],top:[0,17,.01]};camera.zoom=1;camera.updateProjectionMatrix();camera.position.set(...(pos[p]||pos.home));controls.target.set(0,0,0);camera.lookAt(0,0,0);controls.update();render();},zoom(d){camera.zoom=Math.max(.5,Math.min(2,camera.zoom/d));camera.updateProjectionMatrix();controls.update();render();},select(id){selected=id;highlight();},dispose(){ro.disconnect();controls.dispose();renderer.dispose();}};
}
