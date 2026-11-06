// RestartGen — language toggle (EN default, EL optional) + mobile menu
(function(){
  var root=document.documentElement, KEY='rg-lang';
  function saved(){try{return localStorage.getItem(KEY)}catch(e){return null}}
  function save(v){try{localStorage.setItem(KEY,v)}catch(e){}}
  function apply(lang){
    root.setAttribute('data-lang',lang); root.setAttribute('lang',lang);
    var b=document.body, t=b.getAttribute('data-title-'+lang); if(t) document.title=t;
    document.querySelectorAll('[data-ph-en]').forEach(function(el){el.placeholder=el.getAttribute('data-ph-'+lang)||''});
    document.querySelectorAll('option[data-en]').forEach(function(o){o.textContent=o.getAttribute('data-'+lang)});
    document.querySelectorAll('[data-aria-en]').forEach(function(el){el.setAttribute('aria-label',el.getAttribute('data-aria-'+lang))});
  }
  apply(saved()==='el'?'el':'en');
  var tg=document.querySelector('.lang-toggle');
  if(tg) tg.addEventListener('click',function(){var n=root.getAttribute('data-lang')==='en'?'el':'en';apply(n);save(n)});
  var mb=document.querySelector('.menu-btn'), nl=document.querySelector('.nav-links');
  if(mb&&nl) mb.addEventListener('click',function(){var o=nl.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
  var hd=document.querySelector('.site-header');
  window.addEventListener('scroll',function(){hd&&hd.classList.toggle('scrolled',window.scrollY>8)},{passive:true});
  // highlight the about-page contents link for the section in view
  var toc=document.querySelectorAll('.toc a');
  if(toc.length&&'IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){toc.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-30% 0px -60% 0px'});
    document.querySelectorAll('.doc section[id]').forEach(function(s){io.observe(s)});
  }
  var y=document.querySelector('[data-year]'); if(y) y.textContent=new Date().getFullYear();
})();
// team map: on narrow screens start scrolled so the Benelux pins are in view
(function(){var m=document.querySelector('.team-map-wrap');if(m&&m.scrollWidth>m.clientWidth){m.scrollLeft=(m.scrollWidth-m.clientWidth)*0.3}})();
