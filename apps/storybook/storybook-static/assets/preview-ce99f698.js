import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const{useParameter:f,addons:S,useEffect:_,useMemo:j}=__STORYBOOK_MODULE_PREVIEW_API__;var p=Object.defineProperty,v=(e,t)=>{for(var r in t)p(e,r,{get:t[r],enumerable:!0})},R={};v(R,{initializeThemeState:()=>d,pluckThemeFromContext:()=>h,useThemeParameters:()=>u});var b="@storybook/addon-styling",O=`${b}/theme-switcher`,y="theming",k="theme",M={},I={REGISTER_THEMES:`${O}/REGISTER_THEMES`};function h({globals:e}){return e[k]||""}function u(){return f(y,M)}function d(e,t){S.getChannel().emit(I.REGISTER_THEMES,{defaultTheme:t,themes:e})}var P="html",c=e=>e.split(" ").filter(Boolean),x=({themes:e,defaultTheme:t,parentSelector:r=P})=>(d(Object.keys(e),t),(E,g)=>{let{themeOverride:a}=u(),o=h(g);return _(()=>{let l=a||o||t,n=document.querySelector(r);Object.entries(e).filter(([i])=>i!==l).forEach(([i,T])=>{let m=c(T);m.length>0&&n.classList.remove(...m)});let s=c(e[l]);s.length>0&&n.classList.add(...s)},[a,o,r]),E()});const A={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},decorators:[x({themes:{light:"light",dark:"dark"},defaultTheme:"light"})]};export{A as default};
//# sourceMappingURL=preview-ce99f698.js.map
