!function(t){var e={};function n(o){if(e[o])return e[o].exports;var c=e[o]={i:o,l:!1,exports:{}};return t[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)n.d(o,c,function(e){return t[e]}.bind(null,c));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){"use strict";function o(){}n.d(e,"a",(function(){return $t})),n.d(e,"b",(function(){return Y})),n.d(e,"c",(function(){return F})),n.d(e,"d",(function(){return y})),n.d(e,"e",(function(){return i})),n.d(e,"f",(function(){return M})),n.d(e,"g",(function(){return T})),n.d(e,"h",(function(){return lt})),n.d(e,"i",(function(){return N})),n.d(e,"j",(function(){return wt})),n.d(e,"k",(function(){return dt})),n.d(e,"l",(function(){return bt})),n.d(e,"m",(function(){return f})),n.d(e,"n",(function(){return mt})),n.d(e,"o",(function(){return v})),n.d(e,"p",(function(){return k})),n.d(e,"q",(function(){return x})),n.d(e,"r",(function(){return q})),n.d(e,"s",(function(){return ht})),n.d(e,"t",(function(){return H})),n.d(e,"u",(function(){return b})),n.d(e,"v",(function(){return d})),n.d(e,"w",(function(){return at})),n.d(e,"x",(function(){return jt})),n.d(e,"y",(function(){return c})),n.d(e,"z",(function(){return yt})),n.d(e,"A",(function(){return $})),n.d(e,"B",(function(){return s})),n.d(e,"C",(function(){return E})),n.d(e,"D",(function(){return gt})),n.d(e,"E",(function(){return o})),n.d(e,"F",(function(){return j})),n.d(e,"G",(function(){return l})),n.d(e,"H",(function(){return u})),n.d(e,"I",(function(){return _})),n.d(e,"J",(function(){return C})),n.d(e,"K",(function(){return z})),n.d(e,"L",(function(){return st})),n.d(e,"M",(function(){return ut})),n.d(e,"N",(function(){return pt}));const c=t=>t;function i(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function a(){return Object.create(null)}function l(t){t.forEach(r)}function s(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function f(t,e,n,o){if(t){const c=d(t,e,n,o);return t[0](c)}}function d(t,e,n,o){return t[1]&&o?i(n.ctx.slice(),t[1](o(e))):n.ctx}function b(t,e,n,o){if(t[2]&&o){const c=t[2](o(n));if("object"==typeof e.dirty){const t=[],n=Math.max(e.dirty.length,c.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|c[o];return t}return e.dirty|c}return e.dirty}function j(t){return null==t?"":t}const h="undefined"!=typeof window;let p=h?()=>window.performance.now():()=>Date.now(),O=h?t=>requestAnimationFrame(t):o;const w=new Set;function g(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),0!==w.size&&O(g)}function m(t){let e;return 0===w.size&&O(g),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}function y(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode.removeChild(t)}function v(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function z(t){return document.createTextNode(t)}function C(){return z(" ")}function q(){return z("")}function E(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function M(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t,e){e=""+e,t.data!==e&&(t.data=e)}function S(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}let A,J,L=0,P={};function B(t,e,n,o,c,i,r,a=0){const l=16.666/o;let s="{\n";for(let t=0;t<=1;t+=l){const o=e+(n-e)*i(t);s+=100*t+`%{${r(o,1-o)}}\n`}const u=s+`100% {${r(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`;if(!P[f]){if(!A){const t=x("style");document.head.appendChild(t),A=t.sheet}P[f]=!0,A.insertRule(`@keyframes ${f} ${u}`,A.cssRules.length)}const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${f} ${o}ms linear ${c}ms 1 both`,L+=1,f}function R(t,e){t.style.animation=(t.style.animation||"").split(", ").filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")).join(", "),e&&!--L&&O(()=>{if(L)return;let t=A.cssRules.length;for(;t--;)A.deleteRule(t);P={}})}function N(t,e,n,i){if(!e)return o;const r=t.getBoundingClientRect();if(e.left===r.left&&e.right===r.right&&e.top===r.top&&e.bottom===r.bottom)return o;const{delay:a=0,duration:l=300,easing:s=c,start:u=p()+a,end:f=u+l,tick:d=o,css:b}=n(t,{from:e,to:r},i);let j,h=!0,O=!1;function w(){b&&R(t,j),h=!1}return m(t=>{if(!O&&t>=u&&(O=!0),O&&t>=f&&(d(1,0),w()),!h)return!1;if(O){const e=0+1*s((t-u)/l);d(e,1-e)}return!0}),b&&(j=B(t,0,1,l,a,s,b)),a||(O=!0),d(0,1),w}function H(t){const e=getComputedStyle(t);if("absolute"!==e.position&&"fixed"!==e.position){const{width:n,height:o}=e,c=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=o,F(t,c)}}function F(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const o=getComputedStyle(t),c="none"===o.transform?"":o.transform;t.style.transform=`${c} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}function I(t){J=t}function K(){if(!J)throw new Error("Function called outside component initialization");return J}function T(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}const D=[],G=[],W=[],X=[],Q=Promise.resolve();let U=!1;function V(){U||(U=!0,Q.then(tt))}function Y(t){W.push(t)}const Z=new Set;function tt(){do{for(;D.length;){const t=D.shift();I(t),et(t.$$)}for(;G.length;)G.pop()();for(let t=0;t<W.length;t+=1){const e=W[t];Z.has(e)||(Z.add(e),e())}W.length=0}while(D.length);for(;X.length;)X.pop()();U=!1,Z.clear()}function et(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Y)}}let nt;function ot(){return nt||(nt=Promise.resolve(),nt.then(()=>{nt=null})),nt}function ct(t,e,n){t.dispatchEvent(S(`${e?"intro":"outro"}${n}`))}const it=new Set;let rt;function at(){rt={r:0,c:[],p:rt}}function lt(){rt.r||l(rt.c),rt=rt.p}function st(t,e){t&&t.i&&(it.delete(t),t.i(e))}function ut(t,e,n,o){if(t&&t.o){if(it.has(t))return;it.add(t),rt.c.push(()=>{it.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const ft={duration:0};function dt(t,e,n){let i,r,a=e(t,n),l=!1,u=0;function f(){i&&R(t,i)}function d(){const{delay:e=0,duration:n=300,easing:s=c,tick:d=o,css:b}=a||ft;b&&(i=B(t,0,1,n,e,s,b,u++)),d(0,1);const j=p()+e,h=j+n;r&&r.abort(),l=!0,Y(()=>ct(t,!0,"start")),r=m(e=>{if(l){if(e>=h)return d(1,0),ct(t,!0,"end"),f(),l=!1;if(e>=j){const t=s((e-j)/n);d(t,1-t)}}return l})}let b=!1;return{start(){b||(R(t),s(a)?(a=a(),ot().then(d)):d())},invalidate(){b=!1},end(){l&&(f(),l=!1)}}}function bt(t,e,n){let i,r=e(t,n),a=!0;const u=rt;function f(){const{delay:e=0,duration:n=300,easing:s=c,tick:f=o,css:d}=r||ft;d&&(i=B(t,1,0,n,e,s,d));const b=p()+e,j=b+n;Y(()=>ct(t,!1,"start")),m(e=>{if(a){if(e>=j)return f(0,1),ct(t,!1,"end"),--u.r||l(u.c),!1;if(e>=b){const t=s((e-b)/n);f(1-t,t)}}return a})}return u.r+=1,s(r)?ot().then(()=>{r=r(),f()}):f(),{end(e){e&&r.tick&&r.tick(1,0),a&&(i&&R(t,i),a=!1)}}}function jt(t,e){const n=e.token={};function o(t,o,c,i){if(e.token!==n)return;e.resolved=i;let r=e.ctx;void 0!==c&&(r=r.slice(),r[c]=i);const a=t&&(e.current=t)(r);let l=!1;e.block&&(e.blocks?e.blocks.forEach((t,n)=>{n!==o&&t&&(at(),ut(t,1,1,()=>{e.blocks[n]=null}),lt())}):e.block.d(1),a.c(),st(a,1),a.m(e.mount(),e.anchor),l=!0),e.block=a,e.blocks&&(e.blocks[o]=a),l&&tt()}if((c=t)&&"object"==typeof c&&"function"==typeof c.then){const n=K();if(t.then(t=>{I(n),o(e.then,1,e.value,t),I(null)},t=>{I(n),o(e.catch,2,e.error,t),I(null)}),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var c}"undefined"!=typeof window?window:global;function ht(t,e){t.f(),function(t,e){ut(t,1,1,()=>{e.delete(t.key)})}(t,e)}function pt(t,e,n,o,c,i,r,a,l,s,u,f){let d=t.length,b=i.length,j=d;const h={};for(;j--;)h[t[j].key]=j;const p=[],O=new Map,w=new Map;for(j=b;j--;){const t=f(c,i,j),a=n(t);let l=r.get(a);l?o&&l.p(t,e):(l=s(a,t),l.c()),O.set(a,p[j]=l),a in h&&w.set(a,Math.abs(j-h[a]))}const g=new Set,m=new Set;function y(t){st(t,1),t.m(a,u),r.set(t.key,t),u=t.first,b--}for(;d&&b;){const e=p[b-1],n=t[d-1],o=e.key,c=n.key;e===n?(u=e.first,d--,b--):O.has(c)?!r.has(o)||g.has(o)?y(e):m.has(c)?d--:w.get(o)>w.get(c)?(m.add(o),y(e)):(g.add(c),d--):(l(n,r),d--)}for(;d--;){const e=t[d];O.has(e.key)||l(e,r)}for(;b;)y(p[b-1]);return p}new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let Ot;function wt(t){t&&t.c()}function gt(t,e,n){const{fragment:o,on_mount:c,on_destroy:i,after_update:a}=t.$$;o&&o.m(e,n),Y(()=>{const e=c.map(r).filter(s);i?i.push(...e):l(e),t.$$.on_mount=[]}),a.forEach(Y)}function mt(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e,n,c,i,r,s=[-1]){const u=J;I(t);const f=e.props||{},d=t.$$={fragment:null,ctx:null,props:r,update:o,not_equal:i,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:a(),dirty:s};let b=!1;d.ctx=n?n(t,f,(e,n,...o)=>{const c=o.length?o[0]:n;return d.ctx&&i(d.ctx[e],d.ctx[e]=c)&&(d.bound[e]&&d.bound[e](c),b&&function(t,e){-1===t.$$.dirty[0]&&(D.push(t),V(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n}):[],d.update(),b=!0,l(d.before_update),d.fragment=!!c&&c(d.ctx),e.target&&(e.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(e.target)):d.fragment&&d.fragment.c(),e.intro&&st(t.$$.fragment),gt(t,e.target,e.anchor),tt()),I(u)}"function"==typeof HTMLElement&&(Ot=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){mt(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class $t{$destroy(){mt(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}},function(t,e,n){"use strict";e.a={ojiCree:{e:"ᐁ",i:"ᐃ",o:"ᐅ",a:"ᐊ",ii:"ᐄ",oo:"ᐆ",aa:"ᐋ",we:"ᐍ",wi:"ᐏ",wo:"ᐓ",wa:"ᐘ",wii:"ᐑ",woo:"ᐕ",waa:"ᐚ",w:"ᐤ",be:"ᐯ",bi:"ᐱ",bo:"ᐳ",ba:"ᐸ",bii:"ᐲ",boo:"ᐴ",baa:"ᐹ",b:"ᑊ",pe:"ᐯ",pi:"ᐱ",po:"ᐳ",pa:"ᐸ",pii:"ᐲ",poo:"ᐴ",paa:"ᐹ",p:"ᑊ",bwe:"ᐻ",bwi:"ᐽ",bwo:"ᑁ",bwa:"ᑅ",bwii:"ᐿ",bwoo:"ᑃ",bwaa:"ᑇ",pwe:"ᐻ",pwi:"ᐽ",pwo:"ᑁ",pwa:"ᑅ",pwii:"ᐿ",pwoo:"ᑃ",pwaa:"ᑇ",de:"ᑌ",di:"ᑎ",do:"ᑐ",da:"ᑕ",dii:"ᑏ",doo:"ᑑ",daa:"ᑖ",d:"ᐟ",te:"ᑌ",ti:"ᑎ",to:"ᑐ",ta:"ᑕ",tii:"ᑏ",too:"ᑑ",taa:"ᑖ",t:"ᐟ",dwe:"ᑘ",dwi:"ᑚ",dwo:"ᑞ",dwa:"ᑢ",dwii:"ᑜ",dwoo:"ᑠ",dwaa:"ᑤ",twe:"ᑘ",twi:"ᑚ",two:"ᑞ",twa:"ᑢ",twii:"ᑜ",twoo:"ᑠ",twaa:"ᑤ",ge:"ᑫ",gi:"ᑭ",go:"ᑯ",ga:"ᑲ",gii:"ᑮ",goo:"ᑰ",gaa:"ᑳ",g:"ᐠ",ke:"ᑫ",ki:"ᑭ",ko:"ᑯ",ka:"ᑲ",kii:"ᑮ",koo:"ᑰ",kaa:"ᑳ",k:"ᕽ",gwe:"ᑵ",gwi:"ᑷ",gwo:"ᑻ",gwa:"ᑿ",gwii:"ᑹ",gwoo:"ᑽ",gwaa:"ᒁ",kwe:"ᑵ",kwi:"ᑷ",kwo:"ᑻ",kwa:"ᑿ",kwii:"ᑹ",kwoo:"ᑽ",kwaa:"ᒁ",je:"ᒉ",ji:"ᒋ",jo:"ᒍ",ja:"ᒐ",jii:"ᒌ",joo:"ᒎ",jaa:"ᒑ",ce:"ᒉ",ci:"ᒋ",co:"ᒍ",ca:"ᒐ",cii:"ᒌ",coo:"ᒎ",caa:"ᒑ",jwe:"ᒓ",jwi:"ᒕ",jwo:"ᒙ",jwa:"ᒝ",jwii:"ᒗ",jwoo:"ᒛ",jwaa:"ᒟ",cwe:"ᒓ",cwi:"ᒕ",cwo:"ᒙ",cwa:"ᒝ",cwii:"ᒗ",cwoo:"ᒛ",cwaa:"ᒟ",ne:"ᓀ",ni:"ᓂ",no:"ᓄ",na:"ᓇ",nii:"ᓃ",noo:"ᓅ",naa:"ᓈ",n:"ᐣ",nwe:"ᓊ",nwi:"ᓂᐧ",nwo:"ᓄᐧ",nwa:"ᓌ",nwii:"ᓃᐧ",nwoo:"ᓅᐧ",nwaa:"ᓎ",me:"ᒣ",mi:"ᒥ",mo:"ᒧ",ma:"ᒪ",mii:"ᒦ",moo:"ᒨ",maa:"ᒫ",m:"ᒼ",mwe:"ᒭ",mwi:"ᒯ",mwo:"ᒳ",mwa:"ᒷ",mwii:"ᒱ",mwoo:"ᒵ",mwaa:"ᒹ",se:"ᕋ",si:"ᕈ",so:"ᕍ",sa:"ᕊ",swe:"ᕋᐧ",swi:"ᕈᐧ",swo:"ᕍᐧ",swa:"ᕊᐧ",ze:"ᕋ",zi:"ᕈ",zo:"ᕍ",za:"ᕊ",zwe:"ᕋᐧ",zwi:"ᕈᐧ",zwo:"ᕍᐧ",zwa:"ᕊᐧ",s:"ᐢ",she:"ᔐ",shi:"ᔑ",sho:"ᔓ",sha:"ᔕ",shii:"ᔒ",shoo:"ᔔ",shaa:"ᔖ",sh:"ᐡ",zhe:"ᔐ",zhi:"ᔑ",zho:"ᔓ",zha:"ᔕ",zhii:"ᔒ",zhoo:"ᔔ",zhaa:"ᔖ",zh:"ᐡ",shwe:"ᔘ",shwi:"ᔚ",shwo:"ᔞ",shwa:"ᔢ",shwii:"ᔜ",shwoo:"ᔠ",shwaa:"ᔤ",zhwe:"ᔘ",zhwi:"ᔚ",zhwo:"ᔞ",zhwa:"ᔢ",zhwii:"ᔜ",zhwoo:"ᔠ",zhwaa:"ᔤ",ye:"ᔦ",yi:"ᔨ",yo:"ᔪ",ya:"ᔭ",y:"ᔾ",le:"ᓬᐁ",li:"ᓬᐃ",lo:"ᓬᐅ",la:"ᓬᐊ",lii:"ᓬᐄ",loo:"ᓬᐆ",laa:"ᓬᐋ",l:"ᓫ",r:"ᕑ",re:"ᕒᐁ",ri:"ᕒᐃ",ro:"ᕒᐅ",ra:"ᕒᐊ",rii:"ᕒᐄ",roo:"ᕒᐆ",raa:"ᕒᐋ",h:"ᐦ",X:"᙭"},ojibwe:{e:"ᐁ",i:"ᐃ",o:"ᐅ",a:"ᐊ",c:"",ii:"ᐎ",oo:"ᐒ",aa:"ᐗ",be:"ᐯ",bi:"ᐱ",bo:"ᐳ",ba:"ᐸ",bii:"ᐼ",boo:"ᑀ",baa:"ᑄ",b:"ᑉ",pe:"ᐯ",pi:"ᐱ",po:"ᐳ",pa:"ᐸ",pii:"ᐼ",poo:"ᑀ",paa:"ᑄ",p:"ᑉ",de:"ᑌ",di:"ᑎ",do:"ᑐ",da:"ᑕ",dii:"ᑙ",doo:"ᑝ",daa:"ᑡ",d:"ᒼ",te:"ᑌ",ti:"ᑎ",to:"ᑐ",ta:"ᑕ",tii:"ᑙ",too:"ᑝ",taa:"ᑡ",t:"ᒼ",ge:"ᑫ",gi:"ᑭ",go:"ᒄ",ga:"ᒃ",gii:"ᑶ",goo:"ᑺ",gaa:"ᑾ",g:"ᒃ",k:"ᒃ",ke:"ᑫ",ki:"ᑭ",ko:"ᒄ",ka:"ᒃ",kii:"ᑶ",koo:"ᑺ",kaa:"ᑾ",j:"ᒡ",je:"ᒉ",ji:"ᒋ",jo:"ᒍ",ja:"ᒐ",jii:"ᒔ",joo:"ᒘ",jaa:"ᒜ",ch:"ᒡ",che:"ᑫ",chi:"ᑭ",cho:"ᒄ",cha:"ᒃ",chii:"ᑶ",choo:"ᑺ",chaa:"ᑾ",ne:"ᓀ",ni:"ᓂ",no:"ᓄ",na:"ᓇ",nii:"ᐧᓂ",noo:"ᐧᓄ",naa:"ᓋ",me:"ᒣ",mi:"ᒥ",mo:"ᒧ",ma:"ᒪ",mii:"ᒮ",moo:"ᒲ",maa:"ᒶ",se:"ᓭ",si:"ᓯ",so:"ᓱ",sa:"ᓴ",sii:"ᓸ",soo:"ᓼ",saa:"ᔀ",ze:"ᓭ",zi:"ᓯ",zo:"ᓱ",za:"ᓴ",zii:"ᓸ",zoo:"ᓼ",zaa:"ᔀ",she:"ᔐ",shi:"ᔑ",sho:"ᔓ",sha:"ᔕ",shii:"ᔙ",shoo:"ᔝ",shaa:"ᔡ",sh:"ᔥ",ye:"ᔦ",yi:"ᔨ",yo:"ᔪ",ya:"ᔭ",yii:"ᔱ",yoo:"ᔵ",yaa:"ᔹ",y:"ᔾ",le:"ᓓ",li:"ᓕ",lo:"ᓗ",la:"ᓚ",lii:"ᓞ",loo:"ᓢ",laa:"ᓦ",l:"ᓪ",we:"ᐌ",wi:"ᐎ",wo:"ᐒ",wa:"ᐗ",wii:"ᐐ",woo:"ᐔ",waa:"ᐙ",w:"ᐤ",ve:"ᕕ",vi:"ᕓ",vo:"ᕗ",va:"ᕚ",v:"ᕝ",vii:"ᐧᕓ",voo:"ᐧᕗ",vaa:"ᐧᕚ"}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));class o{static save(t,e){chrome.storage.sync.set({[t]:e},(function(){console.log("set: ",t,e)}))}static read(t=["languages"]){return new Promise(e=>{chrome.storage.sync.get(t,(function(t){console.log(t),e(t)}))})}}},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,function(t,e,n){"use strict";n.r(e);var o=n(0);n(3);function c(t){let e;return{c(){e=Object(o.q)("header"),e.innerHTML='<div class="content svelte-19l2qpe">First Nations Keyboards</div>',Object(o.f)(e,"class","svelte-19l2qpe")},m(t,n){Object(o.A)(t,e,n)},p:o.E,i:o.E,o:o.E,d(t){t&&Object(o.p)(e)}}}class i extends o.a{constructor(t){super(),Object(o.z)(this,t,null,c,o.H,{})}}var r=i;function a(t){const e=t-1;return e*e*e+1}function l(t){return--t*t*t*t*t+1}function s(t){var{fallback:e}=t,n=
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(o=Object.getOwnPropertySymbols(t);c<o.length;c++)e.indexOf(o[c])<0&&Object.prototype.propertyIsEnumerable.call(t,o[c])&&(n[o[c]]=t[o[c]])}return n}(t,["fallback"]);const c=new Map,i=new Map;function r(t,c,i){return(r,l)=>(t.set(l.key,{rect:r.getBoundingClientRect()}),()=>{if(c.has(l.key)){const{rect:t}=c.get(l.key);return c.delete(l.key),function(t,e,c){const{delay:i=0,duration:r=(t=>30*Math.sqrt(t)),easing:l=a}=Object(o.e)(Object(o.e)({},n),c),s=e.getBoundingClientRect(),u=t.left-s.left,f=t.top-s.top,d=t.width/s.width,b=t.height/s.height,j=Math.sqrt(u*u+f*f),h=getComputedStyle(e),p="none"===h.transform?"":h.transform,O=+h.opacity;return{delay:i,duration:Object(o.B)(r)?r(j):r,easing:l,css:(t,e)=>`\n\t\t\t\topacity: ${t*O};\n\t\t\t\ttransform-origin: top left;\n\t\t\t\ttransform: ${p} translate(${e*u}px,${e*f}px) scale(${t+(1-t)*d}, ${t+(1-t)*b});\n\t\t\t`}}(t,r,l)}return t.delete(l.key),e&&e(r,l,i)})}return[r(i,c,!1),r(c,i,!0)]}function u(t,e,n){const c=getComputedStyle(t),i="none"===c.transform?"":c.transform,r=e.from.width/t.clientWidth,l=e.from.height/t.clientHeight,s=(e.from.left-e.to.left)/r,u=(e.from.top-e.to.top)/l,f=Math.sqrt(s*s+u*u),{delay:d=0,duration:b=(t=>120*Math.sqrt(t)),easing:j=a}=n;return{delay:d,duration:Object(o.B)(b)?b(f):b,easing:j,css:(t,e)=>`transform: ${i} translate(${e*s}px, ${e*u}px);`}}var f=n(1),d=n(2);n(4);function b(t){let e,n,c;const i=t[1].default,r=Object(o.m)(i,t,t[0],null);return{c(){e=Object(o.q)("button"),r&&r.c(),Object(o.f)(e,"class","save-btn svelte-tu0uoj")},m(i,a){Object(o.A)(i,e,a),r&&r.m(e,null),n=!0,c=Object(o.C)(e,"click",t[2])},p(t,[e]){r&&r.p&&1&e&&r.p(Object(o.v)(i,t,t[0],null),Object(o.u)(i,t[0],e,null))},i(t){n||(Object(o.L)(r,t),n=!0)},o(t){Object(o.M)(r,t),n=!1},d(t){t&&Object(o.p)(e),r&&r.d(t),c()}}}function j(t,e,n){let{$$slots:c={},$$scope:i}=e;return t.$set=t=>{"$$scope"in t&&n(0,i=t.$$scope)},[i,c,function(e){Object(o.g)(t,e)}]}class h extends o.a{constructor(t){super(),Object(o.z)(this,t,j,b,o.H,{})}}var p=h;n(5);function O(t,e,n){const o=t.slice();return o[10]=e[n],o[11]=e,o[12]=n,o}function w(t,e,n){const o=t.slice();return o[10]=e[n],o[13]=e,o[14]=n,o}function g(t){let e,n,c=JSON.stringify(t[9],null,2)+"";return{c(){e=Object(o.q)("pre"),n=Object(o.K)(c)},m(t,c){Object(o.A)(t,e,c),Object(o.d)(e,n)},p(t,e){1&e&&c!==(c=JSON.stringify(t[9],null,2)+"")&&Object(o.I)(n,c)},i:o.E,o:o.E,d(t){t&&Object(o.p)(e)}}}function m(t){let e,n,c,i,r,a,l,s,u,f,d,b,j=[],h=new Map,g=[],m=new Map,v=t[0].filter(C);const x=t=>t[10].id;for(let e=0;e<v.length;e+=1){let n=w(t,v,e),o=x(n);h.set(o,j[e]=y(o,n))}let z=t[0].filter(q);const E=t=>t[10].id;for(let e=0;e<z.length;e+=1){let n=O(t,z,e),o=E(n);m.set(o,g[e]=$(o,n))}const M=new p({props:{$$slots:{default:[k]},$$scope:{ctx:t}}});return M.$on("click",t[3]),{c(){e=Object(o.q)("div"),n=Object(o.q)("div"),c=Object(o.q)("h2"),c.textContent="Languages",i=Object(o.J)(),r=Object(o.q)("div");for(let t=0;t<j.length;t+=1)j[t].c();a=Object(o.J)(),l=Object(o.q)("div"),s=Object(o.q)("h2"),s.textContent="Installed",u=Object(o.J)(),f=Object(o.q)("div");for(let t=0;t<g.length;t+=1)g[t].c();d=Object(o.J)(),Object(o.j)(M.$$.fragment),Object(o.f)(c,"class","svelte-70jdzh"),Object(o.f)(r,"class","content svelte-70jdzh"),Object(o.f)(n,"class","column svelte-70jdzh"),Object(o.f)(s,"class","svelte-70jdzh"),Object(o.f)(f,"class","content svelte-70jdzh"),Object(o.f)(l,"class","column svelte-70jdzh"),Object(o.f)(e,"class","board svelte-70jdzh")},m(t,h){Object(o.A)(t,e,h),Object(o.d)(e,n),Object(o.d)(n,c),Object(o.d)(n,i),Object(o.d)(n,r);for(let t=0;t<j.length;t+=1)j[t].m(r,null);Object(o.d)(e,a),Object(o.d)(e,l),Object(o.d)(l,s),Object(o.d)(l,u),Object(o.d)(l,f);for(let t=0;t<g.length;t+=1)g[t].m(f,null);Object(o.d)(e,d),Object(o.D)(M,e,null),b=!0},p(t,e){const n=t[0].filter(C);Object(o.w)();for(let t=0;t<j.length;t+=1)j[t].r();j=Object(o.N)(j,e,x,1,t,n,h,r,o.s,y,null,w);for(let t=0;t<j.length;t+=1)j[t].a();Object(o.h)();const c=t[0].filter(q);Object(o.w)();for(let t=0;t<g.length;t+=1)g[t].r();g=Object(o.N)(g,e,E,1,t,c,m,f,o.s,$,null,O);for(let t=0;t<g.length;t+=1)g[t].a();Object(o.h)();const i={};32768&e&&(i.$$scope={dirty:e,ctx:t}),M.$set(i)},i(t){if(!b){for(let t=0;t<v.length;t+=1)Object(o.L)(j[t]);for(let t=0;t<z.length;t+=1)Object(o.L)(g[t]);Object(o.L)(M.$$.fragment,t),b=!0}},o(t){for(let t=0;t<j.length;t+=1)Object(o.M)(j[t]);for(let t=0;t<g.length;t+=1)Object(o.M)(g[t]);Object(o.M)(M.$$.fragment,t),b=!1},d(t){t&&Object(o.p)(e);for(let t=0;t<j.length;t+=1)j[t].d();for(let t=0;t<g.length;t+=1)g[t].d();Object(o.n)(M)}}}function y(t,e){let n,c,i,r,a,l,s,f,d,b,j,h,p=e[10].name+"",O=o.E;function w(){e[4].call(c,e[10])}function g(...t){return e[5](e[10],...t)}return{key:t,first:null,c(){n=Object(o.q)("label"),c=Object(o.q)("input"),i=Object(o.J)(),r=Object(o.K)(p),a=Object(o.J)(),l=Object(o.q)("button"),l.textContent="x",s=Object(o.J)(),Object(o.f)(c,"type","checkbox"),Object(o.f)(c,"class","svelte-70jdzh"),Object(o.f)(l,"class","svelte-70jdzh"),Object(o.f)(n,"class","svelte-70jdzh"),this.first=n},m(t,u){Object(o.A)(t,n,u),Object(o.d)(n,c),c.checked=e[10].installed,Object(o.d)(n,i),Object(o.d)(n,r),Object(o.d)(n,a),Object(o.d)(n,l),Object(o.d)(n,s),j=!0,h=[Object(o.C)(c,"change",w),Object(o.C)(l,"click",g)]},p(t,n){e=t,1&n&&(c.checked=e[10].installed),(!j||1&n)&&p!==(p=e[10].name+"")&&Object(o.I)(r,p)},r(){b=n.getBoundingClientRect()},f(){Object(o.t)(n),O(),Object(o.c)(n,b)},a(){O(),O=Object(o.i)(n,b,u,{})},i(t){j||(Object(o.b)(()=>{d&&d.end(1),f||(f=Object(o.k)(n,e[2],{key:e[10].id})),f.start()}),j=!0)},o(t){f&&f.invalidate(),d=Object(o.l)(n,e[1],{key:e[10].id}),j=!1},d(t){t&&Object(o.p)(n),t&&d&&d.end(),Object(o.G)(h)}}}function $(t,e){let n,c,i,r,a,l,s,f,d,b,j,h,p,O=e[10].name+"",w=o.E;function g(){e[6].call(c,e[10])}function m(...t){return e[7](e[10],...t)}return{key:t,first:null,c(){n=Object(o.q)("label"),c=Object(o.q)("input"),i=Object(o.J)(),r=Object(o.K)(O),a=Object(o.J)(),l=Object(o.q)("button"),l.textContent="x",s=Object(o.J)(),Object(o.f)(c,"type","checkbox"),Object(o.f)(c,"class","svelte-70jdzh"),Object(o.f)(l,"class","svelte-70jdzh"),Object(o.f)(n,"class",f=Object(o.F)(e[10].installed?"installed":"")+" svelte-70jdzh"),this.first=n},m(t,u){Object(o.A)(t,n,u),Object(o.d)(n,c),c.checked=e[10].installed,Object(o.d)(n,i),Object(o.d)(n,r),Object(o.d)(n,a),Object(o.d)(n,l),Object(o.d)(n,s),h=!0,p=[Object(o.C)(c,"change",g),Object(o.C)(l,"click",m)]},p(t,i){e=t,1&i&&(c.checked=e[10].installed),(!h||1&i)&&O!==(O=e[10].name+"")&&Object(o.I)(r,O),(!h||1&i&&f!==(f=Object(o.F)(e[10].installed?"installed":"")+" svelte-70jdzh"))&&Object(o.f)(n,"class",f)},r(){j=n.getBoundingClientRect()},f(){Object(o.t)(n),w(),Object(o.c)(n,j)},a(){w(),w=Object(o.i)(n,j,u,{})},i(t){h||(Object(o.b)(()=>{b&&b.end(1),d||(d=Object(o.k)(n,e[2],{key:e[10].id})),d.start()}),h=!0)},o(t){d&&d.invalidate(),b=Object(o.l)(n,e[1],{key:e[10].id}),h=!1},d(t){t&&Object(o.p)(n),t&&b&&b.end(),Object(o.G)(p)}}}function k(t){let e;return{c(){e=Object(o.K)("Save")},m(t,n){Object(o.A)(t,e,n)},d(t){t&&Object(o.p)(e)}}}function v(t){let e;return{c(){e=Object(o.q)("p"),e.textContent="loading..."},m(t,n){Object(o.A)(t,e,n)},p:o.E,i:o.E,o:o.E,d(t){t&&Object(o.p)(e)}}}function x(t){let e,n,c,i={ctx:t,current:null,token:null,pending:v,then:m,catch:g,value:8,error:9,blocks:[,,,]};return Object(o.x)(n=t[0],i),{c(){e=Object(o.r)(),i.block.c()},m(t,n){Object(o.A)(t,e,n),i.block.m(t,i.anchor=n),i.mount=()=>e.parentNode,i.anchor=e,c=!0},p(e,[c]){if(t=e,i.ctx=t,1&c&&n!==(n=t[0])&&Object(o.x)(n,i));else{const e=t.slice();e[8]=i.resolved,i.block.p(e,c)}},i(t){c||(Object(o.L)(i.block),c=!0)},o(t){for(let t=0;t<3;t+=1){const e=i.blocks[t];Object(o.M)(e)}c=!1},d(t){t&&Object(o.p)(e),i.block.d(t),i.token=null,i=null}}}function z(t){todos=todos.filter(e=>e!==t)}const C=t=>!t.installed,q=t=>t.installed;function E(t,e,n){let o=async function(){const t=await d.a.read(["installed"]);return Object.keys(f.a).map(e=>({id:e,installed:t.includes(e),name:e}))}();const[c,i]=s({fallback(t,e){const n=getComputedStyle(t),o="none"===n.transform?"":n.transform;return{duration:600,easing:l,css:t=>`\n\t\t\t\t\ttransform: ${o} scale(${t});\n\t\t\t\t\topacity: ${t}\n\t\t\t\t`}}});return[o,c,i,function(){const t=o.filter(t=>t.installed).map(t=>t.name);d.a.save("languages",t)},function(t){t.installed=this.checked,n(0,o)},t=>z(t),function(t){t.installed=this.checked,n(0,o)},t=>z(t)]}class M extends o.a{constructor(t){super(),Object(o.z)(this,t,E,x,o.H,{})}}var _=M;n(6);function S(t){let e,n,c;const i=new r({}),a=new _({});return{c(){Object(o.j)(i.$$.fragment),e=Object(o.J)(),n=Object(o.q)("div"),Object(o.j)(a.$$.fragment),Object(o.f)(n,"class","container svelte-17r6lxr")},m(t,r){Object(o.D)(i,t,r),Object(o.A)(t,e,r),Object(o.A)(t,n,r),Object(o.D)(a,n,null),c=!0},p:o.E,i(t){c||(Object(o.L)(i.$$.fragment,t),Object(o.L)(a.$$.fragment,t),c=!0)},o(t){Object(o.M)(i.$$.fragment,t),Object(o.M)(a.$$.fragment,t),c=!1},d(t){Object(o.n)(i,t),t&&Object(o.p)(e),t&&Object(o.p)(n),Object(o.n)(a)}}}class A extends o.a{constructor(t){super(),Object(o.z)(this,t,null,S,o.H,{})}}const J=new A({target:document.body});window.app=J;e.default=J}]);