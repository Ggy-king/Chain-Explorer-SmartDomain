import{J as N,bN as V,d as S,ae as M,L as w,g as $,c as i,j as I,k as r,V as g,U as o,l as a,e as u,z as p,q as b,Q as y,ak as v,W as C,n as h,H as _,bp as P,X as j,Y as q}from"./index-COTIhOnO.js";const F=N({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:V},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),H={close:n=>n instanceof MouseEvent,click:n=>n instanceof MouseEvent},J=S({name:"ElTag"}),K=S({...J,props:F,emits:H,setup(n,{emit:d}){const z=n,B=M(),s=w("tag"),m=$(()=>{const{type:e,hit:l,effect:t,closable:c,round:T}=z;return[s.b(),s.is("closable",c),s.m(e||"primary"),s.m(B.value),s.m(t),s.is("hit",l),s.is("round",T)]}),f=e=>{d("close",e)},k=e=>{d("click",e)},E=e=>{var l,t,c;(c=(t=(l=e==null?void 0:e.component)==null?void 0:l.subTree)==null?void 0:t.component)!=null&&c.bum&&(e.component.subTree.component.bum=null)};return(e,l)=>e.disableTransitions?(i(),I("span",{key:0,class:o(a(m)),style:_({backgroundColor:e.color}),onClick:k},[r("span",{class:o(a(s).e("content"))},[g(e.$slots,"default")],2),e.closable?(i(),u(a(C),{key:0,class:o(a(s).e("close")),onClick:v(f,["stop"])},{default:p(()=>[b(a(y))]),_:1},8,["class","onClick"])):h("v-if",!0)],6)):(i(),u(P,{key:1,name:`${a(s).namespace.value}-zoom-in-center`,appear:"",onVnodeMounted:E},{default:p(()=>[r("span",{class:o(a(m)),style:_({backgroundColor:e.color}),onClick:k},[r("span",{class:o(a(s).e("content"))},[g(e.$slots,"default")],2),e.closable?(i(),u(a(C),{key:0,class:o(a(s).e("close")),onClick:v(f,["stop"])},{default:p(()=>[b(a(y))]),_:1},8,["class","onClick"])):h("v-if",!0)],6)]),_:3},8,["name"]))}});var L=j(K,[["__file","tag.vue"]]);const U=q(L);export{U as E,F as t};