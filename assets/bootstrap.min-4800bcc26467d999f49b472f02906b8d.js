/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@popperjs/core")):"function"==typeof define&&define.amd?define(["@popperjs/core"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e(t.Popper)}(this,(function(t){"use strict"
const e=function(t){const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}})
if(t)for(const i in t)if("default"!==i){const s=Object.getOwnPropertyDescriptor(t,i)
Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>t[i]})}return e.default=t,Object.freeze(e)}(t),i=new Map,s={set(t,e,s){i.has(t)||i.set(t,new Map)
const n=i.get(t)
n.has(e)||0===n.size?n.set(e,s):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>i.has(t)&&i.get(t).get(e)||null,remove(t,e){if(!i.has(t))return
const s=i.get(t)
s.delete(e),0===s.size&&i.delete(t)}},n="transitionend",o=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,((t,e)=>`#${CSS.escape(e)}`))),t),r=t=>{t.dispatchEvent(new Event(n))},a=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),l=t=>a(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(o(t)):null,c=t=>{if(!a(t)||0===t.getClientRects().length)return!1
const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])")
if(!i)return e
if(i!==t){const e=t.closest("summary")
if(e&&e.parentNode!==i)return!1
if(null===e)return!1}return e},h=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),d=t=>{if(!document.documentElement.attachShadow)return null
if("function"==typeof t.getRootNode){const e=t.getRootNode()
return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?d(t.parentNode):null},u=()=>{},_=t=>{t.offsetHeight},g=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,f=[],m=()=>"rtl"===document.documentElement.dir,p=t=>{var e
e=()=>{const e=g()
if(e){const i=t.NAME,s=e.fn[i]
e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=s,t.jQueryInterface)}},"loading"===document.readyState?(f.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of f)t()})),f.push(e)):e()},b=(t,e=[],i=t)=>"function"==typeof t?t(...e):i,v=(t,e,i=!0)=>{if(!i)return void b(t)
const s=(t=>{if(!t)return 0
let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t)
const s=Number.parseFloat(e),n=Number.parseFloat(i)
return s||n?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5
let o=!1
const a=({target:i})=>{i===e&&(o=!0,e.removeEventListener(n,a),b(t))}
e.addEventListener(n,a),setTimeout((()=>{o||r(e)}),s)},y=(t,e,i,s)=>{const n=t.length
let o=t.indexOf(e)
return-1===o?!i&&s?t[n-1]:t[0]:(o+=i?1:-1,s&&(o=(o+n)%n),t[Math.max(0,Math.min(o,n-1))])},w=/[^.]*(?=\..*)\.|.*/,A=/\..*/,E=/::\d+$/,C={}
let T=1
const k={mouseenter:"mouseover",mouseleave:"mouseout"},$=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"])
function S(t,e){return e&&`${e}::${T++}`||t.uidEvent||T++}function L(t){const e=S(t)
return t.uidEvent=e,C[e]=C[e]||{},C[e]}function O(t,e,i=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===i))}function I(t,e,i){const s="string"==typeof e,n=s?i:e||i
let o=x(t)
return $.has(o)||(o=t),[s,n,o]}function D(t,e,i,s,n){if("string"!=typeof e||!t)return
let[o,r,a]=I(e,i,s)
if(e in k){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)}
r=t(r)}const l=L(t),c=l[a]||(l[a]={}),h=O(c,r,o?i:null)
if(h)return void(h.oneOff=h.oneOff&&n)
const d=S(r,e.replace(w,"")),u=o?function(t,e,i){return function s(n){const o=t.querySelectorAll(e)
for(let{target:r}=n;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return j(n,{delegateTarget:r}),s.oneOff&&M.off(t,n.type,e,i),i.apply(r,[n])}}(t,i,r):function(t,e){return function i(s){return j(s,{delegateTarget:t}),i.oneOff&&M.off(t,s.type,e),e.apply(t,[s])}}(t,r)
u.delegationSelector=o?i:null,u.callable=r,u.oneOff=n,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function N(t,e,i,s,n){const o=O(e[i],s,n)
o&&(t.removeEventListener(i,o,Boolean(n)),delete e[i][o.uidEvent])}function P(t,e,i,s){const n=e[i]||{}
for(const[o,r]of Object.entries(n))o.includes(s)&&N(t,e,i,r.callable,r.delegationSelector)}function x(t){return t=t.replace(A,""),k[t]||t}const M={on(t,e,i,s){D(t,e,i,s,!1)},one(t,e,i,s){D(t,e,i,s,!0)},off(t,e,i,s){if("string"!=typeof e||!t)return
const[n,o,r]=I(e,i,s),a=r!==e,l=L(t),c=l[r]||{},h=e.startsWith(".")
if(void 0===o){if(h)for(const i of Object.keys(l))P(t,l,i,e.slice(1))
for(const[i,s]of Object.entries(c)){const n=i.replace(E,"")
a&&!e.includes(n)||N(t,l,r,s.callable,s.delegationSelector)}}else{if(!Object.keys(c).length)return
N(t,l,r,o,n?i:null)}},trigger(t,e,i){if("string"!=typeof e||!t)return null
const s=g()
let n=null,o=!0,r=!0,a=!1
e!==x(e)&&s&&(n=s.Event(e,i),s(t).trigger(n),o=!n.isPropagationStopped(),r=!n.isImmediatePropagationStopped(),a=n.isDefaultPrevented())
const l=j(new Event(e,{bubbles:o,cancelable:!0}),i)
return a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&n&&n.preventDefault(),l}}
function j(t,e={}){for(const[i,s]of Object.entries(e))try{t[i]=s}catch(e){Object.defineProperty(t,i,{configurable:!0,get:()=>s})}return t}function F(t){if("true"===t)return!0
if("false"===t)return!1
if(t===Number(t).toString())return Number(t)
if(""===t||"null"===t)return null
if("string"!=typeof t)return t
try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function z(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const H={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${z(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${z(e)}`)},getDataAttributes(t){if(!t)return{}
const e={},i=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")))
for(const s of i){let i=s.replace(/^bs/,"")
i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=F(t.dataset[s])}return e},getDataAttribute:(t,e)=>F(t.getAttribute(`data-bs-${z(e)}`))}
class B{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=a(e)?H.getDataAttribute(e,"config"):{}
return{...this.constructor.Default,..."object"==typeof i?i:{},...a(e)?H.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[s,n]of Object.entries(e)){const e=t[s],o=a(e)?"element":null==(i=e)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase()
if(!new RegExp(n).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${n}".`)}var i}}class q extends B{constructor(t,e){super(),(t=l(t))&&(this._element=t,this._config=this._getConfig(e),s.set(this._element,this.constructor.DATA_KEY,this))}dispose(){s.remove(this._element,this.constructor.DATA_KEY),M.off(this._element,this.constructor.EVENT_KEY)
for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){v(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return s.get(l(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const W=t=>{let e=t.getAttribute("data-bs-target")
if(!e||"#"===e){let i=t.getAttribute("href")
if(!i||!i.includes("#")&&!i.startsWith("."))return null
i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e?e.split(",").map((t=>o(t))).join(","):null},R={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[]
let s=t.parentNode.closest(e)
for(;s;)i.push(s),s=s.parentNode.closest(e)
return i},prev(t,e){let i=t.previousElementSibling
for(;i;){if(i.matches(e))return[i]
i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling
for(;i;){if(i.matches(e))return[i]
i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",")
return this.find(e,t).filter((t=>!h(t)&&c(t)))},getSelectorFromElement(t){const e=W(t)
return e&&R.findOne(e)?e:null},getElementFromSelector(t){const e=W(t)
return e?R.findOne(e):null},getMultipleElementsFromSelector(t){const e=W(t)
return e?R.find(e):[]}},K=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,s=t.NAME
M.on(document,i,`[data-bs-dismiss="${s}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),h(this))return
const n=R.getElementFromSelector(this)||this.closest(`.${s}`)
t.getOrCreateInstance(n)[e]()}))},V=".bs.alert",Q=`close${V}`,X=`closed${V}`
class Y extends q{static get NAME(){return"alert"}close(){if(M.trigger(this._element,Q).defaultPrevented)return
this._element.classList.remove("show")
const t=this._element.classList.contains("fade")
this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),M.trigger(this._element,X),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=Y.getOrCreateInstance(this)
if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`)
e[t](this)}}))}}K(Y,"close"),p(Y)
const U='[data-bs-toggle="button"]'
class G extends q{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=G.getOrCreateInstance(this)
"toggle"===t&&e[t]()}))}}M.on(document,"click.bs.button.data-api",U,(t=>{t.preventDefault()
const e=t.target.closest(U)
G.getOrCreateInstance(e).toggle()})),p(G)
const J=".bs.swipe",Z=`touchstart${J}`,tt=`touchmove${J}`,et=`touchend${J}`,it=`pointerdown${J}`,st=`pointerup${J}`,nt={endCallback:null,leftCallback:null,rightCallback:null},ot={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"}
class rt extends B{constructor(t,e){super(),this._element=t,t&&rt.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return nt}static get DefaultType(){return ot}static get NAME(){return"swipe"}dispose(){M.off(this._element,J)}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),b(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX)
if(t<=40)return
const e=t/this._deltaX
this._deltaX=0,e&&b(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(M.on(this._element,it,(t=>this._start(t))),M.on(this._element,st,(t=>this._end(t))),this._element.classList.add("pointer-event")):(M.on(this._element,Z,(t=>this._start(t))),M.on(this._element,tt,(t=>this._move(t))),M.on(this._element,et,(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const at=".bs.carousel",lt=".data-api",ct="next",ht="prev",dt="left",ut="right",_t=`slide${at}`,gt=`slid${at}`,ft=`keydown${at}`,mt=`mouseenter${at}`,pt=`mouseleave${at}`,bt=`dragstart${at}`,vt=`load${at}${lt}`,yt=`click${at}${lt}`,wt="carousel",At="active",Et=".active",Ct=".carousel-item",Tt=Et+Ct,kt={ArrowLeft:ut,ArrowRight:dt},$t={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},St={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"}
class Lt extends q{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=R.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===wt&&this.cycle()}static get Default(){return $t}static get DefaultType(){return St}static get NAME(){return"carousel"}next(){this._slide(ct)}nextWhenVisible(){!document.hidden&&c(this._element)&&this.next()}prev(){this._slide(ht)}pause(){this._isSliding&&r(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?M.one(this._element,gt,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems()
if(t>e.length-1||t<0)return
if(this._isSliding)return void M.one(this._element,gt,(()=>this.to(t)))
const i=this._getItemIndex(this._getActive())
if(i===t)return
const s=t>i?ct:ht
this._slide(s,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&M.on(this._element,ft,(t=>this._keydown(t))),"hover"===this._config.pause&&(M.on(this._element,mt,(()=>this.pause())),M.on(this._element,pt,(()=>this._maybeEnableCycle()))),this._config.touch&&rt.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const e of R.find(".carousel-item img",this._element))M.on(e,bt,(t=>t.preventDefault()))
const t={leftCallback:()=>this._slide(this._directionToOrder(dt)),rightCallback:()=>this._slide(this._directionToOrder(ut)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}}
this._swipeHelper=new rt(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return
const e=kt[t.key]
e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return
const e=R.findOne(Et,this._indicatorsElement)
e.classList.remove(At),e.removeAttribute("aria-current")
const i=R.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement)
i&&(i.classList.add(At),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive()
if(!t)return
const e=Number.parseInt(t.getAttribute("data-bs-interval"),10)
this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return
const i=this._getActive(),s=t===ct,n=e||y(this._getItems(),i,s,this._config.wrap)
if(n===i)return
const o=this._getItemIndex(n),r=e=>M.trigger(this._element,e,{relatedTarget:n,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o})
if(r(_t).defaultPrevented)return
if(!i||!n)return
const a=Boolean(this._interval)
this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=n
const l=s?"carousel-item-start":"carousel-item-end",c=s?"carousel-item-next":"carousel-item-prev"
n.classList.add(c),_(n),i.classList.add(l),n.classList.add(l),this._queueCallback((()=>{n.classList.remove(l,c),n.classList.add(At),i.classList.remove(At,c,l),this._isSliding=!1,r(gt)}),i,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return R.findOne(Tt,this._element)}_getItems(){return R.find(Ct,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return m()?t===dt?ht:ct:t===dt?ct:ht}_orderToDirection(t){return m()?t===ht?dt:ut:t===ht?ut:dt}static jQueryInterface(t){return this.each((function(){const e=Lt.getOrCreateInstance(this,t)
if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`)
e[t]()}}else e.to(t)}))}}M.on(document,yt,"[data-bs-slide], [data-bs-slide-to]",(function(t){const e=R.getElementFromSelector(this)
if(!e||!e.classList.contains(wt))return
t.preventDefault()
const i=Lt.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to")
return s?(i.to(s),void i._maybeEnableCycle()):"next"===H.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),M.on(window,vt,(()=>{const t=R.find('[data-bs-ride="carousel"]')
for(const e of t)Lt.getOrCreateInstance(e)})),p(Lt)
const Ot=".bs.collapse",It=`show${Ot}`,Dt=`shown${Ot}`,Nt=`hide${Ot}`,Pt=`hidden${Ot}`,xt=`click${Ot}.data-api`,Mt="show",jt="collapse",Ft="collapsing",zt=`:scope .${jt} .${jt}`,Ht='[data-bs-toggle="collapse"]',Bt={parent:null,toggle:!0},qt={parent:"(null|element)",toggle:"boolean"}
class Wt extends q{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[]
const i=R.find(Ht)
for(const s of i){const t=R.getSelectorFromElement(s),e=R.find(t).filter((t=>t===this._element))
null!==t&&e.length&&this._triggerArray.push(s)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Bt}static get DefaultType(){return qt}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return
let t=[]
if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>Wt.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return
if(M.trigger(this._element,It).defaultPrevented)return
for(const s of t)s.hide()
const e=this._getDimension()
this._element.classList.remove(jt),this._element.classList.add(Ft),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0
const i=`scroll${e[0].toUpperCase()+e.slice(1)}`
this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(Ft),this._element.classList.add(jt,Mt),this._element.style[e]="",M.trigger(this._element,Dt)}),this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return
if(M.trigger(this._element,Nt).defaultPrevented)return
const t=this._getDimension()
this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,_(this._element),this._element.classList.add(Ft),this._element.classList.remove(jt,Mt)
for(const e of this._triggerArray){const t=R.getElementFromSelector(e)
t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(Ft),this._element.classList.add(jt),M.trigger(this._element,Pt)}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(Mt)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=l(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return
const t=this._getFirstLevelChildren(Ht)
for(const e of t){const t=R.getElementFromSelector(e)
t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=R.find(zt,this._config.parent)
return R.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={}
return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const i=Wt.getOrCreateInstance(this,e)
if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`)
i[t]()}}))}}M.on(document,xt,Ht,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault()
for(const e of R.getMultipleElementsFromSelector(this))Wt.getOrCreateInstance(e,{toggle:!1}).toggle()})),p(Wt)
const Rt="dropdown",Kt=".bs.dropdown",Vt=".data-api",Qt="ArrowUp",Xt="ArrowDown",Yt=`hide${Kt}`,Ut=`hidden${Kt}`,Gt=`show${Kt}`,Jt=`shown${Kt}`,Zt=`click${Kt}${Vt}`,te=`keydown${Kt}${Vt}`,ee=`keyup${Kt}${Vt}`,ie="show",se='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',ne=`${se}.${ie}`,oe=".dropdown-menu",re=m()?"top-end":"top-start",ae=m()?"top-start":"top-end",le=m()?"bottom-end":"bottom-start",ce=m()?"bottom-start":"bottom-end",he=m()?"left-start":"right-start",de=m()?"right-start":"left-start",ue={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},_e={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"}
class ge extends q{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=R.next(this._element,oe)[0]||R.prev(this._element,oe)[0]||R.findOne(oe,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return ue}static get DefaultType(){return _e}static get NAME(){return Rt}toggle(){return this._isShown()?this.hide():this.show()}show(){if(h(this._element)||this._isShown())return
const t={relatedTarget:this._element}
if(!M.trigger(this._element,Gt,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))M.on(t,"mouseover",u)
this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ie),this._element.classList.add(ie),M.trigger(this._element,Jt,t)}}hide(){if(h(this._element)||!this._isShown())return
const t={relatedTarget:this._element}
this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!M.trigger(this._element,Yt,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))M.off(t,"mouseover",u)
this._popper&&this._popper.destroy(),this._menu.classList.remove(ie),this._element.classList.remove(ie),this._element.setAttribute("aria-expanded","false"),H.removeDataAttribute(this._menu,"popper"),M.trigger(this._element,Ut,t)}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!a(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${Rt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`)
return t}_createPopper(){if(void 0===e)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)")
let t=this._element
"parent"===this._config.reference?t=this._parent:a(this._config.reference)?t=l(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference)
const i=this._getPopperConfig()
this._popper=e.createPopper(t,this._menu,i)}_isShown(){return this._menu.classList.contains(ie)}_getPlacement(){const t=this._parent
if(t.classList.contains("dropend"))return he
if(t.classList.contains("dropstart"))return de
if(t.classList.contains("dropup-center"))return"top"
if(t.classList.contains("dropdown-center"))return"bottom"
const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()
return t.classList.contains("dropup")?e?ae:re:e?ce:le}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config
return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]}
return(this._inNavbar||"static"===this._config.display)&&(H.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...b(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:e}){const i=R.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>c(t)))
i.length&&y(i,e,t===Xt,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=ge.getOrCreateInstance(this,t)
if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`)
e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return
const e=R.find(ne)
for(const i of e){const e=ge.getInstance(i)
if(!e||!1===e._config.autoClose)continue
const s=t.composedPath(),n=s.includes(e._menu)
if(s.includes(e._element)||"inside"===e._config.autoClose&&!n||"outside"===e._config.autoClose&&n)continue
if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue
const o={relatedTarget:e._element}
"click"===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,s=[Qt,Xt].includes(t.key)
if(!s&&!i)return
if(e&&!i)return
t.preventDefault()
const n=this.matches(se)?this:R.prev(this,se)[0]||R.next(this,se)[0]||R.findOne(se,t.delegateTarget.parentNode),o=ge.getOrCreateInstance(n)
if(s)return t.stopPropagation(),o.show(),void o._selectMenuItem(t)
o._isShown()&&(t.stopPropagation(),o.hide(),n.focus())}}M.on(document,te,se,ge.dataApiKeydownHandler),M.on(document,te,oe,ge.dataApiKeydownHandler),M.on(document,Zt,ge.clearMenus),M.on(document,ee,ge.clearMenus),M.on(document,Zt,se,(function(t){t.preventDefault(),ge.getOrCreateInstance(this).toggle()})),p(ge)
const fe="backdrop",me="show",pe=`mousedown.bs.${fe}`,be={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},ve={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"}
class ye extends B{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return be}static get DefaultType(){return ve}static get NAME(){return fe}show(t){if(!this._config.isVisible)return void b(t)
this._append()
const e=this._getElement()
this._config.isAnimated&&_(e),e.classList.add(me),this._emulateAnimation((()=>{b(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(me),this._emulateAnimation((()=>{this.dispose(),b(t)}))):b(t)}dispose(){this._isAppended&&(M.off(this._element,pe),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div")
t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=l(t.rootElement),t}_append(){if(this._isAppended)return
const t=this._getElement()
this._config.rootElement.append(t),M.on(t,pe,(()=>{b(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){v(t,this._getElement(),this._config.isAnimated)}}const we=".bs.focustrap",Ae=`focusin${we}`,Ee=`keydown.tab${we}`,Ce="backward",Te={autofocus:!0,trapElement:null},ke={autofocus:"boolean",trapElement:"element"}
class $e extends B{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Te}static get DefaultType(){return ke}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),M.off(document,we),M.on(document,Ae,(t=>this._handleFocusin(t))),M.on(document,Ee,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,M.off(document,we))}_handleFocusin(t){const{trapElement:e}=this._config
if(t.target===document||t.target===e||e.contains(t.target))return
const i=R.focusableChildren(e)
0===i.length?e.focus():this._lastTabNavDirection===Ce?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?Ce:"forward")}}const Se=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Le=".sticky-top",Oe="padding-right",Ie="margin-right"
class De{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth
return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth()
this._disableOverFlow(),this._setElementAttributes(this._element,Oe,(e=>e+t)),this._setElementAttributes(Se,Oe,(e=>e+t)),this._setElementAttributes(Le,Ie,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Oe),this._resetElementAttributes(Se,Oe),this._resetElementAttributes(Le,Ie)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth()
this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+s)return
this._saveInitialAttribute(t,e)
const n=window.getComputedStyle(t).getPropertyValue(e)
t.style.setProperty(e,`${i(Number.parseFloat(n))}px`)}))}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e)
i&&H.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=H.getDataAttribute(t,e)
null!==i?(H.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(a(t))e(t)
else for(const i of R.find(t,this._element))e(i)}}const Ne=".bs.modal",Pe=`hide${Ne}`,xe=`hidePrevented${Ne}`,Me=`hidden${Ne}`,je=`show${Ne}`,Fe=`shown${Ne}`,ze=`resize${Ne}`,He=`click.dismiss${Ne}`,Be=`mousedown.dismiss${Ne}`,qe=`keydown.dismiss${Ne}`,We=`click${Ne}.data-api`,Re="modal-open",Ke="show",Ve="modal-static",Qe={backdrop:!0,focus:!0,keyboard:!0},Xe={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"}
class Ye extends q{constructor(t,e){super(t,e),this._dialog=R.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new De,this._addEventListeners()}static get Default(){return Qe}static get DefaultType(){return Xe}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||M.trigger(this._element,je,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Re),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){this._isShown&&!this._isTransitioning&&(M.trigger(this._element,Pe).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Ke),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){M.off(window,Ne),M.off(this._dialog,Ne),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new ye({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new $e({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0
const e=R.findOne(".modal-body",this._dialog)
e&&(e.scrollTop=0),_(this._element),this._element.classList.add(Ke),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,M.trigger(this._element,Fe,{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){M.on(this._element,qe,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),M.on(window,ze,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),M.on(this._element,Be,(t=>{M.one(this._element,He,(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(Re),this._resetAdjustments(),this._scrollBar.reset(),M.trigger(this._element,Me)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(M.trigger(this._element,xe).defaultPrevented)return
const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY
"hidden"===e||this._element.classList.contains(Ve)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(Ve),this._queueCallback((()=>{this._element.classList.remove(Ve),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0
if(i&&!t){const t=m()?"paddingLeft":"paddingRight"
this._element.style[t]=`${e}px`}if(!i&&t){const t=m()?"paddingRight":"paddingLeft"
this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=Ye.getOrCreateInstance(this,t)
if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`)
i[t](e)}}))}}M.on(document,We,'[data-bs-toggle="modal"]',(function(t){const e=R.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),M.one(e,je,(t=>{t.defaultPrevented||M.one(e,Me,(()=>{c(this)&&this.focus()}))}))
const i=R.findOne(".modal.show")
i&&Ye.getInstance(i).hide(),Ye.getOrCreateInstance(e).toggle(this)})),K(Ye),p(Ye)
const Ue=".bs.offcanvas",Ge=".data-api",Je=`load${Ue}${Ge}`,Ze="show",ti="showing",ei="hiding",ii=".offcanvas.show",si=`show${Ue}`,ni=`shown${Ue}`,oi=`hide${Ue}`,ri=`hidePrevented${Ue}`,ai=`hidden${Ue}`,li=`resize${Ue}`,ci=`click${Ue}${Ge}`,hi=`keydown.dismiss${Ue}`,di={backdrop:!0,keyboard:!0,scroll:!1},ui={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"}
class _i extends q{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return di}static get DefaultType(){return ui}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||M.trigger(this._element,si,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new De).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(ti),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Ze),this._element.classList.remove(ti),M.trigger(this._element,ni,{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&(M.trigger(this._element,oi).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(ei),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove(Ze,ei),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new De).reset(),M.trigger(this._element,ai)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop)
return new ye({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():M.trigger(this._element,ri)}:null})}_initializeFocusTrap(){return new $e({trapElement:this._element})}_addEventListeners(){M.on(this._element,hi,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():M.trigger(this._element,ri))}))}static jQueryInterface(t){return this.each((function(){const e=_i.getOrCreateInstance(this,t)
if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`)
e[t](this)}}))}}M.on(document,ci,'[data-bs-toggle="offcanvas"]',(function(t){const e=R.getElementFromSelector(this)
if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),h(this))return
M.one(e,ai,(()=>{c(this)&&this.focus()}))
const i=R.findOne(ii)
i&&i!==e&&_i.getInstance(i).hide(),_i.getOrCreateInstance(e).toggle(this)})),M.on(window,Je,(()=>{for(const t of R.find(ii))_i.getOrCreateInstance(t).show()})),M.on(window,li,(()=>{for(const t of R.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&_i.getOrCreateInstance(t).hide()})),K(_i),p(_i)
const gi={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},fi=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),mi=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,pi=(t,e)=>{const i=t.nodeName.toLowerCase()
return e.includes(i)?!fi.has(i)||Boolean(mi.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))},bi={allowList:gi,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},vi={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},yi={entry:"(string|element|function|null)",selector:"(string|element)"}
class wi extends B{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return bi}static get DefaultType(){return vi}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div")
t.innerHTML=this._maybeSanitize(this._config.template)
for(const[s,n]of Object.entries(this._config.content))this._setContent(t,n,s)
const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass)
return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},yi)}_setContent(t,e,i){const s=R.findOne(i,t)
s&&((e=this._resolvePossibleFunction(e))?a(e)?this._putElementInTemplate(l(e),s):this._config.html?s.innerHTML=this._maybeSanitize(e):s.textContent=e:s.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t
if(i&&"function"==typeof i)return i(t)
const s=(new window.DOMParser).parseFromString(t,"text/html"),n=[].concat(...s.body.querySelectorAll("*"))
for(const o of n){const t=o.nodeName.toLowerCase()
if(!Object.keys(e).includes(t)){o.remove()
continue}const i=[].concat(...o.attributes),s=[].concat(e["*"]||[],e[t]||[])
for(const e of i)pi(e,s)||o.removeAttribute(e.nodeName)}return s.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return b(t,[this])}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t)
e.textContent=t.textContent}}const Ai=new Set(["sanitize","allowList","sanitizeFn"]),Ei="fade",Ci="show",Ti=".modal",ki="hide.bs.modal",$i="hover",Si="focus",Li={AUTO:"auto",TOP:"top",RIGHT:m()?"left":"right",BOTTOM:"bottom",LEFT:m()?"right":"left"},Oi={allowList:gi,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Ii={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"}
class Di extends q{constructor(t,i){if(void 0===e)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)")
super(t,i),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Oi}static get DefaultType(){return Ii}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),M.off(this._element.closest(Ti),ki,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements")
if(!this._isWithContent()||!this._isEnabled)return
const t=M.trigger(this._element,this.constructor.eventName("show")),e=(d(this._element)||this._element.ownerDocument.documentElement).contains(this._element)
if(t.defaultPrevented||!e)return
this._disposePopper()
const i=this._getTipElement()
this._element.setAttribute("aria-describedby",i.getAttribute("id"))
const{container:s}=this._config
if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(i),M.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(i),i.classList.add(Ci),"ontouchstart"in document.documentElement)for(const n of[].concat(...document.body.children))M.on(n,"mouseover",u)
this._queueCallback((()=>{M.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1}),this.tip,this._isAnimated())}hide(){if(this._isShown()&&!M.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Ci),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))M.off(t,"mouseover",u)
this._activeTrigger.click=!1,this._activeTrigger[Si]=!1,this._activeTrigger[$i]=!1,this._isHovered=null,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),M.trigger(this._element,this.constructor.eventName("hidden")))}),this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml()
if(!e)return null
e.classList.remove(Ei,Ci),e.classList.add(`bs-${this.constructor.NAME}-auto`)
const i=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t))
return t})(this.constructor.NAME).toString()
return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(Ei),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new wi({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Ei)}_isShown(){return this.tip&&this.tip.classList.contains(Ci)}_createPopper(t){const i=b(this._config.placement,[this,t,this._element]),s=Li[i.toUpperCase()]
return e.createPopper(this._element,t,this._getPopperConfig(s))}_getOffset(){const{offset:t}=this._config
return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return b(t,[this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]}
return{...e,...b(this._config.popperConfig,[e])}}_setListeners(){const t=this._config.trigger.split(" ")
for(const e of t)if("click"===e)M.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>{this._initializeOnDelegatedTarget(t).toggle()}))
else if("manual"!==e){const t=e===$i?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===$i?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout")
M.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t)
e._activeTrigger["focusin"===t.type?Si:$i]=!0,e._enter()})),M.on(this._element,i,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t)
e._activeTrigger["focusout"===t.type?Si:$i]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},M.on(this._element.closest(Ti),ki,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title")
t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=H.getDataAttributes(this._element)
for(const i of Object.keys(e))Ai.has(i)&&delete e[i]
return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:l(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={}
for(const[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(t[e]=i)
return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each((function(){const e=Di.getOrCreateInstance(this,t)
if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`)
e[t]()}}))}}p(Di)
const Ni={...Di.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Pi={...Di.DefaultType,content:"(null|string|element|function)"}
class xi extends Di{static get Default(){return Ni}static get DefaultType(){return Pi}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=xi.getOrCreateInstance(this,t)
if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`)
e[t]()}}))}}p(xi)
const Mi=".bs.scrollspy",ji=`activate${Mi}`,Fi=`click${Mi}`,zi=`load${Mi}.data-api`,Hi="active",Bi="[href]",qi=".nav-link",Wi=`${qi}, .nav-item > ${qi}, .list-group-item`,Ri={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Ki={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"}
class Vi extends q{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Ri}static get DefaultType(){return Ki}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver()
for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=l(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,"string"==typeof t.threshold&&(t.threshold=t.threshold.split(",").map((t=>Number.parseFloat(t)))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(M.off(this._config.target,Fi),M.on(this._config.target,Fi,Bi,(t=>{const e=this._observableSections.get(t.target.hash)
if(e){t.preventDefault()
const i=this._rootElement||window,s=e.offsetTop-this._element.offsetTop
if(i.scrollTo)return void i.scrollTo({top:s,behavior:"smooth"})
i.scrollTop=s}})))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin}
return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},s=(this._rootElement||document.documentElement).scrollTop,n=s>=this._previousScrollData.parentScrollTop
this._previousScrollData.parentScrollTop=s
for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o))
continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop
if(n&&t){if(i(o),!s)return}else n||t||i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map
const t=R.find(Bi,this._config.target)
for(const e of t){if(!e.hash||h(e))continue
const t=R.findOne(decodeURI(e.hash),this._element)
c(t)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Hi),this._activateParents(t),M.trigger(this._element,ji,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))R.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(Hi)
else for(const e of R.parents(t,".nav, .list-group"))for(const t of R.prev(e,Wi))t.classList.add(Hi)}_clearActiveClass(t){t.classList.remove(Hi)
const e=R.find(`${Bi}.${Hi}`,t)
for(const i of e)i.classList.remove(Hi)}static jQueryInterface(t){return this.each((function(){const e=Vi.getOrCreateInstance(this,t)
if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`)
e[t]()}}))}}M.on(window,zi,(()=>{for(const t of R.find('[data-bs-spy="scroll"]'))Vi.getOrCreateInstance(t)})),p(Vi)
const Qi=".bs.tab",Xi=`hide${Qi}`,Yi=`hidden${Qi}`,Ui=`show${Qi}`,Gi=`shown${Qi}`,Ji=`click${Qi}`,Zi=`keydown${Qi}`,ts=`load${Qi}`,es="ArrowLeft",is="ArrowRight",ss="ArrowUp",ns="ArrowDown",os="Home",rs="End",as="active",ls="fade",cs="show",hs=".dropdown-toggle",ds=`:not(${hs})`,us='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',_s=`.nav-link${ds}, .list-group-item${ds}, [role="tab"]${ds}, ${us}`,gs=`.${as}[data-bs-toggle="tab"], .${as}[data-bs-toggle="pill"], .${as}[data-bs-toggle="list"]`
class fs extends q{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),M.on(this._element,Zi,(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element
if(this._elemIsActive(t))return
const e=this._getActiveElem(),i=e?M.trigger(e,Xi,{relatedTarget:t}):null
M.trigger(t,Ui,{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(as),this._activate(R.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),M.trigger(t,Gi,{relatedTarget:e})):t.classList.add(cs)}),t,t.classList.contains(ls)))}_deactivate(t,e){t&&(t.classList.remove(as),t.blur(),this._deactivate(R.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),M.trigger(t,Yi,{relatedTarget:e})):t.classList.remove(cs)}),t,t.classList.contains(ls)))}_keydown(t){if(![es,is,ss,ns,os,rs].includes(t.key))return
t.stopPropagation(),t.preventDefault()
const e=this._getChildren().filter((t=>!h(t)))
let i
if([os,rs].includes(t.key))i=e[t.key===os?0:e.length-1]
else{const s=[is,ns].includes(t.key)
i=y(e,t.target,s,!0)}i&&(i.focus({preventScroll:!0}),fs.getOrCreateInstance(i).show())}_getChildren(){return R.find(_s,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist")
for(const i of e)this._setInitialAttributesOnChild(i)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t)
const e=this._elemIsActive(t),i=this._getOuterElement(t)
t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=R.getElementFromSelector(t)
e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t)
if(!i.classList.contains("dropdown"))return
const s=(t,s)=>{const n=R.findOne(t,i)
n&&n.classList.toggle(s,e)}
s(hs,as),s(".dropdown-menu",cs),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(as)}_getInnerElement(t){return t.matches(_s)?t:R.findOne(_s,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=fs.getOrCreateInstance(this)
if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`)
e[t]()}}))}}M.on(document,Ji,us,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),h(this)||fs.getOrCreateInstance(this).show()})),M.on(window,ts,(()=>{for(const t of R.find(gs))fs.getOrCreateInstance(t)})),p(fs)
const ms=".bs.toast",ps=`mouseover${ms}`,bs=`mouseout${ms}`,vs=`focusin${ms}`,ys=`focusout${ms}`,ws=`hide${ms}`,As=`hidden${ms}`,Es=`show${ms}`,Cs=`shown${ms}`,Ts="hide",ks="show",$s="showing",Ss={animation:"boolean",autohide:"boolean",delay:"number"},Ls={animation:!0,autohide:!0,delay:5e3}
class Os extends q{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Ls}static get DefaultType(){return Ss}static get NAME(){return"toast"}show(){M.trigger(this._element,Es).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Ts),_(this._element),this._element.classList.add(ks,$s),this._queueCallback((()=>{this._element.classList.remove($s),M.trigger(this._element,Cs),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&(M.trigger(this._element,ws).defaultPrevented||(this._element.classList.add($s),this._queueCallback((()=>{this._element.classList.add(Ts),this._element.classList.remove($s,ks),M.trigger(this._element,As)}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(ks),super.dispose()}isShown(){return this._element.classList.contains(ks)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e
break
case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout()
const i=t.relatedTarget
this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){M.on(this._element,ps,(t=>this._onInteraction(t,!0))),M.on(this._element,bs,(t=>this._onInteraction(t,!1))),M.on(this._element,vs,(t=>this._onInteraction(t,!0))),M.on(this._element,ys,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=Os.getOrCreateInstance(this,t)
if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`)
e[t](this)}}))}}return K(Os),p(Os),{Alert:Y,Button:G,Carousel:Lt,Collapse:Wt,Dropdown:ge,Modal:Ye,Offcanvas:_i,Popover:xi,ScrollSpy:Vi,Tab:fs,Toast:Os,Tooltip:Di}}))
