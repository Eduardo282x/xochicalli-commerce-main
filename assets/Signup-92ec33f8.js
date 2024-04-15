import{aa as Y,ab as i,bj as Z,bk as J,r as m,ac as K,v as X,a as ee,j as e,B as S,W as re,a9 as u,I as se,S as ae,H as w,T as v,y as h,x as oe,F as p,bl as te,A as F,bd as I,be as E,aN as ne,bh as ie,bm as le}from"./index-5960d643.js";import{u as de,F as n,o as ce}from"./yup-fe7e9ae8.js";import{I as me,a as q}from"./chunk-J356FWKS-6ebf29eb.js";import{I as j}from"./chunk-6XCF7NSR-20312537.js";import{I as l}from"./chunk-GYFRIY2Z-7c2e976d.js";import{C as ue}from"./chunk-SRMZVY4F-e2a5ed18.js";import{F as a}from"./chunk-IJBC3YLI-1dc0c5c2.js";import{F as o}from"./chunk-RN6VKE3K-17968694.js";import{S as L}from"./chunk-GJO77I2I-62895ca8.js";import{D as N}from"./chunk-YGVX4ESO-92860b43.js";const he=Y().shape({email:i().required("El correo no puede estar vacío").email("Debe ser un correo válido"),password:i().required("La contraseña no puede estar vacía").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/,"La contraseña debe contener al menos 1 letra minúscula, 1 letra mayúscula, 1 número y 1 caracter especial").min(6,"La contraseña debe tener mínimo 6 caracteres"),confirmPassword:i().oneOf([Z("password")],"Las contraseñas deben ser idénticas").required("Debes confirmar la contraseña"),name:i().required("El nombre no puede estar vacío").min(4,"El nombre debe tener mínimo 4 caracteres"),fatherSurname:i().required("El apellido paterno no puede estar vacío").min(4,"El apellido paterno debe tener mínimo 4 caracteres"),motherSurname:i().required("El apellido materno no puede estar vacío").min(4,"El apellido materno debe tener mínimo 4 caracteres"),birthday:J().required("La fecha de nacimiento es requerida").max(new Date,"La fecha de nacimiento debe ser antes de hoy"),gender:i().required("Debes seleccionar un género").oneOf(["Masculino","Femenino"],'El género debe ser "Masculino" o "Femenino"'),phoneNumber:i().required("El número de teléfono no puede estar vacío").min(10,"El número de teléfono debe ser de 10 dígitos").max(10,"El número de teléfono no puede tener más de 10 dígitos"),securitySelect:i().required("La pregunta de seguridad es requerida").min(4,"La respuesta es de mínimo 4 caracteres")}),ve=()=>{const[x,k]=m.useState(!0),[g,P]=m.useState(!0),[d,f]=m.useState(1),[C,T]=m.useState("¿Cuál es tu color favorito?");console.log(C);const y=K(),[b]=X("(min-width: 800px)"),A=ee(),D=()=>d<=3&&f(s=>s+1),M=()=>d>=1&&f(s=>s-1),R=({target:s})=>T(s.value),{handleSubmit:B,register:t,formState:{errors:r,isSubmitting:$},reset:z}=de({resolver:ce(he)});console.log(r);const G=async s=>{console.log("values:::>",s);const{birthday:H,fatherSurname:O,motherSurname:Q,gender:V,name:_,phoneNumber:W,securitySelect:U}=s;try{const c=await le(s.email,s.password,{birthday:H,fatherSurname:O,motherSurname:Q,gender:V,name:_,phoneNumber:W,securitySelect:U,securityQuestion:C});y({status:"success",duration:1500,isClosable:!1,title:"Registro",position:b?"top-right":"bottom",description:`¡Hola, ${s.name}! Revisa tu email para verificar la cuenta.`}),z(),A(`/products?=${c==null?void 0:c.uid}`)}catch(c){y({status:"error",duration:1500,isClosable:!1,title:"Error de registro",position:b?"bottom":"top-right",description:c.messsage})}};return e.jsxs(S,{bgColor:"gray.100",minHeight:"100vh",children:[e.jsx(re,{children:e.jsx("title",{children:"Crear cuenta"})}),e.jsx(ue,{maxW:"lg",py:{base:"12",md:"24"},px:{base:"0",sm:"8"},children:e.jsxs(u,{spacing:"8",alignItems:"center",children:[e.jsxs(u,{spacing:"6",children:[b&&e.jsx(se,{src:{}.VITE_ADMIN_LOGIN_IMAGE,alt:"Top Image",objectFit:"cover",fallbackSrc:"https://via.placeholder.com/256",loading:"lazy",width:"128px",borderRadius:"lg",mx:"auto"}),e.jsxs(u,{spacing:{base:"2",md:"3"},textAlign:"center",children:[e.jsx(ae,{size:{base:"xl",md:"lg"},children:"Crear cuenta"}),e.jsxs(w,{spacing:"1",justify:"center",children:[e.jsx(v,{color:"muted",children:"¿Ya tienes cuenta?"}),e.jsx(h,{variant:"link",as:oe,to:"/login",colorScheme:"blue",children:"Iniciar sesión"})]})]})]}),e.jsx(S,{py:{base:"0",sm:"8"},px:{base:"4",sm:"10"},bg:{base:"transparent",sm:"white"},boxShadow:{base:"none",sm:"md"},borderRadius:{base:"none",sm:"xl"},id:"register-form",w:["sm","md","xl"],children:e.jsxs(u,{spacing:"6",children:[e.jsxs("form",{onSubmit:B(G),children:[d===1&&e.jsxs(e.Fragment,{children:[e.jsxs(p,{direction:["column","row"],gap:[0,8],children:[e.jsxs(a,{isInvalid:!!r.name,children:[e.jsx(o,{htmlFor:"name",children:"Nombre(s)"}),e.jsx(l,{autoComplete:"false",type:"string",id:"name",bgColor:["white","transparent"],borderColor:"gray.200",placeholder:"Antonio",...t("name"),onChange:s=>{}}),r.name&&e.jsx(n,{children:r.name.message})]}),e.jsxs(a,{isInvalid:!!r.gender,mt:[4,0],children:[e.jsx(o,{htmlFor:"gender",children:"Género"}),e.jsxs(L,{defaultValue:"Masculino",id:"gender",borderColor:"gray.200",bgColor:["white","transparent"],...t("gender"),children:[e.jsx("option",{value:"Masculino",children:"Masculino"}),e.jsx("option",{value:"Femenino",children:"Femenino"})]}),r.gender&&e.jsx(n,{children:r.gender.message})]})]}),e.jsxs(p,{direction:["column","row"],gap:[0,8],children:[e.jsxs(a,{isInvalid:!!r.fatherSurname,mt:4,children:[e.jsx(o,{htmlFor:"fatherSurname",children:"Apellido paterno"}),e.jsx(l,{autoComplete:"false",type:"string",id:"fatherSurname",bgColor:["white","transparent"],borderColor:"gray.200",placeholder:"Banderas",...t("fatherSurname")}),r.fatherSurname&&e.jsx(n,{children:r.fatherSurname.message})]}),e.jsxs(a,{isInvalid:!!r.motherSurname,mt:4,children:[e.jsx(o,{htmlFor:"motherSurname",children:"Apellido materno"}),e.jsx(l,{autoComplete:"false",type:"string",id:"motherSurname",bgColor:["white","transparent"],borderColor:"gray.200",placeholder:"Solano",...t("motherSurname")}),r.motherSurname&&e.jsx(n,{children:r.motherSurname.message})]})]}),e.jsxs(p,{direction:["column","row"],alignItems:["center","auto"],gap:[0,8],children:[e.jsxs(a,{isInvalid:!!r.birthday,mt:4,children:[e.jsx(o,{htmlFor:"birthday",children:"Fecha de nacimiento"}),e.jsx(l,{autoComplete:"false",type:"date",id:"birthday",bgColor:["white","transparent"],borderColor:"gray.200",...t("birthday")}),r.birthday&&e.jsx(n,{children:r.birthday.message})]}),e.jsxs(a,{isInvalid:!!r.phoneNumber,mt:4,children:[e.jsx(o,{htmlFor:"phoneNumber",children:"Teléfono"}),e.jsxs(j,{children:[e.jsx(me,{children:e.jsx(te,{})}),e.jsx(l,{autoComplete:"false",type:"number",id:"phoneNumber",bgColor:["white","transparent"],borderColor:"gray.200",size:"md",pattern:"[0-9]*",maxLength:10,max:10,placeholder:"3331112244",...t("phoneNumber")})]}),r.phoneNumber&&e.jsx(n,{children:r.phoneNumber.message})]})]})]}),d===2&&e.jsxs(e.Fragment,{children:[e.jsxs(a,{isInvalid:!!r.email,children:[e.jsx(o,{htmlFor:"email",children:"Correo electrónico"}),e.jsx(l,{autoComplete:"false",type:"email",id:"email",bgColor:["white","transparent"],borderColor:"gray.200",placeholder:"correo@electronico.com",...t("email")}),r.email&&e.jsx(n,{children:r.email.message})]}),e.jsxs(p,{direction:["column","row"],gap:[0,8],children:[e.jsxs(a,{isInvalid:!!r.password,mt:4,children:[e.jsx(o,{htmlFor:"password",children:"Contraseña"}),e.jsxs(j,{children:[e.jsx(q,{children:e.jsx(F,{variant:"link","aria-label":"Show password",icon:x?e.jsx(I,{}):e.jsx(E,{}),onClick:()=>k(!x)})}),e.jsx(l,{autoComplete:"false",type:x?"password":"text",id:"password",bgColor:["white","transparent"],placeholder:"********",borderColor:"gray.200",...t("password")})]}),r.password&&e.jsx(n,{children:r.password.message})]}),e.jsxs(a,{isInvalid:!!r.confirmPassword,mt:4,children:[e.jsx(o,{htmlFor:"confirmPassword",children:"Confirmar contraseña"}),e.jsxs(j,{children:[e.jsx(q,{children:e.jsx(F,{variant:"link","aria-label":"Show password",icon:g?e.jsx(I,{}):e.jsx(E,{}),onClick:()=>P(!g)})}),e.jsx(l,{autoComplete:"false",type:g?"password":"text",id:"confirmPassowrd",bgColor:["white","transparent"],placeholder:"********",borderColor:"gray.200",...t("confirmPassword")})]}),r.confirmPassword&&e.jsx(n,{children:r.confirmPassword.message})]})]})]}),d===3&&e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[e.jsx(o,{htmlFor:"securityQuestion",children:"Pregunta de seguridad"}),e.jsxs(L,{bgColor:["white","transparent"],defaultValue:"¿Cuál es tu color favorito?",onChange:R,children:[e.jsx("option",{value:"¿Cuál es tu color favorito?",children:"¿Cuál es tu color favorito?"}),e.jsx("option",{value:"¿Cuál es tu película favorita?",children:"¿Cuál es tu película favorita?"}),e.jsx("option",{value:"¿Cuál es tu equipo de fútbol favorito?",children:"¿Cuál es tu equipo de fútbol favorito?"}),e.jsx("option",{value:"¿Cuál es tu género de música favorito?",children:"¿Cuál es tu género de música favorito?"}),e.jsx("option",{value:"¿Cuál es el nombre de tu mascota?",children:"¿Cuál es el nombre de tu mascota?"})]})]}),e.jsxs(a,{isInvalid:!!r.securitySelect,mt:4,children:[e.jsx(o,{htmlFor:"securitySelect",children:"Respuesta"}),e.jsx(l,{autoComplete:"false",type:"text",id:"securitySelect",bgColor:["white","transparent"],borderColor:"gray.200",placeholder:"Tu respuesta aquí...",...t("securitySelect")}),r.securitySelect&&e.jsx(n,{children:r.securitySelect.message})]})]}),e.jsxs(ne,{width:"100%",children:[e.jsx(h,{mt:8,width:"100%",colorScheme:"red",type:"button",onClick:M,isDisabled:d===1,children:"Anterior"}),e.jsx(h,{type:"submit",mt:8,width:"100%",colorScheme:"blue",onClick:D,isDisabled:d===3,children:"Siguiente"})]}),d===3&&e.jsx(h,{mt:8,width:"100%",colorScheme:"green",type:"submit",isLoading:$,children:"Registrarme"})]}),e.jsxs(w,{children:[e.jsx(N,{borderColor:["gray.400","gray.200"]}),e.jsx(v,{fontSize:"sm",whiteSpace:"nowrap",color:"muted",children:"O regístrate con:"}),e.jsx(N,{borderColor:["gray.400","gray.200"]})]}),e.jsx(ie,{})]})})]})})]})};export{ve as default};