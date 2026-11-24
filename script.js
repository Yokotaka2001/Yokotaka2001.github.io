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
