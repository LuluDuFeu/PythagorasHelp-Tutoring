(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[762],{3508:function(e,n,r){"use strict";var t=r(4836);n.Z=void 0;var s=t(r(4938)),o=r(5893),i=(0,s.default)((0,o.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");n.Z=i},824:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rejoignez-nous",function(){return r(401)}])},401:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return X}});var t=r(5893),s=r(7294),o=r(3366),i=r(7462),a=(r(9864),r(6010)),d=r(4780),l=r(1719),c=r(8884),u=r(8662),p=r(3204),h=r(3566),m=r(2097),x=r(4771),v=r(4867),f=r(1588);function g(e){return(0,v.Z)("MuiCollapse",e)}(0,f.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const Z=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],j=(0,l.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,n[r.orientation],"entered"===r.state&&n.entered,"exited"===r.state&&!r.in&&"0px"===r.collapsedSize&&n.hidden]}})((({theme:e,ownerState:n})=>(0,i.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===n.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===n.state&&(0,i.Z)({height:"auto",overflow:"visible"},"horizontal"===n.orientation&&{width:"auto"}),"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&{visibility:"hidden"}))),b=(0,l.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,n)=>n.wrapper})((({ownerState:e})=>(0,i.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),y=(0,l.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,n)=>n.wrapperInner})((({ownerState:e})=>(0,i.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),w=s.forwardRef((function(e,n){const r=(0,c.Z)({props:e,name:"MuiCollapse"}),{addEndListener:l,children:v,className:f,collapsedSize:w="0px",component:R,easing:C,in:N,onEnter:E,onEntered:S,onEntering:z,onExit:M,onExited:k,onExiting:I,orientation:q="vertical",style:A,timeout:T=p.x9.standard,TransitionComponent:$=u.ZP}=r,D=(0,o.Z)(r,Z),G=(0,i.Z)({},r,{orientation:q,collapsedSize:w}),P=(e=>{const{orientation:n,classes:r}=e,t={root:["root",`${n}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${n}`],wrapperInner:["wrapperInner",`${n}`]};return(0,d.Z)(t,g,r)})(G),_=(0,m.Z)(),B=s.useRef(),V=s.useRef(null),W=s.useRef(),H="number"===typeof w?`${w}px`:w,L="horizontal"===q,U=L?"width":"height";s.useEffect((()=>()=>{clearTimeout(B.current)}),[]);const F=s.useRef(null),X=(0,x.Z)(n,F),O=e=>n=>{if(e){const r=F.current;void 0===n?e(r):e(r,n)}},Y=()=>V.current?V.current[L?"clientWidth":"clientHeight"]:0,J=O(((e,n)=>{V.current&&L&&(V.current.style.position="absolute"),e.style[U]=H,E&&E(e,n)})),K=O(((e,n)=>{const r=Y();V.current&&L&&(V.current.style.position="");const{duration:t,easing:s}=(0,h.C)({style:A,timeout:T,easing:C},{mode:"enter"});if("auto"===T){const n=_.transitions.getAutoHeightDuration(r);e.style.transitionDuration=`${n}ms`,W.current=n}else e.style.transitionDuration="string"===typeof t?t:`${t}ms`;e.style[U]=`${r}px`,e.style.transitionTimingFunction=s,z&&z(e,n)})),Q=O(((e,n)=>{e.style[U]="auto",S&&S(e,n)})),ee=O((e=>{e.style[U]=`${Y()}px`,M&&M(e)})),ne=O(k),re=O((e=>{const n=Y(),{duration:r,easing:t}=(0,h.C)({style:A,timeout:T,easing:C},{mode:"exit"});if("auto"===T){const r=_.transitions.getAutoHeightDuration(n);e.style.transitionDuration=`${r}ms`,W.current=r}else e.style.transitionDuration="string"===typeof r?r:`${r}ms`;e.style[U]=H,e.style.transitionTimingFunction=t,I&&I(e)}));return(0,t.jsx)($,(0,i.Z)({in:N,onEnter:J,onEntered:Q,onEntering:K,onExit:ee,onExited:ne,onExiting:re,addEndListener:e=>{"auto"===T&&(B.current=setTimeout(e,W.current||0)),l&&l(F.current,e)},nodeRef:F,timeout:"auto"===T?null:T},D,{children:(e,n)=>(0,t.jsx)(j,(0,i.Z)({as:R,className:(0,a.Z)(P.root,f,{entered:P.entered,exited:!N&&"0px"===H&&P.hidden}[e]),style:(0,i.Z)({[L?"minWidth":"minHeight"]:H},A),ownerState:(0,i.Z)({},G,{state:e}),ref:X},n,{children:(0,t.jsx)(b,{ownerState:(0,i.Z)({},G,{state:e}),className:P.wrapper,ref:V,children:(0,t.jsx)(y,{ownerState:(0,i.Z)({},G,{state:e}),className:P.wrapperInner,children:v})})}))}))}));w.muiSupportAuto=!0;var R=w,C=r(918);var N=s.createContext({}),E=r(4591);function S(e){return(0,v.Z)("MuiAccordion",e)}var z=(0,f.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]);const M=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],k=(0,l.ZP)(C.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[{[`& .${z.region}`]:n.region},n.root,!r.square&&n.rounded,!r.disableGutters&&n.gutters]}})((({theme:e})=>{const n={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],n),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],n)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${z.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${z.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}}),(({theme:e,ownerState:n})=>(0,i.Z)({},!n.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!n.disableGutters&&{[`&.${z.expanded}`]:{margin:"16px 0"}})));var I=s.forwardRef((function(e,n){const r=(0,c.Z)({props:e,name:"MuiAccordion"}),{children:l,className:u,defaultExpanded:p=!1,disabled:h=!1,disableGutters:m=!1,expanded:x,onChange:v,square:f=!1,TransitionComponent:g=R,TransitionProps:Z}=r,j=(0,o.Z)(r,M),[b,y]=(0,E.Z)({controlled:x,default:p,name:"Accordion",state:"expanded"}),w=s.useCallback((e=>{y(!b),v&&v(e,!b)}),[b,v,y]),[C,...z]=s.Children.toArray(l),I=s.useMemo((()=>({expanded:b,disabled:h,disableGutters:m,toggle:w})),[b,h,m,w]),q=(0,i.Z)({},r,{square:f,disabled:h,disableGutters:m,expanded:b}),A=(e=>{const{classes:n,square:r,expanded:t,disabled:s,disableGutters:o}=e,i={root:["root",!r&&"rounded",t&&"expanded",s&&"disabled",!o&&"gutters"],region:["region"]};return(0,d.Z)(i,S,n)})(q);return(0,t.jsxs)(k,(0,i.Z)({className:(0,a.Z)(A.root,u),ref:n,ownerState:q,square:f},j,{children:[(0,t.jsx)(N.Provider,{value:I,children:C}),(0,t.jsx)(g,(0,i.Z)({in:b,timeout:"auto"},Z,{children:(0,t.jsx)("div",{"aria-labelledby":C.props.id,id:C.props["aria-controls"],role:"region",className:A.region,children:z})}))]}))})),q=r(9828);function A(e){return(0,v.Z)("MuiAccordionSummary",e)}var T=(0,f.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);const $=["children","className","expandIcon","focusVisibleClassName","onClick"],D=(0,l.ZP)(q.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,n)=>n.root})((({theme:e,ownerState:n})=>{const r={duration:e.transitions.duration.shortest};return(0,i.Z)({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],r),[`&.${T.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${T.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${T.disabled})`]:{cursor:"pointer"}},!n.disableGutters&&{[`&.${T.expanded}`]:{minHeight:64}})})),G=(0,l.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,n)=>n.content})((({theme:e,ownerState:n})=>(0,i.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!n.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${T.expanded}`]:{margin:"20px 0"}}))),P=(0,l.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,n)=>n.expandIconWrapper})((({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${T.expanded}`]:{transform:"rotate(180deg)"}})));var _=s.forwardRef((function(e,n){const r=(0,c.Z)({props:e,name:"MuiAccordionSummary"}),{children:l,className:u,expandIcon:p,focusVisibleClassName:h,onClick:m}=r,x=(0,o.Z)(r,$),{disabled:v=!1,disableGutters:f,expanded:g,toggle:Z}=s.useContext(N),j=(0,i.Z)({},r,{expanded:g,disabled:v,disableGutters:f}),b=(e=>{const{classes:n,expanded:r,disabled:t,disableGutters:s}=e,o={root:["root",r&&"expanded",t&&"disabled",!s&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!s&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]};return(0,d.Z)(o,A,n)})(j);return(0,t.jsxs)(D,(0,i.Z)({focusRipple:!1,disableRipple:!0,disabled:v,component:"div","aria-expanded":g,className:(0,a.Z)(b.root,u),focusVisibleClassName:(0,a.Z)(b.focusVisible,h),onClick:e=>{Z&&Z(e),m&&m(e)},ref:n,ownerState:j},x,{children:[(0,t.jsx)(G,{className:b.content,ownerState:j,children:l}),p&&(0,t.jsx)(P,{className:b.expandIconWrapper,ownerState:j,children:p})]}))}));function B(e){return(0,v.Z)("MuiAccordionDetails",e)}(0,f.Z)("MuiAccordionDetails",["root"]);const V=["className"],W=(0,l.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,n)=>n.root})((({theme:e})=>({padding:e.spacing(1,2,2)})));var H=s.forwardRef((function(e,n){const r=(0,c.Z)({props:e,name:"MuiAccordionDetails"}),{className:s}=r,l=(0,o.Z)(r,V),u=r,p=(e=>{const{classes:n}=e;return(0,d.Z)({root:["root"]},B,n)})(u);return(0,t.jsx)(W,(0,i.Z)({className:(0,a.Z)(p.root,s),ref:n,ownerState:u},l))})),L=r(9630),U=r(3508),F=r(5084);var X=function(){return(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"underline",children:"Rejoignez-nous"}),(0,t.jsxs)("div",{className:"flex justifyCenter alignItemsCenter",children:[(0,t.jsxs)("div",{className:"accordion",children:[(0,t.jsx)("h2",{children:"Pour les \xe9l\xe8ves"}),(0,t.jsxs)(I,{children:[(0,t.jsx)(_,{expandIcon:(0,t.jsx)(U.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,t.jsx)(L.Z,{children:"Remplis le formulaire pour les \xe9l\xe8ves"})}),(0,t.jsxs)(H,{children:[(0,t.jsx)(L.Z,{children:"Nous te remercions de l'int\xe9r\xeat que tu nous portes, afin de devenir \xe9l\xe8ve, tu dois commencer par compl\xe9ter le formulaire d'inscription ci-dessous."}),(0,t.jsx)(F.Z,{href:"https://forms.gle/jZ84PZkjzd376jSh6",target:"_blank",style:{background:"#4B0082",margin:"1rem auto"},variant:"contained",children:"Formulaire d'inscription Gratuit (Google Form)"}),(0,t.jsx)(L.Z,{children:"Une fois le formulaire valid\xe9, nous te conctaterons sous 48h."})]})]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(_,{expandIcon:(0,t.jsx)(U.Z,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:(0,t.jsx)(L.Z,{children:"Connecte-toi au discord de l'association"})}),(0,t.jsxs)(H,{children:[(0,t.jsx)(L.Z,{children:"Tu peux ensuite te connecter au Discord, pour te familiariser avec l'environnement de travail. Une fois ton inscription valid\xe9e, nous t'attribuerons les permissions ad\xe9quates."}),(0,t.jsx)(F.Z,{href:"https://discord.gg/q9SCsaMaY5",target:"_blank",style:{background:"#4B0082",margin:"1rem auto"},variant:"contained",children:"Discord de l'association"}),(0,t.jsx)(L.Z,{children:"N'h\xe9site pas \xe0 contacter un mod\xe9rateur, si tu as des questions."})]})]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(_,{expandIcon:(0,t.jsx)(U.Z,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:(0,t.jsx)(L.Z,{children:"Trouve un/des professeur(s) qui te correspond(ent)"})}),(0,t.jsxs)(H,{children:[(0,t.jsx)(L.Z,{children:"Une fois les deux \xe9tapes pr\xe9c\xe9dentes compl\xe9t\xe9es, les permissions d'\xe9l\xe8ve (dans la/les mati\xe8re(s) pour lequelles tu as \xe9t\xe9 inscrit) te seront accord\xe9es sur Discord."}),(0,t.jsx)(L.Z,{style:{marginTop:"1rem"},children:'Tu pourras alors publier dans le channel "Annonces" de chaque mati\xe8re, une annonce pour trouver des professeurs correspondant \xe0 tes exigences (de planning et de niveau).'})]})]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(_,{expandIcon:(0,t.jsx)(U.Z,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:(0,t.jsx)(L.Z,{children:"Commence \xe0 travailler"})}),(0,t.jsx)(H,{children:(0,t.jsx)(L.Z,{children:"Tu peux commencer \xe0 suivre tes cours hebdomadaires, \xe0 poser des questions \xe0 tes professeurs, etc"})})]})]}),(0,t.jsxs)("div",{className:"accordion",children:[(0,t.jsx)("h2",{children:"Pour les professeurs"}),(0,t.jsxs)(I,{children:[(0,t.jsx)(_,{expandIcon:(0,t.jsx)(U.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,t.jsx)(L.Z,{children:"Remplissez le formulaire pour les professeurs"})}),(0,t.jsxs)(H,{children:[(0,t.jsx)(L.Z,{children:"Nous vous remercions de l'int\xe9r\xeat que vous nous portez, afin de devenir professeur, vous devez commencer par compl\xe9ter le formulaire de candidature ci-dessous."}),(0,t.jsx)(F.Z,{href:"https://forms.gle/qHD3cHiUXd4LfBXT9",target:"_blank",style:{background:"#4B0082",margin:"1rem auto"},variant:"contained",children:"Formulaire de candidature (Google Form)"}),(0,t.jsx)(L.Z,{children:"Une fois le formulaire valid\xe9, nous vous conctaterons sous 48h."})]})]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(_,{expandIcon:(0,t.jsx)(U.Z,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:(0,t.jsx)(L.Z,{children:"Connectez-vous au discord de l'association"})}),(0,t.jsxs)(H,{children:[(0,t.jsx)(L.Z,{children:"Vous pouvez ensuite vous connecter au Discord, pour vous familiariser avec l'environnement de travail. Une fois votre candidature valid\xe9e, nous vous attribuerons les permissions ad\xe9quates."}),(0,t.jsx)(F.Z,{href:"https://discord.gg/q9SCsaMaY5",target:"_blank",style:{background:"#4B0082",margin:"1rem auto"},variant:"contained",children:"Discord de l'association"}),(0,t.jsx)(L.Z,{children:"N'h\xe9sitez pas \xe0 contacter un mod\xe9rateur, si vous avez des questions."})]})]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(_,{expandIcon:(0,t.jsx)(U.Z,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:(0,t.jsx)(L.Z,{children:"Constitution de votre/vos groupe(s) d'\xe9l\xe8ves"})}),(0,t.jsxs)(H,{children:[(0,t.jsx)(L.Z,{children:"Une fois les deux \xe9tapes pr\xe9c\xe9dentes compl\xe9t\xe9es, les permissions de professeur (dans la/les mati\xe8re(s) pour lequelles vous avez \xe9t\xe9 accept\xe9) vous seront accord\xe9es sur Discord."}),(0,t.jsx)(L.Z,{style:{marginTop:"1rem"},children:'Vous pourrez alors publier dans le channel "Annonces" de chaque mati\xe8re, une annonce pour trouver des \xe9l\xe8ves correspondant \xe0 vos exigences (de planning et de niveau).'})]})]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(_,{expandIcon:(0,t.jsx)(U.Z,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:(0,t.jsx)(L.Z,{children:"Commencez \xe0 enseigner et partager avec vos coll\xe8gues"})}),(0,t.jsx)(H,{children:(0,t.jsx)(L.Z,{children:"Vous pouvez maintenant commencez \xe0 aider vos \xe9l\xe8ves, de nombreuses ressources sont \xe0 votre disposition sur le Discord, vous pouvez \xe9galement discuter avec d'autres professeurs plus exp\xe9riment\xe9s."})})]})]})]})]})}}},function(e){e.O(0,[774,888,179],(function(){return n=824,e(e.s=n);var n}));var n=e.O();_N_E=n}]);