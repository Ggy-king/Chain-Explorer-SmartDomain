import{z as M,bi as w,d as S,M as N,J as V,i as $,o as i,c as I,a as r,T as k,R as o,u as a,q as u,w as p,b as g,bv as v,a0 as y,s as C,X as h,n as _,c8 as P,a1 as q,a6 as F}from"./index-CIMMrLSV.js";const J=M({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:w},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),K={close:n=>n instanceof MouseEvent,click:n=>n instanceof MouseEvent},R=S({name:"ElTag"}),X=S({...R,props:J,emits:K,setup(n,{emit:d}){const T=n,z=N(),s=V("tag"),m=$(()=>{const{type:e,hit:l,effect:t,closable:c,round:E}=T;return[s.b(),s.is("closable",c),s.m(e||"primary"),s.m(z.value),s.m(t),s.is("hit",l),s.is("round",E)]}),f=e=>{d("close",e)},b=e=>{d("click",e)},B=e=>{var l,t,c;(c=(t=(l=e==null?void 0:e.component)==null?void 0:l.subTree)==null?void 0:t.component)!=null&&c.bum&&(e.component.subTree.component.bum=null)};return(e,l)=>e.disableTransitions?(i(),I("span",{key:0,class:o(a(m)),style:_({backgroundColor:e.color}),onClick:b},[r("span",{class:o(a(s).e("content"))},[k(e.$slots,"default")],2),e.closable?(i(),u(a(C),{key:0,class:o(a(s).e("close")),onClick:y(f,["stop"])},{default:p(()=>[g(a(v))]),_:1},8,["class","onClick"])):h("v-if",!0)],6)):(i(),u(P,{key:1,name:`${a(s).namespace.value}-zoom-in-center`,appear:"",onVnodeMounted:B},{default:p(()=>[r("span",{class:o(a(m)),style:_({backgroundColor:e.color}),onClick:b},[r("span",{class:o(a(s).e("content"))},[k(e.$slots,"default")],2),e.closable?(i(),u(a(C),{key:0,class:o(a(s).e("close")),onClick:y(f,["stop"])},{default:p(()=>[g(a(v))]),_:1},8,["class","onClick"])):h("v-if",!0)],6)]),_:3},8,["name"]))}});var j=q(X,[["__file","tag.vue"]]);const D=F(j);export{D as E,J as t};
