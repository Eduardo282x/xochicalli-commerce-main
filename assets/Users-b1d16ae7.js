import{a2 as Q,a3 as z,a7 as V,aP as Y,aQ as _,r as c,w as F,j as e,y as h,aR as J,T as d,B as j,I as K,aS as X,aT as Z,a9 as y,H as C}from"./index-5960d643.js";import{S as k,e as M,C as D}from"./notistack.esm-5a1f56f4.js";import{M as T,a as w,b as I,c as O,d as B,e as $}from"./chunk-PVJ72NKC-7f81f1a2.js";import{M as A}from"./chunk-YLPWWAYV-004e51a3.js";import{F as U}from"./chunk-IJBC3YLI-1dc0c5c2.js";import{F as S}from"./chunk-RN6VKE3K-17968694.js";import{I as ee}from"./chunk-GYFRIY2Z-7c2e976d.js";import{R as se,a as R}from"./chunk-MEU4ZZ42-1640093a.js";import{T as ne,a as oe,b as E,c as re,d as te,e as f}from"./chunk-Z3IFIKNA-a7e9294e.js";import{u as ae}from"./chunk-KSQA4OTT-5454a0c0.js";import{C as ie}from"./chunk-SRMZVY4F-e2a5ed18.js";import"./chunk-33PGJX5B-82e5cf51.js";import"./chunk-LB6CWFOC-afb3a818.js";import"./index-eaa72e81.js";const le=s=>{const a=Q(z,"users");return V(a,m=>{const u=[];m.forEach(i=>{u.push({id:i.id,...i.data()})}),s(u)})},ce=async(s,a)=>{try{const t=Y(z,"users",s);return await _(t,a),console.log(`Usuario actualizado correctamente :${s} `),!0}catch(t){return console.error("Error al actualizar el usuario:",t),!1}},ue=({dataUser:s})=>{const[a,t]=c.useState(!1),{isOpen:m,onOpen:u,onClose:i}=F(),x={name:(s==null?void 0:s.name)??"",email:(s==null?void 0:s.email)??"",role:(s==null?void 0:s.role)??"",uid:(s==null?void 0:s.uid)??"",nacimiento:(s==null?void 0:s.birthday)??"",contacto:(s==null?void 0:s.phoneNumber)??""};return e.jsxs(e.Fragment,{children:[e.jsx(k,{}),e.jsx(h,{onClick:u,children:e.jsx(J,{fontSize:"1.25rem"})}),e.jsxs(T,{closeOnOverlayClick:!1,isOpen:m,onClose:i,children:[e.jsx(w,{}),e.jsxs(I,{children:[e.jsx(O,{children:e.jsx(d,{style:{fontWeight:700,fontSize:"xx-large",textAlignLast:"center"},children:"ELIMINAR USUARIO"})}),e.jsx(A,{}),e.jsx(B,{pb:6,children:e.jsxs(j,{children:[e.jsx(K,{src:"/deleteUser.jpg"}),e.jsxs(d,{style:{display:"flex",placeContent:"center"},fontSize:"2xl",children:["Deseas eliminar a :",e.jsx("span",{style:{fontWeight:700,color:"#2e2ec9",marginLeft:"5px"},children:x.name})]})]})}),e.jsxs($,{style:{display:"flex",justifyContent:"space-around"},children:[e.jsx(h,{onClick:async()=>{t(!0);const o=await X(x.uid);M(o?"usuario eliminado con exito":"Error al elimianr el usuario",{variant:o?"success":"error",preventDuplicate:!0,anchorOrigin:{vertical:"bottom",horizontal:"right"}}),t(!1),o&&i()},colorScheme:"blue",mr:3,children:a?e.jsx(D,{size:"25px",isIndeterminate:!0,color:"#ffffff"}):"Eliminar"}),e.jsx(h,{onClick:i,children:"Cancelar"})]})]})]})]})},me=({dataUser:s})=>{const[a,t]=c.useState("1"),[m,u]=c.useState(!1),{isOpen:i,onOpen:x,onClose:o}=F(),[r,b]=c.useState({name:s.name,email:s.email,role:s.role,uid:s.uid,nacimiento:s.birthday,contacto:s.phoneNumber}),N=n=>{const l=new Date(n),p=l.getFullYear(),q=(l.getMonth()+1).toString().padStart(2,"0"),G=l.getDate().toString().padStart(2,"0");return`${p}-${q}-${G}T00:00`},v=c.useRef(null),W=c.useRef(null),L=[{name:"name",type:"text",value:r.name,validation:()=>r.name.length>4,msgError:"Ingrese un nombre valido "},{name:"email",type:"email",value:r.email,validation:()=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email),msgError:"Ingrese un email valido"},{name:"nacimiento",type:"datetime-local",value:r.nacimiento,validation:()=>r.name.length>4,msgError:"ingrese un valor valido"},{name:"Contacto",type:"tel",value:r.contacto,validation:()=>r.name.length>4,msgError:"ingrese un valor valido"}],H=(n,l)=>{b(p=>({...p,[n]:l}))},P=n=>{const l=n;t(l),b(p=>({...p,role:l}))};return c.useEffect(()=>{t(r.role)},[]),e.jsxs(e.Fragment,{children:[e.jsx(k,{}),e.jsx(h,{onClick:x,children:e.jsx(Z,{fontSize:"1.25rem"})}),e.jsxs(T,{initialFocusRef:v,finalFocusRef:W,isOpen:i,onClose:o,children:[e.jsx(w,{}),e.jsxs(I,{children:[e.jsx(O,{children:"Editar Usuario"}),e.jsx(A,{}),e.jsxs(B,{pb:6,children:[L.map(n=>e.jsxs(U,{children:[e.jsx(S,{style:{fontSize:"16px",fontWeight:"600"},children:n.name}),e.jsx(ee,{type:n.type,ref:v,value:n.type==="datetime-local"?N(n.value):n.value,onChange:l=>H(n.name,l.target.value)}),e.jsx(d,{style:{display:n.validation()?"none":"block",marginLeft:"2px",marginTop:"10px"},color:"red",children:n.msgError})]},n.name)),e.jsx(S,{style:{fontSize:"16px",fontWeight:"600"},children:"Asignar roles"}),e.jsx(se,{name:"rol",onChange:n=>P(n),value:a,children:e.jsxs(y,{direction:"row",children:[e.jsx(R,{value:"admin",children:"administrador"}),e.jsx(R,{value:"user",children:"usuario"})]})})]}),e.jsxs($,{children:[e.jsx(h,{id:"Actualizar-Button",mr:3,onClick:async()=>{u(!0);const n=await ce(r.uid,r);M(n?"usuario actualizado con exito":"Error al actualizar el usuario",{variant:n?"success":"error",preventDuplicate:!0,anchorOrigin:{vertical:"bottom",horizontal:"right"}}),u(!1),n&&o()},colorScheme:"blue",children:m?e.jsx(D,{size:"25px",isIndeterminate:!0,color:"#ffffff"}):"Actualizar"}),e.jsx(h,{onClick:o,children:"Cancel"})]})]})]})]})},g=[{column:"Nombre"},{column:"Email"},{column:"rol"},{column:"action"}],Me=s=>{const a=ae({base:!0,lg:!1}),[t,m]=c.useState(g),[u,i]=c.useState([]);c.useEffect(()=>{le(r=>{console.log("escuchar continuamente",r),i(r)}),x()},[]);const x=()=>{const o=a?g.filter(r=>r.column!="Email"):g;m(o)};return e.jsx("div",{className:"bg-white w-[70%]  my-5 flex items-center justify-center rounded-lg",children:e.jsx(ie,{py:{base:"4",md:"8"},px:{base:"0",md:0},className:"flex items-center justify-center",children:e.jsx(j,{bg:"bg-surface",boxShadow:{base:"none",md:"sm"},borderRadius:{base:"none",md:"lg"},children:e.jsxs(y,{spacing:"5",children:[e.jsx(j,{px:{base:"4",md:"6"},pt:"5",children:e.jsx(y,{direction:{base:"column",md:"row"},justify:"space-between",children:e.jsx(d,{fontSize:"lg",fontWeight:"medium",children:"Usuarios"})})}),e.jsx("div",{children:e.jsxs(ne,{children:[e.jsx(oe,{display:a?"contents":"",children:e.jsx(E,{children:t.map((o,r)=>e.jsx(re,{children:o.column},r))})}),e.jsx(te,{children:u.map(o=>e.jsxs(E,{children:[e.jsx(f,{children:e.jsx(C,{spacing:"3",children:e.jsx(j,{children:e.jsx(d,{fontWeight:"medium",children:o.name})})})}),e.jsx(f,{display:a?"none":"",children:e.jsx(d,{color:"muted",children:o.email})}),e.jsx(f,{children:e.jsx(d,{color:"muted",children:o.role})}),e.jsx(f,{children:e.jsxs(C,{spacing:"1",children:[e.jsx(ue,{dataUser:o}),e.jsx(me,{dataUser:o})]})})]},o.id))})]})})]})})})})};export{Me as default};
