"use strict";(self.webpackChunkportfolio_web=self.webpackChunkportfolio_web||[]).push([[6263],{6263:(re,U,h)=>{h.r(U),h.d(U,{startInputShims:()=>oe});var W,F,M=h(8054),x=h(1973),m=h(517),j=h(2335);h(332),h(6062);const p=new WeakMap,B=(e,t,s,o=0,r=!1)=>{p.has(e)!==s&&(s?z(e,t,o,r):V(e,t))},z=(e,t,s,o=!1)=>{const r=t.parentNode,a=t.cloneNode(!1);a.classList.add("cloned-input"),a.tabIndex=-1,o&&(a.disabled=!0),r.appendChild(a),p.set(e,a);const n="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${n}px,${s}px,0) scale(0)`},V=(e,t)=>{const s=p.get(e);s&&(p.delete(e),s.remove()),e.style.pointerEvents="",t.style.transform=""},O="input, textarea, [no-blur], [contenteditable]",k="$ionPaddingTimer",K=(e,t,s)=>{const o=e[k];o&&clearTimeout(o),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[k]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},Z=(e,t,s)=>{e.addEventListener("focusout",()=>{t&&K(t,0,s)},{once:!0})};let P=0;const R="data-ionic-skip-scroll-assist",ee=(e,t,s,o,r,a,c,n=!1)=>{var i;const d=a&&(void 0===c||c.mode===j.a.None),l=function(){return(i=i||(0,M.Z)(function*(){t.hasAttribute(R)?t.removeAttribute(R):te(e,t,s,o,r,d,n)})).apply(this,arguments)};return e.addEventListener("focusin",l,!0),()=>{e.removeEventListener("focusin",l,!0)}},N=e=>{document.activeElement!==e&&(e.setAttribute(R,"true"),e.focus())},te=function(t,s,o,r,a,c){return(W=W||(0,M.Z)(function*(n,i,d,l,b,y,D=!1){if(!d&&!l)return;const f=((e,t,s)=>{var o;return((e,t,s,o)=>{const r=e.top,a=e.bottom,c=t.top,i=c+15,l=Math.min(t.bottom,o-s)-50-a,b=i-r,y=Math.round(l<0?-l:b>0?-b:0),D=Math.min(y,r-c),v=Math.abs(D)/.3;return{scrollAmount:D,scrollDuration:Math.min(400,Math.max(150,v)),scrollPadding:s,inputSafeY:4-(r-i)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),t.getBoundingClientRect(),s,e.ownerDocument.defaultView.innerHeight)})(n,d||l,b);if(d&&Math.abs(f.scrollAmount)<4)return N(i),void(y&&null!==d&&(K(d,P),Z(i,d,()=>P=0)));if(B(n,i,!0,f.inputSafeY,D),N(i),(0,m.r)(()=>n.click()),y&&d&&(P=f.scrollPadding,K(d,P)),typeof window<"u"){var v;let S;const L=function g(){return(v=v||(0,M.Z)(function*(){void 0!==S&&clearTimeout(S),window.removeEventListener("ionKeyboardDidShow",A),window.removeEventListener("ionKeyboardDidShow",g),d&&(yield(0,x.c)(d,0,f.scrollAmount,f.scrollDuration)),B(n,i,!1,f.inputSafeY),N(i),y&&Z(i,d,()=>P=0)})).apply(this,arguments)},A=()=>{window.removeEventListener("ionKeyboardDidShow",A),window.addEventListener("ionKeyboardDidShow",L)};if(d){const g=yield(0,x.g)(d);if(f.scrollAmount>g.scrollHeight-g.clientHeight-g.scrollTop)return"password"===i.type?(f.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",A)):window.addEventListener("ionKeyboardDidShow",L),void(S=setTimeout(L,1e3))}L()}})).apply(this,arguments)},oe=function(t,s){return(F=F||(0,M.Z)(function*(o,r){var a;const c=document,n="ios"===r,i="android"===r,d=o.getNumber("keyboardHeight",290),l=o.getBoolean("scrollAssist",!0),b=o.getBoolean("hideCaretOnScroll",n),y=o.getBoolean("inputBlurring",n),D=o.getBoolean("scrollPadding",!0),f=Array.from(c.querySelectorAll("ion-input, ion-textarea")),v=new WeakMap,S=new WeakMap,L=yield j.K.getResizeMode(),A=function(I){return(a=a||(0,M.Z)(function*(_){yield new Promise(C=>(0,m.c)(_,C));const G=_.shadowRoot||_,w=G.querySelector("input")||G.querySelector("textarea"),T=(0,x.f)(_),Y=T?null:_.closest("ion-footer");if(w){if(T&&b&&!v.has(_)){const C=((e,t,s)=>{if(!s||!t)return()=>{};const o=n=>{(e=>e===e.getRootNode().activeElement)(t)&&B(e,t,n)},r=()=>B(e,t,!1),a=()=>o(!0),c=()=>o(!1);return(0,m.a)(s,"ionScrollStart",a),(0,m.a)(s,"ionScrollEnd",c),t.addEventListener("blur",r),()=>{(0,m.b)(s,"ionScrollStart",a),(0,m.b)(s,"ionScrollEnd",c),t.removeEventListener("blur",r)}})(_,w,T);v.set(_,C)}if("date"!==w.type&&"datetime-local"!==w.type&&(T||Y)&&l&&!S.has(_)){const C=ee(_,w,T,Y,d,D,L,i);S.set(_,C)}}})).apply(this,arguments)};y&&(()=>{let e=!0,t=!1;const s=document;(0,m.a)(s,"ionScrollStart",()=>{t=!0}),s.addEventListener("focusin",()=>{e=!0},!0),s.addEventListener("touchend",c=>{if(t)return void(t=!1);const n=s.activeElement;if(!n||n.matches(O))return;const i=c.target;i!==n&&(i.matches(O)||i.closest(O)||(e=!1,setTimeout(()=>{e||n.blur()},50)))},!1)})();for(const u of f)A(u);c.addEventListener("ionInputDidLoad",u=>{A(u.detail)}),c.addEventListener("ionInputDidUnload",u=>{(u=>{if(b){const I=v.get(u);I&&I(),v.delete(u)}if(l){const I=S.get(u);I&&I(),S.delete(u)}})(u.detail)})})).apply(this,arguments)}}}]);