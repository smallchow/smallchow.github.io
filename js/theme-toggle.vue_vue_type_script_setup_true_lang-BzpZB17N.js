var L=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var x=(n,t)=>{var e={};for(var o in n)H.call(n,o)&&t.indexOf(o)<0&&(e[o]=n[o]);if(n!=null&&L)for(var o of L(n))t.indexOf(o)<0&&W.call(n,o)&&(e[o]=n[o]);return e};var C=(n,t,e)=>new Promise((o,s)=>{var l=c=>{try{u(e.next(c))}catch(g){s(g)}},r=c=>{try{u(e.throw(c))}catch(g){s(g)}},u=c=>c.done?o(c.value):Promise.resolve(c.value).then(l,r);u((e=e.apply(n,t)).next())});import{a3 as f,ad as d,ae as m,af as i,ag as y,ak as O,al as A,a9 as a,J as v,m as h,ab as b,aX as k,aB as X,R as Y,ay as J,aZ as B,aj as _,ap as S,aA as w,F as T,a$ as G,b0 as N,aw as R,am as U,ai as M,a0 as E,a1 as V,ao as p,q as K}from"../jse/index-index-Cu888Fo9.js";import{h as $,x as D,bR as Z,bS as Q,bT as ee,bU as ae,I as j,bV as te,bW as oe,o as se,bX as ne,bY as le,e as P,bA as q,bG as re,bI as ie,bd as de,be as ce,i as ue,$ as z}from"./bootstrap-gbaUEZyS.js";const pe=$("LanguagesIcon",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);const me=$("MoonStarIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9",key:"4ay0iu"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}]]);const fe=$("SunMoonIcon",[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4",key:"1fu5g2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.9 4.9 1.4 1.4",key:"b9915j"}],["path",{d:"m17.7 17.7 1.4 1.4",key:"qc3ed3"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.3 17.7-1.4 1.4",key:"5gca6"}],["path",{d:"m19.1 4.9-1.4 1.4",key:"wpu9u6"}]]);const he=$("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),ge=f({__name:"DropdownMenu",props:{defaultOpen:{type:Boolean},open:{type:Boolean},dir:{},modal:{type:Boolean,default:!1}},emits:["update:open"],setup(n,{emit:t}){const s=D(n,t);return(l,r)=>(d(),m(a(Z),O(A(a(s))),{default:i(()=>[y(l.$slots,"default")]),_:3},16))}}),ye=f({__name:"DropdownMenuContent",props:{class:{},forceMount:{type:Boolean},loop:{type:Boolean},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","closeAutoFocus"],setup(n,{emit:t}){const e=n,o=t,s=v(()=>{const c=e,{class:r}=c;return x(c,["class"])}),l=D(s,o);return(r,u)=>(d(),m(a(ee),null,{default:i(()=>[h(a(Q),b(a(l),{class:a(k)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 border-border z-[1000] min-w-32 overflow-hidden rounded-md border p-1 shadow-md",e.class)}),{default:i(()=>[y(r.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),_e=f({__name:"DropdownMenuGroup",props:{asChild:{type:Boolean},as:{}},setup(n){const t=n;return(e,o)=>(d(),m(a(ae),O(A(t)),{default:i(()=>[y(e.$slots,"default")]),_:3},16))}}),ve=f({__name:"DropdownMenuItem",props:{class:{},inset:{type:Boolean},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{}},setup(n){const t=n,e=v(()=>{const r=t,{class:s}=r;return x(r,["class"])}),o=j(e);return(s,l)=>(d(),m(a(te),b(a(o),{class:a(k)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s.inset&&"pl-8",t.class)}),{default:i(()=>[y(s.$slots,"default")]),_:3},16,["class"]))}}),ke=f({__name:"DropdownMenuTrigger",props:{disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(n){const e=j(n);return(o,s)=>(d(),m(a(oe),b({class:"outline-none"},a(e)),{default:i(()=>[y(o.$slots,"default")]),_:3},16))}}),be=se("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{defaultVariants:{size:"default",variant:"default"},variants:{size:{default:"h-9 px-3",lg:"h-10 px-3",sm:"h-8 px-2"},variant:{default:"bg-transparent",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"}}}),xe=f({__name:"ToggleGroup",props:{class:{},size:{},variant:{},rovingFocus:{type:Boolean},disabled:{type:Boolean},orientation:{},dir:{},loop:{type:Boolean},asChild:{type:Boolean},as:{},type:{},modelValue:{},defaultValue:{}},emits:["update:modelValue"],setup(n,{emit:t}){const e=n,o=t;X("toggleGroup",{size:e.size,variant:e.variant});const s=v(()=>{const c=e,{class:r}=c;return x(c,["class"])}),l=D(s,o);return(r,u)=>(d(),m(a(ne),b(a(l),{class:a(k)("flex items-center justify-center gap-1",e.class)}),{default:i(()=>[y(r.$slots,"default")]),_:3},16,["class"]))}}),we=f({__name:"ToggleGroupItem",props:{class:{},size:{},variant:{},value:{},defaultValue:{type:Boolean},pressed:{type:Boolean},disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(n){const t=n,e=Y("toggleGroup"),o=v(()=>{const g=t,{class:l,size:r,variant:u}=g;return x(g,["class","size","variant"])}),s=j(o);return(l,r)=>{var u,c;return d(),m(a(le),b(a(s),{class:a(k)(a(be)({variant:((u=a(e))==null?void 0:u.variant)||l.variant,size:((c=a(e))==null?void 0:c.size)||l.size}),t.class)}),{default:i(()=>[y(l.$slots,"default")]),_:3},16,["class"])}}}),Be=f({__name:"icon-button",props:{class:{},disabled:{type:Boolean,default:!1},onClick:{type:Function,default:()=>{}},tooltip:{},tooltipSide:{default:"bottom"},variant:{default:"icon"},as:{},asChild:{type:Boolean},loading:{type:Boolean},size:{}},setup(n){const t=n,e=J(),o=v(()=>!!e.tooltip||!!t.tooltip);return(s,l)=>o.value?(d(),m(a(q),{key:1,side:s.tooltipSide},{trigger:i(()=>[h(P,{class:B(a(k)("rounded-full",t.class)),disabled:s.disabled,variant:s.variant,size:"icon",onClick:s.onClick},{default:i(()=>[y(s.$slots,"default")]),_:3},8,["class","disabled","variant","onClick"])]),default:i(()=>[a(e).tooltip?y(s.$slots,"tooltip",{key:0}):(d(),_(T,{key:1},[S(w(s.tooltip),1)],64))]),_:3},8,["side"])):(d(),m(P,{key:0,class:B(a(k)("rounded-full",t.class)),disabled:s.disabled,variant:s.variant,size:"icon",onClick:s.onClick},{default:i(()=>[y(s.$slots,"default")]),_:3},8,["class","disabled","variant","onClick"]))}}),Me=f({name:"DropdownRadioMenu",__name:"dropdown-radio-menu",props:G({menus:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const t=N(n,"modelValue");function e(o){t.value=o}return(o,s)=>(d(),m(a(ge),null,{default:i(()=>[h(a(ke),{"as-child":"",class:"flex items-center gap-1"},{default:i(()=>[y(o.$slots,"default")]),_:3}),h(a(ye),{align:"start"},{default:i(()=>[h(a(_e),null,{default:i(()=>[(d(!0),_(T,null,R(o.menus,l=>(d(),m(a(ve),{key:l.key,class:B([l.value===t.value?"bg-accent text-accent-foreground":"","data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground text-foreground/80 mb-1 cursor-pointer"]),onClick:r=>e(l.value)},{default:i(()=>[l.icon?(d(),m(U(l.icon),{key:0,class:"mr-2 size-4"})):M("",!0),l.icon?M("",!0):(d(),_("span",{key:1,class:B([l.value===t.value?"bg-foreground":"","mr-2 size-1.5 rounded-full"])},null,2)),S(" "+w(l.label),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:3}))}}),$e={class:"text-md flex-center"},Ce=["href"],ze=["href"],Ie=f({name:"Copyright",__name:"copyright",props:{companyName:{default:"Vben Admin"},companySiteLink:{default:""},date:{default:"2024"},icp:{default:""},icpLink:{default:""}},setup(n){return(t,e)=>(d(),_("div",$e,[t.icp?(d(),_("a",{key:0,href:t.icpLink||"javascript:void(0)",class:"hover:text-primary-hover mx-1",target:"_blank"},w(t.icp),9,Ce)):M("",!0),S(" Copyright © "+w(t.date)+" ",1),t.companyName?(d(),_("a",{key:1,href:t.companySiteLink||"javascript:void(0)",class:"hover:text-primary-hover mx-1",target:"_blank"},w(t.companyName),9,ze)):M("",!0)]))}}),Le=f({name:"LanguageToggle",__name:"language-toggle",setup(n){function t(e){return C(this,null,function*(){const o=e;V({app:{locale:o}}),yield ie(o)})}return(e,o)=>(d(),_("div",null,[h(a(Me),{menus:a(re),"model-value":a(E).app.locale,"onUpdate:modelValue":t},{default:i(()=>[h(a(Be),null,{default:i(()=>[h(a(pe),{class:"text-foreground size-4"})]),_:1})]),_:1},8,["menus","model-value"])]))}}),Ve=f({name:"ThemeToggleButton",__name:"theme-button",props:G({type:{default:"normal"}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const t=n,e=N(n,"modelValue"),o=v(()=>e.value?"light":"dark"),s=v(()=>t.type==="normal"?{variant:"heavy"}:{class:"rounded-full",size:"icon",style:{padding:"7px"},variant:"icon"});function l(r){if(!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches)||!r){e.value=!e.value;return}const c=r.clientX,g=r.clientY,F=Math.hypot(Math.max(c,innerWidth-c),Math.max(g,innerHeight-g));document.startViewTransition(()=>C(this,null,function*(){e.value=!e.value,yield K()})).ready.then(()=>{const I=[`circle(0px at ${c}px ${g}px)`,`circle(${F}px at ${c}px ${g}px)`];document.documentElement.animate({clipPath:e.value?[...I].reverse():I},{duration:450,easing:"ease-in",pseudoElement:e.value?"::view-transition-old(root)":"::view-transition-new(root)"})})}return(r,u)=>(d(),m(a(P),b({"aria-label":o.value,class:[[`is-${o.value}`],"theme-toggle cursor-pointer border-none bg-none"],"aria-live":"polite"},s.value,{onClick:de(l,["stop"])}),{default:i(()=>u[0]||(u[0]=[p("svg",{"aria-hidden":"true",height:"24",viewBox:"0 0 24 24",width:"24"},[p("mask",{id:"theme-toggle-moon",class:"theme-toggle__moon",fill:"hsl(var(--foreground)/80%)",stroke:"none"},[p("rect",{fill:"white",height:"100%",width:"100%",x:"0",y:"0"}),p("circle",{cx:"40",cy:"8",fill:"black",r:"11"})]),p("circle",{id:"sun",class:"theme-toggle__sun",cx:"12",cy:"12",mask:"url(#theme-toggle-moon)",r:"11"}),p("g",{class:"theme-toggle__sun-beams"},[p("line",{x1:"12",x2:"12",y1:"1",y2:"3"}),p("line",{x1:"12",x2:"12",y1:"21",y2:"23"}),p("line",{x1:"4.22",x2:"5.64",y1:"4.22",y2:"5.64"}),p("line",{x1:"18.36",x2:"19.78",y1:"18.36",y2:"19.78"}),p("line",{x1:"1",x2:"3",y1:"12",y2:"12"}),p("line",{x1:"21",x2:"23",y1:"12",y2:"12"}),p("line",{x1:"4.22",x2:"5.64",y1:"19.78",y2:"18.36"}),p("line",{x1:"18.36",x2:"19.78",y1:"5.64",y2:"4.22"})])],-1)])),_:1},16,["aria-label","class"]))}}),Pe=ce(Ve,[["__scopeId","data-v-8e18cb5a"]]),Oe=f({name:"ThemeToggle",__name:"theme-toggle",props:{shouldOnHover:{type:Boolean,default:!1}},setup(n){function t(s){V({theme:{mode:s?"dark":"light"}})}const{isDark:e}=ue(),o=[{icon:he,name:"light",title:z("preferences.theme.light")},{icon:me,name:"dark",title:z("preferences.theme.dark")},{icon:fe,name:"auto",title:z("preferences.followSystem")}];return(s,l)=>(d(),_("div",null,[h(a(q),{disabled:!s.shouldOnHover,side:"bottom"},{trigger:i(()=>[h(Pe,{"model-value":a(e),type:"icon","onUpdate:modelValue":t},null,8,["model-value"])]),default:i(()=>[h(a(xe),{"model-value":a(E).theme.mode,class:"gap-2",type:"single",variant:"outline","onUpdate:modelValue":l[0]||(l[0]=r=>a(V)({theme:{mode:r}}))},{default:i(()=>[(d(),_(T,null,R(o,r=>h(a(we),{key:r.name,value:r.name},{default:i(()=>[(d(),m(U(r.icon),{class:"size-5"}))]),_:2},1032,["value"])),64))]),_:1},8,["model-value"])]),_:1},8,["disabled"])]))}});export{me as M,he as S,ge as _,ke as a,ye as b,ve as c,_e as d,Be as e,we as f,xe as g,fe as h,Oe as i,Le as j,Ie as k,Me as l};