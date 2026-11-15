const {chromium}=require('playwright');
const [,, mode, outdir]=process.argv;
(async()=>{
const b=await chromium.launch();
const p=await b.newPage({viewport:{width:1080,height:1920},deviceScaleFactor:1});
p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('http://localhost:8765/comp.html'); await p.waitForFunction(()=>window.READY,{timeout:60000});
const total=await p.evaluate(()=>TL.total);
let times;
if(mode==='test') times=[0,1,2.4,3.5,6,8,10,12,13.5,15,16.5,18,19.5,22,25.5,27,29.3,31,35,38.6];
else { times=[]; for(let f=0;f<Math.round(total*30);f++) times.push(f/30); }
for(let k=0;k<times.length;k++){ await p.evaluate(t=>render(t),times[k]);
  await p.screenshot({path:`${outdir}/${mode==='test'?'t'+times[k]:String(k).padStart(5,'0')}.${mode==='test'?'png':'jpg'}`,type:mode==='test'?'png':'jpeg',quality:mode==='test'?undefined:94}); }
console.log('frames',times.length,'total',total); await b.close();})();
