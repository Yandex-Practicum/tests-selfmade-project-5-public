import puppeteer from'puppeteer';import fileUrl from'file-url';export default(async a=>{const b=await puppeteer.launch({headless:!0}),c=await b.newPage();return await c.setViewport({width:1440,height:1080,deviceScaleFactor:1}),await c.goto(a,{waitUntil:'networkidle0'}),await c.waitForTimeout(3e3),{browser:b,page:c}});const hasElementBySelectors=async(a,b)=>{const c=await a.evaluate(a=>!!document.querySelector(a),b);return c},getElement=async(a,b)=>{const c=await a.evaluate(a=>document.querySelector(a),b);return c},getStyles=async(a,b,c)=>{const d=await a.evaluate((a,b)=>{const c=document.querySelector(a);return Object.fromEntries(b.map(a=>[a,window.getComputedStyle(c).getPropertyValue(a)]))},b,c);return d};export{hasElementBySelectors,getElement,getStyles};