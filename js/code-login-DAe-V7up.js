var T=(d,l,o)=>new Promise((c,t)=>{var u=n=>{try{m(o.next(n))}catch(r){t(r)}},b=n=>{try{m(o.throw(n))}catch(r){t(r)}},m=n=>n.done?c(n.value):Promise.resolve(n.value).then(u,b);m((o=o.apply(d,l)).next())});import{u as S,c as w,T as V,e as B,$ as e,s as C}from"./bootstrap-gbaUEZyS.js";import{a3 as $,W as P,J as k,ad as N,aj as v,m as f,af as p,ao as x,ag as _,a9 as s,aZ as y,ap as h,aA as g,P as L,ae as A}from"../jse/index-index-Cu888Fo9.js";const D={class:"text-muted-foreground"},E=$({name:"AuthenticationCodeLogin",__name:"code-login",props:{formSchema:{},loading:{type:Boolean,default:!1},loginPath:{default:"/auth/login"},title:{default:""},subTitle:{default:""},submitButtonText:{default:""}},emits:["submit"],setup(d,{emit:l}){const o=d,c=l,t=S(),[u,{validate:b,getValues:m}]=w(P({commonConfig:{hideLabel:!0,hideRequiredMark:!0},schema:k(()=>o.formSchema),showDefaultActions:!1}));function n(){return T(this,null,function*(){const{valid:a}=yield b(),i=yield m();a&&c("submit",{code:i==null?void 0:i.code,phoneNumber:i==null?void 0:i.phoneNumber})})}function r(){t.push(o.loginPath)}return(a,i)=>(N(),v("div",null,[f(V,null,{desc:p(()=>[x("span",D,[_(a.$slots,"subTitle",{},()=>[h(g(a.subTitle||s(e)("authentication.codeSubtitle")),1)])])]),default:p(()=>[_(a.$slots,"title",{},()=>[h(g(a.title||s(e)("authentication.welcomeBack"))+" 📲 ",1)])]),_:3}),f(s(u)),f(s(B),{class:y([{"cursor-wait":a.loading},"w-full"]),loading:a.loading,onClick:n},{default:p(()=>[_(a.$slots,"submitButtonText",{},()=>[h(g(a.submitButtonText||s(e)("common.login")),1)])]),_:3},8,["class","loading"]),f(s(B),{class:"mt-4 w-full",variant:"outline",onClick:i[0]||(i[0]=F=>r())},{default:p(()=>[h(g(s(e)("common.back")),1)]),_:1})]))}}),q=$({name:"CodeLogin",__name:"code-login",setup(d){const l=L(!1),o=k(()=>[{component:"VbenInput",componentProps:{placeholder:e("authentication.mobile")},fieldName:"phoneNumber",label:e("authentication.mobile"),rules:C().min(1,{message:e("authentication.mobileTip")}).refine(t=>/^\d{11}$/.test(t),{message:e("authentication.mobileErrortip")})},{component:"VbenPinInput",componentProps:{createText:t=>t>0?e("authentication.sendText",[t]):e("authentication.sendCode"),placeholder:e("authentication.code")},fieldName:"code",label:e("authentication.code"),rules:C().min(1,{message:e("authentication.codeTip")})}]);function c(t){return T(this,null,function*(){console.log(t)})}return(t,u)=>(N(),A(s(E),{"form-schema":o.value,loading:l.value,onSubmit:c},null,8,["form-schema","loading"]))}});export{q as default};