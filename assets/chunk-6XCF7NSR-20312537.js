import{h as I,f as v,k as h,o as x,d as E,ao as S,b4 as _,r as p,j as l,c as G}from"./index-5960d643.js";var[b,N]=I({name:"InputGroupStylesContext",errorMessage:`useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `}),R=v(function(r,d){const o=h("Input",r),{children:c,className:m,...f}=x(r),g=E("chakra-input__group",m),n={},i=S(c),e=o.field;i.forEach(t=>{var s,a;o&&(e&&t.type.id==="InputLeftElement"&&(n.paddingStart=(s=e.height)!=null?s:e.h),e&&t.type.id==="InputRightElement"&&(n.paddingEnd=(a=e.height)!=null?a:e.h),t.type.id==="InputRightAddon"&&(n.borderEndRadius=0),t.type.id==="InputLeftAddon"&&(n.borderStartRadius=0))});const y=i.map(t=>{var s,a;const u=_({size:((s=t.props)==null?void 0:s.size)||r.size,variant:((a=t.props)==null?void 0:a.variant)||r.variant});return t.type.id!=="Input"?p.cloneElement(t,u):p.cloneElement(t,Object.assign(u,n,t.props))});return l.jsx(G.div,{className:g,ref:d,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate"},"data-group":!0,...f,children:l.jsx(b,{value:o,children:y})})});R.displayName="InputGroup";export{R as I,N as u};