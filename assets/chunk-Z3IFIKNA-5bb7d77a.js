import{h as u,f as r,k as y,o as b,j as t,c as l,d as i}from"./index-d0bb2854.js";var[T,n]=u({name:"TableStylesContext",errorMessage:`useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `}),m=r((s,a)=>{const e=y("Table",s),{className:o,layout:c,...d}=b(s);return t.jsx(T,{value:e,children:t.jsx(l.table,{ref:a,__css:{tableLayout:c,...e.table},className:i("chakra-table",o),...d})})});m.displayName="Table";var h=r((s,a)=>{const e=n();return t.jsx(l.thead,{...s,ref:a,__css:e.thead})}),_=r((s,a)=>{const e=n();return t.jsx(l.tr,{...s,ref:a,__css:e.tr})}),j=r((s,a)=>{const e=n();return t.jsx(l.tbody,{...s,ref:a,__css:e.tbody})}),v=r(({isNumeric:s,...a},e)=>{const o=n();return t.jsx(l.td,{...a,ref:e,__css:o.td,"data-is-numeric":s})}),f=r(({isNumeric:s,...a},e)=>{const o=n();return t.jsx(l.th,{...a,ref:e,__css:o.th,"data-is-numeric":s})});export{m as T,h as a,_ as b,f as c,j as d,v as e};