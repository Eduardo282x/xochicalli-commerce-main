import{r as m,w as v,a as k,j as e,I as D,a9 as b,S as B,T as i,B as R,H as z,aN as O,y as r,ax as P,bw as T}from"./index-5960d643.js";import{u as E}from"./usePrice-0e07a71a.js";import{C as F,a as H}from"./chunk-S432VF2S-4a11f816.js";import{D as I}from"./chunk-YGVX4ESO-92860b43.js";import{T as n}from"./chunk-IXKZFKRY-8b1d62d4.js";import{A as L,a as M}from"./chunk-BPJV7R7V-da1dd8d6.js";import{a as A,c as N,d as W,e as $}from"./chunk-PVJ72NKC-7f81f1a2.js";import"./chunk-LB6CWFOC-afb3a818.js";import"./index-eaa72e81.js";const Z=({image:t,title:a,description:h,price:j,category:p,id:s,tags:l,subcategory:c})=>{const[u,d]=m.useState(!1),x=m.useRef(),{newPrice:f}=E(j),{isOpen:g,onOpen:w,onClose:o}=v(),C=k(),S=()=>C(`/products/${s}`),y=async()=>{d(!0),await T(s,t),d(!1),o(),window.location.reload()};return e.jsxs(e.Fragment,{children:[e.jsx(F,{maxW:["xs","sm"],borderRadius:"xl",children:e.jsxs(H,{onClick:S,children:[e.jsx(D,{src:t,alt:`${a}-${s}`,objectFit:"cover",fallbackSrc:"https://via.placeholder.com/256",loading:"lazy",height:256,width:512,borderRadius:"lg"}),e.jsxs(b,{spacing:"3",my:"3",children:[e.jsx(B,{noOfLines:1,size:["lg","md","lg"],children:a}),e.jsxs(i,{children:["id: ",s]}),e.jsx(I,{}),e.jsxs(R,{display:"flex",gap:"5px",children:[e.jsx(n,{width:"max-content",children:p}),e.jsx(n,{width:"max-content",display:c!==void 0?"flex":"none",children:c}),e.jsx(n,{width:"max-content",display:l!==void 0?"flex":"none",children:l})]}),e.jsx(i,{noOfLines:1,children:h})]}),e.jsxs(z,{alignItems:"center",justifyContent:"space-between",width:"100%",mt:4,children:[e.jsx(O,{spacing:4,children:e.jsx(r,{onClick:w,colorScheme:"red",children:"Eliminar"})}),e.jsx(i,{fontSize:"xl",fontWeight:"medium",children:f})]})]})}),e.jsx(L,{isOpen:g,leastDestructiveRef:x,onClose:o,size:["xs","sm","md","lg","xl"],children:e.jsx(A,{children:e.jsxs(M,{children:[e.jsx(N,{fontSize:"lg",fontWeight:"bold",children:"Eliminar producto"}),e.jsxs(W,{children:["¿Seguro que quieres eliminar el producto '",a,"'?"]}),e.jsxs($,{children:[e.jsx(r,{ref:x,onClick:o,children:"No, cancelar"}),e.jsx(r,{isLoading:u,leftIcon:e.jsx(P,{}),colorScheme:"red",onClick:y,ml:3,children:"Sí, eliminar"})]})]})})})]})};export{Z as default};