const button=document.getElementById('language');
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
const menuToggle=document.getElementById('menu-toggle');
const siteMenu=document.getElementById('site-menu');
function closeMenu(){siteMenu.hidden=true;menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open menu');}
menuToggle.addEventListener('click',()=>{const open=menuToggle.getAttribute('aria-expanded')!=='true';siteMenu.hidden=!open;menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close menu':'Open menu');});
siteMenu.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!siteMenu.hidden){closeMenu();menuToggle.focus();}});
document.addEventListener('click',event=>{if(!siteMenu.hidden&&!event.target.closest('.site-header'))closeMenu();});
