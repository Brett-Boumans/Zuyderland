/* Gedeelde UI: iconen, header/footer, favorieten, hulpmiddelen */
const ICON = {
  flag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>',
  user:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4 0-9 2-9 6v1h18v-1c0-4-5-6-9-6z"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 4h-4v6H4v4h6v6h4v-6h6v-4h-6z"/></svg>',
  book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M12 6S9 4 4 4v13c5 0 8 2 8 2s3-2 8-2V4c-5 0-8 2-8 2z"/><path d="M12 6v13"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>',
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  chevR:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg>',
  chevRthin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg>',
  chevUp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 15 12 9 18 15"/></svg>',
  back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="20" y1="12" x2="5" y2="12"/><polyline points="11 5 4 12 11 19"/></svg>',
  heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7.5-4.6-10-9.3C.7 8.4 2.2 5 5.5 5 7.7 5 9 6.3 12 9c3-2.7 4.3-4 6.5-4 3.3 0 4.8 3.4 3.5 6.7C19.5 16.4 12 21 12 21z"/></svg>',
  heartFill:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.3C.7 8.4 2.2 5 5.5 5 7.7 5 9 6.3 12 9c3-2.7 4.3-4 6.5-4 3.3 0 4.8 3.4 3.5 6.7C19.5 16.4 12 21 12 21z"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  bucket:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M19 11 9 1 3 7l8 8a2 2 0 0 0 3 0z"/><path d="M5 9l9 9"/><path d="M20 15s2 2.5 2 4a2 2 0 0 1-4 0c0-1.5 2-4 2-4z" fill="currentColor"/></svg>',
  eraser:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M5 15l6-6 7 7-4 4H9z"/><path d="M11 9l5-5 4 4-5 5"/><line x1="6" y1="21" x2="20" y2="21"/></svg>',
  pencil:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M14 3l7 7-11 11H3v-7z"/><line x1="11" y1="6" x2="18" y2="13"/></svg>',
  brush:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M3 21s1-4 4-4 3 3 5 3 4-3 4-6"/><path d="M14 12l6-7a2 2 0 0 0-3-3l-7 6z"/></svg>'
};

const ZMARK = '<svg class="zmark" viewBox="0 0 60 42"><g fill="#1a7fc1">'+
  '<path d="M4 4h22l-6 10H4z"/><path d="M34 4h22l-6 10H34z"/>'+
  '<path d="M4 28h22l-6 10H4z" opacity=".55"/><path d="M34 28h22l-6 10H34z"/></g></svg>';

function zHeader(){
  return [
  '<div class="utilbar">',
    '<div class="u-left">'+ICON.flag+'<span>TRANSLATE</span></div>',
    '<div class="u-right">'+ICON.user+'<span>MIJNZUYDERLAND</span></div>',
  '</div>',
  '<div class="nav">',
    '<a class="logo" href="index.html">'+ZMARK+'</a>',
    '<div class="navitems">',
      '<a class="navitem spoed" href="#">'+ICON.plus+'<span>SPOED</span></a>',
      '<a class="navitem" href="#"><span class="badge">0</span>'+ICON.book+'<span>MIJN FOLDER</span></a>',
      '<a class="navitem" href="#">'+ICON.search+'<span>ZOEKEN</span></a>',
      '<a class="navitem" href="#">'+ICON.menu+'<span>MENU</span></a>',
    '</div>',
  '</div>'].join('');
}

function zFooter(){
  return '<div class="footer">'+
    '<button class="totop" aria-label="Naar boven" onclick="window.scrollTo({top:0,behavior:\'smooth\'})"><img src="assets/buttons/back-to-top.svg" alt="Naar boven"></button>'+
    '<div class="legal">© 2026 Zuyderland | Disclaimer | Privacy</div>'+
    '<div class="tagline">De Zorg van je leven</div>'+
  '</div>';
}

/* ---------- Favorieten (localStorage) ---------- */
var Fav = {
  _read:function(k,def){ try{ var v=localStorage.getItem(k); if(v===null){localStorage.setItem(k,JSON.stringify(def));return def.slice();} return JSON.parse(v);}catch(e){return def.slice();} },
  _write:function(k,arr){ try{localStorage.setItem(k,JSON.stringify(arr));}catch(e){} },
  art:function(){ return this._read('zk_favs', DEFAULT_FAVS); },
  ex:function(){ return this._read('zk_exfavs', DEFAULT_EXFAVS); },
  isArt:function(s){ return this.art().indexOf(s)!==-1; },
  isEx:function(s){ return this.ex().indexOf(s)!==-1; },
  toggleArt:function(s){ var a=this.art(); if(a.indexOf(s)!==-1){a=a.filter(function(x){return x!==s;});}else{a.push(s);} this._write('zk_favs',a); return a.indexOf(s)!==-1; },
  toggleEx:function(s){ var a=this.ex(); if(a.indexOf(s)!==-1){a=a.filter(function(x){return x!==s;});}else{a.push(s);} this._write('zk_exfavs',a); return a.indexOf(s)!==-1; }
};

/* ---------- Lees voor (Web Speech) ---------- */
var _speaking=false;
function leesVoor(selector){
  if(!('speechSynthesis' in window)) return;
  if(_speaking){ speechSynthesis.cancel(); _speaking=false; return; }
  var nodes=document.querySelectorAll(selector);
  var text=''; Array.prototype.forEach.call(nodes,function(n){text+=' '+n.textContent;});
  var u=new SpeechSynthesisUtterance(text.trim());
  u.lang='nl-NL'; u.rate=0.95; u.onend=function(){_speaking=false;};
  _speaking=true; speechSynthesis.cancel(); speechSynthesis.speak(u);
}
