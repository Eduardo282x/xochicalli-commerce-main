import{r as d,t as N,j as e,F as W,a9 as i,T as m,H as q,S as $,a0 as V,aj as x,B as u,y as k,U as B,a as R,A as U,ak as O,al as T,W as M}from"./index-5960d643.js";import{P as H,O as _}from"./styles-compiled-80ae2f59.js";import{b as G}from"./index-2bfda048.js";import{u as J}from"./usePrice-0e07a71a.js";import{A as X}from"./chunk-DPSEBQMG-8213b480.js";import{D as z}from"./chunk-YGVX4ESO-92860b43.js";import{A as K}from"./chunk-UESP75NN-050ec7e7.js";import{F}from"./chunk-IJBC3YLI-1dc0c5c2.js";import{I as f}from"./chunk-GYFRIY2Z-7c2e976d.js";import{a as S}from"./axios-28bc18a3.js";import{F as v}from"./chunk-RN6VKE3K-17968694.js";import{S as I}from"./chunk-GJO77I2I-62895ca8.js";const Q=n=>{const{getProductAmount:s}=d.useContext(N),{newPrice:o}=J(n.price),a=s(n);return e.jsxs(W,{justify:"space-between",children:[e.jsxs(i,{direction:"row",spacing:"5",children:[e.jsx(X,{ratio:1,width:"92px",children:e.jsx(G.LazyLoadImage,{src:n.image,alt:n.title,style:{borderRadius:12}})}),e.jsxs(i,{spacing:"3",children:[e.jsx(m,{fontWeight:"semibold",children:n.title}),e.jsx(q,{my:4,w:"100%",justifyContent:"space-between",children:e.jsxs(m,{children:["Cantidad: ",a]})})]})]}),e.jsx(m,{fontWeight:"medium",children:o})]},n.id)},Y=()=>{const n=d.useId(),{cart:s,total:o}=d.useContext(N);return e.jsxs(i,{spacing:{base:"6",md:"10"},children:[e.jsx($,{size:"lg",children:"Resumen de la compra"}),e.jsxs(i,{spacing:"8",children:[e.jsxs(i,{spacing:"6",children:[s.length<1&&e.jsx(m,{fontSize:"md",fontWeight:"semibold",children:"No hay productos en tu carrito"}),s.map(a=>e.jsxs(V.Fragment,{children:[e.jsx(Q,{id:a.id,image:a.image,price:a.price,title:a.title,category:a.category,subcategory:a.subcategory,tags:a.tags,subCategory:""},n),e.jsx(z,{})]},n))]}),e.jsxs(i,{spacing:"6",children:[e.jsxs(i,{spacing:"3",children:[e.jsxs(i,{direction:"row",justify:"space-between",children:[e.jsx(m,{color:"gray.600",children:"Subtotal"}),e.jsxs(m,{color:"black",children:["$",o]})]}),e.jsxs(i,{direction:"row",justify:"space-between",children:[e.jsx(m,{color:"gray.600",children:"Costo de envio"}),e.jsx(m,{color:"black",children:s.length>=1?"Gratis":"Necesitas un producto"})]})]}),e.jsx(z,{}),e.jsxs(i,{direction:"row",justify:"space-between",children:[e.jsx(m,{fontSize:"lg",fontWeight:"semibold",color:x("gray.700","gray.200"),children:"Total de tu pedido"}),e.jsxs(m,{fontSize:"xl",fontWeight:"semibold",color:x("black","white"),children:["$",o]})]})]})]})]})};function E(n=""){return n.replace(/\D+/g,"")}function Z(n){if(!n)return n;const s=H.fns.cardType(n),o=E(n);let a;switch(s){case"amex":a=`${o.slice(0,4)} ${o.slice(4,10)} ${o.slice(10,15)}`;break;case"dinersclub":a=`${o.slice(0,4)} ${o.slice(4,10)} ${o.slice(10,14)}`;break;default:a=`${o.slice(0,4)} ${o.slice(4,8)} ${o.slice(8,12)} ${o.slice(12,19)}`;break}return a.trim()}function ee(n,s={number:!1}){const o=E(n);let a=4;return o.slice(0,a)}function ae(n){const s=E(n);return s.length>=3?`${s.slice(0,2)}/${s.slice(2,4)}`:s}const te=({dataCard:n})=>{const[s,o]=d.useState({number:"",name:"",expiry:"",cvc:"",issuer:"",focused:void 0,formData:null}),a=({issuer:l},c)=>{c&&o({...s,issuer:l})},h=({target:l})=>{o({...s,focused:l.name})},g=({target:l})=>{let c=l.value;l.name==="number"?c=Z(c):l.name==="expiry"?c=ae(c):l.name==="cvc"&&(c=ee(c)),o({...s,[l.name]:c})},b=l=>{l.preventDefault();const c=[...l.target.elements].filter(j=>j.name).reduce((j,y)=>(j[y.name]=y.value,j),{});o({...s,formData:c})},p=()=>Object.values(s).some(l=>l==="");return e.jsx(u,{children:e.jsxs(u,{className:"App-payment",children:[e.jsx($,{fontSize:"xl",children:"Ingresa tu tarjeta de credito"}),e.jsx(_,{number:s.number.slice(0,4),name:s.name,expiry:s.expiry,cvc:s.cvc,focused:s.focused,callback:a}),e.jsxs(F,{onSubmit:b,children:[e.jsxs(u,{className:"form-group",children:[e.jsx(f,{style:{margin:"20px 0"},type:"tel",name:"number",className:"form-control",placeholder:"Card Number",required:!0,pattern:"^\\d{16}$",onChange:g,onFocus:h}),e.jsx("small",{children:"E.g.: 49..., 51..., 36..., 37..."})]}),e.jsx(u,{className:"form-group",children:e.jsx(f,{style:{margin:"20px 0"},type:"text",name:"name",className:"form-control",placeholder:"Name",required:!0,onChange:g,onFocus:h})}),e.jsxs(u,{className:"row",children:[e.jsx(u,{className:"col-6",children:e.jsx(f,{style:{margin:"20px 0"},type:"tel",name:"expiry",className:"form-control",placeholder:"Valid Thru",pattern:"\\d\\d/\\d\\d",required:!0,onChange:g,onFocus:h})}),e.jsx(u,{className:"col-6",children:e.jsx(f,{style:{margin:"20px 0"},type:"tel",name:"cvc",className:"form-control",placeholder:"CVC",pattern:"\\d{3,4}",required:!0,onChange:g,onFocus:h})})]})]}),e.jsx(k,{background:p()?"gray.300":"blue.500",color:p()?"":"#fff",isDisabled:p(),width:"100%",onClick:()=>{},children:"Finalizar compra"})]})},"Payment")},re=()=>{var L;const{cart:n}=d.useContext(N),s=[];n.map(t=>{const r={price_data:{product_data:{name:t.title},currency:"MXN",unit_amount:Number(t.price)*100},quantity:t.quantity};s.push(r)});const{userInformation:o}=d.useContext(B),[a,h]=d.useState({name:"",colonia:"",calle:"",numero:"",code:"",Complemento:"",state:"Puebla",city:"Acajete",email:""});console.log("dataCard::>",a);const g=localStorage.getItem("uid"),b=R(),[p,l]=d.useState([]),[c,j]=d.useState(!1);d.useEffect(()=>{const t="https://raw.githubusercontent.com/martinciscap/json-estados-municipios-mexico/master/estados-municipios.json";S.get(t).then(r=>{l(r.data)}).catch(r=>{console.error("Error load state Mexico JSON:",r)})},[]);const y=[{FormLabel:"Nombres y apellidos",name:"name",placeholder:"Callie Nun",value:a.name,validation:()=>a.name.trim().length>0},{FormLabel:"Correo electrónico",name:"email",placeholder:"you@exmaple.com",value:a.email,validation:()=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email)},{FormLabel:"Colonia",name:"colonia",placeholder:"El Rodeo",value:a.colonia,validation:()=>a.colonia.trim().length>0},{FormLabel:"Calle",name:"calle",placeholder:"el sol",value:a.calle,validation:()=>a.calle.trim().length>0},{FormLabel:"#",name:"numero",placeholder:"14A",value:a.numero,validation:()=>a.numero.trim().length>0},{FormLabel:"Complemento",name:"Complemento",placeholder:"conjunto San Maria",value:a.Complemento,validation:()=>a.Complemento.trim().length>0}],D=async t=>{console.log("entro aqui",t);try{const r=await S.get(`https://api.opencagedata.com/geocode/v1/json?q=${t},+${a.state},+Mexico&key=f299b88cb2724371afc4605625880341`);if(r.data.results.length>0){const C=r.data.results[r.data.results.length-1].components.postcode;return h({...a,code:C}),C}else return null}catch(r){return console.error("Error al obtener ciudades y códigos postales:",r),7211}};d.useEffect(()=>{D(a.city)},[]);const w=()=>Object.values(a).some(r=>r==="");return d.useEffect(()=>{(async()=>{if(g){const r=await T(g);r.name&&r.fatherSurname&&r.motherSurname&&r.email&&h({...a,name:r.name+" "+r.fatherSurname+" "+r.motherSurname,email:r.email})}})()},[]),e.jsxs(i,{spacing:{base:"6",md:"8"},children:[e.jsxs(i,{direction:"row",spacing:8,children:[e.jsx(U,{"aria-label":"back",icon:e.jsx(K,{}),onClick:()=>{c?j(!1):b("/cart")},w:"max-content"}),e.jsx($,{size:"lg",children:"Información de envío"})]}),c?e.jsx(e.Fragment,{children:e.jsx(te,{dataCard:a})}):e.jsx(i,{spacing:{base:"6",md:"6"},children:o.address===null?e.jsx(k,{onClick:()=>b(`/user/profile/${g}/addresses`),colorScheme:"blue",variant:"link",children:"Agrega una dirección primero"}):e.jsxs(u,{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},children:[y.map((t,r)=>{const P=["Colonia","Calle","#","Complemento"];return e.jsxs(F,{style:{width:P.includes(t.FormLabel)?"45%":"100%"},id:t.name,children:[e.jsx(v,{style:{fontWeight:600},color:x("gray.700","gray.200"),children:t.FormLabel}),e.jsx(f,{type:t.FormLabel==="#"?"number":"text",value:t.value,onChange:C=>{h(A=>({...A,[t.name]:C.target.value}))},name:t.name,placeholder:t.placeholder,focusBorderColor:x("blue.500","blue.200")}),!t.validation()&&e.jsx(m,{color:"tomato",children:"Este campo no puede estar vacio"})]},r)}),e.jsx(v,{style:{fontWeight:600,width:"100%"},color:x("gray.700","gray.200"),children:"Estado"}),e.jsx(I,{value:a.state,onChange:t=>h({...a,state:t.target.value}),placeholder:"Estado",size:"md",children:Object.keys(p).map((t,r)=>e.jsx("option",{value:t,children:t},r))}),e.jsx(v,{style:{fontWeight:600},color:x("gray.700","gray.200"),children:"ciudad"}),e.jsx(I,{onChange:t=>{h({...a,city:t.target.value}),D(t.target.value)},placeholder:"ciudad",size:"md",children:(L=p[a.state])==null?void 0:L.map((t,r)=>e.jsx("option",{value:t,children:t},r))}),e.jsxs(F,{id:"code",children:[e.jsx(v,{style:{fontWeight:600},color:x("gray.700","gray.200"),children:"Codigo Postal"}),e.jsx(f,{name:"dataCard.code",value:a.code,placeholder:"Codigo Postal",focusBorderColor:x("blue.500","blue.200")})]}),e.jsx(k,{style:{width:"100%",marginTop:"20px"},background:w()?"gray.300":"blue.500",color:w()?"":"#fff",isDisabled:w(),onClick:()=>{O(g,a),S.post("https://app-gbt7czzzeq-uc.a.run.app/create-checkout-session",s).then(t=>{t.data.url?window.location.href=t.data.url:console.error("La respuesta no contiene una URL.")}).catch(t=>{console.error("ocurrio un error",t)})},children:"Continuar"})]})})]})},pe=()=>e.jsxs(e.Fragment,{children:[e.jsx(M,{children:e.jsx("title",{children:"Checkout"})}),e.jsx(u,{bgGradient:x("linear(to-l, gray.50 50%, white 50%)","linear(to-l, gray.700 50%, gray.800 50%)"),minH:"100vh",children:e.jsxs(W,{maxW:"8xl",mx:"auto",direction:{base:"column",md:"row"},children:[e.jsx(u,{flex:"1",bg:x("white","gray.800"),px:{base:"4",md:"8",lg:"12",xl:"20"},py:{base:"6",md:"8",lg:"12",xl:"20"},h:"100vh",children:e.jsx(i,{spacing:{base:"16",lg:"8"},children:e.jsx(re,{})})}),e.jsx(u,{flex:"1",maxW:{lg:"md",xl:"40rem"},bg:"gray.50",px:{base:"4",md:"8",lg:"12",xl:"20"},py:{base:"6",md:"8",lg:"12",xl:"20"},children:e.jsx(Y,{})})]})})]});export{pe as default};