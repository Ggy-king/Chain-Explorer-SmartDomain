import{ch as oe,ci as M,ac as Ee,ah as Ht,bd as jt,cj as ut,ak as Kt,af as ge,ag as Le,ck as Wt,aj as qt,ad as Yt,ai as j,cl as Oe,cm as J,cn as ct,bb as Xt,co as V,bc as Re,ae as Jt,cp as ft,cq as dt,as as Qt,cr as Zt,cs as ea,ab as ta,z as ie,a2 as U,d as $,aD as N,J as Y,a3 as aa,r as x,i as T,aO as na,aL as he,bT as Ie,o as O,q as K,w as ue,Q as W,a as q,R as E,u as m,n as Q,aP as ra,bf as la,az as vt,c as P,b as Me,F as bt,aW as pt,C as Pe,B as I,be as Ne,O as Z,aM as sa,aw as ee,aN as mt,e as oa,ct as ia,f as ua,P as ca,V as ce,bp as $e,Y as te,at as gt,a7 as ht,A as yt,U as fe,a4 as De,ao as ye,L as _e,N as fa,K as ke,a5 as _t,au as wt,ap as F,bg as we,c1 as Fe,M as Ve,bk as St,bh as be,bz as Tt,ay as ae,a1 as ne,cu as re,h as Ct,t as xt,cv as da,av as va,aU as At,aF as ba}from"./index-YSL0LHOe.js";var Se=oe(M,"WeakMap"),Ue=Object.create,pa=function(){function e(){}return function(t){if(!Ee(t))return{};if(Ue)return Ue(t);e.prototype=t;var a=new e;return e.prototype=void 0,a}}();function Ur(e,t){var a=-1,n=e.length;for(t||(t=Array(n));++a<n;)t[a]=e[a];return t}function Gr(e,t,a,n){var s=!a;a||(a={});for(var r=-1,u=t.length;++r<u;){var l=t[r],d=void 0;d===void 0&&(d=e[l]),s?Ht(a,l,d):jt(a,l,d)}return a}function Et(e){return e!=null&&ut(e.length)&&!Kt(e)}var ma=Object.prototype;function Be(e){var t=e&&e.constructor,a=typeof t=="function"&&t.prototype||ma;return e===a}function ga(e,t){for(var a=-1,n=Array(e);++a<e;)n[a]=t(a);return n}function ha(){return!1}var Lt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ge=Lt&&typeof module=="object"&&module&&!module.nodeType&&module,ya=Ge&&Ge.exports===Lt,He=ya?M.Buffer:void 0,_a=He?He.isBuffer:void 0,Te=_a||ha,wa="[object Arguments]",Sa="[object Array]",Ta="[object Boolean]",Ca="[object Date]",xa="[object Error]",Aa="[object Function]",Ea="[object Map]",La="[object Number]",Oa="[object Object]",Pa="[object RegExp]",$a="[object Set]",ka="[object String]",Ba="[object WeakMap]",za="[object ArrayBuffer]",Ra="[object DataView]",Ia="[object Float32Array]",Ma="[object Float64Array]",Na="[object Int8Array]",Da="[object Int16Array]",Fa="[object Int32Array]",Va="[object Uint8Array]",Ua="[object Uint8ClampedArray]",Ga="[object Uint16Array]",Ha="[object Uint32Array]",S={};S[Ia]=S[Ma]=S[Na]=S[Da]=S[Fa]=S[Va]=S[Ua]=S[Ga]=S[Ha]=!0;S[wa]=S[Sa]=S[za]=S[Ta]=S[Ra]=S[Ca]=S[xa]=S[Aa]=S[Ea]=S[La]=S[Oa]=S[Pa]=S[$a]=S[ka]=S[Ba]=!1;function ja(e){return ge(e)&&ut(e.length)&&!!S[Le(e)]}function Ka(e){return function(t){return e(t)}}var Ot=typeof exports=="object"&&exports&&!exports.nodeType&&exports,H=Ot&&typeof module=="object"&&module&&!module.nodeType&&module,Wa=H&&H.exports===Ot,pe=Wa&&Wt.process,je=function(){try{var e=H&&H.require&&H.require("util").types;return e||pe&&pe.binding&&pe.binding("util")}catch{}}(),Ke=je&&je.isTypedArray,Pt=Ke?Ka(Ke):ja,qa=Object.prototype,Ya=qa.hasOwnProperty;function $t(e,t){var a=j(e),n=!a&&qt(e),s=!a&&!n&&Te(e),r=!a&&!n&&!s&&Pt(e),u=a||n||s||r,l=u?ga(e.length,String):[],d=l.length;for(var f in e)(t||Ya.call(e,f))&&!(u&&(f=="length"||s&&(f=="offset"||f=="parent")||r&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||Yt(f,d)))&&l.push(f);return l}function kt(e,t){return function(a){return e(t(a))}}var Xa=kt(Object.keys,Object),Ja=Object.prototype,Qa=Ja.hasOwnProperty;function Za(e){if(!Be(e))return Xa(e);var t=[];for(var a in Object(e))Qa.call(e,a)&&a!="constructor"&&t.push(a);return t}function Bt(e){return Et(e)?$t(e):Za(e)}function en(e){var t=[];if(e!=null)for(var a in Object(e))t.push(a);return t}var tn=Object.prototype,an=tn.hasOwnProperty;function nn(e){if(!Ee(e))return en(e);var t=Be(e),a=[];for(var n in e)n=="constructor"&&(t||!an.call(e,n))||a.push(n);return a}function Hr(e){return Et(e)?$t(e,!0):nn(e)}var rn=kt(Object.getPrototypeOf,Object);function ln(){this.__data__=new Oe,this.size=0}function sn(e){var t=this.__data__,a=t.delete(e);return this.size=t.size,a}function on(e){return this.__data__.get(e)}function un(e){return this.__data__.has(e)}var cn=200;function fn(e,t){var a=this.__data__;if(a instanceof Oe){var n=a.__data__;if(!J||n.length<cn-1)return n.push([e,t]),this.size=++a.size,this;a=this.__data__=new ct(n)}return a.set(e,t),this.size=a.size,this}function k(e){var t=this.__data__=new Oe(e);this.size=t.size}k.prototype.clear=ln;k.prototype.delete=sn;k.prototype.get=on;k.prototype.has=un;k.prototype.set=fn;var zt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,We=zt&&typeof module=="object"&&module&&!module.nodeType&&module,dn=We&&We.exports===zt,qe=dn?M.Buffer:void 0,Ye=qe?qe.allocUnsafe:void 0;function jr(e,t){if(t)return e.slice();var a=e.length,n=Ye?Ye(a):new e.constructor(a);return e.copy(n),n}function vn(e,t){for(var a=-1,n=e==null?0:e.length,s=0,r=[];++a<n;){var u=e[a];t(u,a,e)&&(r[s++]=u)}return r}function bn(){return[]}var pn=Object.prototype,mn=pn.propertyIsEnumerable,Xe=Object.getOwnPropertySymbols,gn=Xe?function(e){return e==null?[]:(e=Object(e),vn(Xe(e),function(t){return mn.call(e,t)}))}:bn;function hn(e,t,a){var n=t(e);return j(e)?n:Xt(n,a(e))}function Je(e){return hn(e,Bt,gn)}var Ce=oe(M,"DataView"),xe=oe(M,"Promise"),Ae=oe(M,"Set"),Qe="[object Map]",yn="[object Object]",Ze="[object Promise]",et="[object Set]",tt="[object WeakMap]",at="[object DataView]",_n=V(Ce),wn=V(J),Sn=V(xe),Tn=V(Ae),Cn=V(Se),z=Le;(Ce&&z(new Ce(new ArrayBuffer(1)))!=at||J&&z(new J)!=Qe||xe&&z(xe.resolve())!=Ze||Ae&&z(new Ae)!=et||Se&&z(new Se)!=tt)&&(z=function(e){var t=Le(e),a=t==yn?e.constructor:void 0,n=a?V(a):"";if(n)switch(n){case _n:return at;case wn:return Qe;case Sn:return Ze;case Tn:return et;case Cn:return tt}return t});var le=M.Uint8Array;function xn(e){var t=new e.constructor(e.byteLength);return new le(t).set(new le(e)),t}function Kr(e,t){var a=t?xn(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.length)}function Wr(e){return typeof e.constructor=="function"&&!Be(e)?pa(rn(e)):{}}var An="__lodash_hash_undefined__";function En(e){return this.__data__.set(e,An),this}function Ln(e){return this.__data__.has(e)}function se(e){var t=-1,a=e==null?0:e.length;for(this.__data__=new ct;++t<a;)this.add(e[t])}se.prototype.add=se.prototype.push=En;se.prototype.has=Ln;function On(e,t){for(var a=-1,n=e==null?0:e.length;++a<n;)if(t(e[a],a,e))return!0;return!1}function Pn(e,t){return e.has(t)}var $n=1,kn=2;function Rt(e,t,a,n,s,r){var u=a&$n,l=e.length,d=t.length;if(l!=d&&!(u&&d>l))return!1;var f=r.get(e),i=r.get(t);if(f&&i)return f==t&&i==e;var c=-1,v=!0,h=a&kn?new se:void 0;for(r.set(e,t),r.set(t,e);++c<l;){var o=e[c],g=t[c];if(n)var _=u?n(g,o,c,t,e,r):n(o,g,c,e,t,r);if(_!==void 0){if(_)continue;v=!1;break}if(h){if(!On(t,function(b,y){if(!Pn(h,y)&&(o===b||s(o,b,a,n,r)))return h.push(y)})){v=!1;break}}else if(!(o===g||s(o,g,a,n,r))){v=!1;break}}return r.delete(e),r.delete(t),v}function Bn(e){var t=-1,a=Array(e.size);return e.forEach(function(n,s){a[++t]=[s,n]}),a}function zn(e){var t=-1,a=Array(e.size);return e.forEach(function(n){a[++t]=n}),a}var Rn=1,In=2,Mn="[object Boolean]",Nn="[object Date]",Dn="[object Error]",Fn="[object Map]",Vn="[object Number]",Un="[object RegExp]",Gn="[object Set]",Hn="[object String]",jn="[object Symbol]",Kn="[object ArrayBuffer]",Wn="[object DataView]",nt=Re?Re.prototype:void 0,me=nt?nt.valueOf:void 0;function qn(e,t,a,n,s,r,u){switch(a){case Wn:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Kn:return!(e.byteLength!=t.byteLength||!r(new le(e),new le(t)));case Mn:case Nn:case Vn:return Jt(+e,+t);case Dn:return e.name==t.name&&e.message==t.message;case Un:case Hn:return e==t+"";case Fn:var l=Bn;case Gn:var d=n&Rn;if(l||(l=zn),e.size!=t.size&&!d)return!1;var f=u.get(e);if(f)return f==t;n|=In,u.set(e,t);var i=Rt(l(e),l(t),n,s,r,u);return u.delete(e),i;case jn:if(me)return me.call(e)==me.call(t)}return!1}var Yn=1,Xn=Object.prototype,Jn=Xn.hasOwnProperty;function Qn(e,t,a,n,s,r){var u=a&Yn,l=Je(e),d=l.length,f=Je(t),i=f.length;if(d!=i&&!u)return!1;for(var c=d;c--;){var v=l[c];if(!(u?v in t:Jn.call(t,v)))return!1}var h=r.get(e),o=r.get(t);if(h&&o)return h==t&&o==e;var g=!0;r.set(e,t),r.set(t,e);for(var _=u;++c<d;){v=l[c];var b=e[v],y=t[v];if(n)var L=u?n(y,b,v,t,e,r):n(b,y,v,e,t,r);if(!(L===void 0?b===y||s(b,y,a,n,r):L)){g=!1;break}_||(_=v=="constructor")}if(g&&!_){var w=e.constructor,p=t.constructor;w!=p&&"constructor"in e&&"constructor"in t&&!(typeof w=="function"&&w instanceof w&&typeof p=="function"&&p instanceof p)&&(g=!1)}return r.delete(e),r.delete(t),g}var Zn=1,rt="[object Arguments]",lt="[object Array]",X="[object Object]",er=Object.prototype,st=er.hasOwnProperty;function tr(e,t,a,n,s,r){var u=j(e),l=j(t),d=u?lt:z(e),f=l?lt:z(t);d=d==rt?X:d,f=f==rt?X:f;var i=d==X,c=f==X,v=d==f;if(v&&Te(e)){if(!Te(t))return!1;u=!0,i=!1}if(v&&!i)return r||(r=new k),u||Pt(e)?Rt(e,t,a,n,s,r):qn(e,t,d,a,n,s,r);if(!(a&Zn)){var h=i&&st.call(e,"__wrapped__"),o=c&&st.call(t,"__wrapped__");if(h||o){var g=h?e.value():e,_=o?t.value():t;return r||(r=new k),s(g,_,a,n,r)}}return v?(r||(r=new k),Qn(e,t,a,n,s,r)):!1}function de(e,t,a,n,s){return e===t?!0:e==null||t==null||!ge(e)&&!ge(t)?e!==e&&t!==t:tr(e,t,a,n,de,s)}var ar=1,nr=2;function rr(e,t,a,n){var s=a.length,r=s;if(e==null)return!r;for(e=Object(e);s--;){var u=a[s];if(u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++s<r;){u=a[s];var l=u[0],d=e[l],f=u[1];if(u[2]){if(d===void 0&&!(l in e))return!1}else{var i=new k,c;if(!(c===void 0?de(f,d,ar|nr,n,i):c))return!1}}return!0}function It(e){return e===e&&!Ee(e)}function lr(e){for(var t=Bt(e),a=t.length;a--;){var n=t[a],s=e[n];t[a]=[n,s,It(s)]}return t}function Mt(e,t){return function(a){return a==null?!1:a[e]===t&&(t!==void 0||e in Object(a))}}function sr(e){var t=lr(e);return t.length==1&&t[0][2]?Mt(t[0][0],t[0][1]):function(a){return a===e||rr(a,e,t)}}var or=1,ir=2;function ur(e,t){return ft(e)&&It(t)?Mt(dt(e),t):function(a){var n=Qt(a,e);return n===void 0&&n===t?Zt(a,e):de(t,n,or|ir)}}function cr(e){return function(t){return t==null?void 0:t[e]}}function fr(e){return function(t){return ea(t,e)}}function dr(e){return ft(e)?cr(dt(e)):fr(e)}function qr(e){return typeof e=="function"?e:e==null?ta:typeof e=="object"?j(e)?ur(e[0],e[1]):sr(e):dr(e)}function vr(e,t){return de(e,t)}const D=4,br={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},pr=({move:e,size:t,bar:a})=>({[a.size]:t,transform:`translate${a.axis}(${e}%)`}),ze=Symbol("scrollbarContextKey"),mr=ie({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),gr="Thumb",hr=$({__name:"thumb",props:mr,setup(e){const t=e,a=N(ze),n=Y("scrollbar");a||aa(gr,"can not inject scrollbar context");const s=x(),r=x(),u=x({}),l=x(!1);let d=!1,f=!1,i=vt?document.onselectstart:null;const c=T(()=>br[t.vertical?"vertical":"horizontal"]),v=T(()=>pr({size:t.size,move:t.move,bar:c.value})),h=T(()=>s.value[c.value.offset]**2/a.wrapElement[c.value.scrollSize]/t.ratio/r.value[c.value.offset]),o=C=>{var A;if(C.stopPropagation(),C.ctrlKey||[1,2].includes(C.button))return;(A=window.getSelection())==null||A.removeAllRanges(),_(C);const R=C.currentTarget;R&&(u.value[c.value.axis]=R[c.value.offset]-(C[c.value.client]-R.getBoundingClientRect()[c.value.direction]))},g=C=>{if(!r.value||!s.value||!a.wrapElement)return;const A=Math.abs(C.target.getBoundingClientRect()[c.value.direction]-C[c.value.client]),R=r.value[c.value.offset]/2,ve=(A-R)*100*h.value/s.value[c.value.offset];a.wrapElement[c.value.scroll]=ve*a.wrapElement[c.value.scrollSize]/100},_=C=>{C.stopImmediatePropagation(),d=!0,document.addEventListener("mousemove",b),document.addEventListener("mouseup",y),i=document.onselectstart,document.onselectstart=()=>!1},b=C=>{if(!s.value||!r.value||d===!1)return;const A=u.value[c.value.axis];if(!A)return;const R=(s.value.getBoundingClientRect()[c.value.direction]-C[c.value.client])*-1,ve=r.value[c.value.offset]-A,Gt=(R-ve)*100*h.value/s.value[c.value.offset];a.wrapElement[c.value.scroll]=Gt*a.wrapElement[c.value.scrollSize]/100},y=()=>{d=!1,u.value[c.value.axis]=0,document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",y),p(),f&&(l.value=!1)},L=()=>{f=!1,l.value=!!t.size},w=()=>{f=!0,l.value=d};na(()=>{p(),document.removeEventListener("mouseup",y)});const p=()=>{document.onselectstart!==i&&(document.onselectstart=i)};return he(Ie(a,"scrollbarElement"),"mousemove",L),he(Ie(a,"scrollbarElement"),"mouseleave",w),(C,A)=>(O(),K(la,{name:m(n).b("fade"),persisted:""},{default:ue(()=>[W(q("div",{ref_key:"instance",ref:s,class:E([m(n).e("bar"),m(n).is(m(c).key)]),onMousedown:g},[q("div",{ref_key:"thumb",ref:r,class:E(m(n).e("thumb")),style:Q(m(v)),onMousedown:o},null,38)],34),[[ra,C.always||l.value]])]),_:1},8,["name"]))}});var ot=U(hr,[["__file","thumb.vue"]]);const yr=ie({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}}),_r=$({__name:"bar",props:yr,setup(e,{expose:t}){const a=e,n=N(ze),s=x(0),r=x(0),u=x(""),l=x(""),d=x(1),f=x(1);return t({handleScroll:v=>{if(v){const h=v.offsetHeight-D,o=v.offsetWidth-D;r.value=v.scrollTop*100/h*d.value,s.value=v.scrollLeft*100/o*f.value}},update:()=>{const v=n==null?void 0:n.wrapElement;if(!v)return;const h=v.offsetHeight-D,o=v.offsetWidth-D,g=h**2/v.scrollHeight,_=o**2/v.scrollWidth,b=Math.max(g,a.minSize),y=Math.max(_,a.minSize);d.value=g/(h-g)/(b/(h-b)),f.value=_/(o-_)/(y/(o-y)),l.value=b+D<h?`${b}px`:"",u.value=y+D<o?`${y}px`:""}}),(v,h)=>(O(),P(bt,null,[Me(ot,{move:s.value,ratio:f.value,size:u.value,always:v.always},null,8,["move","ratio","size","always"]),Me(ot,{move:r.value,ratio:d.value,size:l.value,vertical:"",always:v.always},null,8,["move","ratio","size","always"])],64))}});var wr=U(_r,[["__file","bar.vue"]]);const Sr=ie({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:pt([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},tabindex:{type:[String,Number],default:void 0},id:String,role:String,...Pe(["ariaLabel","ariaOrientation"])}),Tr={scroll:({scrollTop:e,scrollLeft:t})=>[e,t].every(I)},Cr="ElScrollbar",xr=$({name:Cr}),Ar=$({...xr,props:Sr,emits:Tr,setup(e,{expose:t,emit:a}){const n=e,s=Y("scrollbar");let r,u,l=0,d=0;const f=x(),i=x(),c=x(),v=x(),h=T(()=>{const p={};return n.height&&(p.height=Ne(n.height)),n.maxHeight&&(p.maxHeight=Ne(n.maxHeight)),[n.wrapStyle,p]}),o=T(()=>[n.wrapClass,s.e("wrap"),{[s.em("wrap","hidden-default")]:!n.native}]),g=T(()=>[s.e("view"),n.viewClass]),_=()=>{var p;i.value&&((p=v.value)==null||p.handleScroll(i.value),l=i.value.scrollTop,d=i.value.scrollLeft,a("scroll",{scrollTop:i.value.scrollTop,scrollLeft:i.value.scrollLeft}))};function b(p,C){gt(p)?i.value.scrollTo(p):I(p)&&I(C)&&i.value.scrollTo(p,C)}const y=p=>{I(p)&&(i.value.scrollTop=p)},L=p=>{I(p)&&(i.value.scrollLeft=p)},w=()=>{var p;(p=v.value)==null||p.update()};return Z(()=>n.noresize,p=>{p?(r==null||r(),u==null||u()):({stop:r}=sa(c,w),u=he("resize",w))},{immediate:!0}),Z(()=>[n.maxHeight,n.height],()=>{n.native||ee(()=>{var p;w(),i.value&&((p=v.value)==null||p.handleScroll(i.value))})}),mt(ze,oa({scrollbarElement:f,wrapElement:i})),ia(()=>{i.value&&(i.value.scrollTop=l,i.value.scrollLeft=d)}),ua(()=>{n.native||ee(()=>{w()})}),ca(()=>w()),t({wrapRef:i,update:w,scrollTo:b,setScrollTop:y,setScrollLeft:L,handleScroll:_}),(p,C)=>(O(),P("div",{ref_key:"scrollbarRef",ref:f,class:E(m(s).b())},[q("div",{ref_key:"wrapRef",ref:i,class:E(m(o)),style:Q(m(h)),tabindex:p.tabindex,onScroll:_},[(O(),K($e(p.tag),{id:p.id,ref_key:"resizeRef",ref:c,class:E(m(g)),style:Q(p.viewStyle),role:p.role,"aria-label":p.ariaLabel,"aria-orientation":p.ariaOrientation},{default:ue(()=>[ce(p.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],46,["tabindex"]),p.native?te("v-if",!0):(O(),K(wr,{key:0,ref_key:"barRef",ref:v,always:p.always,"min-size":p.minSize},null,8,["always","min-size"]))],2))}});var Er=U(Ar,[["__file","scrollbar.vue"]]);const Yr=ht(Er),Nt={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},border:Boolean,size:yt,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0},...Pe(["ariaControls"])},Dt={[fe]:e=>De(e)||I(e)||ye(e),change:e=>De(e)||I(e)||ye(e)},G=Symbol("checkboxGroupContextKey"),Lr=({model:e,isChecked:t})=>{const a=N(G,void 0),n=T(()=>{var r,u;const l=(r=a==null?void 0:a.max)==null?void 0:r.value,d=(u=a==null?void 0:a.min)==null?void 0:u.value;return!_e(l)&&e.value.length>=l&&!t.value||!_e(d)&&e.value.length<=d&&t.value});return{isDisabled:fa(T(()=>(a==null?void 0:a.disabled.value)||n.value)),isLimitDisabled:n}},Or=(e,{model:t,isLimitExceeded:a,hasOwnLabel:n,isDisabled:s,isLabeledByFormItem:r})=>{const u=N(G,void 0),{formItem:l}=ke(),{emit:d}=wt();function f(o){var g,_,b,y;return[!0,e.trueValue,e.trueLabel].includes(o)?(_=(g=e.trueValue)!=null?g:e.trueLabel)!=null?_:!0:(y=(b=e.falseValue)!=null?b:e.falseLabel)!=null?y:!1}function i(o,g){d("change",f(o),g)}function c(o){if(a.value)return;const g=o.target;d("change",f(g.checked),o)}async function v(o){a.value||!n.value&&!s.value&&r.value&&(o.composedPath().some(b=>b.tagName==="LABEL")||(t.value=f([!1,e.falseValue,e.falseLabel].includes(t.value)),await ee(),i(t.value,o)))}const h=T(()=>(u==null?void 0:u.validateEvent)||e.validateEvent);return Z(()=>e.modelValue,()=>{h.value&&(l==null||l.validate("change").catch(o=>_t()))}),{handleChange:c,onClickRoot:v}},Pr=e=>{const t=x(!1),{emit:a}=wt(),n=N(G,void 0),s=T(()=>_e(n)===!1),r=x(!1),u=T({get(){var l,d;return s.value?(l=n==null?void 0:n.modelValue)==null?void 0:l.value:(d=e.modelValue)!=null?d:t.value},set(l){var d,f;s.value&&F(l)?(r.value=((d=n==null?void 0:n.max)==null?void 0:d.value)!==void 0&&l.length>(n==null?void 0:n.max.value)&&l.length>u.value.length,r.value===!1&&((f=n==null?void 0:n.changeEvent)==null||f.call(n,l))):(a(fe,l),t.value=l)}});return{model:u,isGroup:s,isLimitExceeded:r}},$r=(e,t,{model:a})=>{const n=N(G,void 0),s=x(!1),r=T(()=>we(e.value)?e.label:e.value),u=T(()=>{const i=a.value;return ye(i)?i:F(i)?gt(r.value)?i.map(Fe).some(c=>vr(c,r.value)):i.map(Fe).includes(r.value):i!=null?i===e.trueValue||i===e.trueLabel:!!i}),l=Ve(T(()=>{var i;return(i=n==null?void 0:n.size)==null?void 0:i.value}),{prop:!0}),d=Ve(T(()=>{var i;return(i=n==null?void 0:n.size)==null?void 0:i.value})),f=T(()=>!!t.default||!we(r.value));return{checkboxButtonSize:l,isChecked:u,isFocused:s,checkboxSize:d,hasOwnLabel:f,actualValue:r}},Ft=(e,t)=>{const{formItem:a}=ke(),{model:n,isGroup:s,isLimitExceeded:r}=Pr(e),{isFocused:u,isChecked:l,checkboxButtonSize:d,checkboxSize:f,hasOwnLabel:i,actualValue:c}=$r(e,t,{model:n}),{isDisabled:v}=Lr({model:n,isChecked:l}),{inputId:h,isLabeledByFormItem:o}=St(e,{formItemContext:a,disableIdGeneration:i,disableIdManagement:s}),{handleChange:g,onClickRoot:_}=Or(e,{model:n,isLimitExceeded:r,hasOwnLabel:i,isDisabled:v,isLabeledByFormItem:o});return(()=>{function y(){var L,w;F(n.value)&&!n.value.includes(c.value)?n.value.push(c.value):n.value=(w=(L=e.trueValue)!=null?L:e.trueLabel)!=null?w:!0}e.checked&&y()})(),be({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},T(()=>s.value&&we(e.value))),be({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},T(()=>!!e.trueLabel)),be({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},T(()=>!!e.falseLabel)),{inputId:h,isLabeledByFormItem:o,isChecked:l,isDisabled:v,isFocused:u,checkboxButtonSize:d,checkboxSize:f,hasOwnLabel:i,model:n,actualValue:c,handleChange:g,onClickRoot:_}},kr=$({name:"ElCheckbox"}),Br=$({...kr,props:Nt,emits:Dt,setup(e){const t=e,a=Tt(),{inputId:n,isLabeledByFormItem:s,isChecked:r,isDisabled:u,isFocused:l,checkboxSize:d,hasOwnLabel:f,model:i,actualValue:c,handleChange:v,onClickRoot:h}=Ft(t,a),o=Y("checkbox"),g=T(()=>[o.b(),o.m(d.value),o.is("disabled",u.value),o.is("bordered",t.border),o.is("checked",r.value)]),_=T(()=>[o.e("input"),o.is("disabled",u.value),o.is("checked",r.value),o.is("indeterminate",t.indeterminate),o.is("focus",l.value)]);return(b,y)=>(O(),K($e(!m(f)&&m(s)?"span":"label"),{class:E(m(g)),"aria-controls":b.indeterminate?b.ariaControls:null,onClick:m(h)},{default:ue(()=>{var L,w,p,C;return[q("span",{class:E(m(_))},[b.trueValue||b.falseValue||b.trueLabel||b.falseLabel?W((O(),P("input",{key:0,id:m(n),"onUpdate:modelValue":A=>ae(i)?i.value=A:null,class:E(m(o).e("original")),type:"checkbox",indeterminate:b.indeterminate,name:b.name,tabindex:b.tabindex,disabled:m(u),"true-value":(w=(L=b.trueValue)!=null?L:b.trueLabel)!=null?w:!0,"false-value":(C=(p=b.falseValue)!=null?p:b.falseLabel)!=null?C:!1,onChange:m(v),onFocus:A=>l.value=!0,onBlur:A=>l.value=!1,onClick:ne(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[re,m(i)]]):W((O(),P("input",{key:1,id:m(n),"onUpdate:modelValue":A=>ae(i)?i.value=A:null,class:E(m(o).e("original")),type:"checkbox",indeterminate:b.indeterminate,disabled:m(u),value:m(c),name:b.name,tabindex:b.tabindex,onChange:m(v),onFocus:A=>l.value=!0,onBlur:A=>l.value=!1,onClick:ne(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","disabled","value","name","tabindex","onChange","onFocus","onBlur","onClick"])),[[re,m(i)]]),q("span",{class:E(m(o).e("inner"))},null,2)],2),m(f)?(O(),P("span",{key:0,class:E(m(o).e("label"))},[ce(b.$slots,"default"),b.$slots.default?te("v-if",!0):(O(),P(bt,{key:0},[Ct(xt(b.label),1)],64))],2)):te("v-if",!0)]}),_:3},8,["class","aria-controls","onClick"]))}});var zr=U(Br,[["__file","checkbox.vue"]]);const Rr=$({name:"ElCheckboxButton"}),Ir=$({...Rr,props:Nt,emits:Dt,setup(e){const t=e,a=Tt(),{isFocused:n,isChecked:s,isDisabled:r,checkboxButtonSize:u,model:l,actualValue:d,handleChange:f}=Ft(t,a),i=N(G,void 0),c=Y("checkbox"),v=T(()=>{var o,g,_,b;const y=(g=(o=i==null?void 0:i.fill)==null?void 0:o.value)!=null?g:"";return{backgroundColor:y,borderColor:y,color:(b=(_=i==null?void 0:i.textColor)==null?void 0:_.value)!=null?b:"",boxShadow:y?`-1px 0 0 0 ${y}`:void 0}}),h=T(()=>[c.b("button"),c.bm("button",u.value),c.is("disabled",r.value),c.is("checked",s.value),c.is("focus",n.value)]);return(o,g)=>{var _,b,y,L;return O(),P("label",{class:E(m(h))},[o.trueValue||o.falseValue||o.trueLabel||o.falseLabel?W((O(),P("input",{key:0,"onUpdate:modelValue":w=>ae(l)?l.value=w:null,class:E(m(c).be("button","original")),type:"checkbox",name:o.name,tabindex:o.tabindex,disabled:m(r),"true-value":(b=(_=o.trueValue)!=null?_:o.trueLabel)!=null?b:!0,"false-value":(L=(y=o.falseValue)!=null?y:o.falseLabel)!=null?L:!1,onChange:m(f),onFocus:w=>n.value=!0,onBlur:w=>n.value=!1,onClick:ne(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[re,m(l)]]):W((O(),P("input",{key:1,"onUpdate:modelValue":w=>ae(l)?l.value=w:null,class:E(m(c).be("button","original")),type:"checkbox",name:o.name,tabindex:o.tabindex,disabled:m(r),value:m(d),onChange:m(f),onFocus:w=>n.value=!0,onBlur:w=>n.value=!1,onClick:ne(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","value","onChange","onFocus","onBlur","onClick"])),[[re,m(l)]]),o.$slots.default||o.label?(O(),P("span",{key:2,class:E(m(c).be("button","inner")),style:Q(m(s)?m(v):void 0)},[ce(o.$slots,"default",{},()=>[Ct(xt(o.label),1)])],6)):te("v-if",!0)],2)}}});var Vt=U(Ir,[["__file","checkbox-button.vue"]]);const Mr=ie({modelValue:{type:pt(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:yt,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0},...Pe(["ariaLabel"])}),Nr={[fe]:e=>F(e),change:e=>F(e)},Dr=$({name:"ElCheckboxGroup"}),Fr=$({...Dr,props:Mr,emits:Nr,setup(e,{emit:t}){const a=e,n=Y("checkbox"),{formItem:s}=ke(),{inputId:r,isLabeledByFormItem:u}=St(a,{formItemContext:s}),l=async f=>{t(fe,f),await ee(),t("change",f)},d=T({get(){return a.modelValue},set(f){l(f)}});return mt(G,{...da(va(a),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:d,changeEvent:l}),Z(()=>a.modelValue,()=>{a.validateEvent&&(s==null||s.validate("change").catch(f=>_t()))}),(f,i)=>{var c;return O(),K($e(f.tag),{id:m(r),class:E(m(n).b("group")),role:"group","aria-label":m(u)?void 0:f.ariaLabel||"checkbox-group","aria-labelledby":m(u)?(c=m(s))==null?void 0:c.labelId:void 0},{default:ue(()=>[ce(f.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var Ut=U(Fr,[["__file","checkbox-group.vue"]]);const Xr=ht(zr,{CheckboxButton:Vt,CheckboxGroup:Ut});At(Vt);const Jr=At(Ut),B=new Map;if(vt){let e;document.addEventListener("mousedown",t=>e=t),document.addEventListener("mouseup",t=>{if(e){for(const a of B.values())for(const{documentHandler:n}of a)n(t,e);e=void 0}})}function it(e,t){let a=[];return F(t.arg)?a=t.arg:ba(t.arg)&&a.push(t.arg),function(n,s){const r=t.instance.popperRef,u=n.target,l=s==null?void 0:s.target,d=!t||!t.instance,f=!u||!l,i=e.contains(u)||e.contains(l),c=e===u,v=a.length&&a.some(o=>o==null?void 0:o.contains(u))||a.length&&a.includes(l),h=r&&(r.contains(u)||r.contains(l));d||f||i||c||v||h||t.value(n,s)}}const Qr={beforeMount(e,t){B.has(e)||B.set(e,[]),B.get(e).push({documentHandler:it(e,t),bindingFn:t.value})},updated(e,t){B.has(e)||B.set(e,[]);const a=B.get(e),n=a.findIndex(r=>r.bindingFn===t.oldValue),s={documentHandler:it(e,t),bindingFn:t.value};n>=0?a.splice(n,1,s):a.push(s)},unmounted(e){B.delete(e)}};export{Qr as C,Xr as E,k as S,Hr as a,Te as b,Gr as c,Pt as d,Ur as e,jr as f,rn as g,Kr as h,Et as i,Wr as j,Bt as k,qr as l,vr as m,Yr as n,gn as o,hn as p,xn as q,z as r,bn as s,je as t,Ka as u,Je as v,Jr as w};
