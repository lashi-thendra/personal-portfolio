"use strict";(self.webpackChunkportfolio_web=self.webpackChunkportfolio_web||[]).push([[8592],{5978:(b,v,c)=>{c.d(v,{c:()=>s});var f=c(7732),a=c(7916),u=c(333);const s=(i,n)=>{let e,t;const l=(r,m,p)=>{if(typeof document>"u")return;const w=document.elementFromPoint(r,m);w&&n(w)?w!==e&&(o(),h(w,p)):o()},h=(r,m)=>{e=r,t||(t=e);const p=e;(0,f.w)(()=>p.classList.add("ion-activated")),m()},o=(r=!1)=>{if(!e)return;const m=e;(0,f.w)(()=>m.classList.remove("ion-activated")),r&&t!==e&&e.click(),e=void 0};return(0,u.createGesture)({el:i,gestureName:"buttonActiveDrag",threshold:0,onStart:r=>l(r.currentX,r.currentY,a.a),onMove:r=>l(r.currentX,r.currentY,a.b),onEnd:()=>{o(!0),(0,a.h)(),t=void 0}})}},332:(b,v,c)=>{c.d(v,{g:()=>a});var f=c(6062);const a=()=>{if(void 0!==f.w)return f.w.Capacitor}},5718:(b,v,c)=>{c.d(v,{g:()=>f});const f=(n,e,t,l,h)=>u(n[1],e[1],t[1],l[1],h).map(o=>a(n[0],e[0],t[0],l[0],o)),a=(n,e,t,l,h)=>h*(3*e*Math.pow(h-1,2)+h*(-3*t*h+3*t+l*h))-n*Math.pow(h-1,3),u=(n,e,t,l,h)=>i((l-=h)-3*(t-=h)+3*(e-=h)-(n-=h),3*t-6*e+3*n,3*e-3*n,n).filter(r=>r>=0&&r<=1),i=(n,e,t,l)=>{if(0===n)return((n,e,t)=>{const l=e*e-4*n*t;return l<0?[]:[(-e+Math.sqrt(l))/(2*n),(-e-Math.sqrt(l))/(2*n)]})(e,t,l);const h=(3*(t/=n)-(e/=n)*e)/3,o=(2*e*e*e-9*e*t+27*(l/=n))/27;if(0===h)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-h),-Math.sqrt(-h)];const r=Math.pow(o/2,2)+Math.pow(h/3,3);if(0===r)return[Math.pow(o/2,.5)-e/3];if(r>0)return[Math.pow(-o/2+Math.sqrt(r),1/3)-Math.pow(o/2+Math.sqrt(r),1/3)-e/3];const m=Math.sqrt(Math.pow(-h/3,3)),p=Math.acos(-o/(2*Math.sqrt(Math.pow(-h/3,3)))),w=2*Math.pow(m,1/3);return[w*Math.cos(p/3)-e/3,w*Math.cos((p+2*Math.PI)/3)-e/3,w*Math.cos((p+4*Math.PI)/3)-e/3]}},6269:(b,v,c)=>{c.d(v,{i:()=>f});const f=a=>a&&""!==a.dir?"rtl"===a.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},4983:(b,v,c)=>{c.r(v),c.d(v,{startFocusVisible:()=>s});const f="ion-focused",u=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],s=i=>{let n=[],e=!0;const t=i?i.shadowRoot:document,l=i||document.body,h=E=>{n.forEach(M=>M.classList.remove(f)),E.forEach(M=>M.classList.add(f)),n=E},o=()=>{e=!1,h([])},r=E=>{e=u.includes(E.key),e||h([])},m=E=>{if(e&&void 0!==E.composedPath){const M=E.composedPath().filter(g=>!!g.classList&&g.classList.contains("ion-focusable"));h(M)}},p=()=>{t.activeElement===l&&h([])};return t.addEventListener("keydown",r),t.addEventListener("focusin",m),t.addEventListener("focusout",p),t.addEventListener("touchstart",o,{passive:!0}),t.addEventListener("mousedown",o),{destroy:()=>{t.removeEventListener("keydown",r),t.removeEventListener("focusin",m),t.removeEventListener("focusout",p),t.removeEventListener("touchstart",o),t.removeEventListener("mousedown",o)},setFocus:h}}},240:(b,v,c)=>{c.d(v,{c:()=>a});var f=c(517);const a=n=>{const e=n;let t;return{hasLegacyControl:()=>{if(void 0===t){const h=void 0!==e.label||u(e),o=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,r=(0,f.h)(e);t=!0===e.legacy||!h&&!o&&null!==r}return t}}},u=n=>null!==n.shadowRoot&&!!(s.includes(n.tagName)&&null!==n.querySelector('[slot="label"]')||i.includes(n.tagName)&&""!==n.textContent),s=["ION-RANGE"],i=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7916:(b,v,c)=>{c.d(v,{I:()=>a,a:()=>e,b:()=>t,c:()=>n,d:()=>h,h:()=>l});var f=c(332),a=(()=>((a=a||{}).Heavy="HEAVY",a.Medium="MEDIUM",a.Light="LIGHT",a))();const s={getEngine(){const o=window.TapticEngine;if(o)return o;const r=(0,f.g)();return r?.isPluginAvailable("Haptics")?r.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const r=(0,f.g)();return"web"!==r?.getPlatform()||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,f.g)(),impact(o){const r=this.getEngine();if(!r)return;const m=this.isCapacitor()?o.style:o.style.toLowerCase();r.impact({style:m})},notification(o){const r=this.getEngine();if(!r)return;const m=this.isCapacitor()?o.type:o.type.toLowerCase();r.notification({type:m})},selection(){const o=this.isCapacitor()?a.Light:"light";this.impact({style:o})},selectionStart(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionStart():o.gestureSelectionStart())},selectionChanged(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionChanged():o.gestureSelectionChanged())},selectionEnd(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionEnd():o.gestureSelectionEnd())}},i=()=>s.available(),n=()=>{i()&&s.selection()},e=()=>{i()&&s.selectionStart()},t=()=>{i()&&s.selectionChanged()},l=()=>{i()&&s.selectionEnd()},h=o=>{i()&&s.impact(o)}},1973:(b,v,c)=>{c.d(v,{I:()=>e,a:()=>o,b:()=>n,c:()=>p,d:()=>E,f:()=>r,g:()=>h,i:()=>l,p:()=>w,r:()=>M,s:()=>m});var s,f=c(8054),a=c(517),u=c(7547);const n="ion-content",e=".ion-content-scroll-host",t=`${n}, ${e}`,l=g=>"ION-CONTENT"===g.tagName,h=function(_){return(s=s||(0,f.Z)(function*(O){return l(O)?(yield new Promise(y=>(0,a.c)(O,y)),O.getScrollElement()):O})).apply(this,arguments)},o=g=>g.querySelector(e)||g.querySelector(t),r=g=>g.closest(t),m=(g,_)=>l(g)?g.scrollToTop(_):Promise.resolve(g.scrollTo({top:0,left:0,behavior:_>0?"smooth":"auto"})),p=(g,_,O,y)=>l(g)?g.scrollByPoint(_,O,y):Promise.resolve(g.scrollBy({top:O,left:_,behavior:y>0?"smooth":"auto"})),w=g=>(0,u.b)(g,n),E=g=>{if(l(g)){const O=g.scrollY;return g.scrollY=!1,O}return g.style.setProperty("overflow","hidden"),!0},M=(g,_)=>{l(g)?g.scrollY=_:g.style.removeProperty("overflow")}},6749:(b,v,c)=>{c.d(v,{a:()=>f,b:()=>m,c:()=>e,d:()=>p,e:()=>C,f:()=>n,g:()=>w,h:()=>u,i:()=>a,j:()=>O,k:()=>y,l:()=>t,m:()=>o,n:()=>E,o:()=>h,p:()=>i,q:()=>s,r:()=>_,s:()=>d,t:()=>r,u:()=>M,v:()=>g,w:()=>l});const f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2014:(b,v,c)=>{c.d(v,{c:()=>s,g:()=>i});var f=c(6062),a=c(517),u=c(7547);const s=(e,t,l)=>{let h,o;void 0!==f.w&&"MutationObserver"in f.w&&(h=new MutationObserver(w=>{for(const E of w)for(const M of E.addedNodes)if(M.nodeType===Node.ELEMENT_NODE&&M.slot===t)return l(),void(0,a.r)(()=>r(M))}),h.observe(e,{childList:!0}));const r=w=>{var E;o&&(o.disconnect(),o=void 0),o=new MutationObserver(M=>{l();for(const g of M)for(const _ of g.removedNodes)_.nodeType===Node.ELEMENT_NODE&&_.slot===t&&p()}),o.observe(null!==(E=w.parentElement)&&void 0!==E?E:w,{subtree:!0,childList:!0})},p=()=>{o&&(o.disconnect(),o=void 0)};return{destroy:()=>{h&&(h.disconnect(),h=void 0),p()}}},i=(e,t,l)=>{const h=null==e?0:e.toString().length,o=n(h,t);if(void 0===l)return o;try{return l(h,t)}catch(r){return(0,u.a)("Exception in provided `counterFormatter`.",r),o}},n=(e,t)=>`${e} / ${t}`},2335:(b,v,c)=>{c.d(v,{K:()=>s,a:()=>u});var f=c(332),a=(()=>((a=a||{}).Unimplemented="UNIMPLEMENTED",a.Unavailable="UNAVAILABLE",a))(),u=(()=>((u=u||{}).Body="body",u.Ionic="ionic",u.Native="native",u.None="none",u))();const s={getEngine(){const i=(0,f.g)();if(i?.isPluginAvailable("Keyboard"))return i.Plugins.Keyboard},getResizeMode(){const i=this.getEngine();return i?.getResizeMode?i.getResizeMode().catch(n=>{if(n.code!==a.Unimplemented)throw n}):Promise.resolve(void 0)}}},8263:(b,v,c)=>{c.r(v),c.d(v,{KEYBOARD_DID_CLOSE:()=>i,KEYBOARD_DID_OPEN:()=>s,copyVisualViewport:()=>y,keyboardDidClose:()=>M,keyboardDidOpen:()=>w,keyboardDidResize:()=>E,resetKeyboardAssist:()=>h,setKeyboardClose:()=>p,setKeyboardOpen:()=>m,startKeyboardAssist:()=>o,trackViewportChanges:()=>O});var f=c(2335);c(332),c(6062);const s="ionKeyboardDidShow",i="ionKeyboardDidHide";let e={},t={},l=!1;const h=()=>{e={},t={},l=!1},o=d=>{if(f.K.getEngine())r(d);else{if(!d.visualViewport)return;t=y(d.visualViewport),d.visualViewport.onresize=()=>{O(d),w()||E(d)?m(d):M(d)&&p(d)}}},r=d=>{d.addEventListener("keyboardDidShow",C=>m(d,C)),d.addEventListener("keyboardDidHide",()=>p(d))},m=(d,C)=>{g(d,C),l=!0},p=d=>{_(d),l=!1},w=()=>!l&&e.width===t.width&&(e.height-t.height)*t.scale>150,E=d=>l&&!M(d),M=d=>l&&t.height===d.innerHeight,g=(d,C)=>{const D=new CustomEvent(s,{detail:{keyboardHeight:C?C.keyboardHeight:d.innerHeight-t.height}});d.dispatchEvent(D)},_=d=>{const C=new CustomEvent(i);d.dispatchEvent(C)},O=d=>{e=Object.assign({},t),t=y(d.visualViewport)},y=d=>({width:Math.round(d.width),height:Math.round(d.height),offsetTop:d.offsetTop,offsetLeft:d.offsetLeft,pageTop:d.pageTop,pageLeft:d.pageLeft,scale:d.scale})},776:(b,v,c)=>{c.d(v,{c:()=>e});var s,f=c(8054),a=c(6062),u=c(2335);const i=t=>void 0===a.d||t===u.a.None||void 0===t?null:a.d.querySelector("ion-app")??a.d.body,n=t=>{const l=i(t);return null===l?0:l.clientHeight},e=function(l){return(s=s||(0,f.Z)(function*(h){var o;let r,m,p,w;const E=function(){return(o=o||(0,f.Z)(function*(){const d=yield u.K.getResizeMode(),C=void 0===d?void 0:d.mode;r=()=>{void 0===w&&(w=n(C)),p=!0,M(p,C)},m=()=>{p=!1,M(p,C)},null==a.w||a.w.addEventListener("keyboardWillShow",r),null==a.w||a.w.addEventListener("keyboardWillHide",m)})).apply(this,arguments)},M=(y,d)=>{h&&h(y,g(d))},g=y=>{if(0===w||w===n(y))return;const d=i(y);return null!==d?new Promise(C=>{const D=new ResizeObserver(()=>{d.clientHeight===w&&(D.disconnect(),C())});D.observe(d)}):void 0};return yield E(),{init:E,destroy:()=>{null==a.w||a.w.removeEventListener("keyboardWillShow",r),null==a.w||a.w.removeEventListener("keyboardWillHide",m),r=m=void 0},isKeyboardVisible:()=>p}})).apply(this,arguments)}},8796:(b,v,c)=>{c.d(v,{c:()=>a});var f=c(8054);const a=()=>{var u;let s;return{lock:function(){return(u=u||(0,f.Z)(function*(){const e=s;let t;return s=new Promise(l=>t=l),void 0!==e&&(yield e),t})).apply(this,arguments)}}}},3059:(b,v,c)=>{c.d(v,{c:()=>u});var f=c(6062),a=c(517);const u=(s,i,n)=>{let e;const t=()=>!(void 0===i()||void 0!==s.label||null===n()),h=()=>{const r=i();if(void 0===r)return;if(!t())return void r.style.removeProperty("width");const m=n().scrollWidth;if(0===m&&null===r.offsetParent&&void 0!==f.w&&"IntersectionObserver"in f.w){if(void 0!==e)return;const p=e=new IntersectionObserver(w=>{1===w[0].intersectionRatio&&(h(),p.disconnect(),e=void 0)},{threshold:.01,root:s});p.observe(r)}else r.style.setProperty("width",.75*m+"px")};return{calculateNotchWidth:()=>{t()&&(0,a.r)(()=>{h()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},4449:(b,v,c)=>{c.d(v,{S:()=>a});const a={bubbles:{dur:1e3,circles:9,fn:(u,s,i)=>{const n=u*s/i-u+"ms",e=2*Math.PI*s/i;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(u,s,i)=>{const n=s/i,e=u*n-u+"ms",t=2*Math.PI*n;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(u,s)=>({r:6,style:{left:32-32*s+"%","animation-delay":-110*s+"ms"}})},lines:{dur:1e3,lines:8,fn:(u,s,i)=>({y1:14,y2:26,style:{transform:`rotate(${360/i*s+(s<i/2?180:-180)}deg)`,"animation-delay":u*s/i-u+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(u,s,i)=>({y1:12,y2:20,style:{transform:`rotate(${360/i*s+(s<i/2?180:-180)}deg)`,"animation-delay":u*s/i-u+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(u,s,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*s+(s<6?180:-180)}deg)`,"animation-delay":u*s/i-u+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(u,s,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*s+(s<6?180:-180)}deg)`,"animation-delay":u*s/i-u+"ms"}})}}},4577:(b,v,c)=>{c.r(v),c.d(v,{createSwipeBackGesture:()=>i});var f=c(517),a=c(6269),u=c(333);c(7561);const i=(n,e,t,l,h)=>{const o=n.ownerDocument.defaultView;let r=(0,a.i)(n);const p=_=>r?-_.deltaX:_.deltaX;return(0,u.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:_=>(r=(0,a.i)(n),(_=>{const{startX:y}=_;return r?y>=o.innerWidth-50:y<=50})(_)&&e()),onStart:t,onMove:_=>{const y=p(_)/o.innerWidth;l(y)},onEnd:_=>{const O=p(_),y=o.innerWidth,d=O/y,C=(_=>r?-_.velocityX:_.velocityX)(_),D=C>=0&&(C>.2||O>y/2),P=(D?1-d:d)*y;let T=0;if(P>5){const x=P/Math.abs(C);T=Math.min(x,540)}h(D,d<=0?.01:(0,f.l)(0,d,.9999),T)}})}},4812:(b,v,c)=>{c.d(v,{w:()=>f});const f=(s,i,n)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{n(a(t,i))});return e.observe(s,{childList:!0,subtree:!0}),e},a=(s,i)=>{let n;return s.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)n=u(e.addedNodes[t],i)||n}),n},u=(s,i)=>1!==s.nodeType?void 0:(s.tagName===i.toUpperCase()?[s]:Array.from(s.querySelectorAll(i))).find(e=>e.value===s.value)}}]);