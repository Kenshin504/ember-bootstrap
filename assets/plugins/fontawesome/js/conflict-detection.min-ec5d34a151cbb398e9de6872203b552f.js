/*!
 * Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
var t
t=function(){"use strict"
let t={},e={}
try{"undefined"!=typeof window&&(t=window),"undefined"!=typeof document&&(e=document)}catch(t){}const{userAgent:n=""}=t.navigator||{},o=t,a=e,i=!!o.document,r=!!a.documentElement&&!!a.head&&"function"==typeof a.addEventListener&&"function"==typeof a.createElement
~n.indexOf("MSIE")||n.indexOf("Trident/")
const s=[]
let c=!1
function f(t){r&&(c?setTimeout(t,0):s.push(t))}r&&(c=(a.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(a.readyState),c||a.addEventListener("DOMContentLoaded",(function t(){a.removeEventListener("DOMContentLoaded",t),c=1,s.map((t=>t()))})))
var l="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},d=(function(t){function e(t,e){var n=(65535&t)+(65535&e)
return(t>>16)+(e>>16)+(n>>16)<<16|65535&n}function n(t,n,o,a,i,r){return e((r=e(e(n,t),e(a,r)))<<i|r>>>32-i,o)}function o(t,e,o,a,i,r,s){return n(e&o|~e&a,t,e,i,r,s)}function a(t,e,o,a,i,r,s){return n(e&a|o&~a,t,e,i,r,s)}function i(t,e,o,a,i,r,s){return n(e^o^a,t,e,i,r,s)}function r(t,e,o,a,i,r,s){return n(o^(e|~a),t,e,i,r,s)}function s(t,n){var s,c,f,l
t[n>>5]|=128<<n%32,t[14+(n+64>>>9<<4)]=n
for(var d=1732584193,u=-271733879,h=-1732584194,g=271733878,m=0;m<t.length;m+=16)d=o(s=d,c=u,f=h,l=g,t[m],7,-680876936),g=o(g,d,u,h,t[m+1],12,-389564586),h=o(h,g,d,u,t[m+2],17,606105819),u=o(u,h,g,d,t[m+3],22,-1044525330),d=o(d,u,h,g,t[m+4],7,-176418897),g=o(g,d,u,h,t[m+5],12,1200080426),h=o(h,g,d,u,t[m+6],17,-1473231341),u=o(u,h,g,d,t[m+7],22,-45705983),d=o(d,u,h,g,t[m+8],7,1770035416),g=o(g,d,u,h,t[m+9],12,-1958414417),h=o(h,g,d,u,t[m+10],17,-42063),u=o(u,h,g,d,t[m+11],22,-1990404162),d=o(d,u,h,g,t[m+12],7,1804603682),g=o(g,d,u,h,t[m+13],12,-40341101),h=o(h,g,d,u,t[m+14],17,-1502002290),d=a(d,u=o(u,h,g,d,t[m+15],22,1236535329),h,g,t[m+1],5,-165796510),g=a(g,d,u,h,t[m+6],9,-1069501632),h=a(h,g,d,u,t[m+11],14,643717713),u=a(u,h,g,d,t[m],20,-373897302),d=a(d,u,h,g,t[m+5],5,-701558691),g=a(g,d,u,h,t[m+10],9,38016083),h=a(h,g,d,u,t[m+15],14,-660478335),u=a(u,h,g,d,t[m+4],20,-405537848),d=a(d,u,h,g,t[m+9],5,568446438),g=a(g,d,u,h,t[m+14],9,-1019803690),h=a(h,g,d,u,t[m+3],14,-187363961),u=a(u,h,g,d,t[m+8],20,1163531501),d=a(d,u,h,g,t[m+13],5,-1444681467),g=a(g,d,u,h,t[m+2],9,-51403784),h=a(h,g,d,u,t[m+7],14,1735328473),d=i(d,u=a(u,h,g,d,t[m+12],20,-1926607734),h,g,t[m+5],4,-378558),g=i(g,d,u,h,t[m+8],11,-2022574463),h=i(h,g,d,u,t[m+11],16,1839030562),u=i(u,h,g,d,t[m+14],23,-35309556),d=i(d,u,h,g,t[m+1],4,-1530992060),g=i(g,d,u,h,t[m+4],11,1272893353),h=i(h,g,d,u,t[m+7],16,-155497632),u=i(u,h,g,d,t[m+10],23,-1094730640),d=i(d,u,h,g,t[m+13],4,681279174),g=i(g,d,u,h,t[m],11,-358537222),h=i(h,g,d,u,t[m+3],16,-722521979),u=i(u,h,g,d,t[m+6],23,76029189),d=i(d,u,h,g,t[m+9],4,-640364487),g=i(g,d,u,h,t[m+12],11,-421815835),h=i(h,g,d,u,t[m+15],16,530742520),d=r(d,u=i(u,h,g,d,t[m+2],23,-995338651),h,g,t[m],6,-198630844),g=r(g,d,u,h,t[m+7],10,1126891415),h=r(h,g,d,u,t[m+14],15,-1416354905),u=r(u,h,g,d,t[m+5],21,-57434055),d=r(d,u,h,g,t[m+12],6,1700485571),g=r(g,d,u,h,t[m+3],10,-1894986606),h=r(h,g,d,u,t[m+10],15,-1051523),u=r(u,h,g,d,t[m+1],21,-2054922799),d=r(d,u,h,g,t[m+8],6,1873313359),g=r(g,d,u,h,t[m+15],10,-30611744),h=r(h,g,d,u,t[m+6],15,-1560198380),u=r(u,h,g,d,t[m+13],21,1309151649),d=r(d,u,h,g,t[m+4],6,-145523070),g=r(g,d,u,h,t[m+11],10,-1120210379),h=r(h,g,d,u,t[m+2],15,718787259),u=r(u,h,g,d,t[m+9],21,-343485551),d=e(d,s),u=e(u,c),h=e(h,f),g=e(g,l)
return[d,u,h,g]}function c(t){for(var e="",n=32*t.length,o=0;o<n;o+=8)e+=String.fromCharCode(t[o>>5]>>>o%32&255)
return e}function f(t){var e=[]
for(e[(t.length>>2)-1]=void 0,o=0;o<e.length;o+=1)e[o]=0
for(var n=8*t.length,o=0;o<n;o+=8)e[o>>5]|=(255&t.charCodeAt(o/8))<<o%32
return e}function d(t){for(var e,n="0123456789abcdef",o="",a=0;a<t.length;a+=1)e=t.charCodeAt(a),o+=n.charAt(e>>>4&15)+n.charAt(15&e)
return o}function u(t){return unescape(encodeURIComponent(t))}function h(t){return c(s(f(t=u(t)),8*t.length))}function g(t,e){return function(t,e){var n,o=f(t),a=[],i=[]
for(a[15]=i[15]=void 0,16<o.length&&(o=s(o,8*t.length)),n=0;n<16;n+=1)a[n]=909522486^o[n],i[n]=1549556828^o[n]
return e=s(a.concat(f(e)),512+8*e.length),c(s(i.concat(e),640))}(u(t),u(e))}function m(t,e,n){return e?n?g(e,t):d(g(e,t)):n?h(t):d(h(t))}var p
p=l,t.exports?t.exports=m:p.md5=m}(k={exports:{}}),k.exports)
function u(t){if(null!==t&&"object"==typeof t)return t.src?d(t.src):t.href?d(t.href):t.innerText&&""!==t.innerText?d(t.innerText):void 0}const h="fa-kits-diag",g="fa-kits-node-under-test",m="data-md5",p="data-fa-detection-ignore",w="data-fa-detection-timeout",b="data-fa-detection-results-collection-max-wait",y=t=>{t.preventDefault(),t.stopPropagation()}
function v(t){let{fn:e=()=>!0,initialDuration:n=1,maxDuration:a=o.FontAwesomeDetection.timeout,showProgress:i=!1,progressIndicator:r}=t
return new Promise((function(t,o){!function n(s,c){setTimeout((function(){var s=e()
i&&console.info(r),s?t(s):(s=250+c)<=a?n(250,s):o("timeout")}),s)}(n,0)}))}function A(t){var{nodesTested:e,nodesFound:t}=t
o.FontAwesomeDetection=o.FontAwesomeDetection||{},o.FontAwesomeDetection.nodesTested=e,o.FontAwesomeDetection.nodesFound=t,o.FontAwesomeDetection.detectionDone=!0}var x=o.FontAwesomeDetection||{},T={report:function(t){var e,{nodesTested:n,nodesFound:o}=t
const a={}
for(e in o)n.conflict[e]||n.noConflict[e]||(a[e]=o[e])
if(0<(t=Object.keys(n.conflict).length)){console.info("%cConflict".concat(1<t?"s":""," found:"),"color: darkred; font-size: large")
const e={}
for(var i in n.conflict){const t=n.conflict[i]
e[i]={tagName:t.tagName,"src/href":t.src||t.href||"n/a","innerText excerpt":t.innerText&&""!==t.innerText?t.innerText.slice(0,200)+"...":"(empty)"}}console.table(e)}if(0<(t=Object.keys(n.noConflict).length)){console.info("%cNo conflict".concat(1<t?"s":""," found with ").concat(1===t?"this":"these",":"),"color: green; font-size: large")
const e={}
for(var r in n.noConflict){const t=n.noConflict[r]
e[r]={tagName:t.tagName,"src/href":t.src||t.href||"n/a","innerText excerpt":t.innerText&&""!==t.innerText?t.innerText.slice(0,200)+"...":"(empty)"}}console.table(e)}if(0<(t=Object.keys(a).length)){console.info("%cLeftovers--we timed out before collecting test results for ".concat(1===t?"this":"these",":"),"color: blue; font-size: large")
const e={}
for(var s in a){const t=a[s]
e[s]={tagName:t.tagName,"src/href":t.src||t.href||"n/a","innerText excerpt":t.innerText&&""!==t.innerText?t.innerText.slice(0,200)+"...":"(empty)"}}console.table(e)}},timeout:+(a.currentScript.getAttribute(w)||"2000"),resultsCollectionMaxWait:+(a.currentScript.getAttribute(b)||"5000"),...x,__pollUntil:v,md5ForNode:u,detectionDone:!1,nodesTested:null,nodesFound:null}
o.FontAwesomeDetection=T
var E="classic",k={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}}
x={kit:"fak"},T={"kit-duotone":"fakd"}
const C=(()=>{try{return"production"===process.env.NODE_ENV}catch(t){return!1}})()
function D(t){return new Proxy(t,{get:(t,e)=>e in t?t[e]:t[E]})}const F={...k}
F[E]={...k[E],fak:"kit","fa-kit":"kit",fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"},D(F)
const N={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}}
N[E]={...N[E],...x,...T},T=D(N)
const O={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}}
O[E]={...O[E],fak:"fa-kit"},D(O)
const j={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}}
j[E]={...j[E],"fa-kit":"fak"},D(j),D({classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}})
const M=new Set
Object.keys(T[E]).map(M.add.bind(M)),Object.keys(T.sharp).map(M.add.bind(M)),Object.keys(T["sharp-duotone"]).map(M.add.bind(M)),function(t){try{for(var e=arguments.length,n=new Array(1<e?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o]
t(...n)}catch(t){if(!C)throw t}}((()=>{i&&r&&function(t){let e=0<arguments.length&&void 0!==t?t:()=>{}
const n={conflict:{},noConflict:{}}
o.onmessage=function(t){"file://"!==o.location.origin&&t.origin!==o.location.origin||t&&t.data&&("fontawesome-conflict"===t.data.type?n.conflict[t.data.md5]=t.data:"no-conflict"===t.data.type&&(n.noConflict[t.data.md5]=t.data))}
var i=function(t){var e=Array.from(a.scripts).filter((e=>!e.hasAttribute(p)&&e!==t))
const n={}
for(let s=0;s<e.length;s++){const t=a.createElement("iframe")
t.setAttribute("style","display:none;")
const c=a.createElement("script")
c.setAttribute("id",g)
var i=u(e[s])
c.setAttribute(m,i),n[i]=e[s],""!==e[s].src&&(c.src=e[s].src),""!==e[s].innerText&&(c.innerText=e[s].innerText),c.async=!0
const l=a.createElement("script")
l.setAttribute("id",h)
var r="file://"===o.location.origin?"*":o.location.origin
l.innerText="(".concat(((t,e,n)=>{parent.FontAwesomeDetection.__pollUntil({fn:()=>!!window.FontAwesomeConfig||!!window.FontAwesomeKitConfig}).then((function(){var o=document.getElementById(t)
parent.postMessage({type:"fontawesome-conflict",technology:"js",src:o.src,innerText:o.innerText,tagName:o.tagName,md5:e},n)})).catch((function(o){var a=document.getElementById(t)
"timeout"===o?parent.postMessage({type:"no-conflict",src:a.src,innerText:a.innerText,tagName:a.tagName,md5:e},n):console.error(o)}))}).toString(),")('").concat(g,"', '").concat(i,"', '").concat(r,"');"),t.onload=function(){t.contentWindow.addEventListener("error",y,!0),t.contentDocument.head.appendChild(l),t.contentDocument.head.appendChild(c)},f((()=>a.body.appendChild(t)))}return n}(a.currentScript)
t=function(){var t=Array.from(a.getElementsByTagName("link")).filter((t=>!t.hasAttribute(p))),e=Array.from(a.getElementsByTagName("style")).filter((t=>!(t.hasAttribute(p)||o.FontAwesomeConfig&&t.innerText.match(new RegExp("svg:not\\(:root\\)\\.".concat(o.FontAwesomeConfig.replacementClass))))))
function n(t,e){const n=a.createElement("iframe")
n.setAttribute("style","visibility: hidden; position: absolute; height: 0; width: 0;")
var i="fa-test-icon-"+e
const r=a.createElement("i")
r.setAttribute("class","fa fa-coffee"),r.setAttribute("id",i)
const s=a.createElement("script")
s.setAttribute("id",h)
var c="file://"===o.location.origin?"*":o.location.origin
s.innerText="(".concat(((t,e,n,o)=>{parent.FontAwesomeDetection.__pollUntil({fn:()=>{var t=document.getElementById(e)
const n=window.getComputedStyle(t).getPropertyValue("font-family")
return!(!n.match(/FontAwesome/)&&!n.match(/Font Awesome [56]/))}}).then((()=>{var e=document.getElementById(t)
parent.postMessage({type:"fontawesome-conflict",technology:"webfont",href:e.href,innerText:e.innerText,tagName:e.tagName,md5:n},o)})).catch((function(e){var a=document.getElementById(t)
"timeout"===e?parent.postMessage({type:"no-conflict",technology:"webfont",href:a.src,innerText:a.innerText,tagName:a.tagName,md5:n},o):console.error(e)}))}).toString(),")('").concat(g,"', '").concat(i||"foo","', '").concat(e,"', '").concat(c,"');"),n.onload=function(){n.contentWindow.addEventListener("error",y,!0),n.contentDocument.head.appendChild(s),n.contentDocument.head.appendChild(t),n.contentDocument.body.appendChild(r)},f((()=>a.body.appendChild(n)))}const i={}
for(let o=0;o<t.length;o++){const e=a.createElement("link")
e.setAttribute("id",g),e.setAttribute("href",t[o].href),e.setAttribute("rel",t[o].rel)
var r=u(t[o])
e.setAttribute(m,r),i[r]=t[o],n(e,r)}for(let o=0;o<e.length;o++){var s=a.createElement("style")
s.setAttribute("id",g)
var c=u(e[o])
s.setAttribute(m,c),s.innerText=e[o].innerText,i[c]=e[o],n(s,c)}return i}()
const r={...i,...t},s=Object.keys(i).length+Object.keys(t).length
t=o.FontAwesomeDetection.timeout+o.FontAwesomeDetection.resultsCollectionMaxWait,console.group("Font Awesome Detector"),0===s?(console.info("%cAll Good!","color: green; font-size: large"),console.info("We didn't find anything that needs testing for conflicts. Ergo, no conflicts.")):(console.info("Testing ".concat(s," possible conflicts.")),console.info("We'll wait about ".concat(Math.round(o.FontAwesomeDetection.timeout/10)/100," seconds while testing these and\n")+"then up to another ".concat(Math.round(o.FontAwesomeDetection.resultsCollectionMaxWait/10)/100," to allow the browser time\n")+"to accumulate the results. But we'll probably be outta here way before then.\n\n"),console.info("You can adjust those durations by assigning values to these attributes on the <script> element that loads this detection:"),console.info("\t%c".concat(w,"%c: milliseconds to wait for each test before deciding whether it's a conflict."),"font-weight: bold;","font-size: normal;"),console.info("\t%c".concat(b,"%c: milliseconds to wait for the browser to accumulate test results before giving up."),"font-weight: bold;","font-size: normal;"),v({maxDuration:t,showProgress:!0,progressIndicator:"waiting...",fn:()=>Object.keys(n.conflict).length+Object.keys(n.noConflict).length>=s}).then((()=>{console.info("DONE!"),A({nodesTested:n,nodesFound:r}),e({nodesTested:n,nodesFound:r}),console.groupEnd()})).catch((t=>{"timeout"===t?console.info("TIME OUT! We waited until we got tired. Here's what we found:"):(console.info("Whoops! We hit an error:",t),console.info("Here's what we'd found up until that error:")),A({nodesTested:n,nodesFound:r}),e({nodesTested:n,nodesFound:r}),console.groupEnd()})))}(window.FontAwesomeDetection.report)}))},"object"==typeof exports&&"undefined"!=typeof module||"function"!=typeof define||!define.amd?t():define(t)
