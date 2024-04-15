import{ah as C,a2 as w,a3 as v,ac as y,aa as E,ab as i,j as e,V as S,W as F,S as I,T as h,a9 as u,B as T,F as l,y as q,H}from"./index-5960d643.js";import{u as $,F as m,o as M}from"./yup-fe7e9ae8.js";import{C as V}from"./chunk-SRMZVY4F-e2a5ed18.js";import{F as c}from"./chunk-IJBC3YLI-1dc0c5c2.js";import{F as d}from"./chunk-RN6VKE3K-17968694.js";import{I as x}from"./chunk-GYFRIY2Z-7c2e976d.js";import{T as _}from"./chunk-OEQDSMWZ-85a6ecdb.js";import{D as p}from"./chunk-YGVX4ESO-92860b43.js";const k=async({name:r,email:o,message:t})=>{const a={to:{}.VITE_TO_PROD_EMAIL,message:{subject:"Nuevo mensaje de cliente - Xochicalli Commerce",text:t,html:`
            <h1>Nuevo mensaje de: ${r}</h1>
            <h3>Correo del cliente: ${o}</h3>
            <p>Mensaje: ${t}</p>
            `}};try{return await C(w(v,"emails"),a)}catch(n){return n}},K=()=>{const r=y(),o=E().shape({name:i().required("El nombre no puede estar vacío").min(4,"El nombre debe tener mínimo 4 caracteres"),email:i().required("El correo no puede estar vacío").email("El correo no es válido"),message:i().required("El mensaje no puede estar vacío").min(10,"El mensaje debe tener mínimo 10 caracteres")}),{handleSubmit:t,register:a,formState:{isSubmitting:n,errors:s},reset:j}=$({resolver:M(o)}),g=async b=>{try{await k(b),r({status:"success",title:"¡Correo enviado!",description:"Hemos enviado tu mensaje, nos pondremos en contacto contigo pronto.",duration:2e3,isClosable:!0})}catch(f){console.log(f),r({status:"error",title:"¡Error!",description:"Algo salió mal, intenta luego...",duration:2e3,isClosable:!0})}j()};return e.jsxs(S,{minH:"calc(100vh - 72px)",bgColor:"gray.100",p:4,children:[e.jsx(F,{children:e.jsx("title",{children:"Contacto"})}),e.jsx(I,{mt:4,children:"Contacto"}),e.jsx(h,{py:4,children:"Aquí podrás contactarnos y resolver tus dudas o contarnos algo que haya sucedido."}),e.jsx(V,{children:e.jsx(u,{spacing:"8",alignItems:"center",children:e.jsx(T,{py:{base:"0",sm:"8"},px:{base:"2",sm:"10"},bg:{base:"transparent",sm:"white"},boxShadow:{base:"none",sm:"md"},borderRadius:{base:"none",sm:"xl"},id:"register-form",w:["sm","md","xl"],children:e.jsxs(u,{spacing:"6",children:[e.jsxs("form",{onSubmit:t(g),children:[e.jsxs(c,{isInvalid:!!s.name,children:[e.jsxs(l,{direction:["column","column","row"],alignItems:["flex-start","flex-start","flex-end"],w:"100%",justifyContent:"space-between",children:[e.jsx(d,{htmlFor:"name",children:"Nombre:"}),e.jsx(x,{width:["100%","100%","60%"],autoComplete:"false",type:"text",id:"name",bgColor:["white","transparent"],borderColor:"gray.200",placeholder:"Kevin Vega",...a("name")})]}),s.name&&e.jsx(m,{children:s.name.message})]}),e.jsxs(c,{isInvalid:!!s.email,mt:4,children:[e.jsxs(l,{direction:["column","column","row"],alignItems:["flex-start","flex-start","flex-end"],w:"100%",justifyContent:"space-between",children:[e.jsx(d,{htmlFor:"email",children:"Correo electrónico:"}),e.jsx(x,{width:["100%","100%","60%"],autoComplete:"false",type:"email",id:"email",bgColor:["white","transparent"],placeholder:"correo@electronico.com",borderColor:"gray.200",...a("email")})]}),s.email&&e.jsx(m,{children:s.email.message})]}),e.jsxs(c,{isInvalid:!!s.message,mt:4,children:[e.jsxs(l,{direction:["column","column","row"],alignItems:["flex-start","flex-start","flex-start"],w:"100%",justifyContent:"space-between",children:[e.jsx(d,{htmlFor:"message",children:"Mensaje:"}),e.jsx(_,{width:["100%","100%","60%"],autoComplete:"false",id:"message",bgColor:["white","transparent"],placeholder:"Escribe tu mensaje aquí...",borderColor:"gray.200",...a("message")})]}),s.message&&e.jsx(m,{children:s.message.message})]}),e.jsx(q,{isLoading:n,loadingText:"Enviando mensaje...",type:"submit",colorScheme:"blue",width:"100%",mt:8,children:"Enviar"})]}),e.jsxs(H,{children:[e.jsx(p,{}),e.jsxs(h,{whiteSpace:"nowrap",fontWeight:600,children:["O nos puedes llamar al ",e.jsx("a",{href:"tel:573014492053",children:"3014492053"})]}),e.jsx(p,{})]})]})})})})]})};export{K as default};
