import{ah as _l,aC as ye,i,as as Q,c0 as xl,ar as J,O as U,at as Ee,c3 as et,a1 as Se,d as oe,J as ae,bi as al,u as Ie,e as se,au as Te,aN as lt,av as z,Q as ne,aO as $e,o as m,c as I,T,a as E,t as B,R as d,a0 as L,r as V,f as ke,aL as H,X as k,n as he,H as tt,c4 as nt,c5 as at,K as st,bj as ot,c6 as it,ao as P,c7 as ut,M as rt,L as me,c8 as Ze,a4 as dt,ay as ct,B as pt,aJ as ft,y as te,bP as vt,aw as mt,bX as bt,U as q,c9 as ht,D as sl,a3 as gt,z as yt,A as St,aV as be,ca as Ct,bm as _e,c2 as Ot,V as wt,cb as It,cc as Vt,C as Et,ap as Tt,s as $t,aM as ol,p as K,az as kt,b as A,w as D,F as xe,g as el,h as ll,q as W,S as le,cd as Rt,bo as Ve,ce as Mt,cf as Dt,a6 as Lt,aT as il}from"./index-BKUr9z90.js";import{l as Bt,m as ge,n as Nt,C as Wt}from"./el-scrollbar-wc6zeUBX.js";import{t as tl,E as zt}from"./index-BXyvWqJ3.js";function Ft(e,u,a,b){e.length;for(var s=a+1;s--;)if(u(e[s],s,e))return s;return-1}function F(){if(!arguments.length)return[];var e=arguments[0];return _l(e)?e:[e]}function Pt(e,u,a){var b=e==null?0:e.length;if(!b)return-1;var s=b-1;return Ft(e,Bt(u),s)}const ul=Symbol("ElSelectGroup"),Ce=Symbol("ElSelect");function Kt(e,u){const a=ye(Ce),b=ye(ul,{disabled:!1}),s=i(()=>h(F(a.props.modelValue),e.value)),O=i(()=>{var c;if(a.props.multiple){const f=F((c=a.props.modelValue)!=null?c:[]);return!s.value&&f.length>=a.props.multipleLimit&&a.props.multipleLimit>0}else return!1}),t=i(()=>e.label||(Q(e.value)?"":e.value)),v=i(()=>e.value||e.label||""),p=i(()=>e.disabled||u.groupDisabled||O.value),g=Ee(),h=(c=[],f)=>{if(Q(e.value)){const r=a.props.valueKey;return c&&c.some($=>xl(J($,r))===J(f,r))}else return c&&c.includes(f)},y=()=>{!e.disabled&&!b.disabled&&(a.states.hoveringIndex=a.optionsArray.indexOf(g.proxy))},C=c=>{const f=new RegExp(et(c),"i");u.visible=f.test(t.value)||e.created};return U(()=>t.value,()=>{!e.created&&!a.props.remote&&a.setSelected()}),U(()=>e.value,(c,f)=>{const{remote:r,valueKey:$}=a.props;if(c!==f&&(a.onOptionDestroy(f,g.proxy),a.onOptionCreate(g.proxy)),!e.created&&!r){if($&&Q(c)&&Q(f)&&c[$]===f[$])return;a.setSelected()}}),U(()=>b.disabled,()=>{u.groupDisabled=b.disabled},{immediate:!0}),{select:a,currentLabel:t,currentValue:v,itemSelected:s,isDisabled:p,hoverItem:y,updateOption:C}}const At=oe({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:Boolean},setup(e){const u=ae("select"),a=al(),b=i(()=>[u.be("dropdown","item"),u.is("disabled",Ie(v)),u.is("selected",Ie(t)),u.is("hovering",Ie(C))]),s=se({index:-1,groupDisabled:!1,visible:!0,hover:!1}),{currentLabel:O,itemSelected:t,isDisabled:v,select:p,hoverItem:g,updateOption:h}=Kt(e,s),{visible:y,hover:C}=Te(s),c=Ee().proxy;p.onOptionCreate(c),lt(()=>{const r=c.value,{selected:$}=p.states,G=$.some(ie=>ie.value===c.value);z(()=>{p.states.cachedOptions.get(r)===c&&!G&&p.states.cachedOptions.delete(r)}),p.onOptionDestroy(r,c)});function f(){v.value||p.handleOptionSelect(c)}return{ns:u,id:a,containerKls:b,currentLabel:O,itemSelected:t,isDisabled:v,select:p,hoverItem:g,updateOption:h,visible:y,hover:C,selectOptionClick:f,states:s}}});function Ht(e,u,a,b,s,O){return ne((m(),I("li",{id:e.id,class:d(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMousemove:e.hoverItem,onClick:L(e.selectOptionClick,["stop"])},[T(e.$slots,"default",{},()=>[E("span",null,B(e.currentLabel),1)])],42,["id","aria-disabled","aria-selected","onMousemove","onClick"])),[[$e,e.visible]])}var Re=Se(At,[["render",Ht],["__file","option.vue"]]);const Ut=oe({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=ye(Ce),u=ae("select"),a=i(()=>e.props.popperClass),b=i(()=>e.props.multiple),s=i(()=>e.props.fitInputWidth),O=V("");function t(){var v;O.value=`${(v=e.selectRef)==null?void 0:v.offsetWidth}px`}return ke(()=>{t(),H(e.selectRef,t)}),{ns:u,minWidth:O,popperClass:a,isMultiple:b,isFitInputWidth:s}}});function Gt(e,u,a,b,s,O){return m(),I("div",{class:d([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:he({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[e.$slots.header?(m(),I("div",{key:0,class:d(e.ns.be("dropdown","header"))},[T(e.$slots,"header")],2)):k("v-if",!0),T(e.$slots,"default"),e.$slots.footer?(m(),I("div",{key:1,class:d(e.ns.be("dropdown","footer"))},[T(e.$slots,"footer")],2)):k("v-if",!0)],6)}var jt=Se(Ut,[["render",Gt],["__file","select-dropdown.vue"]]);const qt=11,Qt=(e,u)=>{const{t:a}=tt(),b=al(),s=ae("select"),O=ae("input"),t=se({inputValue:"",options:new Map,cachedOptions:new Map,optionValues:[],selected:[],selectionWidth:0,calculatorWidth:0,collapseItemWidth:0,selectedLabel:"",hoveringIndex:-1,previousQuery:null,inputHovering:!1,menuVisibleOnFocus:!1,isBeforeHide:!1}),v=V(null),p=V(null),g=V(null),h=V(null),y=V(null),C=V(null),c=V(null),f=V(null),r=V(null),$=V(null),G=V(null),ie=V(null),{isComposing:Me,handleCompositionStart:dl,handleCompositionUpdate:cl,handleCompositionEnd:pl}=nt({afterComposition:l=>Ge(l)}),{wrapperRef:De,isFocused:Le,handleBlur:fl}=at(y,{beforeFocus(){return Z.value},afterFocus(){e.automaticDropdown&&!S.value&&(S.value=!0,t.menuVisibleOnFocus=!0)},beforeBlur(l){var n,o;return((n=g.value)==null?void 0:n.isFocusInsideContent(l))||((o=h.value)==null?void 0:o.isFocusInsideContent(l))},afterBlur(){S.value=!1,t.menuVisibleOnFocus=!1}}),S=V(!1),X=V(),{form:ue,formItem:Y}=st(),{inputId:vl}=ot(e,{formItemContext:Y}),{valueOnClear:ml,isEmptyValue:bl}=it(e),Z=i(()=>e.disabled||(ue==null?void 0:ue.disabled)),Oe=i(()=>P(e.modelValue)?e.modelValue.length>0:!bl(e.modelValue)),hl=i(()=>{var l;return(l=ue==null?void 0:ue.statusIcon)!=null?l:!1}),gl=i(()=>e.clearable&&!Z.value&&t.inputHovering&&Oe.value),Be=i(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),yl=i(()=>s.is("reverse",Be.value&&S.value)),Ne=i(()=>(Y==null?void 0:Y.validateState)||""),Sl=i(()=>ut[Ne.value]),Cl=i(()=>e.remote?300:0),We=i(()=>e.loading?e.loadingText||a("el.select.loading"):e.remote&&!t.inputValue&&t.options.size===0?!1:e.filterable&&t.inputValue&&t.options.size>0&&_.value===0?e.noMatchText||a("el.select.noMatch"):t.options.size===0?e.noDataText||a("el.select.noData"):null),_=i(()=>R.value.filter(l=>l.visible).length),R=i(()=>{const l=Array.from(t.options.values()),n=[];return t.optionValues.forEach(o=>{const w=l.findIndex(M=>M.value===o);w>-1&&n.push(l[w])}),n.length>=l.length?n:l}),Ol=i(()=>Array.from(t.cachedOptions.values())),wl=i(()=>{const l=R.value.filter(n=>!n.created).some(n=>n.currentLabel===t.inputValue);return e.filterable&&e.allowCreate&&t.inputValue!==""&&!l}),ze=()=>{e.filterable&&te(e.filterMethod)||e.filterable&&e.remote&&te(e.remoteMethod)||R.value.forEach(l=>{var n;(n=l.updateOption)==null||n.call(l,t.inputValue)})},Fe=rt(),Il=i(()=>["small"].includes(Fe.value)?"small":"default"),Vl=i({get(){return S.value&&We.value!==!1},set(l){S.value=l}}),El=i(()=>{if(e.multiple&&!me(e.modelValue))return F(e.modelValue).length===0&&!t.inputValue;const l=P(e.modelValue)?e.modelValue[0]:e.modelValue;return e.filterable||me(l)?!t.inputValue:!0}),Tl=i(()=>{var l;const n=(l=e.placeholder)!=null?l:a("el.select.placeholder");return e.multiple||!Oe.value?n:t.selectedLabel}),$l=i(()=>Ze?null:"mouseenter");U(()=>e.modelValue,(l,n)=>{e.multiple&&e.filterable&&!e.reserveKeyword&&(t.inputValue="",re("")),de(),!ge(l,n)&&e.validateEvent&&(Y==null||Y.validate("change").catch(o=>dt()))},{flush:"post",deep:!0}),U(()=>S.value,l=>{l?re(t.inputValue):(t.inputValue="",t.previousQuery=null,t.isBeforeHide=!0),u("visible-change",l)}),U(()=>t.options.entries(),()=>{ct&&(de(),e.defaultFirstOption&&(e.filterable||e.remote)&&_.value&&Pe())},{flush:"post"}),U(()=>t.hoveringIndex,l=>{pt(l)&&l>-1?X.value=R.value[l]||{}:X.value={},R.value.forEach(n=>{n.hover=X.value===n})}),ft(()=>{t.isBeforeHide||ze()});const re=l=>{t.previousQuery===l||Me.value||(t.previousQuery=l,e.filterable&&te(e.filterMethod)?e.filterMethod(l):e.filterable&&e.remote&&te(e.remoteMethod)&&e.remoteMethod(l),e.defaultFirstOption&&(e.filterable||e.remote)&&_.value?z(Pe):z(kl))},Pe=()=>{const l=R.value.filter(M=>M.visible&&!M.disabled&&!M.states.groupDisabled),n=l.find(M=>M.created),o=l[0],w=R.value.map(M=>M.value);t.hoveringIndex=Je(w,n||o)},de=()=>{if(e.multiple)t.selectedLabel="";else{const n=P(e.modelValue)?e.modelValue[0]:e.modelValue,o=Ke(n);t.selectedLabel=o.currentLabel,t.selected=[o];return}const l=[];me(e.modelValue)||F(e.modelValue).forEach(n=>{l.push(Ke(n))}),t.selected=l},Ke=l=>{let n;const o=vt(l);for(let j=t.cachedOptions.size-1;j>=0;j--){const N=Ol.value[j];if(o?J(N.value,e.valueKey)===J(l,e.valueKey):N.value===l){n={value:l,currentLabel:N.currentLabel,get isDisabled(){return N.isDisabled}};break}}if(n)return n;const w=o?l.label:l??"";return{value:l,currentLabel:w}},kl=()=>{t.hoveringIndex=R.value.findIndex(l=>t.selected.some(n=>fe(n)===fe(l)))},Rl=()=>{t.selectionWidth=p.value.getBoundingClientRect().width},Ae=()=>{t.calculatorWidth=C.value.getBoundingClientRect().width},Ml=()=>{t.collapseItemWidth=G.value.getBoundingClientRect().width},we=()=>{var l,n;(n=(l=g.value)==null?void 0:l.updatePopper)==null||n.call(l)},He=()=>{var l,n;(n=(l=h.value)==null?void 0:l.updatePopper)==null||n.call(l)},Ue=()=>{t.inputValue.length>0&&!S.value&&(S.value=!0),re(t.inputValue)},Ge=l=>{if(t.inputValue=l.target.value,e.remote)je();else return Ue()},je=mt(()=>{Ue()},Cl.value),x=l=>{ge(e.modelValue,l)||u(sl,l)},Dl=l=>Pt(l,n=>{const o=t.cachedOptions.get(n);return o&&!o.disabled&&!o.states.groupDisabled}),Ll=l=>{if(e.multiple&&l.code!==bt.delete&&l.target.value.length<=0){const n=F(e.modelValue).slice(),o=Dl(n);if(o<0)return;const w=n[o];n.splice(o,1),u(q,n),x(n),u("remove-tag",w)}},Bl=(l,n)=>{const o=t.selected.indexOf(n);if(o>-1&&!Z.value){const w=F(e.modelValue).slice();w.splice(o,1),u(q,w),x(w),u("remove-tag",n.value)}l.stopPropagation(),pe()},qe=l=>{l.stopPropagation();const n=e.multiple?[]:ml.value;if(e.multiple)for(const o of t.selected)o.isDisabled&&n.push(o.value);u(q,n),x(n),t.hoveringIndex=-1,S.value=!1,u("clear"),pe()},Qe=l=>{var n;if(e.multiple){const o=F((n=e.modelValue)!=null?n:[]).slice(),w=Je(o,l);w>-1?o.splice(w,1):(e.multipleLimit<=0||o.length<e.multipleLimit)&&o.push(l.value),u(q,o),x(o),l.created&&re(""),e.filterable&&!e.reserveKeyword&&(t.inputValue="")}else u(q,l.value),x(l.value),S.value=!1;pe(),!S.value&&z(()=>{ce(l)})},Je=(l=[],n)=>me(n)?-1:Q(n.value)?l.findIndex(o=>ge(J(o,e.valueKey),fe(n))):l.indexOf(n.value),ce=l=>{var n,o,w,M,j;const N=P(l)?l[0]:l;let ve=null;if(N!=null&&N.value){const ee=R.value.filter(Zl=>Zl.value===N.value);ee.length>0&&(ve=ee[0].$el)}if(g.value&&ve){const ee=(M=(w=(o=(n=g.value)==null?void 0:n.popperRef)==null?void 0:o.contentRef)==null?void 0:w.querySelector)==null?void 0:M.call(w,`.${s.be("dropdown","wrap")}`);ee&&ht(ee,ve)}(j=ie.value)==null||j.handleScroll()},Nl=l=>{t.options.set(l.value,l),t.cachedOptions.set(l.value,l)},Wl=(l,n)=>{t.options.get(l)===n&&t.options.delete(l)},zl=i(()=>{var l,n;return(n=(l=g.value)==null?void 0:l.popperRef)==null?void 0:n.contentRef}),Fl=()=>{t.isBeforeHide=!1,z(()=>ce(t.selected))},pe=()=>{var l;(l=y.value)==null||l.focus()},Pl=()=>{var l;if(S.value){S.value=!1,z(()=>{var n;return(n=y.value)==null?void 0:n.blur()});return}(l=y.value)==null||l.blur()},Kl=l=>{qe(l)},Al=l=>{if(S.value=!1,Le.value){const n=new FocusEvent("focus",l);z(()=>fl(n))}},Hl=()=>{t.inputValue.length>0?t.inputValue="":S.value=!1},Xe=()=>{Z.value||(Ze&&(t.inputHovering=!0),t.menuVisibleOnFocus?t.menuVisibleOnFocus=!1:S.value=!S.value)},Ul=()=>{if(!S.value)Xe();else{const l=R.value[t.hoveringIndex];l&&!l.isDisabled&&Qe(l)}},fe=l=>Q(l.value)?J(l.value,e.valueKey):l.value,Gl=i(()=>R.value.filter(l=>l.visible).every(l=>l.isDisabled)),jl=i(()=>e.multiple?e.collapseTags?t.selected.slice(0,e.maxCollapseTags):t.selected:[]),ql=i(()=>e.multiple?e.collapseTags?t.selected.slice(e.maxCollapseTags):[]:[]),Ye=l=>{if(!S.value){S.value=!0;return}if(!(t.options.size===0||_.value===0||Me.value)&&!Gl.value){l==="next"?(t.hoveringIndex++,t.hoveringIndex===t.options.size&&(t.hoveringIndex=0)):l==="prev"&&(t.hoveringIndex--,t.hoveringIndex<0&&(t.hoveringIndex=t.options.size-1));const n=R.value[t.hoveringIndex];(n.isDisabled||!n.visible)&&Ye(l),z(()=>ce(X.value))}},Ql=()=>{if(!p.value)return 0;const l=window.getComputedStyle(p.value);return Number.parseFloat(l.gap||"6px")},Jl=i(()=>{const l=Ql();return{maxWidth:`${G.value&&e.maxCollapseTags===1?t.selectionWidth-t.collapseItemWidth-l:t.selectionWidth}px`}}),Xl=i(()=>({maxWidth:`${t.selectionWidth}px`})),Yl=i(()=>({width:`${Math.max(t.calculatorWidth,qt)}px`}));return H(p,Rl),H(C,Ae),H(r,we),H(De,we),H($,He),H(G,Ml),ke(()=>{de()}),{inputId:vl,contentId:b,nsSelect:s,nsInput:O,states:t,isFocused:Le,expanded:S,optionsArray:R,hoverOption:X,selectSize:Fe,filteredOptionsCount:_,resetCalculatorWidth:Ae,updateTooltip:we,updateTagTooltip:He,debouncedOnInputChange:je,onInput:Ge,deletePrevTag:Ll,deleteTag:Bl,deleteSelected:qe,handleOptionSelect:Qe,scrollToOption:ce,hasModelValue:Oe,shouldShowPlaceholder:El,currentPlaceholder:Tl,mouseEnterEventName:$l,needStatusIcon:hl,showClose:gl,iconComponent:Be,iconReverse:yl,validateState:Ne,validateIcon:Sl,showNewOption:wl,updateOptions:ze,collapseTagSize:Il,setSelected:de,selectDisabled:Z,emptyText:We,handleCompositionStart:dl,handleCompositionUpdate:cl,handleCompositionEnd:pl,onOptionCreate:Nl,onOptionDestroy:Wl,handleMenuEnter:Fl,focus:pe,blur:Pl,handleClearClick:Kl,handleClickOutside:Al,handleEsc:Hl,toggleMenu:Xe,selectOption:Ul,getValueKey:fe,navigateOptions:Ye,dropdownMenuVisible:Vl,showTagList:jl,collapseTagList:ql,tagStyle:Jl,collapseTagStyle:Xl,inputStyle:Yl,popperRef:zl,inputRef:y,tooltipRef:g,tagTooltipRef:h,calculatorRef:C,prefixRef:c,suffixRef:f,selectRef:v,wrapperRef:De,selectionRef:p,scrollbarRef:ie,menuRef:r,tagMenuRef:$,collapseItemRef:G}};var Jt=oe({name:"ElOptions",setup(e,{slots:u}){const a=ye(Ce);let b=[];return()=>{var s,O;const t=(s=u.default)==null?void 0:s.call(u),v=[];function p(g){P(g)&&g.forEach(h=>{var y,C,c,f;const r=(y=(h==null?void 0:h.type)||{})==null?void 0:y.name;r==="ElOptionGroup"?p(!gt(h.children)&&!P(h.children)&&te((C=h.children)==null?void 0:C.default)?(c=h.children)==null?void 0:c.default():h.children):r==="ElOption"?v.push((f=h.props)==null?void 0:f.value):P(h.children)&&p(h.children)})}return t.length&&p((O=t[0])==null?void 0:O.children),ge(v,b)||(b=v,a&&(a.states.optionValues=v)),t}}});const Xt=yt({name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:St,effect:{type:be(String),default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:be(Object),default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:Ct.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:_e,default:Ot},fitInputWidth:Boolean,suffixIcon:{type:_e,default:wt},tagType:{...tl.type,default:"info"},tagEffect:{...tl.effect,default:"light"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,showArrow:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:be(String),values:It,default:"bottom-start"},fallbackPlacements:{type:be(Array),default:["bottom-start","top-start","right","left"]},tabindex:{type:[String,Number],default:0},appendTo:String,...Vt,...Et(["ariaLabel"])}),nl="ElSelect",Yt=oe({name:nl,componentName:nl,components:{ElSelectMenu:jt,ElOption:Re,ElOptions:Jt,ElTag:zt,ElScrollbar:Nt,ElTooltip:Tt,ElIcon:$t},directives:{ClickOutside:Wt},props:Xt,emits:[q,sl,"remove-tag","clear","visible-change","focus","blur"],setup(e,{emit:u}){const a=i(()=>{const{modelValue:t,multiple:v}=e,p=v?[]:void 0;return P(t)?v?t:p:v?p:t}),b=se({...Te(e),modelValue:a}),s=Qt(b,u);ol(Ce,se({props:b,states:s.states,optionsArray:s.optionsArray,handleOptionSelect:s.handleOptionSelect,onOptionCreate:s.onOptionCreate,onOptionDestroy:s.onOptionDestroy,selectRef:s.selectRef,setSelected:s.setSelected}));const O=i(()=>e.multiple?s.states.selected.map(t=>t.currentLabel):s.states.selectedLabel);return{...s,modelValue:a,selectedLabel:O}}});function Zt(e,u,a,b,s,O){const t=K("el-tag"),v=K("el-tooltip"),p=K("el-icon"),g=K("el-option"),h=K("el-options"),y=K("el-scrollbar"),C=K("el-select-menu"),c=kt("click-outside");return ne((m(),I("div",{ref:"selectRef",class:d([e.nsSelect.b(),e.nsSelect.m(e.selectSize)]),[Mt(e.mouseEnterEventName)]:f=>e.states.inputHovering=!0,onMouseleave:f=>e.states.inputHovering=!1},[A(v,{ref:"tooltipRef",visible:e.dropdownMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":e.fallbackPlacements,effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,"append-to":e.appendTo,"show-arrow":e.showArrow,offset:e.offset,onBeforeShow:e.handleMenuEnter,onHide:f=>e.states.isBeforeHide=!1},{default:D(()=>{var f;return[E("div",{ref:"wrapperRef",class:d([e.nsSelect.e("wrapper"),e.nsSelect.is("focused",e.isFocused),e.nsSelect.is("hovering",e.states.inputHovering),e.nsSelect.is("filterable",e.filterable),e.nsSelect.is("disabled",e.selectDisabled)]),onClick:L(e.toggleMenu,["prevent"])},[e.$slots.prefix?(m(),I("div",{key:0,ref:"prefixRef",class:d(e.nsSelect.e("prefix"))},[T(e.$slots,"prefix")],2)):k("v-if",!0),E("div",{ref:"selectionRef",class:d([e.nsSelect.e("selection"),e.nsSelect.is("near",e.multiple&&!e.$slots.prefix&&!!e.states.selected.length)])},[e.multiple?T(e.$slots,"tag",{key:0},()=>[(m(!0),I(xe,null,el(e.showTagList,r=>(m(),I("div",{key:e.getValueKey(r),class:d(e.nsSelect.e("selected-item"))},[A(t,{closable:!e.selectDisabled&&!r.isDisabled,size:e.collapseTagSize,type:e.tagType,effect:e.tagEffect,"disable-transitions":"",style:he(e.tagStyle),onClose:$=>e.deleteTag($,r)},{default:D(()=>[E("span",{class:d(e.nsSelect.e("tags-text"))},[T(e.$slots,"label",{label:r.currentLabel,value:r.value},()=>[ll(B(r.currentLabel),1)])],2)]),_:2},1032,["closable","size","type","effect","style","onClose"])],2))),128)),e.collapseTags&&e.states.selected.length>e.maxCollapseTags?(m(),W(v,{key:0,ref:"tagTooltipRef",disabled:e.dropdownMenuVisible||!e.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:D(()=>[E("div",{ref:"collapseItemRef",class:d(e.nsSelect.e("selected-item"))},[A(t,{closable:!1,size:e.collapseTagSize,type:e.tagType,effect:e.tagEffect,"disable-transitions":"",style:he(e.collapseTagStyle)},{default:D(()=>[E("span",{class:d(e.nsSelect.e("tags-text"))}," + "+B(e.states.selected.length-e.maxCollapseTags),3)]),_:1},8,["size","type","effect","style"])],2)]),content:D(()=>[E("div",{ref:"tagMenuRef",class:d(e.nsSelect.e("selection"))},[(m(!0),I(xe,null,el(e.collapseTagList,r=>(m(),I("div",{key:e.getValueKey(r),class:d(e.nsSelect.e("selected-item"))},[A(t,{class:"in-tooltip",closable:!e.selectDisabled&&!r.isDisabled,size:e.collapseTagSize,type:e.tagType,effect:e.tagEffect,"disable-transitions":"",onClose:$=>e.deleteTag($,r)},{default:D(()=>[E("span",{class:d(e.nsSelect.e("tags-text"))},[T(e.$slots,"label",{label:r.currentLabel,value:r.value},()=>[ll(B(r.currentLabel),1)])],2)]),_:2},1032,["closable","size","type","effect","onClose"])],2))),128))],2)]),_:3},8,["disabled","effect","teleported"])):k("v-if",!0)]):k("v-if",!0),E("div",{class:d([e.nsSelect.e("selected-item"),e.nsSelect.e("input-wrapper"),e.nsSelect.is("hidden",!e.filterable)])},[ne(E("input",{id:e.inputId,ref:"inputRef","onUpdate:modelValue":r=>e.states.inputValue=r,type:"text",name:e.name,class:d([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:he(e.inputStyle),tabindex:e.tabindex,role:"combobox",readonly:!e.filterable,spellcheck:"false","aria-activedescendant":((f=e.hoverOption)==null?void 0:f.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropdownMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onKeydown:[le(L(r=>e.navigateOptions("next"),["stop","prevent"]),["down"]),le(L(r=>e.navigateOptions("prev"),["stop","prevent"]),["up"]),le(L(e.handleEsc,["stop","prevent"]),["esc"]),le(L(e.selectOption,["stop","prevent"]),["enter"]),le(L(e.deletePrevTag,["stop"]),["delete"])],onCompositionstart:e.handleCompositionStart,onCompositionupdate:e.handleCompositionUpdate,onCompositionend:e.handleCompositionEnd,onInput:e.onInput,onClick:L(e.toggleMenu,["stop"])},null,46,["id","onUpdate:modelValue","name","disabled","autocomplete","tabindex","readonly","aria-activedescendant","aria-controls","aria-expanded","aria-label","onKeydown","onCompositionstart","onCompositionupdate","onCompositionend","onInput","onClick"]),[[Rt,e.states.inputValue]]),e.filterable?(m(),I("span",{key:0,ref:"calculatorRef","aria-hidden":"true",class:d(e.nsSelect.e("input-calculator")),textContent:B(e.states.inputValue)},null,10,["textContent"])):k("v-if",!0)],2),e.shouldShowPlaceholder?(m(),I("div",{key:1,class:d([e.nsSelect.e("selected-item"),e.nsSelect.e("placeholder"),e.nsSelect.is("transparent",!e.hasModelValue||e.expanded&&!e.states.inputValue)])},[e.hasModelValue?T(e.$slots,"label",{key:0,label:e.currentPlaceholder,value:e.modelValue},()=>[E("span",null,B(e.currentPlaceholder),1)]):(m(),I("span",{key:1},B(e.currentPlaceholder),1))],2)):k("v-if",!0)],2),E("div",{ref:"suffixRef",class:d(e.nsSelect.e("suffix"))},[e.iconComponent&&!e.showClose?(m(),W(p,{key:0,class:d([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:D(()=>[(m(),W(Ve(e.iconComponent)))]),_:1},8,["class"])):k("v-if",!0),e.showClose&&e.clearIcon?(m(),W(p,{key:1,class:d([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.nsSelect.e("clear")]),onClick:e.handleClearClick},{default:D(()=>[(m(),W(Ve(e.clearIcon)))]),_:1},8,["class","onClick"])):k("v-if",!0),e.validateState&&e.validateIcon&&e.needStatusIcon?(m(),W(p,{key:2,class:d([e.nsInput.e("icon"),e.nsInput.e("validateIcon")])},{default:D(()=>[(m(),W(Ve(e.validateIcon)))]),_:1},8,["class"])):k("v-if",!0)],2)],10,["onClick"])]}),content:D(()=>[A(C,{ref:"menuRef"},{default:D(()=>[e.$slots.header?(m(),I("div",{key:0,class:d(e.nsSelect.be("dropdown","header")),onClick:L(()=>{},["stop"])},[T(e.$slots,"header")],10,["onClick"])):k("v-if",!0),ne(A(y,{id:e.contentId,ref:"scrollbarRef",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:d([e.nsSelect.is("empty",e.filteredOptionsCount===0)]),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical"},{default:D(()=>[e.showNewOption?(m(),W(g,{key:0,value:e.states.inputValue,created:!0},null,8,["value"])):k("v-if",!0),A(h,null,{default:D(()=>[T(e.$slots,"default")]),_:3})]),_:3},8,["id","wrap-class","view-class","class","aria-label"]),[[$e,e.states.options.size>0&&!e.loading]]),e.$slots.loading&&e.loading?(m(),I("div",{key:1,class:d(e.nsSelect.be("dropdown","loading"))},[T(e.$slots,"loading")],2)):e.loading||e.filteredOptionsCount===0?(m(),I("div",{key:2,class:d(e.nsSelect.be("dropdown","empty"))},[T(e.$slots,"empty",{},()=>[E("span",null,B(e.emptyText),1)])],2)):k("v-if",!0),e.$slots.footer?(m(),I("div",{key:3,class:d(e.nsSelect.be("dropdown","footer")),onClick:L(()=>{},["stop"])},[T(e.$slots,"footer")],10,["onClick"])):k("v-if",!0)]),_:3},512)]),_:3},8,["visible","placement","teleported","popper-class","popper-options","fallback-placements","effect","transition","persistent","append-to","show-arrow","offset","onBeforeShow","onHide"])],16,["onMouseleave"])),[[c,e.handleClickOutside,e.popperRef]])}var _t=Se(Yt,[["render",Zt],["__file","select.vue"]]);const xt=oe({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const u=ae("select"),a=V(null),b=Ee(),s=V([]);ol(ul,se({...Te(e)}));const O=i(()=>s.value.some(g=>g.visible===!0)),t=g=>{var h,y;return((h=g.type)==null?void 0:h.name)==="ElOption"&&!!((y=g.component)!=null&&y.proxy)},v=g=>{const h=F(g),y=[];return h.forEach(C=>{var c,f;t(C)?y.push(C.component.proxy):(c=C.children)!=null&&c.length?y.push(...v(C.children)):(f=C.component)!=null&&f.subTree&&y.push(...v(C.component.subTree))}),y},p=()=>{s.value=v(b.subTree)};return ke(()=>{p()}),Dt(a,p,{attributes:!0,subtree:!0,childList:!0}),{groupRef:a,visible:O,ns:u}}});function en(e,u,a,b,s,O){return ne((m(),I("ul",{ref:"groupRef",class:d(e.ns.be("group","wrap"))},[E("li",{class:d(e.ns.be("group","title"))},B(e.label),3),E("li",null,[E("ul",{class:d(e.ns.b("group"))},[T(e.$slots,"default")],2)])],2)),[[$e,e.visible]])}var rl=Se(xt,[["render",en],["__file","option-group.vue"]]);const an=Lt(_t,{Option:Re,OptionGroup:rl}),sn=il(Re);il(rl);export{an as E,sn as a,F as c};
