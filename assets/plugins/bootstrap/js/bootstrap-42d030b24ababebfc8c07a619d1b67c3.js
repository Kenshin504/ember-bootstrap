/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@popperjs/core")):"function"==typeof define&&define.amd?define(["@popperjs/core"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e(t.Popper)})(this,(function(t){"use strict"
function e(t){const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}})
if(t)for(const i in t)if("default"!==i){const s=Object.getOwnPropertyDescriptor(t,i)
Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>t[i]})}return e.default=t,Object.freeze(e)}const i=e(t),s=new Map,n={set(t,e,i){s.has(t)||s.set(t,new Map)
const n=s.get(t)
n.has(e)||0===n.size?n.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>s.has(t)&&s.get(t).get(e)||null,remove(t,e){if(!s.has(t))return
const i=s.get(t)
i.delete(e),0===i.size&&s.delete(t)}},o="transitionend",r=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,((t,e)=>`#${CSS.escape(e)}`))),t),a=t=>{t.dispatchEvent(new Event(o))},l=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),c=t=>l(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(r(t)):null,h=t=>{if(!l(t)||0===t.getClientRects().length)return!1
const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])")
if(!i)return e
if(i!==t){const e=t.closest("summary")
if(e&&e.parentNode!==i)return!1
if(null===e)return!1}return e},d=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),u=t=>{if(!document.documentElement.attachShadow)return null
if("function"==typeof t.getRootNode){const e=t.getRootNode()
return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?u(t.parentNode):null},_=()=>{},g=t=>{t.offsetHeight},f=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,m=[],p=()=>"rtl"===document.documentElement.dir,b=t=>{var e
e=()=>{const e=f()
if(e){const i=t.NAME,s=e.fn[i]
e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=s,t.jQueryInterface)}},"loading"===document.readyState?(m.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of m)t()})),m.push(e)):e()},v=(t,e=[],i=t)=>"function"==typeof t?t(...e):i,y=(t,e,i=!0)=>{if(!i)return void v(t)
const s=(t=>{if(!t)return 0
let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t)
const s=Number.parseFloat(e),n=Number.parseFloat(i)
return s||n?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5
let n=!1
const r=({target:i})=>{i===e&&(n=!0,e.removeEventListener(o,r),v(t))}
e.addEventListener(o,r),setTimeout((()=>{n||a(e)}),s)},w=(t,e,i,s)=>{const n=t.length
let o=t.indexOf(e)
return-1===o?!i&&s?t[n-1]:t[0]:(o+=i?1:-1,s&&(o=(o+n)%n),t[Math.max(0,Math.min(o,n-1))])},A=/[^.]*(?=\..*)\.|.*/,E=/\..*/,C=/::\d+$/,T={}
let k=1
const $={mouseenter:"mouseover",mouseleave:"mouseout"},S=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"])
function L(t,e){return e&&`${e}::${k++}`||t.uidEvent||k++}function O(t){const e=L(t)
return t.uidEvent=e,T[e]=T[e]||{},T[e]}function I(t,e,i=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===i))}function D(t,e,i){const s="string"==typeof e,n=s?i:e||i
let o=M(t)
return S.has(o)||(o=t),[s,n,o]}function N(t,e,i,s,n){if("string"!=typeof e||!t)return
let[o,r,a]=D(e,i,s)
if(e in $){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)}
r=t(r)}const l=O(t),c=l[a]||(l[a]={}),h=I(c,r,o?i:null)
if(h)return void(h.oneOff=h.oneOff&&n)
const d=L(r,e.replace(A,"")),u=o?function(t,e,i){return function s(n){const o=t.querySelectorAll(e)
for(let{target:r}=n;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return F(n,{delegateTarget:r}),s.oneOff&&j.off(t,n.type,e,i),i.apply(r,[n])}}(t,i,r):function(t,e){return function i(s){return F(s,{delegateTarget:t}),i.oneOff&&j.off(t,s.type,e),e.apply(t,[s])}}(t,r)
u.delegationSelector=o?i:null,u.callable=r,u.oneOff=n,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function P(t,e,i,s,n){const o=I(e[i],s,n)
o&&(t.removeEventListener(i,o,Boolean(n)),delete e[i][o.uidEvent])}function x(t,e,i,s){const n=e[i]||{}
for(const[o,r]of Object.entries(n))o.includes(s)&&P(t,e,i,r.callable,r.delegationSelector)}function M(t){return t=t.replace(E,""),$[t]||t}const j={on(t,e,i,s){N(t,e,i,s,!1)},one(t,e,i,s){N(t,e,i,s,!0)},off(t,e,i,s){if("string"!=typeof e||!t)return
const[n,o,r]=D(e,i,s),a=r!==e,l=O(t),c=l[r]||{},h=e.startsWith(".")
if(void 0===o){if(h)for(const i of Object.keys(l))x(t,l,i,e.slice(1))
for(const[i,s]of Object.entries(c)){const n=i.replace(C,"")
a&&!e.includes(n)||P(t,l,r,s.callable,s.delegationSelector)}}else{if(!Object.keys(c).length)return
P(t,l,r,o,n?i:null)}},trigger(t,e,i){if("string"!=typeof e||!t)return null
const s=f()
let n=null,o=!0,r=!0,a=!1
e!==M(e)&&s&&(n=s.Event(e,i),s(t).trigger(n),o=!n.isPropagationStopped(),r=!n.isImmediatePropagationStopped(),a=n.isDefaultPrevented())
const l=F(new Event(e,{bubbles:o,cancelable:!0}),i)
return a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&n&&n.preventDefault(),l}}
function F(t,e={}){for(const[s,n]of Object.entries(e))try{t[s]=n}catch(i){Object.defineProperty(t,s,{configurable:!0,get:()=>n})}return t}function z(t){if("true"===t)return!0
if("false"===t)return!1
if(t===Number(t).toString())return Number(t)
if(""===t||"null"===t)return null
if("string"!=typeof t)return t
try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function H(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const B={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${H(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${H(e)}`)},getDataAttributes(t){if(!t)return{}
const e={},i=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")))
for(const s of i){let i=s.replace(/^bs/,"")
i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=z(t.dataset[s])}return e},getDataAttribute:(t,e)=>z(t.getAttribute(`data-bs-${H(e)}`))}
class q{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=l(e)?B.getDataAttribute(e,"config"):{}
return{...this.constructor.Default,..."object"==typeof i?i:{},...l(e)?B.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[s,n]of Object.entries(e)){const e=t[s],o=l(e)?"element":null==(i=e)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase()
if(!new RegExp(n).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${n}".`)}var i}}class W extends q{constructor(t,e){super(),(t=c(t))&&(this._element=t,this._config=this._getConfig(e),n.set(this._element,this.constructor.DATA_KEY,this))}dispose(){n.remove(this._element,this.constructor.DATA_KEY),j.off(this._element,this.constructor.EVENT_KEY)
for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){y(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return n.get(c(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const R=t=>{let e=t.getAttribute("data-bs-target")
if(!e||"#"===e){let i=t.getAttribute("href")
if(!i||!i.includes("#")&&!i.startsWith("."))return null
i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e?e.split(",").map((t=>r(t))).join(","):null},K={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[]
let s=t.parentNode.closest(e)
for(;s;)i.push(s),s=s.parentNode.closest(e)
return i},prev(t,e){let i=t.previousElementSibling
for(;i;){if(i.matches(e))return[i]
i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling
for(;i;){if(i.matches(e))return[i]
i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",")
return this.find(e,t).filter((t=>!d(t)&&h(t)))},getSelectorFromElement(t){const e=R(t)
return e&&K.findOne(e)?e:null},getElementFromSelector(t){const e=R(t)
return e?K.findOne(e):null},getMultipleElementsFromSelector(t){const e=R(t)
return e?K.find(e):[]}},V=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,s=t.NAME
j.on(document,i,`[data-bs-dismiss="${s}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),d(this))return
const n=K.getElementFromSelector(this)||this.closest(`.${s}`)
t.getOrCreateInstance(n)[e]()}))},Q=".bs.alert",X=`close${Q}`,Y=`closed${Q}`
class U extends W{static get NAME(){return"alert"}close(){if(j.trigger(this._element,X).defaultPrevented)return
this._element.classList.remove("show")
const t=this._element.classList.contains("fade")
this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),j.trigger(this._element,Y),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=U.getOrCreateInstance(this)
if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`)
e[t](this)}}))}}V(U,"close"),b(U)
const G='[data-bs-toggle="button"]'
class J extends W{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=J.getOrCreateInstance(this)
"toggle"===t&&e[t]()}))}}j.on(document,"click.bs.button.data-api",G,(t=>{t.preventDefault()
const e=t.target.closest(G)
J.getOrCreateInstance(e).toggle()})),b(J)
const Z=".bs.swipe",tt=`touchstart${Z}`,et=`touchmove${Z}`,it=`touchend${Z}`,st=`pointerdown${Z}`,nt=`pointerup${Z}`,ot={endCallback:null,leftCallback:null,rightCallback:null},rt={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"}
class at extends q{constructor(t,e){super(),this._element=t,t&&at.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return ot}static get DefaultType(){return rt}static get NAME(){return"swipe"}dispose(){j.off(this._element,Z)}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),v(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX)
if(t<=40)return
const e=t/this._deltaX
this._deltaX=0,e&&v(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(j.on(this._element,st,(t=>this._start(t))),j.on(this._element,nt,(t=>this._end(t))),this._element.classList.add("pointer-event")):(j.on(this._element,tt,(t=>this._start(t))),j.on(this._element,et,(t=>this._move(t))),j.on(this._element,it,(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const lt=".bs.carousel",ct=".data-api",ht="ArrowLeft",dt="ArrowRight",ut="next",_t="prev",gt="left",ft="right",mt=`slide${lt}`,pt=`slid${lt}`,bt=`keydown${lt}`,vt=`mouseenter${lt}`,yt=`mouseleave${lt}`,wt=`dragstart${lt}`,At=`load${lt}${ct}`,Et=`click${lt}${ct}`,Ct="carousel",Tt="active",kt=".active",$t=".carousel-item",St=kt+$t,Lt={[ht]:ft,[dt]:gt},Ot={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},It={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"}
class Dt extends W{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=K.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===Ct&&this.cycle()}static get Default(){return Ot}static get DefaultType(){return It}static get NAME(){return"carousel"}next(){this._slide(ut)}nextWhenVisible(){!document.hidden&&h(this._element)&&this.next()}prev(){this._slide(_t)}pause(){this._isSliding&&a(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?j.one(this._element,pt,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems()
if(t>e.length-1||t<0)return
if(this._isSliding)return void j.one(this._element,pt,(()=>this.to(t)))
const i=this._getItemIndex(this._getActive())
if(i===t)return
const s=t>i?ut:_t
this._slide(s,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&j.on(this._element,bt,(t=>this._keydown(t))),"hover"===this._config.pause&&(j.on(this._element,vt,(()=>this.pause())),j.on(this._element,yt,(()=>this._maybeEnableCycle()))),this._config.touch&&at.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const e of K.find(".carousel-item img",this._element))j.on(e,wt,(t=>t.preventDefault()))
const t={leftCallback:()=>this._slide(this._directionToOrder(gt)),rightCallback:()=>this._slide(this._directionToOrder(ft)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}}
this._swipeHelper=new at(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return
const e=Lt[t.key]
e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return
const e=K.findOne(kt,this._indicatorsElement)
e.classList.remove(Tt),e.removeAttribute("aria-current")
const i=K.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement)
i&&(i.classList.add(Tt),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive()
if(!t)return
const e=Number.parseInt(t.getAttribute("data-bs-interval"),10)
this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return
const i=this._getActive(),s=t===ut,n=e||w(this._getItems(),i,s,this._config.wrap)
if(n===i)return
const o=this._getItemIndex(n),r=e=>j.trigger(this._element,e,{relatedTarget:n,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o})
if(r(mt).defaultPrevented)return
if(!i||!n)return
const a=Boolean(this._interval)
this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=n
const l=s?"carousel-item-start":"carousel-item-end",c=s?"carousel-item-next":"carousel-item-prev"
n.classList.add(c),g(n),i.classList.add(l),n.classList.add(l)
this._queueCallback((()=>{n.classList.remove(l,c),n.classList.add(Tt),i.classList.remove(Tt,c,l),this._isSliding=!1,r(pt)}),i,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return K.findOne(St,this._element)}_getItems(){return K.find($t,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return p()?t===gt?_t:ut:t===gt?ut:_t}_orderToDirection(t){return p()?t===_t?gt:ft:t===_t?ft:gt}static jQueryInterface(t){return this.each((function(){const e=Dt.getOrCreateInstance(this,t)
if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`)
e[t]()}}else e.to(t)}))}}j.on(document,Et,"[data-bs-slide], [data-bs-slide-to]",(function(t){const e=K.getElementFromSelector(this)
if(!e||!e.classList.contains(Ct))return
t.preventDefault()
const i=Dt.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to")
return s?(i.to(s),void i._maybeEnableCycle()):"next"===B.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),j.on(window,At,(()=>{const t=K.find('[data-bs-ride="carousel"]')
for(const e of t)Dt.getOrCreateInstance(e)})),b(Dt)
const Nt=".bs.collapse",Pt=`show${Nt}`,xt=`shown${Nt}`,Mt=`hide${Nt}`,jt=`hidden${Nt}`,Ft=`click${Nt}.data-api`,zt="show",Ht="collapse",Bt="collapsing",qt=`:scope .${Ht} .${Ht}`,Wt='[data-bs-toggle="collapse"]',Rt={parent:null,toggle:!0},Kt={parent:"(null|element)",toggle:"boolean"}
class Vt extends W{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[]
const i=K.find(Wt)
for(const s of i){const t=K.getSelectorFromElement(s),e=K.find(t).filter((t=>t===this._element))
null!==t&&e.length&&this._triggerArray.push(s)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Rt}static get DefaultType(){return Kt}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return
let t=[]
if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>Vt.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return
if(j.trigger(this._element,Pt).defaultPrevented)return
for(const s of t)s.hide()
const e=this._getDimension()
this._element.classList.remove(Ht),this._element.classList.add(Bt),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0
const i=`scroll${e[0].toUpperCase()+e.slice(1)}`
this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(Bt),this._element.classList.add(Ht,zt),this._element.style[e]="",j.trigger(this._element,xt)}),this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return
if(j.trigger(this._element,Mt).defaultPrevented)return
const t=this._getDimension()
this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,g(this._element),this._element.classList.add(Bt),this._element.classList.remove(Ht,zt)
for(const e of this._triggerArray){const t=K.getElementFromSelector(e)
t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0
this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(Bt),this._element.classList.add(Ht),j.trigger(this._element,jt)}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(zt)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=c(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return
const t=this._getFirstLevelChildren(Wt)
for(const e of t){const t=K.getElementFromSelector(e)
t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=K.find(qt,this._config.parent)
return K.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={}
return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const i=Vt.getOrCreateInstance(this,e)
if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`)
i[t]()}}))}}j.on(document,Ft,Wt,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault()
for(const e of K.getMultipleElementsFromSelector(this))Vt.getOrCreateInstance(e,{toggle:!1}).toggle()})),b(Vt)
const Qt="dropdown",Xt=".bs.dropdown",Yt=".data-api",Ut="ArrowUp",Gt="ArrowDown",Jt=`hide${Xt}`,Zt=`hidden${Xt}`,te=`show${Xt}`,ee=`shown${Xt}`,ie=`click${Xt}${Yt}`,se=`keydown${Xt}${Yt}`,ne=`keyup${Xt}${Yt}`,oe="show",re='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',ae=`${re}.${oe}`,le=".dropdown-menu",ce=p()?"top-end":"top-start",he=p()?"top-start":"top-end",de=p()?"bottom-end":"bottom-start",ue=p()?"bottom-start":"bottom-end",_e=p()?"left-start":"right-start",ge=p()?"right-start":"left-start",fe={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},me={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"}
class pe extends W{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=K.next(this._element,le)[0]||K.prev(this._element,le)[0]||K.findOne(le,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return fe}static get DefaultType(){return me}static get NAME(){return Qt}toggle(){return this._isShown()?this.hide():this.show()}show(){if(d(this._element)||this._isShown())return
const t={relatedTarget:this._element}
if(!j.trigger(this._element,te,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))j.on(t,"mouseover",_)
this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(oe),this._element.classList.add(oe),j.trigger(this._element,ee,t)}}hide(){if(d(this._element)||!this._isShown())return
const t={relatedTarget:this._element}
this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!j.trigger(this._element,Jt,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))j.off(t,"mouseover",_)
this._popper&&this._popper.destroy(),this._menu.classList.remove(oe),this._element.classList.remove(oe),this._element.setAttribute("aria-expanded","false"),B.removeDataAttribute(this._menu,"popper"),j.trigger(this._element,Zt,t)}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!l(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${Qt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`)
return t}_createPopper(){if(void 0===i)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)")
let t=this._element
"parent"===this._config.reference?t=this._parent:l(this._config.reference)?t=c(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference)
const e=this._getPopperConfig()
this._popper=i.createPopper(t,this._menu,e)}_isShown(){return this._menu.classList.contains(oe)}_getPlacement(){const t=this._parent
if(t.classList.contains("dropend"))return _e
if(t.classList.contains("dropstart"))return ge
if(t.classList.contains("dropup-center"))return"top"
if(t.classList.contains("dropdown-center"))return"bottom"
const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()
return t.classList.contains("dropup")?e?he:ce:e?ue:de}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config
return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]}
return(this._inNavbar||"static"===this._config.display)&&(B.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...v(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:e}){const i=K.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>h(t)))
i.length&&w(i,e,t===Gt,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=pe.getOrCreateInstance(this,t)
if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`)
e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return
const e=K.find(ae)
for(const i of e){const e=pe.getInstance(i)
if(!e||!1===e._config.autoClose)continue
const s=t.composedPath(),n=s.includes(e._menu)
if(s.includes(e._element)||"inside"===e._config.autoClose&&!n||"outside"===e._config.autoClose&&n)continue
if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue
const o={relatedTarget:e._element}
"click"===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,s=[Ut,Gt].includes(t.key)
if(!s&&!i)return
if(e&&!i)return
t.preventDefault()
const n=this.matches(re)?this:K.prev(this,re)[0]||K.next(this,re)[0]||K.findOne(re,t.delegateTarget.parentNode),o=pe.getOrCreateInstance(n)
if(s)return t.stopPropagation(),o.show(),void o._selectMenuItem(t)
o._isShown()&&(t.stopPropagation(),o.hide(),n.focus())}}j.on(document,se,re,pe.dataApiKeydownHandler),j.on(document,se,le,pe.dataApiKeydownHandler),j.on(document,ie,pe.clearMenus),j.on(document,ne,pe.clearMenus),j.on(document,ie,re,(function(t){t.preventDefault(),pe.getOrCreateInstance(this).toggle()})),b(pe)
const be="backdrop",ve="show",ye=`mousedown.bs.${be}`,we={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Ae={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"}
class Ee extends q{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return we}static get DefaultType(){return Ae}static get NAME(){return be}show(t){if(!this._config.isVisible)return void v(t)
this._append()
const e=this._getElement()
this._config.isAnimated&&g(e),e.classList.add(ve),this._emulateAnimation((()=>{v(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(ve),this._emulateAnimation((()=>{this.dispose(),v(t)}))):v(t)}dispose(){this._isAppended&&(j.off(this._element,ye),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div")
t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=c(t.rootElement),t}_append(){if(this._isAppended)return
const t=this._getElement()
this._config.rootElement.append(t),j.on(t,ye,(()=>{v(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){y(t,this._getElement(),this._config.isAnimated)}}const Ce=".bs.focustrap",Te=`focusin${Ce}`,ke=`keydown.tab${Ce}`,$e="backward",Se={autofocus:!0,trapElement:null},Le={autofocus:"boolean",trapElement:"element"}
class Oe extends q{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Se}static get DefaultType(){return Le}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),j.off(document,Ce),j.on(document,Te,(t=>this._handleFocusin(t))),j.on(document,ke,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,j.off(document,Ce))}_handleFocusin(t){const{trapElement:e}=this._config
if(t.target===document||t.target===e||e.contains(t.target))return
const i=K.focusableChildren(e)
0===i.length?e.focus():this._lastTabNavDirection===$e?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?$e:"forward")}}const Ie=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",De=".sticky-top",Ne="padding-right",Pe="margin-right"
class xe{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth
return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth()
this._disableOverFlow(),this._setElementAttributes(this._element,Ne,(e=>e+t)),this._setElementAttributes(Ie,Ne,(e=>e+t)),this._setElementAttributes(De,Pe,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Ne),this._resetElementAttributes(Ie,Ne),this._resetElementAttributes(De,Pe)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth()
this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+s)return
this._saveInitialAttribute(t,e)
const n=window.getComputedStyle(t).getPropertyValue(e)
t.style.setProperty(e,`${i(Number.parseFloat(n))}px`)}))}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e)
i&&B.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=B.getDataAttribute(t,e)
null!==i?(B.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(l(t))e(t)
else for(const i of K.find(t,this._element))e(i)}}const Me=".bs.modal",je=`hide${Me}`,Fe=`hidePrevented${Me}`,ze=`hidden${Me}`,He=`show${Me}`,Be=`shown${Me}`,qe=`resize${Me}`,We=`click.dismiss${Me}`,Re=`mousedown.dismiss${Me}`,Ke=`keydown.dismiss${Me}`,Ve=`click${Me}.data-api`,Qe="modal-open",Xe="show",Ye="modal-static",Ue={backdrop:!0,focus:!0,keyboard:!0},Ge={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"}
class Je extends W{constructor(t,e){super(t,e),this._dialog=K.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new xe,this._addEventListeners()}static get Default(){return Ue}static get DefaultType(){return Ge}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return
j.trigger(this._element,He,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Qe),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){if(!this._isShown||this._isTransitioning)return
j.trigger(this._element,je).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Xe),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated()))}dispose(){j.off(window,Me),j.off(this._dialog,Me),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ee({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Oe({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0
const e=K.findOne(".modal-body",this._dialog)
e&&(e.scrollTop=0),g(this._element),this._element.classList.add(Xe)
this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,j.trigger(this._element,Be,{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){j.on(this._element,Ke,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),j.on(window,qe,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),j.on(this._element,Re,(t=>{j.one(this._element,We,(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(Qe),this._resetAdjustments(),this._scrollBar.reset(),j.trigger(this._element,ze)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(j.trigger(this._element,Fe).defaultPrevented)return
const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY
"hidden"===e||this._element.classList.contains(Ye)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(Ye),this._queueCallback((()=>{this._element.classList.remove(Ye),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0
if(i&&!t){const t=p()?"paddingLeft":"paddingRight"
this._element.style[t]=`${e}px`}if(!i&&t){const t=p()?"paddingRight":"paddingLeft"
this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=Je.getOrCreateInstance(this,t)
if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`)
i[t](e)}}))}}j.on(document,Ve,'[data-bs-toggle="modal"]',(function(t){const e=K.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),j.one(e,He,(t=>{t.defaultPrevented||j.one(e,ze,(()=>{h(this)&&this.focus()}))}))
const i=K.findOne(".modal.show")
i&&Je.getInstance(i).hide()
Je.getOrCreateInstance(e).toggle(this)})),V(Je),b(Je)
const Ze=".bs.offcanvas",ti=".data-api",ei=`load${Ze}${ti}`,ii="show",si="showing",ni="hiding",oi=".offcanvas.show",ri=`show${Ze}`,ai=`shown${Ze}`,li=`hide${Ze}`,ci=`hidePrevented${Ze}`,hi=`hidden${Ze}`,di=`resize${Ze}`,ui=`click${Ze}${ti}`,_i=`keydown.dismiss${Ze}`,gi={backdrop:!0,keyboard:!0,scroll:!1},fi={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"}
class mi extends W{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return gi}static get DefaultType(){return fi}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown)return
if(j.trigger(this._element,ri,{relatedTarget:t}).defaultPrevented)return
this._isShown=!0,this._backdrop.show(),this._config.scroll||(new xe).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(si)
this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(ii),this._element.classList.remove(si),j.trigger(this._element,ai,{relatedTarget:t})}),this._element,!0)}hide(){if(!this._isShown)return
if(j.trigger(this._element,li).defaultPrevented)return
this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(ni),this._backdrop.hide()
this._queueCallback((()=>{this._element.classList.remove(ii,ni),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new xe).reset(),j.trigger(this._element,hi)}),this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop)
return new Ee({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():j.trigger(this._element,ci)}:null})}_initializeFocusTrap(){return new Oe({trapElement:this._element})}_addEventListeners(){j.on(this._element,_i,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():j.trigger(this._element,ci))}))}static jQueryInterface(t){return this.each((function(){const e=mi.getOrCreateInstance(this,t)
if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`)
e[t](this)}}))}}j.on(document,ui,'[data-bs-toggle="offcanvas"]',(function(t){const e=K.getElementFromSelector(this)
if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),d(this))return
j.one(e,hi,(()=>{h(this)&&this.focus()}))
const i=K.findOne(oi)
i&&i!==e&&mi.getInstance(i).hide()
mi.getOrCreateInstance(e).toggle(this)})),j.on(window,ei,(()=>{for(const t of K.find(oi))mi.getOrCreateInstance(t).show()})),j.on(window,di,(()=>{for(const t of K.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&mi.getOrCreateInstance(t).hide()})),V(mi),b(mi)
const pi={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},bi=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),vi=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,yi=(t,e)=>{const i=t.nodeName.toLowerCase()
return e.includes(i)?!bi.has(i)||Boolean(vi.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))}
const wi={allowList:pi,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Ai={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Ei={entry:"(string|element|function|null)",selector:"(string|element)"}
class Ci extends q{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return wi}static get DefaultType(){return Ai}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div")
t.innerHTML=this._maybeSanitize(this._config.template)
for(const[s,n]of Object.entries(this._config.content))this._setContent(t,n,s)
const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass)
return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},Ei)}_setContent(t,e,i){const s=K.findOne(i,t)
s&&((e=this._resolvePossibleFunction(e))?l(e)?this._putElementInTemplate(c(e),s):this._config.html?s.innerHTML=this._maybeSanitize(e):s.textContent=e:s.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t
if(i&&"function"==typeof i)return i(t)
const s=(new window.DOMParser).parseFromString(t,"text/html"),n=[].concat(...s.body.querySelectorAll("*"))
for(const o of n){const t=o.nodeName.toLowerCase()
if(!Object.keys(e).includes(t)){o.remove()
continue}const i=[].concat(...o.attributes),s=[].concat(e["*"]||[],e[t]||[])
for(const e of i)yi(e,s)||o.removeAttribute(e.nodeName)}return s.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return v(t,[this])}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t)
e.textContent=t.textContent}}const Ti=new Set(["sanitize","allowList","sanitizeFn"]),ki="fade",$i="show",Si=".tooltip-inner",Li=".modal",Oi="hide.bs.modal",Ii="hover",Di="focus",Ni={AUTO:"auto",TOP:"top",RIGHT:p()?"left":"right",BOTTOM:"bottom",LEFT:p()?"right":"left"},Pi={allowList:pi,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},xi={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"}
class Mi extends W{constructor(t,e){if(void 0===i)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)")
super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Pi}static get DefaultType(){return xi}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),j.off(this._element.closest(Li),Oi,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements")
if(!this._isWithContent()||!this._isEnabled)return
const t=j.trigger(this._element,this.constructor.eventName("show")),e=(u(this._element)||this._element.ownerDocument.documentElement).contains(this._element)
if(t.defaultPrevented||!e)return
this._disposePopper()
const i=this._getTipElement()
this._element.setAttribute("aria-describedby",i.getAttribute("id"))
const{container:s}=this._config
if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(i),j.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(i),i.classList.add($i),"ontouchstart"in document.documentElement)for(const n of[].concat(...document.body.children))j.on(n,"mouseover",_)
this._queueCallback((()=>{j.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1}),this.tip,this._isAnimated())}hide(){if(!this._isShown())return
if(j.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented)return
if(this._getTipElement().classList.remove($i),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))j.off(t,"mouseover",_)
this._activeTrigger.click=!1,this._activeTrigger[Di]=!1,this._activeTrigger[Ii]=!1,this._isHovered=null
this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),j.trigger(this._element,this.constructor.eventName("hidden")))}),this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml()
if(!e)return null
e.classList.remove(ki,$i),e.classList.add(`bs-${this.constructor.NAME}-auto`)
const i=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t))
return t})(this.constructor.NAME).toString()
return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(ki),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Ci({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Si]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ki)}_isShown(){return this.tip&&this.tip.classList.contains($i)}_createPopper(t){const e=v(this._config.placement,[this,t,this._element]),s=Ni[e.toUpperCase()]
return i.createPopper(this._element,t,this._getPopperConfig(s))}_getOffset(){const{offset:t}=this._config
return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return v(t,[this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]}
return{...e,...v(this._config.popperConfig,[e])}}_setListeners(){const t=this._config.trigger.split(" ")
for(const e of t)if("click"===e)j.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>{this._initializeOnDelegatedTarget(t).toggle()}))
else if("manual"!==e){const t=e===Ii?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===Ii?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout")
j.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t)
e._activeTrigger["focusin"===t.type?Di:Ii]=!0,e._enter()})),j.on(this._element,i,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t)
e._activeTrigger["focusout"===t.type?Di:Ii]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},j.on(this._element.closest(Li),Oi,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title")
t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=B.getDataAttributes(this._element)
for(const i of Object.keys(e))Ti.has(i)&&delete e[i]
return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:c(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={}
for(const[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(t[e]=i)
return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each((function(){const e=Mi.getOrCreateInstance(this,t)
if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`)
e[t]()}}))}}b(Mi)
const ji=".popover-header",Fi=".popover-body",zi={...Mi.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Hi={...Mi.DefaultType,content:"(null|string|element|function)"}
class Bi extends Mi{static get Default(){return zi}static get DefaultType(){return Hi}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[ji]:this._getTitle(),[Fi]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=Bi.getOrCreateInstance(this,t)
if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`)
e[t]()}}))}}b(Bi)
const qi=".bs.scrollspy",Wi=`activate${qi}`,Ri=`click${qi}`,Ki=`load${qi}.data-api`,Vi="active",Qi="[href]",Xi=".nav-link",Yi=`${Xi}, .nav-item > ${Xi}, .list-group-item`,Ui={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Gi={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"}
class Ji extends W{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Ui}static get DefaultType(){return Gi}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver()
for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=c(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,"string"==typeof t.threshold&&(t.threshold=t.threshold.split(",").map((t=>Number.parseFloat(t)))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(j.off(this._config.target,Ri),j.on(this._config.target,Ri,Qi,(t=>{const e=this._observableSections.get(t.target.hash)
if(e){t.preventDefault()
const i=this._rootElement||window,s=e.offsetTop-this._element.offsetTop
if(i.scrollTo)return void i.scrollTo({top:s,behavior:"smooth"})
i.scrollTop=s}})))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin}
return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},s=(this._rootElement||document.documentElement).scrollTop,n=s>=this._previousScrollData.parentScrollTop
this._previousScrollData.parentScrollTop=s
for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o))
continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop
if(n&&t){if(i(o),!s)return}else n||t||i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map
const t=K.find(Qi,this._config.target)
for(const e of t){if(!e.hash||d(e))continue
const t=K.findOne(decodeURI(e.hash),this._element)
h(t)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Vi),this._activateParents(t),j.trigger(this._element,Wi,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))K.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(Vi)
else for(const e of K.parents(t,".nav, .list-group"))for(const t of K.prev(e,Yi))t.classList.add(Vi)}_clearActiveClass(t){t.classList.remove(Vi)
const e=K.find(`${Qi}.${Vi}`,t)
for(const i of e)i.classList.remove(Vi)}static jQueryInterface(t){return this.each((function(){const e=Ji.getOrCreateInstance(this,t)
if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`)
e[t]()}}))}}j.on(window,Ki,(()=>{for(const t of K.find('[data-bs-spy="scroll"]'))Ji.getOrCreateInstance(t)})),b(Ji)
const Zi=".bs.tab",ts=`hide${Zi}`,es=`hidden${Zi}`,is=`show${Zi}`,ss=`shown${Zi}`,ns=`click${Zi}`,os=`keydown${Zi}`,rs=`load${Zi}`,as="ArrowLeft",ls="ArrowRight",cs="ArrowUp",hs="ArrowDown",ds="Home",us="End",_s="active",gs="fade",fs="show",ms=".dropdown-toggle",ps=`:not(${ms})`,bs='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',vs=`${`.nav-link${ps}, .list-group-item${ps}, [role="tab"]${ps}`}, ${bs}`,ys=`.${_s}[data-bs-toggle="tab"], .${_s}[data-bs-toggle="pill"], .${_s}[data-bs-toggle="list"]`
class ws extends W{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),j.on(this._element,os,(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element
if(this._elemIsActive(t))return
const e=this._getActiveElem(),i=e?j.trigger(e,ts,{relatedTarget:t}):null
j.trigger(t,is,{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return
t.classList.add(_s),this._activate(K.getElementFromSelector(t))
this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),j.trigger(t,ss,{relatedTarget:e})):t.classList.add(fs)}),t,t.classList.contains(gs))}_deactivate(t,e){if(!t)return
t.classList.remove(_s),t.blur(),this._deactivate(K.getElementFromSelector(t))
this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),j.trigger(t,es,{relatedTarget:e})):t.classList.remove(fs)}),t,t.classList.contains(gs))}_keydown(t){if(![as,ls,cs,hs,ds,us].includes(t.key))return
t.stopPropagation(),t.preventDefault()
const e=this._getChildren().filter((t=>!d(t)))
let i
if([ds,us].includes(t.key))i=e[t.key===ds?0:e.length-1]
else{const s=[ls,hs].includes(t.key)
i=w(e,t.target,s,!0)}i&&(i.focus({preventScroll:!0}),ws.getOrCreateInstance(i).show())}_getChildren(){return K.find(vs,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist")
for(const i of e)this._setInitialAttributesOnChild(i)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t)
const e=this._elemIsActive(t),i=this._getOuterElement(t)
t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=K.getElementFromSelector(t)
e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t)
if(!i.classList.contains("dropdown"))return
const s=(t,s)=>{const n=K.findOne(t,i)
n&&n.classList.toggle(s,e)}
s(ms,_s),s(".dropdown-menu",fs),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(_s)}_getInnerElement(t){return t.matches(vs)?t:K.findOne(vs,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=ws.getOrCreateInstance(this)
if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`)
e[t]()}}))}}j.on(document,ns,bs,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),d(this)||ws.getOrCreateInstance(this).show()})),j.on(window,rs,(()=>{for(const t of K.find(ys))ws.getOrCreateInstance(t)})),b(ws)
const As=".bs.toast",Es=`mouseover${As}`,Cs=`mouseout${As}`,Ts=`focusin${As}`,ks=`focusout${As}`,$s=`hide${As}`,Ss=`hidden${As}`,Ls=`show${As}`,Os=`shown${As}`,Is="hide",Ds="show",Ns="showing",Ps={animation:"boolean",autohide:"boolean",delay:"number"},xs={animation:!0,autohide:!0,delay:5e3}
class Ms extends W{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return xs}static get DefaultType(){return Ps}static get NAME(){return"toast"}show(){if(j.trigger(this._element,Ls).defaultPrevented)return
this._clearTimeout(),this._config.animation&&this._element.classList.add("fade")
this._element.classList.remove(Is),g(this._element),this._element.classList.add(Ds,Ns),this._queueCallback((()=>{this._element.classList.remove(Ns),j.trigger(this._element,Os),this._maybeScheduleHide()}),this._element,this._config.animation)}hide(){if(!this.isShown())return
if(j.trigger(this._element,$s).defaultPrevented)return
this._element.classList.add(Ns),this._queueCallback((()=>{this._element.classList.add(Is),this._element.classList.remove(Ns,Ds),j.trigger(this._element,Ss)}),this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ds),super.dispose()}isShown(){return this._element.classList.contains(Ds)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e
break
case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout()
const i=t.relatedTarget
this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){j.on(this._element,Es,(t=>this._onInteraction(t,!0))),j.on(this._element,Cs,(t=>this._onInteraction(t,!1))),j.on(this._element,Ts,(t=>this._onInteraction(t,!0))),j.on(this._element,ks,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=Ms.getOrCreateInstance(this,t)
if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`)
e[t](this)}}))}}V(Ms),b(Ms)
return{Alert:U,Button:J,Carousel:Dt,Collapse:Vt,Dropdown:pe,Modal:Je,Offcanvas:mi,Popover:Bi,ScrollSpy:Ji,Tab:ws,Toast:Ms,Tooltip:Mi}}))
