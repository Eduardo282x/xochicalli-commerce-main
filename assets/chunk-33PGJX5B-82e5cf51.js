import{aV as e}from"./index-5960d643.js";function l(t,r,a){return(t-r)*100/(a-r)}var m=e({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}}),d=e({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),c=e({"0%":{left:"-40%"},"100%":{left:"100%"}}),p=e({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});function k(t){const{value:r=0,min:a,max:o,valueText:u,getValueText:s,isIndeterminate:n,role:f="progressbar"}=t,i=l(r,a,o);return{bind:{"data-indeterminate":n?"":void 0,"aria-valuemax":o,"aria-valuemin":a,"aria-valuenow":n?void 0:r,"aria-valuetext":(()=>{if(r!=null)return typeof s=="function"?s(r,i):u})(),role:f},percent:i,value:r}}export{p as a,k as g,c as p,d as r,m as s};
