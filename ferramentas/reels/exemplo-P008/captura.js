const {chromium}=require('playwright');
(async()=>{
const b=await chromium.launch();
const ctx=await b.newContext({viewport:{width:1280,height:1213},deviceScaleFactor:2,colorScheme:'light',locale:'en-US'});
const p=await ctx.newPage(); p.setDefaultTimeout(15000);
const info={};
const go=async u=>{await p.goto(u,{waitUntil:'domcontentloaded',timeout:40000});await p.waitForTimeout(3500);
  await p.locator('button:has-text("Reject")').first().click({timeout:3000}).catch(()=>{}); await p.waitForTimeout(500);};
await go('https://prompts.chat'); await p.screenshot({path:'cap/pc_home.png'});
info.browse=await p.locator('text=Browse Prompts').first().boundingBox().catch(()=>null);
await go('https://prompts.chat/prompts'); await p.screenshot({path:'cap/pc_list_top.png'});
info.found=await p.locator('text=/\\d+ found/').first().boundingBox().catch(()=>null);
for(let i=1;i<=4;i++){await p.mouse.wheel(0,600);await p.waitForTimeout(1200);await p.screenshot({path:`cap/pc_list_s${i}.png`});}
await p.evaluate(()=>scrollTo(0,0)); await p.waitForTimeout(600);
const inp=p.locator('input[placeholder="Search prompts..."]:visible').first();
info.search=await inp.boundingBox().catch(()=>null);
const q='price increase'; await inp.click();
for(let i=1;i<=q.length;i++){await p.keyboard.type(q[i-1]); await p.screenshot({path:`cap/pc_search_${String(i).padStart(2,'0')}.png`});}
await p.waitForTimeout(4000); await p.screenshot({path:'cap/pc_search_res.png'});
info.res_found=await p.locator('text=/\\d+ found/').first().textContent().catch(()=>null);
info.res_card=await p.locator('text=/Price Increase Advisor/i').first().boundingBox().catch(()=>null);
await go('https://prompts.chat/prompts/cmwhifkfz0001jj08x2a9ebpx_act-as-a-customer-price-increase-advisor-for-small-businesses');
await p.screenshot({path:'cap/pc_prompt.png'});
info.run=await p.locator('button:has-text("Run")').first().boundingBox().catch(()=>null);
info.h1=await p.locator('h1').first().boundingBox().catch(()=>null);
const pre=await p.evaluate(()=>{const e=[...document.querySelectorAll('pre,code,div')].filter(x=>x.innerText&&x.innerText.startsWith('Act as a Customer Price Increase Advisor for small'));e.sort((a,b)=>a.innerText.length-b.innerText.length);return e[0]?e[0].innerText:''});
require('fs').writeFileSync('cap/prompt_text.txt',pre);
// click copy icon (left of Run)
const r=info.run; if(r){ await p.mouse.move(r.x-55,r.y+r.height/2); await p.waitForTimeout(400); await p.screenshot({path:'cap/pc_copy_hover.png'});
 await p.mouse.click(r.x-55,r.y+r.height/2); await p.waitForTimeout(700); await p.screenshot({path:'cap/pc_copy_click.png'});
 info.after_copy=await p.evaluate(()=>document.body.innerText.match(/Copied[^\n]*/)?.[0]||null); info.url_after=p.url();}
console.log(JSON.stringify(info,null,1)); await b.close();})();
