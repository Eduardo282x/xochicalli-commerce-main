import{f as I,b as Ve,o as ye,j as e,c as P,d as A,e as je,r as u,g as Ue,h as Ce,m as R,i as b,k as qe,n as Ge,p as Ke,C as we,q as We,s as Je,U as Qe,t as Xe,v as Ye,w as he,a as Ze,F as eo,L as oo,x as ro,I as no,H as q,y as g,V as $,z as ve,A as G,D as K,B as to,E as so,G as ao,J as io,T as lo,O as co,K as uo,M as po,N as fo,l as mo}from"./index-5960d643.js";import{u as se,a as ho,b as vo,c as W}from"./index-4e283e9b.js";import{g as go,a as xo,i as bo,b as yo}from"./index-eaa72e81.js";import{A as ge}from"./chunk-WPAIWTI3-369330bd.js";import{D as _}from"./chunk-YGVX4ESO-92860b43.js";import{A as jo,a as Co,b as wo,c as Po,d as ko}from"./chunk-3VH7AMBV-5f33cdc9.js";import"./chunk-LB6CWFOC-afb3a818.js";import"./index-dfdb2e15.js";function So(r){return"current"in r}var Pe=()=>typeof window<"u";function _o(){var r;const o=navigator.userAgentData;return(r=o==null?void 0:o.platform)!=null?r:navigator.platform}var Fo=r=>Pe()&&r.test(navigator.vendor),Io=r=>Pe()&&r.test(_o()),Ao=()=>Io(/mac|iphone|ipad|ipod/i),Bo=()=>Ao()&&Fo(/apple/i);function Ro(r){const{ref:o,elements:n,enabled:a}=r,s=()=>{var t,i;return(i=(t=o.current)==null?void 0:t.ownerDocument)!=null?i:document};se(s,"pointerdown",t=>{if(!Bo()||!a)return;const i=t.target,f=(n??[o]).some(l=>{const p=So(l)?l.current:l;return(p==null?void 0:p.contains(i))||p===i});s().activeElement!==i&&f&&(t.preventDefault(),i.focus())})}var X=I(function(o,n){const a=Ve("Badge",o),{className:s,...t}=ye(o);return e.jsx(P.span,{ref:n,className:A("chakra-badge",o.className),...t,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...a}})});X.displayName="Badge";function To(r){const o=r.current;if(!o)return!1;const n=xo(o);return!n||o.contains(n)?!1:!!bo(n)}function No(r,o){const{shouldFocus:n,visible:a,focusRef:s}=o,t=n&&!a;je(()=>{if(!t||To(r))return;const i=(s==null?void 0:s.current)||r.current;let d;if(i)return d=requestAnimationFrame(()=>{i.focus({preventScroll:!0})}),()=>{cancelAnimationFrame(d)}},[t,r,s])}var Eo={preventScroll:!0,shouldFocus:!1};function Mo(r,o=Eo){const{focusRef:n,preventScroll:a,shouldFocus:s,visible:t}=o,i=Oo(r)?r.current:r,d=s&&t,f=u.useRef(d),l=u.useRef(t);Ue(()=>{!l.current&&t&&(f.current=d),l.current=t},[t,d]);const p=u.useCallback(()=>{if(!(!t||!i||!f.current)&&(f.current=!1,!i.contains(document.activeElement)))if(n!=null&&n.current)requestAnimationFrame(()=>{var m;(m=n.current)==null||m.focus({preventScroll:a})});else{const m=go(i);m.length>0&&requestAnimationFrame(()=>{m[0].focus({preventScroll:a})})}},[t,a,i,n]);je(()=>{p()},[p]),se(i,"transitionend",p)}function Oo(r){return"current"in r}function Do(r){const{isOpen:o,ref:n}=r,[a,s]=u.useState(o),[t,i]=u.useState(!1);return u.useEffect(()=>{t||(s(o),i(!0))},[o,t,a]),se(()=>n.current,"animationend",()=>{s(o)}),{present:!(o?!1:!a),onComplete(){var f;const l=yo(n.current),p=new l.CustomEvent("animationend",{bubbles:!0});(f=n.current)==null||f.dispatchEvent(p)}}}function Lo(r){const{wasSelected:o,enabled:n,isSelected:a,mode:s="unmount"}=r;return!!(!n||a||s==="keepMounted"&&o)}var[$o,k]=Ce({name:"PopoverContext",errorMessage:"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"}),[zo,T]=Ce({name:"PopoverStylesContext",errorMessage:`usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `}),Y=I(function(o,n){const{getHeaderProps:a}=k(),s=T();return e.jsx(P.header,{...a(o,n),className:A("chakra-popover__header",o.className),__css:s.header})});Y.displayName="PopoverHeader";function Z(r){const o=u.Children.only(r.children),{getTriggerProps:n}=k();return u.cloneElement(o,n(o.props,o.ref))}Z.displayName="PopoverTrigger";var F={click:"click",hover:"hover"};function Ho(r={}){const{closeOnBlur:o=!0,closeOnEsc:n=!0,initialFocusRef:a,id:s,returnFocusOnClose:t=!0,autoFocus:i=!0,arrowSize:d,arrowShadowColor:f,trigger:l=F.click,openDelay:p=200,closeDelay:m=200,isLazy:C,lazyBehavior:Se="unmount",computePositionOnMount:_e,...Fe}=r,{isOpen:v,onClose:y,onOpen:z,onToggle:ae}=ho(r),H=u.useRef(null),N=u.useRef(null),S=u.useRef(null),B=u.useRef(!1),ie=u.useRef(!1);v&&(ie.current=!0);const[le,Ie]=u.useState(!1),[ce,Ae]=u.useState(!1),Be=u.useId(),Re=s??Be,[ue,E,M,O]=["popover-trigger","popover-content","popover-header","popover-body"].map(c=>`${c}-${Re}`),{referenceRef:D,getArrowProps:Te,getPopperProps:de,getArrowInnerProps:Ne,forceUpdate:Ee}=vo({...Fe,enabled:v||!!_e}),pe=Do({isOpen:v,ref:S});Ro({enabled:v,ref:N}),No(S,{focusRef:N,visible:v,shouldFocus:t&&l===F.click}),Mo(S,{focusRef:a,visible:v,shouldFocus:i&&l===F.click});const fe=Lo({wasSelected:ie.current,enabled:C,mode:Se,isSelected:pe.present}),Me=u.useCallback((c={},x=null)=>{const h={...c,style:{...c.style,transformOrigin:W.transformOrigin.varRef,[W.arrowSize.var]:d?`${d}px`:void 0,[W.arrowShadowColor.var]:f},ref:R(S,x),children:fe?c.children:null,id:E,tabIndex:-1,role:"dialog",onKeyDown:b(c.onKeyDown,j=>{n&&j.key==="Escape"&&y()}),onBlur:b(c.onBlur,j=>{const L=xe(j),U=J(S.current,L),He=J(N.current,L);v&&o&&(!U&&!He)&&y()}),"aria-labelledby":le?M:void 0,"aria-describedby":ce?O:void 0};return l===F.hover&&(h.role="tooltip",h.onMouseEnter=b(c.onMouseEnter,()=>{B.current=!0}),h.onMouseLeave=b(c.onMouseLeave,j=>{j.nativeEvent.relatedTarget!==null&&(B.current=!1,setTimeout(()=>y(),m))})),h},[fe,E,le,M,ce,O,l,n,y,v,o,m,f,d]),Oe=u.useCallback((c={},x=null)=>de({...c,style:{visibility:v?"visible":"hidden",...c.style}},x),[v,de]),De=u.useCallback((c,x=null)=>({...c,ref:R(x,H,D)}),[H,D]),w=u.useRef(),V=u.useRef(),me=u.useCallback(c=>{H.current==null&&D(c)},[D]),Le=u.useCallback((c={},x=null)=>{const h={...c,ref:R(N,x,me),id:ue,"aria-haspopup":"dialog","aria-expanded":v,"aria-controls":E};return l===F.click&&(h.onClick=b(c.onClick,ae)),l===F.hover&&(h.onFocus=b(c.onFocus,()=>{w.current===void 0&&z()}),h.onBlur=b(c.onBlur,j=>{const L=xe(j),U=!J(S.current,L);v&&o&&U&&y()}),h.onKeyDown=b(c.onKeyDown,j=>{j.key==="Escape"&&y()}),h.onMouseEnter=b(c.onMouseEnter,()=>{B.current=!0,w.current=window.setTimeout(()=>z(),p)}),h.onMouseLeave=b(c.onMouseLeave,()=>{B.current=!1,w.current&&(clearTimeout(w.current),w.current=void 0),V.current=window.setTimeout(()=>{B.current===!1&&y()},m)})),h},[ue,v,E,l,me,ae,z,o,y,p,m]);u.useEffect(()=>()=>{w.current&&clearTimeout(w.current),V.current&&clearTimeout(V.current)},[]);const $e=u.useCallback((c={},x=null)=>({...c,id:M,ref:R(x,h=>{Ie(!!h)})}),[M]),ze=u.useCallback((c={},x=null)=>({...c,id:O,ref:R(x,h=>{Ae(!!h)})}),[O]);return{forceUpdate:Ee,isOpen:v,onAnimationComplete:pe.onComplete,onClose:y,getAnchorProps:De,getArrowProps:Te,getArrowInnerProps:Ne,getPopoverPositionerProps:Oe,getPopoverProps:Me,getTriggerProps:Le,getHeaderProps:$e,getBodyProps:ze}}function J(r,o){return r===o||(r==null?void 0:r.contains(o))}function xe(r){var o;const n=r.currentTarget.ownerDocument.activeElement;return(o=r.relatedTarget)!=null?o:n}function ee(r){const o=qe("Popover",r),{children:n,...a}=ye(r),s=Ge(),t=Ho({...a,direction:s.direction});return e.jsx($o,{value:t,children:e.jsx(zo,{value:o,children:Ke(n,{isOpen:t.isOpen,onClose:t.onClose,forceUpdate:t.forceUpdate})})})}ee.displayName="Popover";var Q=(r,o)=>o?`${r}.${o}, ${o}`:void 0;function oe(r){var o;const{bg:n,bgColor:a,backgroundColor:s,shadow:t,boxShadow:i,shadowColor:d}=r,{getArrowProps:f,getArrowInnerProps:l}=k(),p=T(),m=(o=n??a)!=null?o:s,C=t??i;return e.jsx(P.div,{...f(),className:"chakra-popover__arrow-positioner",children:e.jsx(P.div,{className:A("chakra-popover__arrow",r.className),...l(r),__css:{"--popper-arrow-shadow-color":Q("colors",d),"--popper-arrow-bg":Q("colors",m),"--popper-arrow-shadow":Q("shadows",C),...p.arrow}})})}oe.displayName="PopoverArrow";var re=I(function(o,n){const{getBodyProps:a}=k(),s=T();return e.jsx(P.div,{...a(o,n),className:A("chakra-popover__body",o.className),__css:s.body})});re.displayName="PopoverBody";var ne=I(function(o,n){const{onClose:a}=k(),s=T();return e.jsx(we,{size:"sm",onClick:a,className:A("chakra-popover__close-btn",o.className),__css:s.closeButton,ref:n,...o})});ne.displayName="PopoverCloseButton";function Vo(r){if(r)return{enter:{...r.enter,visibility:"visible"},exit:{...r.exit,transitionEnd:{visibility:"hidden"}}}}var Uo={exit:{opacity:0,scale:.95,transition:{duration:.1,ease:[.4,0,1,1]}},enter:{scale:1,opacity:1,transition:{duration:.15,ease:[0,0,.2,1]}}},qo=P(We.section),ke=I(function(o,n){const{variants:a=Uo,...s}=o,{isOpen:t}=k();return e.jsx(qo,{ref:n,variants:Vo(a),initial:!1,animate:t?"enter":"exit",...s})});ke.displayName="PopoverTransition";var te=I(function(o,n){const{rootProps:a,motionProps:s,...t}=o,{getPopoverProps:i,getPopoverPositionerProps:d,onAnimationComplete:f}=k(),l=T(),p={position:"relative",display:"flex",flexDirection:"column",...l.content};return e.jsx(P.div,{...d(a),__css:l.popper,className:"chakra-popover__popper",children:e.jsx(ke,{...s,...i(t,n),onAnimationComplete:Je(f,t.onAnimationComplete),className:A("chakra-popover__content",o.className),__css:p})})});te.displayName="PopoverContent";const be=[{id:1,text:"Productos",route:"/products",icon:e.jsx(uo,{})},{id:2,text:"Blog",route:"/blog",icon:e.jsx(po,{})},{id:3,text:"Contacto",route:"/contact",icon:e.jsx(fo,{})}],or=()=>{const r=window.location.pathname,{userInformation:o}=u.useContext(Qe),{cart:n}=u.useContext(Xe),[a]=Ye("(min-width: 860px)"),s=he(),t=he(),i=Ze(),d=l=>{s.onClose(),t.onClose(),l.includes("/user/profile")&&i(`user/profile/${o.uid}`),i(l)},f=async()=>await mo();return e.jsx(e.Fragment,{children:r!=="/login"&&r!=="/signup"&&r!=="/checkout"&&e.jsxs(eo,{as:"nav",alignItems:"center",justifyContent:"space-between",mx:"auto",bgColor:"green.500",w:"full",px:{base:2,sm:4},py:1,shadow:"md",children:[e.jsx(oo,{to:"/",title:"Xochicalli Commerce - Inicio",as:ro,children:e.jsx(no,{src:{}.VITE_ADMIN_LOGIN_IMAGE,alt:"Navbar Image",objectFit:"cover",fallbackSrc:"https://via.placeholder.com/256",loading:"lazy",width:"64px",borderRadius:"lg"})}),e.jsxs(q,{display:"flex",alignItems:"center",spacing:1,children:[e.jsxs(q,{spacing:[1,2,2,4,6],mr:1,color:"brand.500",display:["none","none","inline-flex"],children:[be.map(({id:l,text:p,route:m,icon:C})=>a?e.jsx(g,{leftIcon:C,color:"white",variant:"ghost",_hover:{bg:"gray.200",color:"gray.800"},onClick:()=>d(m),children:p},l):e.jsx(g,{color:"white",variant:"ghost",_hover:{bg:"gray.200",color:"gray.800"},onClick:()=>d(m),children:p},l)),a?e.jsxs(e.Fragment,{children:[e.jsxs(ee,{placement:"bottom-end",isLazy:!0,children:[e.jsx(Z,{children:e.jsx(ge,{cursor:"pointer",src:o.profilePicture,name:`${o.name} ${o.fatherSurname}`})}),e.jsxs(te,{children:[e.jsx(oe,{}),e.jsx(ne,{}),e.jsxs(Y,{noOfLines:1,fontWeight:700,fontSize:18,children:[o.name," ",o.fatherSurname," ",o.motherSurname]}),e.jsx(re,{width:"xs",children:e.jsxs($,{alignItems:"flex-start",p:2,children:[e.jsx(g,{variant:"link",colorScheme:"black",onClick:()=>d(`/user/profile/${o.uid}`),children:"Mi perfil"}),e.jsx(_,{my:2}),e.jsx(g,{variant:"link",colorScheme:"black",onClick:()=>d(`/user/profile/${o.uid}`),children:"Mis compras"}),e.jsx(_,{my:2}),e.jsx(g,{leftIcon:e.jsx(ve,{}),colorScheme:"red",onClick:f,children:"Cerrar sesión"})]})})]})]}),e.jsx(G,{"aria-label":"Cart",color:"white",variant:"ghost",_hover:{bg:"gray.200",color:"gray.800"},onClick:()=>i("/cart"),icon:e.jsxs(e.Fragment,{children:[e.jsx(K,{}),n.length>0&&e.jsx(X,{colorScheme:"green",position:"absolute",right:"2",borderRadius:"full",top:"2",w:2,h:2})]})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(ee,{placement:"bottom-end",isLazy:!0,children:[e.jsx(Z,{children:e.jsx(ge,{cursor:"pointer",src:o.profilePicture,name:`${o.name} ${o.fatherSurname}`})}),e.jsxs(te,{children:[e.jsx(oe,{}),e.jsx(ne,{}),e.jsxs(Y,{noOfLines:1,fontWeight:700,fontSize:18,children:[o.name," ",o.fatherSurname," ",o.motherSurname]}),e.jsx(re,{width:"xs",children:e.jsxs($,{alignItems:"flex-start",p:2,children:[e.jsx(g,{variant:"link",colorScheme:"black",onClick:()=>d(`/user/profile/${o.uid}`),children:"Mi perfil"}),e.jsx(_,{my:2}),e.jsx(g,{variant:"link",colorScheme:"black",onClick:()=>d(`/user/profile/${o.uid}`),children:"Mis compras"}),e.jsx(_,{my:2}),e.jsx(g,{leftIcon:e.jsx(ve,{}),colorScheme:"red",onClick:f,children:"Cerrar sesión"})]})})]})]}),e.jsx(G,{"aria-label":"Cart",color:"white",variant:"ghost",_hover:{bg:"gray.200",color:"gray.800"},onClick:()=>i("/cart"),icon:e.jsxs(e.Fragment,{children:[e.jsx(K,{}),n.length>0&&e.jsx(X,{colorScheme:"green",position:"absolute",right:"0",borderRadius:"full",top:"0",w:4,h:4,children:n.length})]})})]})]}),e.jsxs(to,{display:["inline-flex","inline-flex","none"],children:[e.jsx(G,{display:["flex","flex","none"],"aria-label":"Open menu",fontSize:"20px",variant:"ghost",color:"white",_hover:{bgColor:"whiteAlpha.400"},icon:e.jsx(so,{}),onClick:s.onOpen}),e.jsxs($,{pos:"absolute",zIndex:99,top:0,left:0,right:0,display:s.isOpen?"flex":"none",flexDirection:"column",alignItems:"flex-end",p:2,pb:4,m:2,bgColor:"gray.200",spacing:3,rounded:"sm",shadow:"sm",children:[e.jsx(we,{"aria-label":"Close menu",size:"lg",onClick:s.onClose}),be.map(({id:l,text:p,route:m,icon:C})=>e.jsx(g,{leftIcon:C,variant:"ghost",width:"full",_hover:{bg:"green.400",color:"white"},onClick:()=>d(m),children:p},l)),e.jsx(jo,{allowToggle:!0,width:"100%",rounded:"lg",children:e.jsxs(Co,{children:[e.jsx(wo,{rounded:"lg",justifyContent:"center",children:e.jsxs(q,{children:[e.jsx(ao,{as:io}),e.jsx(lo,{fontWeight:600,children:"Mi perfil"}),e.jsx(Po,{})]})}),e.jsx(ko,{pb:0,width:"inherit",children:e.jsxs($,{alignItems:"center",p:2,children:[e.jsx(g,{variant:"link",colorScheme:"black",onClick:()=>d(`/user/profile/${o.uid}`),children:"Mi perfil"}),e.jsx(_,{my:2}),e.jsx(g,{variant:"link",colorScheme:"black",onClick:()=>d(`/user/profile/${o.uid}`),children:"Mis compras"}),e.jsx(_,{my:2}),e.jsx(g,{variant:"link",colorScheme:"red",onClick:f,children:"Cerrar sesión"})]})})]})}),e.jsx(g,{leftIcon:e.jsx(K,{}),w:"full",colorScheme:"green",onClick:()=>d("/cart"),children:"Ver carrito"})]})]})]}),e.jsx(co,{})]})})};export{or as default};
