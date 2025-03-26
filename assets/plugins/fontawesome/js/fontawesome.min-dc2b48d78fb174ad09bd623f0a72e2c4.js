/*!
 * Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
!function(){"use strict"
let t={},e={},a=null,n={mark:k=()=>{},measure:k}
try{"undefined"!=typeof window&&(t=window),"undefined"!=typeof document&&(e=document),"undefined"!=typeof MutationObserver&&(a=MutationObserver),"undefined"!=typeof performance&&(n=performance)}catch(k){}const{userAgent:r=""}=t.navigator||{},i=t,o=e,s=a
var c=n
const l=!!i.document,f=!!o.documentElement&&!!o.head&&"function"==typeof o.addEventListener&&"function"==typeof o.createElement,u=~r.indexOf("MSIE")||~r.indexOf("Trident/")
var m="classic",d="duotone",p="sharp",h="sharp-duotone",g=[m,d,p,h],b={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},v=(w=[1,2,3,4,5,6,7,8,9,10]).concat([11,12,13,14,15,16,17,18,19,20]),y={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},x=[...Object.keys({classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]}),"solid","regular","light","thin","duotone","brands","2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",y.GROUP,y.SWAP_OPACITY,y.PRIMARY,y.SECONDARY].concat(w.map((t=>"".concat(t,"x")))).concat(v.map((t=>"w-".concat(t)))),k={kit:"fak"},w={"kit-duotone":"fakd"}
v="___FONT_AWESOME___"
const A=16,N="svg-inline--fa",O="data-fa-i2svg",P="data-fa-pseudo-element",C="data-prefix",S="data-icon",E="fontawesome-i2svg",M=["HTML","HEAD","STYLE","SCRIPT"],z=(()=>{try{return!0}catch(k){return!1}})(),j=[m,p,h]
function F(t){return new Proxy(t,{get:(t,e)=>e in t?t[e]:t[m]})}const L={...b}
L[m]={...b[m],fak:"kit","fa-kit":"kit",fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}
const R=F(L),I={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}}
I[m]={...I[m],...k,...w}
const D=F(I),T={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}}
T[m]={...T[m],fak:"fa-kit"}
const Y=F(T),H={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}}
H[m]={...H[m],"fa-kit":"fak"}
const W=F(H),_=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,B="fa-layers-text",U=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i
F({classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}})
const X=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],q=y,V=new Set
Object.keys(D[m]).map(V.add.bind(V)),Object.keys(D[p]).map(V.add.bind(V)),Object.keys(D[h]).map(V.add.bind(V))
const G=["kit",...x],K=i.FontAwesomeConfig||{}
if(o&&"function"==typeof o.querySelector){[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((t=>{var[e,t]=t,e=""===(e=function(t){var e=o.querySelector("script["+t+"]")
if(e)return e.getAttribute(t)}(e))||"false"!==e&&("true"===e||e)
null!=e&&(K[t]=e)}))}w={styleDefault:"solid",familyDefault:"classic",cssPrefix:"fa",replacementClass:N,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},K.familyPrefix&&(K.cssPrefix=K.familyPrefix)
const J={...w,...K}
J.autoReplaceSvg||(J.observeMutations=!1)
const Q={}
Object.keys(w).forEach((t=>{Object.defineProperty(Q,t,{enumerable:!0,set:function(e){J[t]=e,Z.forEach((t=>t(Q)))},get:function(){return J[t]}})})),Object.defineProperty(Q,"familyPrefix",{enumerable:!0,set:function(t){J.cssPrefix=t,Z.forEach((t=>t(Q)))},get:function(){return J.cssPrefix}}),i.FontAwesomeConfig=Q
const Z=[],$=A,tt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1}
function et(){let t=12,e=""
for(;0<t--;)e+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0]
return e}function at(t){const e=[]
for(let a=(t||[]).length>>>0;a--;)e[a]=t[a]
return e}function nt(t){return t.classList?at(t.classList):(t.getAttribute("class")||"").split(" ").filter((t=>t))}function rt(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function it(t){return Object.keys(t||{}).reduce(((e,a)=>e+"".concat(a,": ").concat(t[a].trim(),";")),"")}function ot(t){return t.size!==tt.size||t.x!==tt.x||t.y!==tt.y||t.rotate!==tt.rotate||t.flipX||t.flipY}function st(){var t,e,a=N,n=Q.cssPrefix,r=Q.replacementClass
let i=':host,:root{--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Free";--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Free";--fa-font-light:normal 300 1em/1 "Font Awesome 6 Pro";--fa-font-thin:normal 100 1em/1 "Font Awesome 6 Pro";--fa-font-duotone:normal 900 1em/1 "Font Awesome 6 Duotone";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands";--fa-font-sharp-solid:normal 900 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-regular:normal 400 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-light:normal 300 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-thin:normal 100 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-duotone-solid:normal 900 1em/1 "Font Awesome 6 Sharp Duotone"}svg:not(:host).svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible;box-sizing:content-box}.svg-inline--fa{display:var(--fa-display,inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.0714285705em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-li{width:var(--fa-li-width,2em);top:.25em}.svg-inline--fa.fa-fw{width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{transform-origin:center center}.fa-layers-text{left:50%;top:50%;transform:translate(-50%,-50%);transform-origin:center center}.fa-layers-counter{background-color:var(--fa-counter-background-color,#ff253a);border-radius:var(--fa-counter-border-radius,1em);box-sizing:border-box;color:var(--fa-inverse,#fff);line-height:var(--fa-counter-line-height,1);max-width:var(--fa-counter-max-width,5em);min-width:var(--fa-counter-min-width,1.5em);overflow:hidden;padding:var(--fa-counter-padding,.25em .5em);right:var(--fa-right,0);text-overflow:ellipsis;top:var(--fa-top,0);transform:scale(var(--fa-counter-scale,.25));transform-origin:top right}.fa-layers-bottom-right{bottom:var(--fa-bottom,0);right:var(--fa-right,0);top:auto;transform:scale(var(--fa-layers-scale,.25));transform-origin:bottom right}.fa-layers-bottom-left{bottom:var(--fa-bottom,0);left:var(--fa-left,0);right:auto;top:auto;transform:scale(var(--fa-layers-scale,.25));transform-origin:bottom left}.fa-layers-top-right{top:var(--fa-top,0);right:var(--fa-right,0);transform:scale(var(--fa-layers-scale,.25));transform-origin:top right}.fa-layers-top-left{left:var(--fa-left,0);right:auto;top:var(--fa-top,0);transform:scale(var(--fa-layers-scale,.25));transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.0833333337em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.0714285718em;vertical-align:.0535714295em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.0416666682em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(-1 * var(--fa-li-width,2em));position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-color:var(--fa-border-color,#eee);border-radius:var(--fa-border-radius,.1em);border-style:var(--fa-border-style,solid);border-width:var(--fa-border-width,.08em);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{animation-name:fa-beat;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{animation-name:fa-bounce;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{animation-name:fa-fade;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade{animation-name:fa-beat-fade;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{animation-name:fa-flip;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{animation-name:fa-shake;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin{animation-name:fa-spin;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,2s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{animation-name:fa-spin;animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{animation-delay:-1ms;animation-duration:1ms;animation-iteration-count:1;transition-delay:0s;transition-duration:0s}}@keyframes fa-beat{0%,90%{transform:scale(1)}45%{transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-bounce{0%{transform:scale(1,1) translateY(0)}10%{transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{transform:scale(1,1) translateY(0)}100%{transform:scale(1,1) translateY(0)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);transform:scale(1)}50%{opacity:1;transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-flip{50%{transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-shake{0%{transform:rotate(-15deg)}4%{transform:rotate(15deg)}24%,8%{transform:rotate(-18deg)}12%,28%{transform:rotate(18deg)}16%{transform:rotate(-22deg)}20%{transform:rotate(22deg)}32%{transform:rotate(-12deg)}36%{transform:rotate(12deg)}100%,40%{transform:rotate(0)}}@keyframes fa-spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fa-rotate-90{transform:rotate(90deg)}.fa-rotate-180{transform:rotate(180deg)}.fa-rotate-270{transform:rotate(270deg)}.fa-flip-horizontal{transform:scale(-1,1)}.fa-flip-vertical{transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{transform:scale(-1,-1)}.fa-rotate-by{transform:rotate(var(--fa-rotate-angle,0))}.fa-stack{display:inline-block;vertical-align:middle;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:var(--fa-stack-z-index,auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:var(--fa-inverse,#fff)}.fa-sr-only,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fa-sr-only-focusable:not(:focus),.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fa-duotone.fa-inverse,.fad.fa-inverse{color:var(--fa-inverse,#fff)}'
return"fa"===n&&r===a||(t=new RegExp("\\.".concat("fa","\\-"),"g"),e=new RegExp("\\--".concat("fa","\\-"),"g"),a=new RegExp("\\.".concat(a),"g"),i=i.replace(t,".".concat(n,"-")).replace(e,"--".concat(n,"-")).replace(a,".".concat(r))),i}let ct=!1
function lt(){Q.autoAddCss&&!ct&&(function(t){if(t&&f){const n=o.createElement("style")
n.setAttribute("type","text/css"),n.innerHTML=t
var e=o.head.childNodes
let r=null
for(let t=e.length-1;-1<t;t--){const n=e[t]
var a=(n.tagName||"").toUpperCase();-1<["STYLE","LINK"].indexOf(a)&&(r=n)}o.head.insertBefore(n,r)}}(st()),ct=!0)}y={mixout:()=>({dom:{css:st,insertCss:lt}}),hooks:()=>({beforeDOMElementCreation(){lt()},beforeI2svg(){lt()}})}
const ft=i||{}
ft[v]||(ft[v]={}),ft[v].styles||(ft[v].styles={}),ft[v].hooks||(ft[v].hooks={}),ft[v].shims||(ft[v].shims=[])
var ut=ft[v]
const mt=[]
let dt=!1
function pt(t){f&&(dt?setTimeout(t,0):mt.push(t))}function ht(t){const{tag:e,attributes:a={},children:n=[]}=t
return"string"==typeof t?rt(t):"<".concat(e," ").concat((r=a,Object.keys(r||{}).reduce(((t,e)=>t+"".concat(e,'="').concat(rt(r[e]),'" ')),"").trim()),">").concat(n.map(ht).join(""),"</").concat(e,">")
var r}function gt(t,e,a){if(t&&t[e]&&t[e][a])return{prefix:e,iconName:a,icon:t[e][a]}}function bt(t,e,a,n){for(var r,i,o=Object.keys(t),s=o.length,c=void 0!==n?vt(e,n):e,l=void 0===a?(r=1,t[o[0]]):(r=0,a);r<s;r++)l=c(l,t[i=o[r]],i,t)
return l}f&&(dt=(o.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState),dt||o.addEventListener("DOMContentLoaded",(function t(){o.removeEventListener("DOMContentLoaded",t),dt=1,mt.map((t=>t()))})))
var vt=function(t,e){return function(a,n,r,i){return t.call(e,a,n,r,i)}}
function yt(t){const e=function(t){const e=[]
let a=0
for(var n=t.length;a<n;){var r,i=t.charCodeAt(a++)
55296<=i&&i<=56319&&a<n?56320==(64512&(r=t.charCodeAt(a++)))?e.push(((1023&i)<<10)+(1023&r)+65536):(e.push(i),a--):e.push(i)}return e}(t)
return 1===e.length?e[0].toString(16):null}function xt(t){return Object.keys(t).reduce(((e,a)=>{var n=t[a]
return n.icon?e[n.iconName]=n.icon:e[a]=n,e}),{})}function kt(t,e,a){var{skipHooks:n=!1}=2<arguments.length&&void 0!==a?a:{}
a=xt(e)
"function"!=typeof ut.hooks.addPack||n?ut.styles[t]={...ut.styles[t]||{},...a}:ut.hooks.addPack(t,xt(e)),"fas"===t&&kt("fa",e)}const{styles:wt,shims:At}=ut,Nt={classic:Object.values(Y[m]),sharp:Object.values(Y[p]),"sharp-duotone":Object.values(Y[h])}
let Ot=null,Pt={},Ct={},St={},Et={},Mt={}
const zt={classic:Object.keys(R[m]),sharp:Object.keys(R[p]),"sharp-duotone":Object.keys(R[h])}
const jt=()=>{var t=t=>bt(wt,((e,a,n)=>(e[n]=bt(a,t,{}),e)),{})
Pt=t(((t,e,a)=>{if(e[3]&&(t[e[3]]=a),e[2]){e[2].filter((t=>"number"==typeof t)).forEach((e=>{t[e.toString(16)]=a}))}return t})),Ct=t(((t,e,a)=>{if(t[a]=a,e[2]){e[2].filter((t=>"string"==typeof t)).forEach((e=>{t[e]=a}))}return t})),Mt=t(((t,e,a)=>{const n=e[2]
return t[a]=a,n.forEach((e=>{t[e]=a})),t}))
const e="far"in wt||Q.autoFetchSvg
t=bt(At,((t,a)=>{const n=a[0]
let r=a[1]
return a=a[2],"far"!==r||e||(r="fas"),"string"==typeof n&&(t.names[n]={prefix:r,iconName:a}),"number"==typeof n&&(t.unicodes[n.toString(16)]={prefix:r,iconName:a}),t}),{names:{},unicodes:{}}),St=t.names,Et=t.unicodes,Ot=It(Q.styleDefault,{family:Q.familyDefault})}
function Ft(t,e){return(Pt[t]||{})[e]}function Lt(t,e){return(Mt[t]||{})[e]}function Rt(t){return St[t]||{prefix:null,iconName:null}}x=t=>{Ot=It(t.styleDefault,{family:Q.familyDefault})},Z.push(x),jt()
function It(t,e){var{family:a=m}=1<arguments.length&&void 0!==e?e:{}
e=R[a][t],e=D[a][t]||D[a][e],t=t in ut.styles?t:null
return e||t||null}const Dt={classic:Object.keys(Y[m]),sharp:Object.keys(Y[p]),"sharp-duotone":Object.keys(Y[h])}
function Tt(t,e){const{skipLookups:a=!1}=1<arguments.length&&void 0!==e?e:{},n={classic:"".concat(Q.cssPrefix,"-").concat(m),sharp:"".concat(Q.cssPrefix,"-").concat(p),"sharp-duotone":"".concat(Q.cssPrefix,"-").concat(h)}
let r=null,i=m
const o=g.filter((t=>t!==d))
o.forEach((e=>{(t.includes(n[e])||t.some((t=>Dt[e].includes(t))))&&(i=e)}))
const s=t.reduce(((t,e)=>{var s,c=function(t,e){const a=e.split("-")
var n=a[0]
return e=a.slice(1).join("-"),n!==t||""===e||(t=e,~G.indexOf(t))?null:e}(Q.cssPrefix,e)
return wt[e]?(e=Nt[i].includes(e)?W[i][e]:e,r=e,t.prefix=e):-1<zt[i].indexOf(e)?(r=e,t.prefix=It(e,{family:i})):c?t.iconName=c:e===Q.replacementClass||o.some((t=>e===n[t]))||t.rest.push(e),!a&&t.prefix&&t.iconName&&(s="fa"===r?Rt(t.iconName):{},c=Lt(t.prefix,t.iconName),s.prefix&&(r=null),t.iconName=s.iconName||c||t.iconName,t.prefix=s.prefix||t.prefix,"far"!==t.prefix||wt.far||!wt.fas||Q.autoFetchSvg||(t.prefix="fas")),t}),{prefix:null,iconName:null,rest:[]})
return(t.includes("fa-brands")||t.includes("fab"))&&(s.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(s.prefix="fad"),s.prefix||i!==p||!wt.fass&&!Q.autoFetchSvg||(s.prefix="fass",s.iconName=Lt(s.prefix,s.iconName)||s.iconName),s.prefix||i!==h||!wt.fasds&&!Q.autoFetchSvg||(s.prefix="fasds",s.iconName=Lt(s.prefix,s.iconName)||s.iconName),"fa"!==s.prefix&&"fa"!==r||(s.prefix=Ot||"fas"),s}let Yt=[],Ht={}
const Wt={},_t=Object.keys(Wt)
function Bt(t,e){for(var a=arguments.length,n=new Array(2<a?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r]
return(Ht[t]||[]).forEach((t=>{e=t.apply(null,[e,...n])})),e}function Ut(t){for(var e=arguments.length,a=new Array(1<e?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];(Ht[t]||[]).forEach((t=>{t.apply(null,a)}))}function Xt(t){var e=t
t=Array.prototype.slice.call(arguments,1)
return Wt[e]?Wt[e].apply(null,t):void 0}function qt(t){"fa"===t.prefix&&(t.prefix="fas")
let e=t.iconName
if(t=t.prefix||Ot,e)return e=Lt(t,e)||e,gt(Vt.definitions,t,e)||gt(ut.styles,t,e)}const Vt=new class{constructor(){this.definitions={}}add(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a]
const n=e.reduce(this._pullDefinitions,{})
Object.keys(n).forEach((t=>{this.definitions[t]={...this.definitions[t]||{},...n[t]},kt(t,n[t])
var e=Y[m][t]
e&&kt(e,n[t]),jt()}))}reset(){this.definitions={}}_pullDefinitions(t,e){const a=e.prefix&&e.iconName&&e.icon?{0:e}:e
return Object.keys(a).map((e=>{const{prefix:n,iconName:r,icon:i}=a[e],o=i[2]
t[n]||(t[n]={}),0<o.length&&o.forEach((e=>{"string"==typeof e&&(t[n][e]=i)})),t[n][r]=i})),t}},Gt={noAuto:()=>{Q.autoReplaceSvg=!1,Q.observeMutations=!1,Ut("noAuto")},config:Q,dom:{i2svg:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}
return f?(Ut("beforeI2svg",t),Xt("pseudoElements2svg",t),Xt("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}
const e=t.autoReplaceSvgRoot
!1===Q.autoReplaceSvg&&(Q.autoReplaceSvg=!0),Q.observeMutations=!0,pt((()=>{Kt({autoReplaceSvgRoot:e}),Ut("watch",t)}))}},parse:{icon:t=>{if(null===t)return null
if("object"==typeof t&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Lt(t.prefix,t.iconName)||t.iconName}
if(Array.isArray(t)&&2===t.length){var e=0===t[1].indexOf("fa-")?t[1].slice(3):t[1],a=It(t[0])
return{prefix:a,iconName:Lt(a,e)||e}}return"string"==typeof t&&(-1<t.indexOf("".concat(Q.cssPrefix,"-"))||t.match(_))?{prefix:(e=Tt(t.split(" "),{skipLookups:!0})).prefix||Ot,iconName:Lt(e.prefix,e.iconName)||e.iconName}:"string"==typeof t?{prefix:Ot,iconName:Lt(Ot,t)||t}:void 0}},library:Vt,findIconDefinition:qt,toHtml:ht},Kt=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},{autoReplaceSvgRoot:t=o}=t;(0<Object.keys(ut.styles).length||Q.autoFetchSvg)&&f&&Q.autoReplaceSvg&&Gt.dom.i2svg({node:t})}
function Jt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map((t=>ht(t)))}}),Object.defineProperty(t,"node",{get:function(){if(f){const e=o.createElement("div")
return e.innerHTML=t.html,e.children}}}),t}function Qt(t){const{icons:{main:e,mask:a},prefix:n,iconName:r,transform:i,symbol:o,title:s,maskId:c,titleId:l,extra:f,watchable:u=!1}=t
var{width:m,height:d}=a.found?a:e,p="fak"===n
t=[Q.replacementClass,r?"".concat(Q.cssPrefix,"-").concat(r):""].filter((t=>-1===f.classes.indexOf(t))).filter((t=>""!==t||!!t)).concat(f.classes).join(" ")
let h={children:[],attributes:{...f.attributes,"data-prefix":n,"data-icon":r,class:t,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(d)}}
m=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/d*16*.0625,"em")}:{},u&&(h.attributes[O]=""),s&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(l||et())},children:[s]}),delete h.attributes.title)
const g={...h,prefix:n,iconName:r,main:e,mask:a,maskId:c,transform:i,symbol:o,styles:{...m,...f.styles}}
var{children:d,attributes:m}=a.found&&e.found?Xt("generateAbstractMask",g)||{children:[],attributes:{}}:Xt("generateAbstractIcon",g)||{children:[],attributes:{}}
return g.children=d,g.attributes=m,(o?function(t){var{prefix:e,iconName:a,children:n,attributes:r,symbol:t}=t
return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:t=!0===t?"".concat(e,"-").concat(Q.cssPrefix,"-").concat(a):t},children:n}]}]}:function(t){let{children:e,main:a,mask:n,attributes:r,styles:i,transform:o}=t
if(ot(o)&&a.found&&!n.found){var{width:s,height:t}=a
const e=s/t/2,n=.5
r.style=it({...i,"transform-origin":"".concat(e+o.x/16,"em ").concat(n+o.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]})(g)}function Zt(t){const{content:e,width:a,height:n,transform:r,title:i,extra:o,watchable:s=!1}=t,c={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")}
s&&(c[O]="")
const l={...o.styles}
ot(r)&&(l.transform=function(t){var{transform:e,width:a=A,height:n=A,startCentered:t=!1}=t
let r=""
return r+=t&&u?"translate(".concat(e.x/$-a/2,"em, ").concat(e.y/$-n/2,"em) "):t?"translate(calc(-50% + ".concat(e.x/$,"em), calc(-50% + ").concat(e.y/$,"em)) "):"translate(".concat(e.x/$,"em, ").concat(e.y/$,"em) "),r+="scale(".concat(e.size/$*(e.flipX?-1:1),", ").concat(e.size/$*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}({transform:r,startCentered:!0,width:a,height:n}),l["-webkit-transform"]=l.transform),0<(t=it(l)).length&&(c.style=t)
const f=[]
return f.push({tag:"span",attributes:c,children:[e]}),i&&f.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),f}const $t=ut.styles
function te(t){var e=t[0],a=t[1],[t]=t.slice(4)
let n=null
return n=Array.isArray(t)?{tag:"g",attributes:{class:"".concat(Q.cssPrefix,"-").concat(q.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Q.cssPrefix,"-").concat(q.SECONDARY),fill:"currentColor",d:t[0]}},{tag:"path",attributes:{class:"".concat(Q.cssPrefix,"-").concat(q.PRIMARY),fill:"currentColor",d:t[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:t}},{found:!0,width:e,height:a,icon:n}}const ee={found:!1,width:512,height:512}
function ae(t,e){let a=e
return"fa"===e&&null!==Q.styleDefault&&(e=Ot),new Promise(((n,r)=>{var i,o
if("fa"===a&&(o=Rt(t)||{},t=o.iconName||t,e=o.prefix||e),t&&e&&$t[e]&&$t[e][t])return n(te($t[e][t]))
i=t,o=e,z||Q.showMissingIcons||!i||console.error('Icon with name "'.concat(i,'" and prefix "').concat(o,'" is missing.')),n({...ee,icon:Q.showMissingIcons&&t&&Xt("missingIconAbstract")||{}})}))}w=()=>{}
const ne=Q.measurePerformance&&c&&c.mark&&c.measure?c:{mark:w,measure:w},re='FA "6.6.0"',ie=t=>{ne.mark("".concat(re," ").concat(t," ends")),ne.measure("".concat(re," ").concat(t),"".concat(re," ").concat(t," begins"),"".concat(re," ").concat(t," ends"))}
var oe=t=>(ne.mark("".concat(re," ").concat(t," begins")),()=>ie(t))
const se=()=>{}
function ce(t){return"string"==typeof(t.getAttribute?t.getAttribute(O):null)}function le(t,e){const{ceFn:a=("svg"===t.tag?function(t){return o.createElementNS("http://www.w3.org/2000/svg",t)}:function(t){return o.createElement(t)})}=1<arguments.length&&void 0!==e?e:{}
if("string"==typeof t)return o.createTextNode(t)
const n=a(t.tag)
Object.keys(t.attributes||[]).forEach((function(e){n.setAttribute(e,t.attributes[e])}))
return(t.children||[]).forEach((function(t){n.appendChild(le(t,{ceFn:a}))})),n}const fe={replace:function(t){const e=t[0]
e.parentNode&&(t[1].forEach((t=>{e.parentNode.insertBefore(le(t),e)})),null===e.getAttribute(O)&&Q.keepOriginalSource?(t=o.createComment((t=" ".concat((t=e).outerHTML," "),t="".concat(t,"Font Awesome fontawesome.com "))),e.parentNode.replaceChild(t,e)):e.remove())},nest:function(t){const e=t[0],a=t[1]
if(~nt(e).indexOf(Q.replacementClass))return fe.replace(t)
const n=new RegExp("".concat(Q.cssPrefix,"-.*"))
if(delete a[0].attributes.id,a[0].attributes.class){const t=a[0].attributes.class.split(" ").reduce(((t,e)=>((e===Q.replacementClass||e.match(n)?t.toSvg:t.toNode).push(e),t)),{toNode:[],toSvg:[]})
a[0].attributes.class=t.toSvg.join(" "),0===t.toNode.length?e.removeAttribute("class"):e.setAttribute("class",t.toNode.join(" "))}t=a.map((t=>ht(t))).join("\n"),e.setAttribute(O,""),e.innerHTML=t}}
function ue(t){t()}function me(t,e){const a="function"==typeof e?e:se
if(0===t.length)a()
else{let e=ue
"async"===Q.mutateApproach&&(e=i.requestAnimationFrame||ue),e((()=>{var e=!0!==Q.autoReplaceSvg&&fe[Q.autoReplaceSvg]||fe.replace
const n=oe("mutate")
t.map(e),n(),a()}))}}let de=!1
function pe(){de=!0}function he(){de=!1}let ge=null
function be(t){if(!s)return
if(!Q.observeMutations)return
const{treeCallback:e=se,nodeCallback:a=se,pseudoElementsCallback:n=se,observeMutationsRoot:r=o}=t
ge=new s((t=>{if(!de){const r=Ot
at(t).forEach((t=>{var i,o,s
"childList"===t.type&&0<t.addedNodes.length&&!ce(t.addedNodes[0])&&(Q.searchPseudoElements&&n(t.target),e(t.target)),"attributes"===t.type&&t.target.parentNode&&Q.searchPseudoElements&&n(t.target.parentNode),"attributes"===t.type&&ce(t.target)&&~X.indexOf(t.attributeName)&&("class"===t.attributeName&&(s=(o=t.target).getAttribute?o.getAttribute(C):null,o=o.getAttribute?o.getAttribute(S):null,s&&o)?(({prefix:o,iconName:i}=Tt(nt(t.target))),t.target.setAttribute(C,o||r),i&&t.target.setAttribute(S,i)):(i=t.target)&&i.classList&&i.classList.contains&&i.classList.contains(Q.replacementClass)&&a(t.target))}))}})),f&&ge.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ve(t,e){var a=1<arguments.length&&void 0!==e?e:{styleParser:!0},{iconName:n,prefix:r,rest:i}=function(t){var e=t.getAttribute("data-prefix"),a=t.getAttribute("data-icon"),n=void 0!==t.innerText?t.innerText.trim():""
let r=Tt(nt(t))
return r.prefix||(r.prefix=Ot),e&&a&&(r.prefix=e,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&0<n.length&&(r.iconName=(a=r.prefix,n=t.innerText,(Ct[a]||{})[n]||Ft(r.prefix,yt(t.innerText)))),!r.iconName&&Q.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}(t),o=function(t){const e=at(t.attributes).reduce(((t,e)=>("class"!==t.name&&"style"!==t.name&&(t[e.name]=e.value),t)),{})
var a=t.getAttribute("title")
t=t.getAttribute("data-fa-title-id")
return Q.autoA11y&&(a?e["aria-labelledby"]="".concat(Q.replacementClass,"-title-").concat(t||et()):(e["aria-hidden"]="true",e.focusable="false")),e}(t)
e=Bt("parseNodeAttributes",{},t),a=a.styleParser?function(t){const e=t.getAttribute("style")
let a=[]
return e&&(a=e.split(";").reduce(((t,e)=>{const a=e.split(":")
e=a[0]
const n=a.slice(1)
return e&&0<n.length&&(t[e]=n.join(":").trim()),t}),{})),a}(t):[]
return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:tt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:o},...e}}const ye=ut.styles
function xe(t){const e="nest"===Q.autoReplaceSvg?ve(t,{styleParser:!1}):ve(t)
return~e.extra.classes.indexOf(B)?Xt("generateLayersText",t,e):Xt("generateSvgReplacementMutation",t,e)}let ke=new Set
function we(t){let e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null
if(!f)return Promise.resolve()
const a=o.documentElement.classList,n=t=>a.add("".concat(E,"-").concat(t)),r=t=>a.remove("".concat(E,"-").concat(t)),i=Q.autoFetchSvg?ke:j.map((t=>"fa-".concat(t))).concat(Object.keys(ye))
i.includes("fa")||i.push("fa")
var s=[".".concat(B,":not([").concat(O,"])")].concat(i.map((t=>".".concat(t,":not([").concat(O,"])")))).join(", ")
if(0===s.length)return Promise.resolve()
let c=[]
try{c=at(t.querySelectorAll(s))}catch(t){}if(!(0<c.length))return Promise.resolve()
n("pending"),r("complete")
const l=oe("onTree"),u=c.reduce(((t,e)=>{try{var a=xe(e)
a&&t.push(a)}catch(t){z||"MissingIcon"===t.name&&console.error(t)}return t}),[])
return new Promise(((t,a)=>{Promise.all(u).then((a=>{me(a,(()=>{n("active"),n("complete"),r("pending"),"function"==typeof e&&e(),l(),t()}))})).catch((t=>{l(),a(t)}))}))}function Ae(t){let e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null
xe(t).then((t=>{t&&me([t],e)}))}function Ne(t){let e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}
const{transform:a=tt,symbol:n=!1,mask:r=null,maskId:i=null,title:o=null,titleId:s=null,classes:c=[],attributes:l={},styles:f={}}=e
if(t){const{prefix:u,iconName:m,icon:d}=t
return Jt({type:"icon",...t},(()=>(Ut("beforeDOMElementCreation",{iconDefinition:t,params:e}),Q.autoA11y&&(o?l["aria-labelledby"]="".concat(Q.replacementClass,"-title-").concat(s||et()):(l["aria-hidden"]="true",l.focusable="false")),Qt({icons:{main:te(d),mask:r?te(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:u,iconName:m,transform:{...tt,...a},symbol:n,title:o,maskId:i,titleId:s,extra:{attributes:l,styles:f,classes:c}}))))}}j.map((t=>{ke.add("fa-".concat(t))})),Object.keys(R[m]).map(ke.add.bind(ke)),Object.keys(R[p]).map(ke.add.bind(ke)),Object.keys(R[h]).map(ke.add.bind(ke)),ke=[...ke],v={mixout(){return{icon:(t=Ne,function(e){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}
e=(e||{}).icon?e:qt(e||{})
let n=a.mask
return n=n&&((n||{}).icon?n:qt(n||{})),t(e,{...a,mask:n})})}
var t},hooks:()=>({mutationObserverCallbacks:t=>(t.treeCallback=we,t.nodeCallback=Ae,t)}),provides(t){t.i2svg=function(t){var{node:e=o,callback:t=()=>{}}=t
return we(e,t)},t.generateSvgReplacementMutation=function(t,e){const{iconName:a,title:n,titleId:r,prefix:i,transform:o,symbol:s,mask:c,maskId:l,extra:f}=e
return new Promise(((e,u)=>{Promise.all([ae(a,i),c.iconName?ae(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then((c=>{var[u,c]=c
e([t,Qt({icons:{main:u,mask:c},prefix:i,iconName:a,transform:o,symbol:s,maskId:l,title:n,titleId:r,extra:f,watchable:!0})])})).catch(u)}))},t.generateAbstractIcon=function(t){let e,{children:a,attributes:n,main:r,transform:i,styles:o}=t
return 0<(t=it(o)).length&&(n.style=t),ot(i)&&(e=Xt("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),a.push(e||r.icon),{children:a,attributes:n}}}},x={mixout:()=>({layer(t){let e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}
const{classes:a=[]}=e
return Jt({type:"layer"},(()=>{Ut("beforeDOMElementCreation",{assembler:t,params:e})
let n=[]
return t((t=>{Array.isArray(t)?t.map((t=>{n=n.concat(t.abstract)})):n=n.concat(t.abstract)})),[{tag:"span",attributes:{class:["".concat(Q.cssPrefix,"-layers"),...a].join(" ")},children:n}]}))}})},c={mixout:()=>({counter(t){let e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}
const{title:a=null,classes:n=[],attributes:r={},styles:i={}}=e
return Jt({type:"counter",content:t},(()=>(Ut("beforeDOMElementCreation",{content:t,params:e}),function(t){const{content:e,title:a,extra:n}=t,r={...n.attributes,...a?{title:a}:{},class:n.classes.join(" ")}
0<(t=it(n.styles)).length&&(r.style=t)
const i=[]
return i.push({tag:"span",attributes:r,children:[e]}),a&&i.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),i}({content:t.toString(),title:a,extra:{attributes:r,styles:i,classes:["".concat(Q.cssPrefix,"-layers-counter"),...n]}}))))}})},w={mixout:()=>({text(t){let e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}
const{transform:a=tt,title:n=null,classes:r=[],attributes:i={},styles:o={}}=e
return Jt({type:"text",content:t},(()=>(Ut("beforeDOMElementCreation",{content:t,params:e}),Zt({content:t,transform:{...tt,...a},title:n,extra:{attributes:i,styles:o,classes:["".concat(Q.cssPrefix,"-layers-text"),...r]}}))))}}),provides(t){t.generateLayersText=function(t,e){const{title:a,transform:n,extra:r}=e
let i=null,o=null
var s
return u&&(s=parseInt(getComputedStyle(t).fontSize,10),i=(e=t.getBoundingClientRect()).width/s,o=e.height/s),Q.autoA11y&&!a&&(r.attributes["aria-hidden"]="true"),Promise.resolve([t,Zt({content:t.innerHTML,width:i,height:o,transform:n,title:a,extra:r,watchable:!0})])}}}
const Oe=new RegExp('"',"ug"),Pe=[1105920,1112319],Ce={FontAwesome:{normal:"fas",400:"fas"},"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"},"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"},"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Se=Object.keys(Ce).reduce(((t,e)=>(t[e.toLowerCase()]=Ce[e],t)),{}),Ee=Object.keys(Se).reduce(((t,e)=>{var a=Se[e]
return t[e]=a[900]||[...Object.entries(a)][0][1],t}),{})
function Me(t,e){const a="".concat("data-fa-pseudo-element-pending").concat(e.replace(":","-"))
return new Promise(((n,r)=>{if(null!==t.getAttribute(a))return n()
const s=at(t.children).filter((t=>t.getAttribute(P)===e))[0],c=i.getComputedStyle(t,e),l=c.getPropertyValue("font-family"),f=l.match(U)
var u,m,d=c.getPropertyValue("font-weight")
const p=c.getPropertyValue("content")
if(s&&!f)return t.removeChild(s),n()
if(f&&"none"!==p&&""!==p){const i=c.getPropertyValue("content")
let p=(m=d,u=(u=l).replace(/^['"]|['"]$/g,"").toLowerCase(),m=parseInt(m),m=isNaN(m)?"normal":m,(Se[u]||{})[m]||Ee[u])
var{value:h,isSecondary:g}=(d=0,u=(m=h=(b=i).replace(Oe,"")).length,b=(g=55296<=(b=m.charCodeAt(d))&&b<=56319&&d+1<u&&56320<=(g=m.charCodeAt(d+1))&&g<=57343?1024*(b-55296)+g-56320+65536:b)>=Pe[0]&&g<=Pe[1],{value:yt((g=2===h.length&&h[0]===h[1])?h[0]:h),isSecondary:b||g}),b=f[0].startsWith("FontAwesome")
let v=Ft(p,h),y=v
if(b&&(h=Et[b=h],b=Ft("fas",b),(b=h||(b?{prefix:"fas",iconName:b}:null)||{prefix:null,iconName:null}).iconName&&b.prefix&&(v=b.iconName,p=b.prefix)),!v||g||s&&s.getAttribute(C)===p&&s.getAttribute(S)===y)n()
else{t.setAttribute(a,y),s&&t.removeChild(s)
const i={iconName:null,title:null,titleId:null,prefix:null,transform:tt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},c=i.extra
c.attributes[P]=e,ae(v,p).then((r=>{const s=Qt({...i,icons:{main:r,mask:{prefix:null,iconName:null,rest:[]}},prefix:p,iconName:y,extra:c,watchable:!0}),l=o.createElementNS("http://www.w3.org/2000/svg","svg")
"::before"===e?t.insertBefore(l,t.firstChild):t.appendChild(l),l.outerHTML=s.map((t=>ht(t))).join("\n"),t.removeAttribute(a),n()})).catch(r)}}else n()}))}function ze(t){return Promise.all([Me(t,"::before"),Me(t,"::after")])}function je(t){return!(t.parentNode===document.head||~M.indexOf(t.tagName.toUpperCase())||t.getAttribute(P)||t.parentNode&&"svg"===t.parentNode.tagName)}function Fe(t){if(f)return new Promise(((e,a)=>{var n=at(t.querySelectorAll("*")).filter(je).map(ze)
const r=oe("searchPseudoElements")
pe(),Promise.all(n).then((()=>{r(),he(),e()})).catch((()=>{r(),he(),a()}))}))}let Le=!1
const Re=t=>t.toLowerCase().split(" ").reduce(((t,e)=>{const a=e.toLowerCase().split("-")
e=a[0]
let n=a.slice(1).join("-")
if(e&&"h"===n)return t.flipX=!0,t
if(e&&"v"===n)return t.flipY=!0,t
if(n=parseFloat(n),isNaN(n))return t
switch(e){case"grow":t.size=t.size+n
break
case"shrink":t.size=t.size-n
break
case"left":t.x=t.x-n
break
case"right":t.x=t.x+n
break
case"up":t.y=t.y-n
break
case"down":t.y=t.y+n
break
case"rotate":t.rotate=t.rotate+n}return t}),{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0}),Ie={x:0,y:0,width:"100%",height:"100%"}
function De(t){return t.attributes&&(t.attributes.fill||!(1<arguments.length&&void 0!==arguments[1])||arguments[1])&&(t.attributes.fill="black"),t}!function(t,e){let a=e.mixoutsTo
Yt=t,Ht={},Object.keys(Wt).forEach((t=>{-1===_t.indexOf(t)&&delete Wt[t]})),Yt.forEach((t=>{const e=t.mixout?t.mixout():{}
if(Object.keys(e).forEach((t=>{"function"==typeof e[t]&&(a[t]=e[t]),"object"==typeof e[t]&&Object.keys(e[t]).forEach((n=>{a[t]||(a[t]={}),a[t][n]=e[t][n]}))})),t.hooks){const e=t.hooks()
Object.keys(e).forEach((t=>{Ht[t]||(Ht[t]=[]),Ht[t].push(e[t])}))}t.provides&&t.provides(Wt)}))}([y,v,x,c,w,{hooks:()=>({mutationObserverCallbacks:t=>(t.pseudoElementsCallback=Fe,t)}),provides(t){t.pseudoElements2svg=function(t){var{node:t=o}=t
Q.searchPseudoElements&&Fe(t)}}},{mixout:()=>({dom:{unwatch(){pe(),Le=!0}}}),hooks:()=>({bootstrap(){be(Bt("mutationObserverCallbacks",{}))},noAuto(){ge&&ge.disconnect()},watch(t){t=t.observeMutationsRoot,Le?he():be(Bt("mutationObserverCallbacks",{observeMutationsRoot:t}))}})},{mixout:()=>({parse:{transform:t=>Re(t)}}),hooks:()=>({parseNodeAttributes:(t,e)=>((e=e.getAttribute("data-fa-transform"))&&(t.transform=Re(e)),t)}),provides(t){t.generateAbstractTransformGrouping=function(t){var{main:e,transform:a,containerWidth:n,iconWidth:r}=t,i={transform:"translate(".concat(n/2," 256)")},n=(t="translate(".concat(32*a.x,", ").concat(32*a.y,") "),"scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") ")),a="rotate(".concat(a.rotate," 0 0)")
const o=i,s={transform:"".concat(t," ").concat(n," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")}
return{tag:"g",attributes:{...o},children:[{tag:"g",attributes:{...s},children:[{tag:e.icon.tag,children:e.icon.children,attributes:{...e.icon.attributes,...c}}]}]}}}},{hooks:()=>({parseNodeAttributes(t,e){const a=e.getAttribute("data-fa-mask"),n=a?Tt(a.split(" ").map((t=>t.trim()))):{prefix:null,iconName:null,rest:[]}
return n.prefix||(n.prefix=Ot),t.mask=n,t.maskId=e.getAttribute("data-fa-mask-id"),t}}),provides(t){t.generateAbstractMask=function(t){let{children:e,attributes:a,main:n,mask:r,maskId:i,transform:o}=t
const{width:s,icon:c}=n
var{width:l,icon:f}=r,u=function(t){var{transform:e,containerWidth:a,iconWidth:n}=t,r={transform:"translate(".concat(a/2," 256)")},a=(t="translate(".concat(32*e.x,", ").concat(32*e.y,") "),"scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") ")),e="rotate(".concat(e.rotate," 0 0)")
return{outer:r,inner:{transform:"".concat(t," ").concat(a," ").concat(e)},path:{transform:"translate(".concat(n/2*-1," -256)")}}}({transform:o,containerWidth:l,iconWidth:s}),m={tag:"rect",attributes:{...Ie,fill:"white"}},l=(t=c.children?{children:c.children.map(De)}:{},l={tag:"g",attributes:{...u.inner},children:[De({tag:c.tag,attributes:{...c.attributes,...u.path},...t})]},t={tag:"g",attributes:{...u.outer},children:[l]},u="mask-".concat(i||et()),"clip-".concat(i||et()))
t={tag:"mask",attributes:{...Ie,id:u,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[m,t]},t={tag:"defs",children:[{tag:"clipPath",attributes:{id:l},children:"g"===f.tag?f.children:[f]},t]}
return e.push(t,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(l,")"),mask:"url(#".concat(u,")"),...Ie}}),{children:e,attributes:a}}}},{provides(t){let e=!1
i.matchMedia&&(e=i.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const t=[]
var a={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"}
t.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}})
var r={...n,attributeName:"opacity"}
const i={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]}
return e||i.children.push({tag:"animate",attributes:{...n,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...r,values:"1;0;1;1;0;1;"}}),t.push(i),t.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...r,values:"1;0;0;0;0;1;"}}]}),e||t.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...r,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},{hooks:()=>({parseNodeAttributes:(t,e)=>(e=e.getAttribute("data-fa-symbol"),t.symbol=null!==e&&(""===e||e),t)})}],{mixoutsTo:Gt}),function(t){try{for(var e=arguments.length,a=new Array(1<e?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n]
t(...a)}catch(t){if(!z)throw t}}((function(t){l&&(i.FontAwesome||(i.FontAwesome=Gt),pt((()=>{Kt(),Ut("bootstrap")}))),ut.hooks={...ut.hooks,addPack:(t,e)=>{ut.styles[t]={...ut.styles[t]||{},...e},jt(),Kt()},addPacks:t=>{t.forEach((t=>{var[e,t]=t
ut.styles[e]={...ut.styles[e]||{},...t}})),jt(),Kt()},addShims:t=>{ut.shims.push(...t),jt(),Kt()}}}))}()
