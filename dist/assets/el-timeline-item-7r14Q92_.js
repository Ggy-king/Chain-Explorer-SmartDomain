import{l as p,m as f,p as b,aW as h,I as r,b as g,b9 as T,c as k,q as o,t as i,z as m,A as a,d as s,J as S,v as d,x as w,ba as E,E as I,G as n,M as u,_ as B,R as C,S as z}from"./index-DE2iefs5.js";const N=p({name:"ElTimeline",setup(c,{slots:l}){const e=f("timeline");return b("timeline",l),()=>h("ul",{class:[e.b()]},[r(l,"default")])}}),$=g({timestamp:{type:String,default:""},hideTimestamp:Boolean,center:Boolean,placement:{type:String,values:["top","bottom"],default:"bottom"},type:{type:String,values:["primary","success","warning","danger","info"],default:""},color:{type:String,default:""},size:{type:String,values:["normal","large"],default:"normal"},icon:{type:T},hollow:Boolean}),P=p({name:"ElTimelineItem"}),D=p({...P,props:$,setup(c){const l=c,e=f("timeline-item"),y=k(()=>[e.e("node"),e.em("node",l.size||""),e.em("node",l.type||""),e.is("hollow",l.hollow)]);return(t,V)=>(o(),i("li",{class:a([s(e).b(),{[s(e).e("center")]:t.center}])},[m("div",{class:a(s(e).e("tail"))},null,2),t.$slots.dot?n("v-if",!0):(o(),i("div",{key:0,class:a(s(y)),style:S({backgroundColor:t.color})},[t.icon?(o(),d(s(I),{key:0,class:a(s(e).e("icon"))},{default:w(()=>[(o(),d(E(t.icon)))]),_:1},8,["class"])):n("v-if",!0)],6)),t.$slots.dot?(o(),i("div",{key:1,class:a(s(e).e("dot"))},[r(t.$slots,"dot")],2)):n("v-if",!0),m("div",{class:a(s(e).e("wrapper"))},[!t.hideTimestamp&&t.placement==="top"?(o(),i("div",{key:0,class:a([s(e).e("timestamp"),s(e).is("top")])},u(t.timestamp),3)):n("v-if",!0),m("div",{class:a(s(e).e("content"))},[r(t.$slots,"default")],2),!t.hideTimestamp&&t.placement==="bottom"?(o(),i("div",{key:1,class:a([s(e).e("timestamp"),s(e).is("bottom")])},u(t.timestamp),3)):n("v-if",!0)],2)],2))}});var v=B(D,[["__file","timeline-item.vue"]]);const A=C(N,{TimelineItem:v}),G=z(v);export{A as E,G as a};
