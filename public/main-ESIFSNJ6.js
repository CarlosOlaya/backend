import{b as F,c as I,d as P,e as D,g as x,j as E,m as h}from"./chunk-GLNWILCZ.js";import{$ as l,$a as b,Ab as N,Ha as v,X as p,Za as C,_ as u,bb as w,db as M,ea as f,eb as A,ja as g,ka as d,na as y,tc as R}from"./chunk-R4UKWQOZ.js";var _=[{path:"",loadChildren:()=>import("./chunk-LBMZJIU5.js").then(i=>i.PlatformModule)},{path:"**",redirectTo:""}],S=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=d({type:e}),e.\u0275inj=l({imports:[h.forRoot(_),h]});let i=e;return i})();var O=(()=>{let e=class e{constructor(){this.title="mala"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=g({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(o,n){o&1&&N(0,"router-outlet")},dependencies:[E]});let i=e;return i})();var k="@",V=(()=>{let e=class e{constructor(r,o,n,s,a){this.doc=r,this.delegate=o,this.zone=n,this.animationType=s,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=f(b,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-NM7R4I2J.js")).catch(o=>{throw new p(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:n})=>{this._engine=o(this.animationType,this.doc,this.scheduler);let s=new n(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(r,o){let n=this.delegate.createRenderer(r,o);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new m(n);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let B=a.createRenderer(r,o);s.use(B)}).catch(a=>{s.use(n)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(o){C()},e.\u0275prov=u({token:e,factory:e.\u0275fac});let i=e;return i})(),m=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,o){this.delegate.insertBefore(e,t,r,o)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,o){this.delegate.setAttribute(e,t,r,o)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,o){this.delegate.setStyle(e,t,r,o)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(o=>o.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(o=>o.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(k)}};function T(i="animations"){return M("NgAsyncAnimations"),y([{provide:w,useFactory:(e,t,r)=>new V(e,t,r,i),deps:[R,I,A]},{provide:v,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var j=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=d({type:e,bootstrap:[O]}),e.\u0275inj=l({providers:[x(),T()],imports:[D,S,F]});let i=e;return i})();P().bootstrapModule(j).catch(i=>console.error(i));
