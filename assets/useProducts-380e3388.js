import{r as o,aO as p}from"./index-d0bb2854.js";const S=()=>{const[t,n]=o.useState(3),[l,r]=o.useState(!0),[u,g]=o.useState(0),[e,c]=o.useState([{id:"",title:"",subcategory:"",tags:"",price:0,description:"",image:"",category:"",subCategory:""}]),d=()=>{if(e)if(t===e.length||t<=e.length)n(t+3);else return},i=()=>{if(t!==3)n(t-3);else return};return o.useEffect(()=>{const f=async()=>{r(!0);const a=await p();if(console.log("data::>",a),console.log("data::>",a.length),a.length===0){const s=localStorage.getItem("products");console.log("storedProducts::>",s),s&&(console.log("ingrese a true"),c(JSON.parse(s)),r(!1))}else g(s=>s+1),console.log("ingrese a false"),c(a),localStorage.setItem("products",JSON.stringify(e)),r(!1);r(!1)};u<3&&f()},[e]),{handleNextProd:d,handlePrevProd:i,loading:l,more:t,products:e,setProducts:c}};export{S as u};