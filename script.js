const button=document.getElementById('language');
function renderPublications(){
 for(const kind of ['journal','preprint']){
  const list=document.getElementById(`${kind}-list`);
  publications.filter(item=>item.kind===kind).sort((a,b)=>b.year-a.year).forEach(item=>{
   const li=document.createElement('li');
   const year=document.createElement('span'); year.className='publication-year'; year.textContent=item.year;
   const body=document.createElement('div'); body.className='publication-entry';
   const title=document.createElement('span'); title.className='publication-title'; title.textContent=item.title;
   const authors=document.createElement('span'); authors.className='publication-authors'; authors.textContent=item.authors;
   const links=document.createElement('span'); links.className='publication-links';
   item.links.forEach((link,i)=>{
    if(i)links.append(document.createTextNode(' · '));
    const a=document.createElement('a'); a.href=link.url; a.textContent=link.label; links.append(a);
   });
   body.append(title,authors,links); li.append(year,body); list.append(li);
  });
 }
}
renderPublications();
function renderPresentations(){
 for(const category of ['international','domestic_oral','domestic_poster']){
  const list=document.getElementById(`${category}-list`);
  presentations.filter(item=>item.category===category).forEach(item=>{
   const li=document.createElement('li');
   li.dataset.ja=item.ja;
   if(item.en)li.dataset.en=item.en;
   li.textContent=item.ja;
   list.append(li);
  });
 }
}
renderPresentations();
function setLanguage(lang){
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-en][data-ja]').forEach(el=>el.textContent=el.dataset[lang]);
 button.textContent=lang==='en'?'JP':'EN';
 button.setAttribute('aria-label',lang==='en'?'Switch to Japanese':'Switch to English');
 try{localStorage.setItem('portfolio-language',lang)}catch(_){}
}
button.addEventListener('click',()=>setLanguage(document.documentElement.lang==='en'?'ja':'en'));
try{if(localStorage.getItem('portfolio-language')==='en')setLanguage('en')}catch(_){}
document.getElementById('year').textContent=new Date().getFullYear();
