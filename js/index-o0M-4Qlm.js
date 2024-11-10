var Q=Object.defineProperty;var p=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var F=(t,e,s)=>e in t?Q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,P=(t,e)=>{for(var s in e||(e={}))N.call(e,s)&&F(t,s,e[s]);if(p)for(var s of p(e))j.call(e,s)&&F(t,s,e[s]);return t};var A=(t,e)=>{var s={};for(var a in t)N.call(t,a)&&e.indexOf(a)<0&&(s[a]=t[a]);if(t!=null&&p)for(var a of p(t))e.indexOf(a)<0&&j.call(t,a)&&(s[a]=t[a]);return s};import{I as R,m as U}from"./bootstrap-gbaUEZyS.js";import{c as b,_ as W,a as Y,b as aa}from"./TabsList.vue_vue_type_script_setup_true_lang-BW-hZYLV.js";import{_ as ea}from"./analytics-trends.vue_vue_type_script_setup_true_lang-BnvpJxYQ.js";import{_ as ta}from"./analytics-visits.vue_vue_type_script_setup_true_lang-CLCAFfMK.js";import{_ as sa}from"./analytics-visits-data.vue_vue_type_script_setup_true_lang-B08u07Zb.js";import{_ as la}from"./analytics-visits-sales.vue_vue_type_script_setup_true_lang-DmXPgNty.js";import{_ as na}from"./analytics-visits-source.vue_vue_type_script_setup_true_lang-CvA59uNI.js";import{_ as oa,a as ra,b as ia,c as ca,d as h}from"./analysis-chart-card.vue_vue_type_script_setup_true_lang-CR-ZWSzQ.js";import{a3 as f,ad as i,aj as d,ag as V,aZ as ua,a9 as l,aX as J,J as T,ae as v,af as r,ab as da,P as E,bu as z,av as fa,V as ma,a4 as _a,bv as pa,bw as va,aA as g,an as ga,m as n,F as w,aw as y,ap as L,ao as M}from"../jse/index-index-Cu888Fo9.js";import{_ as ba}from"./icon.vue_vue_type_script_setup_true_lang-BRotllwM.js";import"./use-echarts-CImcdv9A.js";const xa=b("svg:download"),$a=b("svg:card"),ha=b("svg:bell"),wa=b("svg:cake"),ya=f({__name:"CardFooter",props:{class:{}},setup(t){const e=t;return(s,a)=>(i(),d("div",{class:ua(l(J)("flex items-center p-6 pt-0",e.class))},[V(s.$slots,"default")],2))}}),Va=f({__name:"TabsTrigger",props:{class:{},value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(t){const e=t,s=T(()=>{const _=e,{class:c}=_;return A(_,["class"])}),a=R(s);return(c,o)=>(i(),v(l(U),da(l(a),{class:l(J)("ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow",e.class)}),{default:r(()=>[V(c.$slots,"default")]),_:3},16,["class"]))}}),D=f({name:"CountToAnimator",__name:"count-to-animator",props:{autoplay:{type:Boolean,default:!0},color:{default:""},decimal:{default:"."},decimals:{default:0},duration:{default:1500},endVal:{default:2021},prefix:{default:""},separator:{default:","},startVal:{default:0},suffix:{default:""},transition:{default:"linear"},useEasing:{type:Boolean,default:!0}},emits:["onStarted","onFinished"],setup(t,{expose:e,emit:s}){const a=t,c=s,o=E(a.startVal),_=E(!1);let k=z(o);const O=T(()=>Z(l(k)));fa(()=>{o.value=a.startVal}),ma([()=>a.startVal,()=>a.endVal],()=>{a.autoplay&&S()}),_a(()=>{a.autoplay&&S()});function S(){B(),o.value=a.endVal}function X(){o.value=a.startVal,B()}function B(){k=z(o,P({disabled:_,duration:a.duration,onFinished:()=>c("onFinished"),onStarted:()=>c("onStarted")},a.useEasing?{transition:pa[a.transition]}:{}))}function Z(u){if(!u&&u!==0)return"";const{decimal:C,decimals:q,prefix:G,separator:x,suffix:H}=a;u=Number(u).toFixed(q),u+="";const $=u.split(".");let m=$[0];const K=$.length>1?C+$[1]:"",I=/(\d+)(\d{3})/;if(x&&!va(x)&&m)for(;I.test(m);)m=m.replace(I,`$1${x}$2`);return G+m+K+H}return e({reset:X}),(u,C)=>(i(),d("span",{style:ga({color:u.color})},g(O.value),5))}}),Ta={class:"card-box w-full px-4 pb-5 pt-3"},ka=f({name:"AnalysisChartsTabs",__name:"analysis-charts-tabs",props:{tabs:{default:()=>[]}},setup(t){const e=t,s=T(()=>{var a,c;return(c=(a=e.tabs)==null?void 0:a[0])==null?void 0:c.value});return(a,c)=>(i(),d("div",Ta,[n(l(Y),{"default-value":s.value},{default:r(()=>[n(l(W),null,{default:r(()=>[(i(!0),d(w,null,y(a.tabs,o=>(i(),v(l(Va),{key:o.label,value:o.value},{default:r(()=>[L(g(o.label),1)]),_:2},1032,["value"]))),128))]),_:1}),(i(!0),d(w,null,y(a.tabs,o=>(i(),v(l(aa),{key:o.label,value:o.value,class:"pt-4"},{default:r(()=>[V(a.$slots,o.value)]),_:2},1032,["value"]))),128))]),_:3},8,["default-value"])]))}}),Sa={class:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"},Ba=f({name:"AnalysisOverview",__name:"analysis-overview",props:{items:{default:()=>[]}},setup(t){return(e,s)=>(i(),d("div",Sa,[(i(!0),d(w,null,y(e.items,a=>(i(),v(l(ca),{key:a.title,title:a.title,class:"w-full"},{default:r(()=>[n(l(oa),null,{default:r(()=>[n(l(ra),{class:"text-xl"},{default:r(()=>[L(g(a.title),1)]),_:2},1024)]),_:2},1024),n(l(ia),{class:"flex items-center justify-between"},{default:r(()=>[n(l(D),{"end-val":a.value,"start-val":1,class:"text-xl",prefix:""},null,8,["end-val"]),n(l(ba),{icon:a.icon,class:"size-8 flex-shrink-0"},null,8,["icon"])]),_:2},1024),n(l(ya),{class:"justify-between"},{default:r(()=>[M("span",null,g(a.totalTitle),1),n(l(D),{"end-val":a.totalValue,"start-val":1,prefix:""},null,8,["end-val"])]),_:2},1024)]),_:2},1032,["title"]))),128))]))}}),Ca={class:"p-5"},Ia={class:"mt-5 w-full md:flex"},Xa=f({__name:"index",setup(t){const e=[{icon:$a,title:"用户量",totalTitle:"总用户量",totalValue:12e4,value:2e3},{icon:wa,title:"访问量",totalTitle:"总访问量",totalValue:5e5,value:2e4},{icon:xa,title:"下载量",totalTitle:"总下载量",totalValue:12e4,value:8e3},{icon:ha,title:"使用量",totalTitle:"总使用量",totalValue:5e4,value:5e3}],s=[{label:"流量趋势",value:"trends"},{label:"月访问量",value:"visits"}];return(a,c)=>(i(),d("div",Ca,[n(l(Ba),{items:e}),n(l(ka),{tabs:s,class:"mt-5"},{trends:r(()=>[n(ea)]),visits:r(()=>[n(ta)]),_:1}),M("div",Ia,[n(l(h),{class:"mt-5 md:mr-4 md:mt-0 md:w-1/3",title:"访问数量"},{default:r(()=>[n(sa)]),_:1}),n(l(h),{class:"mt-5 md:mr-4 md:mt-0 md:w-1/3",title:"访问来源"},{default:r(()=>[n(na)]),_:1}),n(l(h),{class:"mt-5 md:mt-0 md:w-1/3",title:"访问来源"},{default:r(()=>[n(la)]),_:1})])]))}});export{Xa as default};