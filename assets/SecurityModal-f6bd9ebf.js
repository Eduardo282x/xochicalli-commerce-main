import{r as j,w as L,ac as T,aa as f,ab as b,j as e,aN as I,y as o,br as N,bs as g,bt as O}from"./index-5960d643.js";import{u as k,o as P,F as C}from"./yup-fe7e9ae8.js";import{A as w,a as y}from"./chunk-BPJV7R7V-da1dd8d6.js";import{a as S,c as F,d as v,e as z}from"./chunk-PVJ72NKC-7f81f1a2.js";import{M as E}from"./chunk-YLPWWAYV-004e51a3.js";import{F as M}from"./chunk-IJBC3YLI-1dc0c5c2.js";import{F as D}from"./chunk-RN6VKE3K-17968694.js";import{I as A}from"./chunk-GYFRIY2Z-7c2e976d.js";import"./chunk-LB6CWFOC-afb3a818.js";import"./index-eaa72e81.js";const Y=()=>{const[i,l]=j.useState(""),c=j.useRef(),{isOpen:n,onClose:a,onOpen:d}=L(),m=T(),R=i==="email"?f().shape({email:b().required("El correo es requerido").email("Debe ser un correo válido")}):f().shape({password:b().required("La contraseña es requerida").min(6,"Debes ingresar al menos 6 caracteres")}),{handleSubmit:u,register:h,formState:{errors:s,isSubmitting:p},reset:x}=k({resolver:P(R)}),q=async({email:r})=>{try{r&&await N(r),m({status:"success",duration:1e3,position:"top",title:"Correo electrónico",description:"Tu correo electrónico ha sido actualizado."}),x(),a()}catch(t){throw Error(t,{cause:"error"})}},B=async({password:r})=>{try{g&&r&&await O(g,r),m({status:"success",duration:1e3,position:"top",title:"Contraseña",description:"Tu contraseña ha sido actualizada."}),x(),a()}catch(t){throw Error(t,{cause:"error"})}};return e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:[e.jsx(o,{onClick:()=>{l("email"),d()},children:"Cambiar correo"}),e.jsx(o,{onClick:()=>{l("password"),d()},children:"Cambiar contraseña"})]}),i==="email"?e.jsx(w,{isOpen:n,onClose:a,leastDestructiveRef:c,size:["sm","md","lg","xl"],children:e.jsx(S,{children:e.jsxs(y,{children:[e.jsx(F,{fontSize:"lg",fontWeight:"bold",children:"Cambiar correo"}),e.jsx(E,{}),e.jsxs("form",{onSubmit:u(q),children:[e.jsx(v,{children:e.jsxs(M,{isInvalid:!!s.email,children:[e.jsx(D,{htmlFor:"email",children:"Nuevo correo electrónico"}),e.jsx(A,{autoComplete:"false",id:"email",type:"email",...h("email")}),s.email&&e.jsx(C,{children:s.email.message})]})}),e.jsx(z,{children:e.jsx(o,{type:"submit",colorScheme:"blue",isLoading:p,children:"Actualizar"})})]})]})})}):e.jsx(w,{isOpen:n,onClose:a,leastDestructiveRef:c,size:["sm","md","lg","xl"],children:e.jsx(S,{children:e.jsxs(y,{children:[e.jsx(F,{fontSize:"lg",fontWeight:"bold",children:"Cambiar contraseña"}),e.jsx(E,{}),e.jsxs("form",{onSubmit:u(B),children:[e.jsx(v,{children:e.jsxs(M,{children:[e.jsx(D,{htmlFor:"password",children:"Nueva contraseña"}),e.jsx(A,{autoComplete:"false",id:"password",type:"password",...h("password")}),s.password&&e.jsx(C,{children:s.password.message})]})}),e.jsx(z,{children:e.jsx(o,{isLoading:p,type:"submit",colorScheme:"blue",children:"Actualizar"})})]})]})})})]})};export{Y as default};