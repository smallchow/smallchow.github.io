var T=(m,l,e)=>new Promise((i,s)=>{var c=a=>{try{r(e.next(a))}catch(u){s(u)}},b=a=>{try{r(e.throw(a))}catch(u){s(u)}},r=a=>a.done?i(a.value):Promise.resolve(a.value).then(c,b);r((e=e.apply(m,l)).next())});import{c as B,u as P,T as $,e as v,$ as n,s as V}from"./bootstrap-gbaUEZyS.js";import{a3 as _,W as C,J as S,ad as k,aj as y,m as f,af as p,ag as w,a9 as o,ao as F,aZ as N,ap as g,aA as h,P as x,ae as L}from"../jse/index-index-Cu888Fo9.js";const R=_({name:"ForgetPassword",__name:"forget-password",props:{formSchema:{},loading:{type:Boolean,default:!1},loginPath:{default:"/auth/login"},title:{default:""},subTitle:{default:""},submitButtonText:{default:""}},emits:["submit"],setup(m,{emit:l}){const e=m,i=l,[s,{validate:c,getValues:b}]=B(C({commonConfig:{hideLabel:!0,hideRequiredMark:!0},schema:S(()=>e.formSchema),showDefaultActions:!1})),r=P();function a(){return T(this,null,function*(){const{valid:t}=yield c(),d=yield b();t&&i("submit",d)})}function u(){r.push(e.loginPath)}return(t,d)=>(k(),y("div",null,[f($,null,{desc:p(()=>[w(t.$slots,"subTitle",{},()=>[g(h(t.subTitle||o(n)("authentication.forgetPasswordSubtitle")),1)])]),default:p(()=>[w(t.$slots,"title",{},()=>[g(h(t.title||o(n)("authentication.forgetPassword"))+" 🤦🏻‍♂️ ",1)])]),_:3}),f(o(s)),F("div",null,[f(o(v),{class:N([{"cursor-wait":t.loading},"mt-2 w-full"]),"aria-label":"submit",onClick:a},{default:p(()=>[w(t.$slots,"submitButtonText",{},()=>[g(h(t.submitButtonText||o(n)("authentication.sendResetLink")),1)])]),_:3},8,["class"]),f(o(v),{class:"mt-4 w-full",variant:"outline",onClick:d[0]||(d[0]=A=>u())},{default:p(()=>[g(h(o(n)("common.back")),1)]),_:1})])]))}}),q=_({name:"ForgetPassword",__name:"forget-password",setup(m){const l=x(!1),e=S(()=>[{component:"VbenInput",componentProps:{placeholder:"example@example.com"},fieldName:"email",label:n("authentication.email"),rules:V().min(1,{message:n("authentication.emailTip")}).email(n("authentication.emailValidErrorTip"))}]);function i(s){console.log("reset email:",s)}return(s,c)=>(k(),L(o(R),{"form-schema":e.value,loading:l.value,onSubmit:i},null,8,["form-schema","loading"]))}});export{q as default};
