import{d as v,r as n,O as f,f as m,o as r,c as l,a as g,F as x,g as M,t as T,_ as y}from"./index-Clu4bXJZ.js";const S={class:"personalized"},k={class:"box"},z=v({__name:"PersonalizedStatement",setup(B){const u=["机会无限的路，是无限的路创造的机会。你以为梦里的都会实现，连同这沾染着无限机会的路。","让梦想发光，实现与否已经不重要了，重要的是它已经亮起来了"],a=n(""),t=n(""),c=n(180);function d(e,s){return e=Math.ceil(e),s=Math.floor(s),Math.floor(Math.random()*(s-e+1))+e}const i=d(0,1);a.value=u[i];const o=()=>{t.value.length<a.value.length&&(t.value+=a.value[t.value.length],setTimeout(()=>o(),c.value+Math.floor(Math.random()*50)))},_=()=>{t.value="",setTimeout(()=>{o()},c.value*2)};return f(a,e=>{_()},{immediate:!0}),m(()=>{o()}),(e,s)=>(r(),l("div",S,[g("div",k,[(r(!0),l(x,null,M(t.value,(p,h)=>(r(),l("span",{key:h,class:"char"},T(p),1))),128))])]))}}),P=y(z,[["__scopeId","data-v-885262b2"]]);export{P};
