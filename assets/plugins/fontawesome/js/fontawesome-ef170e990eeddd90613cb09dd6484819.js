/*!
 * Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
(function(){"use strict"
const t=()=>{}
let e={},a={},n=null,i={mark:t,measure:t}
try{"undefined"!=typeof window&&(e=window),"undefined"!=typeof document&&(a=document),"undefined"!=typeof MutationObserver&&(n=MutationObserver),"undefined"!=typeof performance&&(i=performance)}catch(ca){}const{userAgent:r=""}=e.navigator||{},o=e,s=a,c=n,l=i,f=!!o.document,u=!!s.documentElement&&!!s.head&&"function"==typeof s.addEventListener&&"function"==typeof s.createElement,m=~r.indexOf("MSIE")||~r.indexOf("Trident/")
var d="classic",p="duotone",h="sharp",g="sharp-duotone",b=[d,p,h,g],v={fak:"kit","fa-kit":"kit"},y={fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"},x={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},k=[1,2,3,4,5,6,7,8,9,10],w=k.concat([11,12,13,14,15,16,17,18,19,20]),A={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},N=[...Object.keys({classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]}),"solid","regular","light","thin","duotone","brands","2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",A.GROUP,A.SWAP_OPACITY,A.PRIMARY,A.SECONDARY].concat(k.map((t=>"".concat(t,"x")))).concat(w.map((t=>"w-".concat(t)))),O={kit:"fak"},P={"kit-duotone":"fakd"}
const C="___FONT_AWESOME___",S=16,E="svg-inline--fa",M="data-fa-i2svg",z="data-fa-pseudo-element",j="data-prefix",F="data-icon",L="fontawesome-i2svg",R=["HTML","HEAD","STYLE","SCRIPT"],I=(()=>{try{return!0}catch(t){return!1}})(),D=[d,h,g]
function T(t){return new Proxy(t,{get:(t,e)=>e in t?t[e]:t[d]})}const Y={...x}
Y[d]={...x[d],...v,...y}
const H=T(Y),W={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}}
W[d]={...W[d],...O,...P}
const _=T(W),B={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}}
B[d]={...B[d],fak:"fa-kit"}
const U=T(B),X={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}}
X[d]={...X[d],"fa-kit":"fak"}
const q=T(X),V=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,G="fa-layers-text",K=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,J=(T({classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}}),["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"]),Q=A,Z=new Set
Object.keys(_[d]).map(Z.add.bind(Z)),Object.keys(_[h]).map(Z.add.bind(Z)),Object.keys(_[g]).map(Z.add.bind(Z))
const $=["kit",...N],tt=o.FontAwesomeConfig||{}
if(s&&"function"==typeof s.querySelector){[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((t=>{let[e,a]=t
const n=function(t){return""===t||"false"!==t&&("true"===t||t)}(function(t){var e=s.querySelector("script["+t+"]")
if(e)return e.getAttribute(t)}(e))
null!=n&&(tt[a]=n)}))}const et={styleDefault:"solid",familyDefault:"classic",cssPrefix:"fa",replacementClass:E,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0}
tt.familyPrefix&&(tt.cssPrefix=tt.familyPrefix)
const at={...et,...tt}
at.autoReplaceSvg||(at.observeMutations=!1)
const nt={}
Object.keys(et).forEach((t=>{Object.defineProperty(nt,t,{enumerable:!0,set:function(e){at[t]=e,it.forEach((t=>t(nt)))},get:function(){return at[t]}})})),Object.defineProperty(nt,"familyPrefix",{enumerable:!0,set:function(t){at.cssPrefix=t,it.forEach((t=>t(nt)))},get:function(){return at.cssPrefix}}),o.FontAwesomeConfig=nt
const it=[]
const rt=S,ot={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1}
function st(){let t=12,e=""
for(;t-- >0;)e+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0]
return e}function ct(t){const e=[]
for(let a=(t||[]).length>>>0;a--;)e[a]=t[a]
return e}function lt(t){return t.classList?ct(t.classList):(t.getAttribute("class")||"").split(" ").filter((t=>t))}function ft(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ut(t){return Object.keys(t||{}).reduce(((e,a)=>e+"".concat(a,": ").concat(t[a].trim(),";")),"")}function mt(t){return t.size!==ot.size||t.x!==ot.x||t.y!==ot.y||t.rotate!==ot.rotate||t.flipX||t.flipY}function dt(){const t="fa",e=E,a=nt.cssPrefix,n=nt.replacementClass
let i=':host,:root{--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Free";--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Free";--fa-font-light:normal 300 1em/1 "Font Awesome 6 Pro";--fa-font-thin:normal 100 1em/1 "Font Awesome 6 Pro";--fa-font-duotone:normal 900 1em/1 "Font Awesome 6 Duotone";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands";--fa-font-sharp-solid:normal 900 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-regular:normal 400 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-light:normal 300 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-thin:normal 100 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-duotone-solid:normal 900 1em/1 "Font Awesome 6 Sharp Duotone"}svg:not(:host).svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible;box-sizing:content-box}.svg-inline--fa{display:var(--fa-display,inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.0714285705em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-li{width:var(--fa-li-width,2em);top:.25em}.svg-inline--fa.fa-fw{width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{transform-origin:center center}.fa-layers-text{left:50%;top:50%;transform:translate(-50%,-50%);transform-origin:center center}.fa-layers-counter{background-color:var(--fa-counter-background-color,#ff253a);border-radius:var(--fa-counter-border-radius,1em);box-sizing:border-box;color:var(--fa-inverse,#fff);line-height:var(--fa-counter-line-height,1);max-width:var(--fa-counter-max-width,5em);min-width:var(--fa-counter-min-width,1.5em);overflow:hidden;padding:var(--fa-counter-padding,.25em .5em);right:var(--fa-right,0);text-overflow:ellipsis;top:var(--fa-top,0);transform:scale(var(--fa-counter-scale,.25));transform-origin:top right}.fa-layers-bottom-right{bottom:var(--fa-bottom,0);right:var(--fa-right,0);top:auto;transform:scale(var(--fa-layers-scale,.25));transform-origin:bottom right}.fa-layers-bottom-left{bottom:var(--fa-bottom,0);left:var(--fa-left,0);right:auto;top:auto;transform:scale(var(--fa-layers-scale,.25));transform-origin:bottom left}.fa-layers-top-right{top:var(--fa-top,0);right:var(--fa-right,0);transform:scale(var(--fa-layers-scale,.25));transform-origin:top right}.fa-layers-top-left{left:var(--fa-left,0);right:auto;top:var(--fa-top,0);transform:scale(var(--fa-layers-scale,.25));transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.0833333337em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.0714285718em;vertical-align:.0535714295em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.0416666682em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(-1 * var(--fa-li-width,2em));position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-color:var(--fa-border-color,#eee);border-radius:var(--fa-border-radius,.1em);border-style:var(--fa-border-style,solid);border-width:var(--fa-border-width,.08em);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{animation-name:fa-beat;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{animation-name:fa-bounce;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{animation-name:fa-fade;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade{animation-name:fa-beat-fade;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{animation-name:fa-flip;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{animation-name:fa-shake;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin{animation-name:fa-spin;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,2s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{animation-name:fa-spin;animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{animation-delay:-1ms;animation-duration:1ms;animation-iteration-count:1;transition-delay:0s;transition-duration:0s}}@keyframes fa-beat{0%,90%{transform:scale(1)}45%{transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-bounce{0%{transform:scale(1,1) translateY(0)}10%{transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{transform:scale(1,1) translateY(0)}100%{transform:scale(1,1) translateY(0)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);transform:scale(1)}50%{opacity:1;transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-flip{50%{transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-shake{0%{transform:rotate(-15deg)}4%{transform:rotate(15deg)}24%,8%{transform:rotate(-18deg)}12%,28%{transform:rotate(18deg)}16%{transform:rotate(-22deg)}20%{transform:rotate(22deg)}32%{transform:rotate(-12deg)}36%{transform:rotate(12deg)}100%,40%{transform:rotate(0)}}@keyframes fa-spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fa-rotate-90{transform:rotate(90deg)}.fa-rotate-180{transform:rotate(180deg)}.fa-rotate-270{transform:rotate(270deg)}.fa-flip-horizontal{transform:scale(-1,1)}.fa-flip-vertical{transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{transform:scale(-1,-1)}.fa-rotate-by{transform:rotate(var(--fa-rotate-angle,0))}.fa-stack{display:inline-block;vertical-align:middle;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:var(--fa-stack-z-index,auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:var(--fa-inverse,#fff)}.fa-sr-only,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fa-sr-only-focusable:not(:focus),.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fa-duotone.fa-inverse,.fad.fa-inverse{color:var(--fa-inverse,#fff)}'
if(a!==t||n!==e){const r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g")
i=i.replace(r,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(n))}return i}let pt=!1
function ht(){nt.autoAddCss&&!pt&&(function(t){if(!t||!u)return
const e=s.createElement("style")
e.setAttribute("type","text/css"),e.innerHTML=t
const a=s.head.childNodes
let n=null
for(let i=a.length-1;i>-1;i--){const t=a[i],e=(t.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(e)>-1&&(n=t)}s.head.insertBefore(e,n)}(dt()),pt=!0)}var gt={mixout:()=>({dom:{css:dt,insertCss:ht}}),hooks:()=>({beforeDOMElementCreation(){ht()},beforeI2svg(){ht()}})}
const bt=o||{}
bt[C]||(bt[C]={}),bt[C].styles||(bt[C].styles={}),bt[C].hooks||(bt[C].hooks={}),bt[C].shims||(bt[C].shims=[])
var vt=bt[C]
const yt=[],xt=function(){s.removeEventListener("DOMContentLoaded",xt),kt=1,yt.map((t=>t()))}
let kt=!1
function wt(t){u&&(kt?setTimeout(t,0):yt.push(t))}function At(t){const{tag:e,attributes:a={},children:n=[]}=t
return"string"==typeof t?ft(t):"<".concat(e," ").concat(function(t){return Object.keys(t||{}).reduce(((e,a)=>e+"".concat(a,'="').concat(ft(t[a]),'" ')),"").trim()}(a),">").concat(n.map(At).join(""),"</").concat(e,">")}function Nt(t,e,a){if(t&&t[e]&&t[e][a])return{prefix:e,iconName:a,icon:t[e][a]}}u&&(kt=(s.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(s.readyState),kt||s.addEventListener("DOMContentLoaded",xt))
var Ot=function(t,e,a,n){var i,r,o,s=Object.keys(t),c=s.length,l=void 0!==n?function(t,e){return function(a,n,i,r){return t.call(e,a,n,i,r)}}(e,n):e
for(void 0===a?(i=1,o=t[s[0]]):(i=0,o=a);i<c;i++)o=l(o,t[r=s[i]],r,t)
return o}
function Pt(t){const e=function(t){const e=[]
let a=0
const n=t.length
for(;a<n;){const i=t.charCodeAt(a++)
if(i>=55296&&i<=56319&&a<n){const n=t.charCodeAt(a++)
56320==(64512&n)?e.push(((1023&i)<<10)+(1023&n)+65536):(e.push(i),a--)}else e.push(i)}return e}(t)
return 1===e.length?e[0].toString(16):null}function Ct(t){return Object.keys(t).reduce(((e,a)=>{const n=t[a]
return!!n.icon?e[n.iconName]=n.icon:e[a]=n,e}),{})}function St(t,e){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const{skipHooks:n=!1}=a,i=Ct(e)
"function"!=typeof vt.hooks.addPack||n?vt.styles[t]={...vt.styles[t]||{},...i}:vt.hooks.addPack(t,Ct(e)),"fas"===t&&St("fa",e)}const{styles:Et,shims:Mt}=vt,zt={[d]:Object.values(U[d]),[h]:Object.values(U[h]),[g]:Object.values(U[g])}
let jt=null,Ft={},Lt={},Rt={},It={},Dt={}
const Tt={[d]:Object.keys(H[d]),[h]:Object.keys(H[h]),[g]:Object.keys(H[g])}
function Yt(t,e){const a=e.split("-"),n=a[0],i=a.slice(1).join("-")
return n!==t||""===i||(r=i,~$.indexOf(r))?null:i
var r}const Ht=()=>{const t=t=>Ot(Et,((e,a,n)=>(e[n]=Ot(a,t,{}),e)),{})
Ft=t(((t,e,a)=>{if(e[3]&&(t[e[3]]=a),e[2]){e[2].filter((t=>"number"==typeof t)).forEach((e=>{t[e.toString(16)]=a}))}return t})),Lt=t(((t,e,a)=>{if(t[a]=a,e[2]){e[2].filter((t=>"string"==typeof t)).forEach((e=>{t[e]=a}))}return t})),Dt=t(((t,e,a)=>{const n=e[2]
return t[a]=a,n.forEach((e=>{t[e]=a})),t}))
const e="far"in Et||nt.autoFetchSvg,a=Ot(Mt,((t,a)=>{const n=a[0]
let i=a[1]
const r=a[2]
return"far"!==i||e||(i="fas"),"string"==typeof n&&(t.names[n]={prefix:i,iconName:r}),"number"==typeof n&&(t.unicodes[n.toString(16)]={prefix:i,iconName:r}),t}),{names:{},unicodes:{}})
Rt=a.names,It=a.unicodes,jt=qt(nt.styleDefault,{family:nt.familyDefault})}
var Wt
function _t(t,e){return(Ft[t]||{})[e]}function Bt(t,e){return(Dt[t]||{})[e]}function Ut(t){return Rt[t]||{prefix:null,iconName:null}}function Xt(){return jt}Wt=t=>{jt=qt(t.styleDefault,{family:nt.familyDefault})},it.push(Wt),Ht()
function qt(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const{family:a=d}=e,n=H[a][t],i=_[a][t]||_[a][n],r=t in vt.styles?t:null
return i||r||null}const Vt={[d]:Object.keys(U[d]),[h]:Object.keys(U[h]),[g]:Object.keys(U[g])}
function Gt(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const{skipLookups:a=!1}=e,n={[d]:"".concat(nt.cssPrefix,"-").concat(d),[h]:"".concat(nt.cssPrefix,"-").concat(h),[g]:"".concat(nt.cssPrefix,"-").concat(g)}
let i=null,r=d
const o=b.filter((t=>t!==p))
o.forEach((e=>{(t.includes(n[e])||t.some((t=>Vt[e].includes(t))))&&(r=e)}))
const s=t.reduce(((t,e)=>{const s=Yt(nt.cssPrefix,e)
if(Et[e]?(e=zt[r].includes(e)?q[r][e]:e,i=e,t.prefix=e):Tt[r].indexOf(e)>-1?(i=e,t.prefix=qt(e,{family:r})):s?t.iconName=s:e===nt.replacementClass||o.some((t=>e===n[t]))||t.rest.push(e),!a&&t.prefix&&t.iconName){const e="fa"===i?Ut(t.iconName):{},a=Bt(t.prefix,t.iconName)
e.prefix&&(i=null),t.iconName=e.iconName||a||t.iconName,t.prefix=e.prefix||t.prefix,"far"!==t.prefix||Et.far||!Et.fas||nt.autoFetchSvg||(t.prefix="fas")}return t}),{prefix:null,iconName:null,rest:[]})
return(t.includes("fa-brands")||t.includes("fab"))&&(s.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(s.prefix="fad"),s.prefix||r!==h||!Et.fass&&!nt.autoFetchSvg||(s.prefix="fass",s.iconName=Bt(s.prefix,s.iconName)||s.iconName),s.prefix||r!==g||!Et.fasds&&!nt.autoFetchSvg||(s.prefix="fasds",s.iconName=Bt(s.prefix,s.iconName)||s.iconName),"fa"!==s.prefix&&"fa"!==i||(s.prefix=Xt()||"fas"),s}let Kt=[],Jt={}
const Qt={},Zt=Object.keys(Qt)
function $t(t,e){for(var a=arguments.length,n=new Array(a>2?a-2:0),i=2;i<a;i++)n[i-2]=arguments[i]
return(Jt[t]||[]).forEach((t=>{e=t.apply(null,[e,...n])})),e}function te(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];(Jt[t]||[]).forEach((t=>{t.apply(null,a)}))}function ee(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1)
return Qt[t]?Qt[t].apply(null,e):void 0}function ae(t){"fa"===t.prefix&&(t.prefix="fas")
let{iconName:e}=t
const a=t.prefix||Xt()
if(e)return e=Bt(a,e)||e,Nt(ne.definitions,a,e)||Nt(vt.styles,a,e)}const ne=new class{constructor(){this.definitions={}}add(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a]
const n=e.reduce(this._pullDefinitions,{})
Object.keys(n).forEach((t=>{this.definitions[t]={...this.definitions[t]||{},...n[t]},St(t,n[t])
const e=U[d][t]
e&&St(e,n[t]),Ht()}))}reset(){this.definitions={}}_pullDefinitions(t,e){const a=e.prefix&&e.iconName&&e.icon?{0:e}:e
return Object.keys(a).map((e=>{const{prefix:n,iconName:i,icon:r}=a[e],o=r[2]
t[n]||(t[n]={}),o.length>0&&o.forEach((e=>{"string"==typeof e&&(t[n][e]=r)})),t[n][i]=r})),t}},ie={i2svg:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return u?(te("beforeI2svg",t),ee("pseudoElements2svg",t),ee("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const{autoReplaceSvgRoot:e}=t
!1===nt.autoReplaceSvg&&(nt.autoReplaceSvg=!0),nt.observeMutations=!0,wt((()=>{oe({autoReplaceSvgRoot:e}),te("watch",t)}))}},re={noAuto:()=>{nt.autoReplaceSvg=!1,nt.observeMutations=!1,te("noAuto")},config:nt,dom:ie,parse:{icon:t=>{if(null===t)return null
if("object"==typeof t&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Bt(t.prefix,t.iconName)||t.iconName}
if(Array.isArray(t)&&2===t.length){const e=0===t[1].indexOf("fa-")?t[1].slice(3):t[1],a=qt(t[0])
return{prefix:a,iconName:Bt(a,e)||e}}if("string"==typeof t&&(t.indexOf("".concat(nt.cssPrefix,"-"))>-1||t.match(V))){const e=Gt(t.split(" "),{skipLookups:!0})
return{prefix:e.prefix||Xt(),iconName:Bt(e.prefix,e.iconName)||e.iconName}}if("string"==typeof t){const e=Xt()
return{prefix:e,iconName:Bt(e,t)||t}}}},library:ne,findIconDefinition:ae,toHtml:At},oe=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const{autoReplaceSvgRoot:e=s}=t;(Object.keys(vt.styles).length>0||nt.autoFetchSvg)&&u&&nt.autoReplaceSvg&&re.dom.i2svg({node:e})}
function se(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map((t=>At(t)))}}),Object.defineProperty(t,"node",{get:function(){if(!u)return
const e=s.createElement("div")
return e.innerHTML=t.html,e.children}}),t}function ce(t){const{icons:{main:e,mask:a},prefix:n,iconName:i,transform:r,symbol:o,title:s,maskId:c,titleId:l,extra:f,watchable:u=!1}=t,{width:m,height:d}=a.found?a:e,p="fak"===n,h=[nt.replacementClass,i?"".concat(nt.cssPrefix,"-").concat(i):""].filter((t=>-1===f.classes.indexOf(t))).filter((t=>""!==t||!!t)).concat(f.classes).join(" ")
let g={children:[],attributes:{...f.attributes,"data-prefix":n,"data-icon":i,class:h,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(d)}}
const b=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/d*16*.0625,"em")}:{}
u&&(g.attributes[M]=""),s&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(l||st())},children:[s]}),delete g.attributes.title)
const v={...g,prefix:n,iconName:i,main:e,mask:a,maskId:c,transform:r,symbol:o,styles:{...b,...f.styles}},{children:y,attributes:x}=a.found&&e.found?ee("generateAbstractMask",v)||{children:[],attributes:{}}:ee("generateAbstractIcon",v)||{children:[],attributes:{}}
return v.children=y,v.attributes=x,o?function(t){let{prefix:e,iconName:a,children:n,attributes:i,symbol:r}=t
return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:!0===r?"".concat(e,"-").concat(nt.cssPrefix,"-").concat(a):r},children:n}]}]}(v):function(t){let{children:e,main:a,mask:n,attributes:i,styles:r,transform:o}=t
if(mt(o)&&a.found&&!n.found){const{width:t,height:e}=a,n={x:t/e/2,y:.5}
i.style=ut({...r,"transform-origin":"".concat(n.x+o.x/16,"em ").concat(n.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}(v)}function le(t){const{content:e,width:a,height:n,transform:i,title:r,extra:o,watchable:s=!1}=t,c={...o.attributes,...r?{title:r}:{},class:o.classes.join(" ")}
s&&(c[M]="")
const l={...o.styles}
mt(i)&&(l.transform=function(t){let{transform:e,width:a=S,height:n=S,startCentered:i=!1}=t,r=""
return r+=i&&m?"translate(".concat(e.x/rt-a/2,"em, ").concat(e.y/rt-n/2,"em) "):i?"translate(calc(-50% + ".concat(e.x/rt,"em), calc(-50% + ").concat(e.y/rt,"em)) "):"translate(".concat(e.x/rt,"em, ").concat(e.y/rt,"em) "),r+="scale(".concat(e.size/rt*(e.flipX?-1:1),", ").concat(e.size/rt*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}({transform:i,startCentered:!0,width:a,height:n}),l["-webkit-transform"]=l.transform)
const f=ut(l)
f.length>0&&(c.style=f)
const u=[]
return u.push({tag:"span",attributes:c,children:[e]}),r&&u.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),u}const{styles:fe}=vt
function ue(t){const e=t[0],a=t[1],[n]=t.slice(4)
let i=null
return i=Array.isArray(n)?{tag:"g",attributes:{class:"".concat(nt.cssPrefix,"-").concat(Q.GROUP)},children:[{tag:"path",attributes:{class:"".concat(nt.cssPrefix,"-").concat(Q.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(nt.cssPrefix,"-").concat(Q.PRIMARY),fill:"currentColor",d:n[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:e,height:a,icon:i}}const me={found:!1,width:512,height:512}
function de(t,e){let a=e
return"fa"===e&&null!==nt.styleDefault&&(e=Xt()),new Promise(((n,i)=>{if("fa"===a){const a=Ut(t)||{}
t=a.iconName||t,e=a.prefix||e}if(t&&e&&fe[e]&&fe[e][t]){return n(ue(fe[e][t]))}(function(t,e){I||nt.showMissingIcons||!t||console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))})(t,e),n({...me,icon:nt.showMissingIcons&&t&&ee("missingIconAbstract")||{}})}))}const pe=()=>{},he=nt.measurePerformance&&l&&l.mark&&l.measure?l:{mark:pe,measure:pe},ge='FA "6.6.0"',be=t=>{he.mark("".concat(ge," ").concat(t," ends")),he.measure("".concat(ge," ").concat(t),"".concat(ge," ").concat(t," begins"),"".concat(ge," ").concat(t," ends"))}
var ve=t=>(he.mark("".concat(ge," ").concat(t," begins")),()=>be(t))
const ye=()=>{}
function xe(t){return"string"==typeof(t.getAttribute?t.getAttribute(M):null)}function ke(t){return s.createElementNS("http://www.w3.org/2000/svg",t)}function we(t){return s.createElement(t)}function Ae(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const{ceFn:a=("svg"===t.tag?ke:we)}=e
if("string"==typeof t)return s.createTextNode(t)
const n=a(t.tag)
Object.keys(t.attributes||[]).forEach((function(e){n.setAttribute(e,t.attributes[e])}))
return(t.children||[]).forEach((function(t){n.appendChild(Ae(t,{ceFn:a}))})),n}const Ne={replace:function(t){const e=t[0]
if(e.parentNode)if(t[1].forEach((t=>{e.parentNode.insertBefore(Ae(t),e)})),null===e.getAttribute(M)&&nt.keepOriginalSource){let t=s.createComment(function(t){let e=" ".concat(t.outerHTML," ")
return e="".concat(e,"Font Awesome fontawesome.com "),e}(e))
e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(t){const e=t[0],a=t[1]
if(~lt(e).indexOf(nt.replacementClass))return Ne.replace(t)
const n=new RegExp("".concat(nt.cssPrefix,"-.*"))
if(delete a[0].attributes.id,a[0].attributes.class){const t=a[0].attributes.class.split(" ").reduce(((t,e)=>(e===nt.replacementClass||e.match(n)?t.toSvg.push(e):t.toNode.push(e),t)),{toNode:[],toSvg:[]})
a[0].attributes.class=t.toSvg.join(" "),0===t.toNode.length?e.removeAttribute("class"):e.setAttribute("class",t.toNode.join(" "))}const i=a.map((t=>At(t))).join("\n")
e.setAttribute(M,""),e.innerHTML=i}}
function Oe(t){t()}function Pe(t,e){const a="function"==typeof e?e:ye
if(0===t.length)a()
else{let e=Oe
"async"===nt.mutateApproach&&(e=o.requestAnimationFrame||Oe),e((()=>{const e=!0===nt.autoReplaceSvg?Ne.replace:Ne[nt.autoReplaceSvg]||Ne.replace,n=ve("mutate")
t.map(e),n(),a()}))}}let Ce=!1
function Se(){Ce=!0}function Ee(){Ce=!1}let Me=null
function ze(t){if(!c)return
if(!nt.observeMutations)return
const{treeCallback:e=ye,nodeCallback:a=ye,pseudoElementsCallback:n=ye,observeMutationsRoot:i=s}=t
Me=new c((t=>{if(Ce)return
const i=Xt()
ct(t).forEach((t=>{if("childList"===t.type&&t.addedNodes.length>0&&!xe(t.addedNodes[0])&&(nt.searchPseudoElements&&n(t.target),e(t.target)),"attributes"===t.type&&t.target.parentNode&&nt.searchPseudoElements&&n(t.target.parentNode),"attributes"===t.type&&xe(t.target)&&~J.indexOf(t.attributeName))if("class"===t.attributeName&&function(t){const e=t.getAttribute?t.getAttribute(j):null,a=t.getAttribute?t.getAttribute(F):null
return e&&a}(t.target)){const{prefix:e,iconName:a}=Gt(lt(t.target))
t.target.setAttribute(j,e||i),a&&t.target.setAttribute(F,a)}else(r=t.target)&&r.classList&&r.classList.contains&&r.classList.contains(nt.replacementClass)&&a(t.target)
var r}))})),u&&Me.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function je(t){const e=t.getAttribute("data-prefix"),a=t.getAttribute("data-icon"),n=void 0!==t.innerText?t.innerText.trim():""
let i=Gt(lt(t))
return i.prefix||(i.prefix=Xt()),e&&a&&(i.prefix=e,i.iconName=a),i.iconName&&i.prefix||(i.prefix&&n.length>0&&(i.iconName=(r=i.prefix,o=t.innerText,(Lt[r]||{})[o]||_t(i.prefix,Pt(t.innerText)))),!i.iconName&&nt.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i
var r,o}function Fe(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0}
const{iconName:a,prefix:n,rest:i}=je(t),r=function(t){const e=ct(t.attributes).reduce(((t,e)=>("class"!==t.name&&"style"!==t.name&&(t[e.name]=e.value),t)),{}),a=t.getAttribute("title"),n=t.getAttribute("data-fa-title-id")
return nt.autoA11y&&(a?e["aria-labelledby"]="".concat(nt.replacementClass,"-title-").concat(n||st()):(e["aria-hidden"]="true",e.focusable="false")),e}(t),o=$t("parseNodeAttributes",{},t)
let s=e.styleParser?function(t){const e=t.getAttribute("style")
let a=[]
return e&&(a=e.split(";").reduce(((t,e)=>{const a=e.split(":"),n=a[0],i=a.slice(1)
return n&&i.length>0&&(t[n]=i.join(":").trim()),t}),{})),a}(t):[]
return{iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:n,transform:ot,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:r},...o}}const{styles:Le}=vt
function Re(t){const e="nest"===nt.autoReplaceSvg?Fe(t,{styleParser:!1}):Fe(t)
return~e.extra.classes.indexOf(G)?ee("generateLayersText",t,e):ee("generateSvgReplacementMutation",t,e)}let Ie=new Set
function De(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(!u)return Promise.resolve()
const a=s.documentElement.classList,n=t=>a.add("".concat(L,"-").concat(t)),i=t=>a.remove("".concat(L,"-").concat(t)),r=nt.autoFetchSvg?Ie:D.map((t=>"fa-".concat(t))).concat(Object.keys(Le))
r.includes("fa")||r.push("fa")
const o=[".".concat(G,":not([").concat(M,"])")].concat(r.map((t=>".".concat(t,":not([").concat(M,"])")))).join(", ")
if(0===o.length)return Promise.resolve()
let c=[]
try{c=ct(t.querySelectorAll(o))}catch(m){}if(!(c.length>0))return Promise.resolve()
n("pending"),i("complete")
const l=ve("onTree"),f=c.reduce(((t,e)=>{try{const a=Re(e)
a&&t.push(a)}catch(m){I||"MissingIcon"===m.name&&console.error(m)}return t}),[])
return new Promise(((t,a)=>{Promise.all(f).then((a=>{Pe(a,(()=>{n("active"),n("complete"),i("pending"),"function"==typeof e&&e(),l(),t()}))})).catch((t=>{l(),a(t)}))}))}function Te(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
Re(t).then((t=>{t&&Pe([t],e)}))}D.map((t=>{Ie.add("fa-".concat(t))})),Object.keys(H[d]).map(Ie.add.bind(Ie)),Object.keys(H[h]).map(Ie.add.bind(Ie)),Object.keys(H[g]).map(Ie.add.bind(Ie)),Ie=[...Ie]
const Ye=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const{transform:a=ot,symbol:n=!1,mask:i=null,maskId:r=null,title:o=null,titleId:s=null,classes:c=[],attributes:l={},styles:f={}}=e
if(!t)return
const{prefix:u,iconName:m,icon:d}=t
return se({type:"icon",...t},(()=>(te("beforeDOMElementCreation",{iconDefinition:t,params:e}),nt.autoA11y&&(o?l["aria-labelledby"]="".concat(nt.replacementClass,"-title-").concat(s||st()):(l["aria-hidden"]="true",l.focusable="false")),ce({icons:{main:ue(d),mask:i?ue(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:u,iconName:m,transform:{...ot,...a},symbol:n,title:o,maskId:r,titleId:s,extra:{attributes:l,styles:f,classes:c}}))))}
var He={mixout(){return{icon:(t=Ye,function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=(e||{}).icon?e:ae(e||{})
let{mask:i}=a
return i&&(i=(i||{}).icon?i:ae(i||{})),t(n,{...a,mask:i})})}
var t},hooks:()=>({mutationObserverCallbacks:t=>(t.treeCallback=De,t.nodeCallback=Te,t)}),provides(t){t.i2svg=function(t){const{node:e=s,callback:a=()=>{}}=t
return De(e,a)},t.generateSvgReplacementMutation=function(t,e){const{iconName:a,title:n,titleId:i,prefix:r,transform:o,symbol:s,mask:c,maskId:l,extra:f}=e
return new Promise(((e,u)=>{Promise.all([de(a,r),c.iconName?de(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then((c=>{let[u,m]=c
e([t,ce({icons:{main:u,mask:m},prefix:r,iconName:a,transform:o,symbol:s,maskId:l,title:n,titleId:i,extra:f,watchable:!0})])})).catch(u)}))},t.generateAbstractIcon=function(t){let{children:e,attributes:a,main:n,transform:i,styles:r}=t
const o=ut(r)
let s
return o.length>0&&(a.style=o),mt(i)&&(s=ee("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),e.push(s||n.icon),{children:e,attributes:a}}}},We={mixout:()=>({layer(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const{classes:a=[]}=e
return se({type:"layer"},(()=>{te("beforeDOMElementCreation",{assembler:t,params:e})
let n=[]
return t((t=>{Array.isArray(t)?t.map((t=>{n=n.concat(t.abstract)})):n=n.concat(t.abstract)})),[{tag:"span",attributes:{class:["".concat(nt.cssPrefix,"-layers"),...a].join(" ")},children:n}]}))}})},_e={mixout:()=>({counter(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const{title:a=null,classes:n=[],attributes:i={},styles:r={}}=e
return se({type:"counter",content:t},(()=>(te("beforeDOMElementCreation",{content:t,params:e}),function(t){const{content:e,title:a,extra:n}=t,i={...n.attributes,...a?{title:a}:{},class:n.classes.join(" ")},r=ut(n.styles)
r.length>0&&(i.style=r)
const o=[]
return o.push({tag:"span",attributes:i,children:[e]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}({content:t.toString(),title:a,extra:{attributes:i,styles:r,classes:["".concat(nt.cssPrefix,"-layers-counter"),...n]}}))))}})},Be={mixout:()=>({text(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const{transform:a=ot,title:n=null,classes:i=[],attributes:r={},styles:o={}}=e
return se({type:"text",content:t},(()=>(te("beforeDOMElementCreation",{content:t,params:e}),le({content:t,transform:{...ot,...a},title:n,extra:{attributes:r,styles:o,classes:["".concat(nt.cssPrefix,"-layers-text"),...i]}}))))}}),provides(t){t.generateLayersText=function(t,e){const{title:a,transform:n,extra:i}=e
let r=null,o=null
if(m){const e=parseInt(getComputedStyle(t).fontSize,10),a=t.getBoundingClientRect()
r=a.width/e,o=a.height/e}return nt.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,le({content:t.innerHTML,width:r,height:o,transform:n,title:a,extra:i,watchable:!0})])}}}
const Ue=new RegExp('"',"ug"),Xe=[1105920,1112319],qe={FontAwesome:{normal:"fas",400:"fas"},"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"},"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"},"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ve=Object.keys(qe).reduce(((t,e)=>(t[e.toLowerCase()]=qe[e],t)),{}),Ge=Object.keys(Ve).reduce(((t,e)=>{const a=Ve[e]
return t[e]=a[900]||[...Object.entries(a)][0][1],t}),{})
function Ke(t,e){const a="".concat("data-fa-pseudo-element-pending").concat(e.replace(":","-"))
return new Promise(((n,i)=>{if(null!==t.getAttribute(a))return n()
const r=ct(t.children).filter((t=>t.getAttribute(z)===e))[0],c=o.getComputedStyle(t,e),l=c.getPropertyValue("font-family"),f=l.match(K),u=c.getPropertyValue("font-weight"),m=c.getPropertyValue("content")
if(r&&!f)return t.removeChild(r),n()
if(f&&"none"!==m&&""!==m){const o=c.getPropertyValue("content")
let m=function(t,e){const a=t.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(e),i=isNaN(n)?"normal":n
return(Ve[a]||{})[i]||Ge[a]}(l,u)
const{value:d,isSecondary:p}=function(t){const e=t.replace(Ue,""),a=function(t,e){const a=t.length
let n,i=t.charCodeAt(e)
return i>=55296&&i<=56319&&a>e+1&&(n=t.charCodeAt(e+1),n>=56320&&n<=57343)?1024*(i-55296)+n-56320+65536:i}(e,0),n=a>=Xe[0]&&a<=Xe[1],i=2===e.length&&e[0]===e[1]
return{value:Pt(i?e[0]:e),isSecondary:n||i}}(o),h=f[0].startsWith("FontAwesome")
let g=_t(m,d),b=g
if(h){const t=function(t){const e=It[t],a=_t("fas",t)
return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}(d)
t.iconName&&t.prefix&&(g=t.iconName,m=t.prefix)}if(!g||p||r&&r.getAttribute(j)===m&&r.getAttribute(F)===b)n()
else{t.setAttribute(a,b),r&&t.removeChild(r)
const o={iconName:null,title:null,titleId:null,prefix:null,transform:ot,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},{extra:c}=o
c.attributes[z]=e,de(g,m).then((i=>{const r=ce({...o,icons:{main:i,mask:{prefix:null,iconName:null,rest:[]}},prefix:m,iconName:b,extra:c,watchable:!0}),l=s.createElementNS("http://www.w3.org/2000/svg","svg")
"::before"===e?t.insertBefore(l,t.firstChild):t.appendChild(l),l.outerHTML=r.map((t=>At(t))).join("\n"),t.removeAttribute(a),n()})).catch(i)}}else n()}))}function Je(t){return Promise.all([Ke(t,"::before"),Ke(t,"::after")])}function Qe(t){return!(t.parentNode===document.head||~R.indexOf(t.tagName.toUpperCase())||t.getAttribute(z)||t.parentNode&&"svg"===t.parentNode.tagName)}function Ze(t){if(u)return new Promise(((e,a)=>{const n=ct(t.querySelectorAll("*")).filter(Qe).map(Je),i=ve("searchPseudoElements")
Se(),Promise.all(n).then((()=>{i(),Ee(),e()})).catch((()=>{i(),Ee(),a()}))}))}var $e={hooks:()=>({mutationObserverCallbacks:t=>(t.pseudoElementsCallback=Ze,t)}),provides(t){t.pseudoElements2svg=function(t){const{node:e=s}=t
nt.searchPseudoElements&&Ze(e)}}}
let ta=!1
var ea={mixout:()=>({dom:{unwatch(){Se(),ta=!0}}}),hooks:()=>({bootstrap(){ze($t("mutationObserverCallbacks",{}))},noAuto(){Me&&Me.disconnect()},watch(t){const{observeMutationsRoot:e}=t
ta?Ee():ze($t("mutationObserverCallbacks",{observeMutationsRoot:e}))}})}
const aa=t=>t.toLowerCase().split(" ").reduce(((t,e)=>{const a=e.toLowerCase().split("-"),n=a[0]
let i=a.slice(1).join("-")
if(n&&"h"===i)return t.flipX=!0,t
if(n&&"v"===i)return t.flipY=!0,t
if(i=parseFloat(i),isNaN(i))return t
switch(n){case"grow":t.size=t.size+i
break
case"shrink":t.size=t.size-i
break
case"left":t.x=t.x-i
break
case"right":t.x=t.x+i
break
case"up":t.y=t.y-i
break
case"down":t.y=t.y+i
break
case"rotate":t.rotate=t.rotate+i}return t}),{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})
var na={mixout:()=>({parse:{transform:t=>aa(t)}}),hooks:()=>({parseNodeAttributes(t,e){const a=e.getAttribute("data-fa-transform")
return a&&(t.transform=aa(a)),t}}),provides(t){t.generateAbstractTransformGrouping=function(t){let{main:e,transform:a,containerWidth:n,iconWidth:i}=t
const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(32*a.x,", ").concat(32*a.y,") "),s="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(c)},f={transform:"translate(".concat(i/2*-1," -256)")}
return{tag:"g",attributes:{...r},children:[{tag:"g",attributes:{...l},children:[{tag:e.icon.tag,children:e.icon.children,attributes:{...e.icon.attributes,...f}}]}]}}}}
const ia={x:0,y:0,width:"100%",height:"100%"}
function ra(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}var oa={hooks:()=>({parseNodeAttributes(t,e){const a=e.getAttribute("data-fa-mask"),n=a?Gt(a.split(" ").map((t=>t.trim()))):{prefix:null,iconName:null,rest:[]}
return n.prefix||(n.prefix=Xt()),t.mask=n,t.maskId=e.getAttribute("data-fa-mask-id"),t}}),provides(t){t.generateAbstractMask=function(t){let{children:e,attributes:a,main:n,mask:i,maskId:r,transform:o}=t
const{width:s,icon:c}=n,{width:l,icon:f}=i,u=function(t){let{transform:e,containerWidth:a,iconWidth:n}=t
const i={transform:"translate(".concat(a/2," 256)")},r="translate(".concat(32*e.x,", ").concat(32*e.y,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)")
return{outer:i,inner:{transform:"".concat(r," ").concat(o," ").concat(s)},path:{transform:"translate(".concat(n/2*-1," -256)")}}}({transform:o,containerWidth:l,iconWidth:s}),m={tag:"rect",attributes:{...ia,fill:"white"}},d=c.children?{children:c.children.map(ra)}:{},p={tag:"g",attributes:{...u.inner},children:[ra({tag:c.tag,attributes:{...c.attributes,...u.path},...d})]},h={tag:"g",attributes:{...u.outer},children:[p]},g="mask-".concat(r||st()),b="clip-".concat(r||st()),v={tag:"mask",attributes:{...ia,id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[m,h]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:(x=f,"g"===x.tag?x.children:[x])},v]}
var x
return e.push(y,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(g,")"),...ia}}),{children:e,attributes:a}}}},sa={provides(t){let e=!1
o.matchMedia&&(e=o.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const t=[],a={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"}
t.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}})
const i={...n,attributeName:"opacity"},r={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]}
return e||r.children.push({tag:"animate",attributes:{...n,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),t.push(r),t.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||t.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:t}}}};(function(t,e){let{mixoutsTo:a}=e
Kt=t,Jt={},Object.keys(Qt).forEach((t=>{-1===Zt.indexOf(t)&&delete Qt[t]})),Kt.forEach((t=>{const e=t.mixout?t.mixout():{}
if(Object.keys(e).forEach((t=>{"function"==typeof e[t]&&(a[t]=e[t]),"object"==typeof e[t]&&Object.keys(e[t]).forEach((n=>{a[t]||(a[t]={}),a[t][n]=e[t][n]}))})),t.hooks){const e=t.hooks()
Object.keys(e).forEach((t=>{Jt[t]||(Jt[t]=[]),Jt[t].push(e[t])}))}t.provides&&t.provides(Qt)}))})([gt,He,We,_e,Be,$e,ea,na,oa,sa,{hooks:()=>({parseNodeAttributes(t,e){const a=e.getAttribute("data-fa-symbol"),n=null!==a&&(""===a||a)
return t.symbol=n,t}})}],{mixoutsTo:re}),function(t){try{for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n]
t(...a)}catch(ca){if(!I)throw ca}}((function(t){f&&(o.FontAwesome||(o.FontAwesome=re),wt((()=>{oe(),te("bootstrap")}))),vt.hooks={...vt.hooks,addPack:(t,e)=>{vt.styles[t]={...vt.styles[t]||{},...e},Ht(),oe()},addPacks:t=>{t.forEach((t=>{let[e,a]=t
vt.styles[e]={...vt.styles[e]||{},...a}})),Ht(),oe()},addShims:t=>{vt.shims.push(...t),Ht(),oe()}}}))})()
