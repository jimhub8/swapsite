(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{791:function(t,e,r){var content=r(793);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("779444aa",content,!0,{sourceMap:!1})},792:function(t,e,r){"use strict";var n=r(791);r.n(n).a},793:function(t,e,r){(e=r(10)(!1)).push([t.i,".bg-title-page[data-v-62353448]{background-image:url(http://dellmat.jim/storage/8.jpg)!important;background-attachment:fixed!important}",""]),t.exports=e},794:function(t,e,r){"use strict";var n={},o=(r(792),r(31)),component=Object(o.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"bg-title-page p-t-50 p-b-40 flex-col-c-m"},[e("h2",{staticClass:"l-text2 t-center",staticStyle:{color:"rgb(87, 205, 252)","text-transform":"none"}},[this._v("\n        SW"),e("span",{staticStyle:{color:"#FFF"}},[this._v("APP")])]),this._v(" "),e("p",{staticClass:"m-text13 t-center"},[this._v("\n        Living in the future\n    ")])])}],!1,null,"62353448",null);e.a=component.exports},797:function(t,e,r){"use strict";r(115);var n=r(25);function o(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var c={inserted:function(t,e){var r=e.modifiers||{},c=e.value,l="object"===Object(n.a)(c)?c:{handler:c,options:{}},d=l.handler,h=l.options,v=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(t._observe){if(d&&(!r.quiet||t._observe.init)){var c=Boolean(e.find((function(t){return t.isIntersecting})));d(e,n,c)}t._observe.init&&r.once?o(t):t._observe.init=!0}}),h);t._observe={init:!1,observer:v},v.observe(t)},unbind:o};e.a=c},803:function(t,e,r){var content=r(804);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("1cdf85c7",content,!0,{sourceMap:!1})},804:function(t,e,r){(e=r(10)(!1)).push([t.i,".v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{-webkit-filter:blur(2px);filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),t.exports=e},805:function(t,e,r){var content=r(806);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("2fba213c",content,!0,{sourceMap:!1})},806:function(t,e,r){(e=r(10)(!1)).push([t.i,".v-responsive{position:relative;overflow:hidden;flex:1 0 auto;max-width:100%;display:flex}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:1 0 0px}",""]),t.exports=e},820:function(t,e,r){var content=r(889);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("24edb4d4",content,!0,{sourceMap:!1})},847:function(t,e,r){"use strict";var n=r(94),o=r(47),c=r(8),l=r(9);e.a=Object(c.a)(n.a,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(l.c)("v-hover should only contain a single element",this),element)):(Object(l.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},850:function(t,e,r){"use strict";r(27),r(803);var n=r(797),o=(r(805),r(152)),c=r(8),l=Object(c.a)(o.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),d=r(9),h="undefined"!=typeof window&&"IntersectionObserver"in window;e.a=l.extend({name:"v-img",directives:{intersect:n.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return"string"==typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,r){if(!h||r||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(d.b)("Image load failed\n\n"+"src: ".concat(this.normalisedSrc.src),this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(d.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,image.src=this.normalisedSrc.src,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=function r(){var n=img.naturalHeight,o=img.naturalWidth;n||o?(t.naturalWidth=o,t.calculatedAspectRatio=o/n):null!=e&&setTimeout(r,e)};r()},genContent:function(){var content=l.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=l.options.render.call(this,t);return e.data.staticClass+=" v-image",h&&(e.data.directives=[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]),e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},888:function(t,e,r){"use strict";var n=r(820);r.n(n).a},889:function(t,e,r){(e=r(10)(!1)).push([t.i,".wrap-pic-w img{height:300px}#category .v-card{transition:opacity .4s ease-in-out}#category .v-card:not(.on-hover){opacity:.6}.show-btns{color:#fff!important}",""]),t.exports=e},950:function(t,e,r){"use strict";r.r(e);r(12),r(6),r(5),r(4),r(7);var n=r(1),o=(r(53),r(13)),c=r(794),l=r(43);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h={name:"categories",components:{headerP:c.a},data:function(){return{loader:!1}},fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n={model:"categories",update:"updateCategoryList"},e.next=4,r.dispatch("getItems",n);case 4:case"end":return e.stop()}}),e)})))()},methods:{addToWish:function(t){$nuxt.$emit("WishListEvent",t)},category_path:function(t){this.$router.push({path:"/category/"+t})}},mounted:function(){},beforeRouteLeave:function(t,e,r){r()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)(["categories"]))},v=(r(888),r(31)),f=r(39),m=r.n(f),_=r(272),y=r(81),S=r(786),w=r(847),x=r(850),O=r(787),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"category"}},[r("headerP"),t._v(" "),r("section",{staticClass:"bgwhite p-t-55 p-b-65",staticStyle:{padding:"10px"}},[r("v-row",{attrs:{wrap:"",row:""}},t._l(t.categories.data,(function(e){return r("v-col",{key:e.id,staticStyle:{cursor:"pointer"},attrs:{cols:"3",md:"3"},on:{click:function(r){return t.category_path(e.id)}}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var o=n.hover;return[r("v-card",{class:{"on-hover":o},attrs:{elevation:o?12:2}},[r("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg",height:"225px"}},[r("v-card-title",{staticClass:"title white--text"},[r("v-row",{staticClass:"fill-height flex-column",attrs:{justify:"space-between"}},[r("p",{staticClass:"mt-4 subheading text-center",staticStyle:{color:"#fff !important","font-size":"32px"}},[t._v(t._s(e.category))]),t._v(" "),r("div",[r("p",{staticClass:"caption font-weight-medium font-italic text-left"})])])],1)],1)],1)]}}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VCard:_.a,VCardTitle:y.c,VCol:S.a,VHover:w.a,VImg:x.a,VRow:O.a})}}]);