(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{831:function(t,e,r){var content=r(833);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("692b2c53",content,!0,{sourceMap:!1})},832:function(t,e,r){"use strict";var n=r(831);r.n(n).a},833:function(t,e,r){(e=r(9)(!1)).push([t.i,".bg-title-page[data-v-24a2736a]{background-image:url(https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/banners/8.jpg)!important;background-attachment:fixed!important}",""]),t.exports=e},834:function(t,e,r){"use strict";var n={},o=(r(832),r(26)),component=Object(o.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"bg-title-page p-t-50 p-b-40 flex-col-c-m"},[e("h2",{staticClass:"l-text2 t-center",staticStyle:{color:"rgb(87, 205, 252)","text-transform":"none"}},[this._v("\n        SW"),e("span",{staticStyle:{color:"#FFF"}},[this._v("APP")])]),this._v(" "),e("p",{staticClass:"m-text13 t-center"},[this._v("\n        Living in the future\n    ")])])}],!1,null,"24a2736a",null);e.a=component.exports},858:function(t,e,r){var content=r(920);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("24edb4d4",content,!0,{sourceMap:!1})},885:function(t,e,r){"use strict";var n=r(97),o=r(35),c=r(6),l=r(12);e.a=Object(c.a)(n.a,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(l.c)("v-hover should only contain a single element",this),element)):(Object(l.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},919:function(t,e,r){"use strict";var n=r(858);r.n(n).a},920:function(t,e,r){(e=r(9)(!1)).push([t.i,".wrap-pic-w img{height:300px}#category .v-card{transition:opacity .4s ease-in-out}#category .v-card:not(.on-hover){opacity:.6}.show-btns{color:#fff!important}",""]),t.exports=e},981:function(t,e,r){"use strict";r.r(e);r(11),r(7),r(5),r(4),r(8);var n=r(2),o=(r(50),r(13)),c=r(834),l=r(39);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={name:"categories",components:{headerP:c.a},data:function(){return{loader:!1}},fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n={model:"categories",update:"updateCategoryList"},e.next=4,r.dispatch("getItems",n);case 4:case"end":return e.stop()}}),e)})))()},methods:{addToWish:function(t){$nuxt.$emit("WishListEvent",t)},category_path:function(t){this.$router.push({path:"/category/"+t})}},mounted:function(){},beforeRouteLeave:function(t,e,r){r()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.c)(["categories"]))},h=(r(919),r(26)),v=r(33),m=r.n(v),y=r(283),w=r(83),O=r(822),j=r(885),x=r(212),_=r(823),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"category"}},[r("headerP"),t._v(" "),r("section",{staticClass:"bgwhite p-t-55 p-b-65",staticStyle:{padding:"10px"}},[r("v-row",{attrs:{wrap:"",row:""}},t._l(t.categories.data,(function(e){return r("v-col",{key:e.id,staticStyle:{cursor:"pointer"},attrs:{cols:"3",md:"3"},on:{click:function(r){return t.category_path(e.id)}}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var o=n.hover;return[r("v-card",{class:{"on-hover":o},attrs:{elevation:o?12:2}},[r("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg",height:"225px"}},[r("v-card-title",{staticClass:"title white--text"},[r("v-row",{staticClass:"fill-height flex-column",attrs:{justify:"space-between"}},[r("p",{staticClass:"mt-4 subheading text-center",staticStyle:{color:"#fff !important","font-size":"32px"}},[t._v(t._s(e.category))]),t._v(" "),r("div",[r("p",{staticClass:"caption font-weight-medium font-italic text-left"})])])],1)],1)],1)]}}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VCard:y.a,VCardTitle:w.c,VCol:O.a,VHover:j.a,VImg:x.a,VRow:_.a})}}]);