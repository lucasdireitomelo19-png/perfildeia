const {chromium}=require('playwright');
(async()=>{
const b=await chromium.launch();
const ctx=await b.newContext({viewport:{width:1280,height:1213},deviceScaleFactor:2,colorScheme:'light',locale:'en-US'});
const p=await ctx.newPage();
const box=async(sel)=>{try{const e=p.locator(sel).first();return await e.boundingBox();}catch(e){return null}};
const info={};
await p.goto('https://github.com/f/prompts.chat',{waitUntil:'networkidle'});
await p.screenshot({path:'cap/gh_top.png'});
info.gh_star=await box('#repo-stars-counter-star');
info.gh_star_text=await p.locator('#repo-stars-counter-star').first().textContent().catch(()=>null);
info.gh_star_title=await p.locator('#repo-stars-counter-star').first().getAttribute('title').catch(()=>null);
info.gh_name=await box('strong[itemprop="name"]');
const rd=await p.locator('article.markdown-body').first();
await rd.scrollIntoViewIfNeeded().catch(()=>{});
await p.evaluate(()=>{const a=document.querySelector('article.markdown-body');if(a)window.scrollTo(0,a.getBoundingClientRect().top+scrollY-120)});
await p.waitForTimeout(800);
await p.screenshot({path:'cap/gh_readme.png'});
// prompts.chat home
await p.goto('https://prompts.chat',{waitUntil:'networkidle'});await p.waitForTimeout(1500);
await p.screenshot({path:'cap/pc_home.png'});
info.browse=await box('text=Browse Prompts');
// listing
await p.goto('https://prompts.chat/prompts',{waitUntil:'networkidle'});await p.waitForTimeout(2000);
await p.screenshot({path:'cap/pc_list_top.png'});
await p.screenshot({path:'cap/pc_list_full.png',fullPage:true});
info.found=await box('text=/\\d+ found/');
info.found_text=await p.locator('text=/\\d+ found/').first().textContent().catch(()=>null);
info.search=await box('input[type="search"], input[placeholder*="earch"]');
info.search_ph=await p.locator('input[type="search"], input[placeholder*="earch"]').first().getAttribute('placeholder').catch(()=>null);
info.pageH=await p.evaluate(()=>document.body.scrollHeight);
console.log(JSON.stringify(info,null,1));
await b.close();})();
