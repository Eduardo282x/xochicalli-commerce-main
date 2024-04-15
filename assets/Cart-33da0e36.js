import{r as x,t as h,j as e,I as j,a9 as u,H as d,T as o,C,y as n,a as f,V as p,W as y,L as b,x as w,a0 as k,ag as S}from"./index-5960d643.js";import{u as z}from"./usePrice-0e07a71a.js";import{A as T}from"./chunk-DPSEBQMG-8213b480.js";import{T as v}from"./chunk-IXKZFKRY-8b1d62d4.js";import{C as m,a as R}from"./chunk-S432VF2S-4a11f816.js";import"./index-2bfda048.js";import{C as W}from"./chunk-W3H6TFKV-9208dcb1.js";import{C as g}from"./chunk-3V5HNFOM-21b150b9.js";import{D as A}from"./chunk-YGVX4ESO-92860b43.js";const I=r=>{const{addOneToCart:s,removeOneFromCart:a,getProductAmount:i,removeFromCart:l}=x.useContext(h),{newPrice:c}=z(r.price),t=i(r);return e.jsxs(m,{direction:["column","row"],bgColor:"gray.50",h:["md","48"],children:[e.jsx(T,{ratio:1,w:["full",256],h:["64","full"],children:e.jsx(j,{loading:"lazy",src:r.image,alt:r.title,w:["full","48"],h:"48",objectFit:"cover",borderTopRadius:["md","none"],borderLeftRadius:["none","md"],style:{borderTopLeftRadius:"8px"}})}),e.jsxs(u,{w:"full",p:6,spacing:3,children:[e.jsxs(d,{alignItems:"center",w:"full",justifyContent:"space-between",children:[e.jsx(o,{fontSize:"xl",fontWeight:600,children:r.title}),e.jsx(C,{"aria-label":"delete-icon",onClick:()=>l(r)})]}),e.jsx(v,{my:2,bgColor:"gray.200",width:"max-content",children:r.category}),e.jsx(o,{fontSize:["xl","lg"],fontWeight:"medium",children:c}),e.jsx(d,{my:4,w:"100%",justifyContent:"space-between",children:e.jsxs(d,{spacing:[4,6],children:[e.jsx(n,{onClick:()=>a(r),size:"sm",children:"-"}),e.jsx(o,{children:t}),e.jsx(n,{onClick:()=>s(r),size:"sm",children:"+"})]})})]})]})},$=()=>{const r=x.useId(),{cart:s,clearCart:a,total:i}=x.useContext(h),l=f(),c=()=>l("/checkout");return e.jsxs(p,{minH:"calc(100vh - 72px)",bgColor:"gray.100",p:4,children:[e.jsx(y,{children:e.jsx("title",{children:"Carrito de compras"})}),e.jsxs(m,{w:s.length>0?["sm","md","2xl","2xl","3xl"]:"sm",my:8,children:[e.jsx(W,{textAlign:"center",fontWeight:700,fontSize:"3xl",children:"Carrito"}),s.length>0&&e.jsx(n,{colorScheme:"red",onClick:a,width:"max-content",mr:4,ml:"auto",children:"Limpiar carrito"}),e.jsxs(R,{children:[s.length<1?e.jsxs(g,{flexDir:"column",gap:2,children:[e.jsx(o,{fontSize:"lg",children:"¡Tu carrito está vacío!"}),e.jsx(b,{as:w,to:"/products",color:"blue.500",fontWeight:500,children:"Ver productos"})]}):s.map(t=>e.jsxs(k.Fragment,{children:[e.jsx(I,{id:t.id,image:t.image,price:t.price,title:t.title,category:t.category,subcategory:(t==null?void 0:t.subcategory)??"",tags:(t==null?void 0:t.tags)??"",subCategory:""},r),e.jsx(A,{my:6})]},r)),s.length>0&&e.jsxs(g,{flexDir:["column","row"],alignItems:["center","baseline"],gap:4,w:"full",justifyContent:"space-between",children:[e.jsxs(o,{fontSize:["xl","2xl"],fontWeight:700,textAlign:"center",children:["Tu total es de: $",i]}),e.jsx(n,{size:["md","lg"],colorScheme:"green",rightIcon:e.jsx(S,{}),onClick:c,fontWeight:500,children:"Checkout"})]})]})]})]})};export{$ as default};
