import{S as B}from"./SimpleBrowse-SAsnGGv9.js";import{P as $}from"./PersonalizedStatement-DlYSGIk9.js";import{d as u,o as m,c as d,a as t,_ as v,r as p,b as o,w as r,F as b,g as x,k as E,u as T,l as D,n as N,t as y,h as V,E as F,m as I}from"./index-COWxLSYW.js";import{E as L}from"./el-progress-BE7WZMhO.js";import{S as f}from"./SideHotCart-TGIX1PSV.js";const P={class:"social-btn"},U={class:"btn bu-one",href:"#"},z={class:"btn bu-two",href:"#"},A={class:"btn bu-three",href:"#"},H={class:"btn bu-four",href:"#"},j=u({__name:"ButtonDecoration",emits:["changeBtn"],setup(_,{emit:c}){const l=c,e=i=>{l("changeBtn",i)};return(i,s)=>(m(),d("div",P,[t("a",U,[t("strong",{class:"fa",onClick:s[0]||(s[0]=a=>e(1))},"最新")]),t("a",z,[t("strong",{class:"fa",onClick:s[1]||(s[1]=a=>e(2))},"最热")]),t("a",A,[t("strong",{class:"fa",onClick:s[2]||(s[2]=a=>e(3))},"精选")]),t("a",H,[t("strong",{class:"fa",onClick:s[3]||(s[3]=a=>e(4))},"小众")])]))}}),q=v(j,[["__scopeId","data-v-a67edd78"]]),G={class:"news"},J={class:"news-head"},K={class:"news-main"},M={class:"news-title"},O={class:"side"},Q=u({__name:"NewsList",setup(_){const c=a=>a===100?"Full":`${a}%`,l=[{content:"Event start",timestamp:"2018-04-15"},{content:"Approved",timestamp:"2018-04-13"},{content:"Success",timestamp:"2018-04-11"},{content:"Success",timestamp:"2018-04-11"},{content:"Success",timestamp:"2018-04-11"},{content:"Success",timestamp:"2018-04-11"},{content:"Success",timestamp:"2018-04-11"},{content:"Success",timestamp:"2018-04-11"}],e=p("#3d5b99"),i=p("最新"),s=a=>{switch(a){case 1:e.value="#3d5b99",i.value="最新";break;case 2:e.value="#dc4c3a",i.value="最热";break;case 3:e.value="#03b0f0",i.value="精选";break;case 4:e.value="#c003ff",i.value="小众";break}};return(a,n)=>{const w=L,g=F,S=I,k=E;return m(),d("div",G,[t("div",J,[o(q,{onChangeBtn:s})]),t("div",K,[n[4]||(n[4]=t("div",{class:"date"},"123456",-1)),o(w,{percentage:100,color:"#f23f58",indeterminate:!0,duration:15,"stroke-width":2,"text-inside":!0,format:c},{default:r(()=>n[0]||(n[0]=[t("span",null,null,-1)])),_:1}),o(k,null,{default:r(()=>[(m(),d(b,null,x(l,(C,h)=>o(S,{key:h,timestamp:C.timestamp,icon:T(D),color:"#000","hide-timestamp":""},{default:r(()=>[t("div",M,[t("i",{style:N({backgroundColor:e.value})},y(i.value),5),n[1]||(n[1]=V("港股上市公司裕兴科技：近期出售约630万枚USDT并购买78.2枚BTC "))]),o(g,{class:"news-main"},{default:r(()=>n[2]||(n[2]=[t("p",null,"港股上市公司裕兴科技发布公告宣布，已于2024年7月25日至2024年12月31日期间在公开市场上进行了一系列交易，包括： ( i)购买约78.2单位比特币，每单位的平均价格为80,960美元，代价总额约630万美元(不包括交易成本) (ii)出售约630万单位USDT，每单位的平均价格为1美元，价值总额约630万美元(不包括交易成本) ，出售事项下出售的USDT均用于转换为比特币购买事项下等值的比特币。",-1)])),_:1}),n[3]||(n[3]=t("div",{class:"news-date"},"Tom committed 2018/4/12 20:46",-1))]),_:2},1032,["timestamp","icon"])),64))]),_:1})]),t("div",O,[o(f,{title:"热门文章"}),o(f,{title:"最火币种"})])])}}}),R=v(Q,[["__scopeId","data-v-cd58ebeb"]]),et=u({name:"NewsView",__name:"index",setup(_){return(c,l)=>(m(),d(b,null,[o(B),o($),o(R)],64))}});export{et as default};
