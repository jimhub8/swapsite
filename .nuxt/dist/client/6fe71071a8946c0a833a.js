(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{791:function(t,e,n){var content=n(793);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("692b2c53",content,!0,{sourceMap:!1})},792:function(t,e,n){"use strict";var r=n(791);n.n(r).a},793:function(t,e,n){(e=n(10)(!1)).push([t.i,".bg-title-page[data-v-24a2736a]{background-image:url(https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/banners/8.jpg)!important;background-attachment:fixed!important}",""]),t.exports=e},794:function(t,e,n){"use strict";var r={},o=(n(792),n(31)),component=Object(o.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"bg-title-page p-t-50 p-b-40 flex-col-c-m"},[e("h2",{staticClass:"l-text2 t-center",staticStyle:{color:"rgb(87, 205, 252)","text-transform":"none"}},[this._v("\n        SW"),e("span",{staticStyle:{color:"#FFF"}},[this._v("APP")])]),this._v(" "),e("p",{staticClass:"m-text13 t-center"},[this._v("\n        Living in the future\n    ")])])}],!1,null,"24a2736a",null);e.a=component.exports},807:function(t,e,n){var content=n(808);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("7f6d4ad6",content,!0,{sourceMap:!1})},808:function(t,e,n){(e=n(10)(!1)).push([t.i,".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#1e1e1e;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#1e1e1e}.v-pagination{align-items:center;display:inline-flex;list-style-type:none;justify-content:center;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{pointer-events:none;opacity:.6}.v-pagination__item{background:transparent;border-radius:4px;font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:4px;display:inline-flex;justify-content:center;align-items:center;text-decoration:none;height:32px;width:32px;margin:.3rem 10px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{margin:.3rem;display:inline-flex;align-items:flex-end;justify-content:center;height:32px;width:32px}",""]),t.exports=e},809:function(t,e,n){"use strict";var r={data:function(){return{filter_data:{price:[0,0],category_id:0}}},methods:{FilterShop:function(t){this.filter_data.category_id=t,$nuxt.$emit("progressEvent");var e={model:"FilterShop",update:"updateProductsList",data:this.filter_data};this.$store.dispatch("filterItems",e)},getCategory:function(){this.$store.dispatch("getItems",{model:"categories",update:"updateCategoryList"})}},mounted:function(){this.getCategory()},computed:{categories:function(){return this.$store.getters.categories}}},o=n(31),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"col-xs-12 col-md-12 sidebar-shop"},[n("div",{staticClass:"sidebar-product-categori"},[t._m(0),t._v(" "),n("div",{staticClass:"widget-content"},[n("ul",{staticClass:"product-categories"},t._l(t.categories.data,(function(e){return n("li",{key:e.id,staticClass:"cat-item"},[n("p",{staticStyle:{cursor:"pointer"},on:{click:function(n){return t.FilterShop(e.id)}}},[t._v(t._s(e.category))])])})),0)]),t._v(" "),n("div",{staticClass:"product-filter mb-30"},[t._m(1),t._v(" "),n("div",{staticClass:"widget-content"},[n("el-slider",{attrs:{range:"",max:5e5},on:{change:function(e){return t.FilterShop(t.filter_data.category_id)}},model:{value:t.filter_data.price,callback:function(e){t.$set(t.filter_data,"price",e)},expression:"filter_data.price"}}),t._v(" "),t._m(2)],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"widget-title"},[e("h3",[this._v("PRODUCT CATEGORIES")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"widget-title"},[e("h3",[this._v("Filter by price")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"price-values"},[e("div",{staticClass:"price_text_btn"},[e("span",[this._v("Price:")]),this._v(" "),e("input",{staticClass:"price-amount",attrs:{type:"text"}})]),this._v(" "),e("button",{staticClass:"button",attrs:{type:"submit"}},[this._v("Filter")])])}],!1,null,null,null);e.a=component.exports},810:function(t,e,n){"use strict";var r={data:function(){return{form:{},dialog:!1,product:null,variants:{},variants_values:{}}},created:function(){var t=this;this.$nuxt.$on("selectVariantsEvent",(function(data){t.dialog=!0,t.product=data,t.getProductVariants(data.id)}))},methods:{getProductVariants:function(t){var e=this;axios.get("product_variant/".concat(t)).then((function(t){e.variants=t.data})).catch((function(t){}))},getChoiseData:function(){var t=this;this.loading=!0,axios.post("variants_values/".concat(this.product.id),this.variants).then((function(e){t.loading=!1,t.variants_values=e.data,$nuxt.$emit("addCartVariantEvent",e.data)})).catch((function(e){console.log(e),t.loading=!1}))},close:function(){this.dialog=!1}},computed:{}},o=n(31),c=n(39),l=n.n(c),d=n(775),v=n(272),h=n(81),f=n(813),m=n(961),_=n(777),x=n(842),y=n(843),w=n(788),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline text-center",staticStyle:{margin:"auto"}},[t._v("Select variants")])]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.variants,(function(e){return n("v-flex",{key:e.id,attrs:{sm4:""}},[t._v("\n                            "+t._s(e.attribute.option_name)+"\n                            "),n("v-divider"),t._v(" "),t._l(e.tags,(function(r){return n("el-radio-group",{key:r.id,model:{value:e.choise,callback:function(n){t.$set(e,"choise",n)},expression:"variant.choise"}},[n("el-radio-button",{attrs:{label:r.option_name}})],1)}))],2)})),1)],1)],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Close")]),t._v(" "),n("VSpacer"),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.getChoiseData}},[t._v("Submit")])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCardActions:h.a,VCardText:h.b,VCardTitle:h.c,VContainer:f.a,VDialog:m.a,VDivider:_.a,VFlex:x.a,VLayout:y.a,VSpacer:w.a})},813:function(t,e,n){"use strict";n(93),n(5),n(4),n(7),n(423),n(283);var r=n(795),o=n(82);e.a=Object(r.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,c=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),c)}})},832:function(t,e,n){var content=n(922);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("1306f7e2",content,!0,{sourceMap:!1})},848:function(t,e,n){"use strict";n(12),n(6),n(5),n(7),n(17),n(18),n(4);var r=n(61),o=n(1),c=(n(27),n(807),n(66)),l=n(290),d=n(22),v=n(800),h=n(19),f=n(8);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(f.a)(d.a,Object(v.a)({onVisible:["init"]}),h.a).extend({name:"v-pagination",directives:{Resize:l.a},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1==0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var n=e%2==0?1:0,o=Math.floor(e/2),c=this.length-o+1+n;if(this.value>o&&this.value<c){var l=this.value-o+2,d=this.value+o-2-n;return[1,"..."].concat(Object(r.a)(this.range(l,d)),["...",this.length])}if(this.value===o){var v=this.value+o-1-n;return[].concat(Object(r.a)(this.range(1,v)),["...",this.length])}if(this.value===c){var h=this.value-o+1;return[1,"..."].concat(Object(r.a)(this.range(h,this.length)))}return[].concat(Object(r.a)(this.range(1,o)),["..."],Object(r.a)(this.range(c,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){for(var n=[],i=t=t>0?t:1;i<=e;i++)n.push(i);return n},genIcon:function(t,e,n,r){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{type:"button"},on:n?{}:{click:r}},[t(c.a,[e])])])},genItem:function(t,i){var e=this,n=i===this.value&&(this.color||"primary");return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":i===this.value},attrs:{type:"button"},on:{click:function(){return e.$emit("input",i)}}}),[i.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}})},921:function(t,e,n){"use strict";var r=n(832);n.n(r).a},922:function(t,e,n){(e=n(10)(!1)).push([t.i,".wrap-pic-w img[data-v-14a2c023]{height:300px}",""]),t.exports=e},960:function(t,e,n){"use strict";n.r(e);n(12),n(6),n(5),n(4),n(7);var r=n(1),o=(n(53),n(13)),c=n(43),l=n(794),filter=n(809),d=n(810);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var h={name:"cat_details",components:{headerP:l.a,myFilter:filter.a,myVariants:d.a},data:function(){return{form:{search:""},items:[{state:"All"},{state:"New",abbr:"new_product"},{state:"Popularity",abbr:"best_sell"},{state:"Featured",abbr:"featured"}],itemSelect:{abbr:"All",state:"All"},price:[{state:"All"},{state:"0-500"},{state:"501-1000"},{state:"1000-5000"}],priceSelect:{state:"All"},loader:!1}},fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,r=t.route,o={model:"subcategories",update:"updateProduct",id:r.params.id},e.next=4,n.dispatch("showItem",o);case 4:case"end":return e.stop()}}),e)})))()},methods:{addToCart:function(t){t.product_variants.length>0?$nuxt.$emit("selectVariantsEvent",t):(t.order_qty=1,$nuxt.$emit("addCartEvent",t))},next:function(t){$nuxt.$emit("progressEvent")},addToWish:function(t){$nuxt.$emit("WishListEvent",t)}},mounted:function(){},beforeRouteLeave:function(t,e,n){n()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["products"]))},f=(n(921),n(31)),m=n(39),_=n.n(m),x=n(775),y=n(274),w=n(848),C=n(271),k=n(846),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("headerP"),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loader,expression:"loader"}],staticStyle:{"text-align":"center",width:"100%","margin-top":"200px"}},[n("v-progress-circular",{staticStyle:{margin:"1rem"},attrs:{width:3,indeterminate:"",color:"red"}})],1),t._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:!t.loader,expression:"!loader"}],staticClass:"bgwhite p-t-55 p-b-65"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 p-b-50"},[n("div",{staticClass:"leftbar p-r-20 p-r-0-sm"},[n("myFilter")],1)]),t._v(" "),n("div",{staticClass:"col-sm-6 col-md-8 col-lg-9 p-b-50"},[n("div",{staticClass:"flex-sb-m flex-w p-b-35"},[n("span",{staticClass:"s-text8 p-t-5 p-b-5"},[t._v("Showing page "+t._s(t.products.current_page)+" of "+t._s(t.products.last_page)+" pages")])]),t._v(" "),t.products.data.length>0?n("div",{staticClass:"row"},t._l(t.products.data,(function(e){return n("div",{key:e.id,staticClass:"col-sm-12 col-md-6 col-lg-4 p-b-50"},[n("div",{staticClass:"block2"},[1===e.new_product?n("div",{staticClass:"block2-img wrap-pic-w of-hidden pos-relative block2-labelnew"},[n("div",{staticClass:"block2-overlay trans-0-4"},[1===e.wish_list?n("v-tooltip",{staticStyle:{"margin-left":"90%"},attrs:{bottom:""}},[n("v-btn",{staticClass:"mx-0 block2-btn-addwishlist hov-pointer trans-0-4",staticStyle:{"margin-top":"-20px"},attrs:{slot:"activator",icon:""},on:{click:function(n){return t.addToWish(e.id)}},slot:"activator"},[n("v-icon",{attrs:{color:"pink darken-2",large:""}},[t._v("favorite")])],1),t._v(" "),n("span",[t._v("Wish list")])],1):n("v-tooltip",{staticStyle:{"margin-left":"90%"},attrs:{bottom:""}},[n("v-btn",{staticClass:"mx-0 block2-btn-addwishlist hov-pointer trans-0-4",staticStyle:{"margin-top":"-20px"},attrs:{slot:"activator",icon:""},on:{click:function(n){return t.addToWish(e.id)}},slot:"activator"},[n("v-icon",{attrs:{color:"white darken-2",large:""}},[t._v("favorite")])],1),t._v(" "),n("span",[t._v("Wish list")])],1),t._v(" "),n("div",{staticClass:"block2-btn-addcart w-size1 trans-0-4"},[n("v-btn",{attrs:{color:"success"},on:{click:function(n){return t.addToCart(e)}}},[t._v("Add to Cart")])],1)],1)]):n("div",{staticClass:"block2-img wrap-pic-w of-hidden pos-relative"},[n("img",{attrs:{src:e.image,alt:"IMG-PRODUCT"}}),t._v(" "),n("div",{staticClass:"block2-overlay trans-0-4"},[1===e.wish_list?n("v-tooltip",{staticStyle:{"margin-left":"90%"},attrs:{bottom:""}},[n("v-btn",{staticClass:"mx-0 block2-btn-addwishlist hov-pointer trans-0-4",staticStyle:{"margin-top":"-20px"},attrs:{slot:"activator",icon:""},on:{click:function(n){return t.addToWish(e.id)}},slot:"activator"},[n("v-icon",{attrs:{color:"pink darken-2",large:""}},[t._v("favorite")])],1),t._v(" "),n("span",[t._v("Wish list")])],1):n("v-tooltip",{staticStyle:{"margin-left":"90%"},attrs:{bottom:""}},[n("v-btn",{staticClass:"mx-0 block2-btn-addwishlist hov-pointer trans-0-4",staticStyle:{"margin-top":"-20px"},attrs:{slot:"activator",icon:""},on:{click:function(n){return t.addToWish(e.id)}},slot:"activator"},[n("v-icon",{attrs:{color:"white darken-2",large:""}},[t._v("favorite")])],1),t._v(" "),n("span",[t._v("Wish list")])],1),t._v(" "),n("div",{staticClass:"block2-btn-addcart w-size1 trans-0-4"},[n("v-btn",{attrs:{color:"primary"},on:{click:function(n){return t.addToCart(e)}}},[t._v("Add to Cart")])],1)],1)]),t._v(" "),n("div",{staticClass:"block2-txt p-t-20"},[n("nuxt-link",{attrs:{to:"/shop/"+e.id}},[n("button",{staticClass:"block2-name dis-block s-text3 p-b-5"},[t._v(t._s(e.product_name))]),t._v(" "),n("span",{staticClass:"block2-price m-text6 p-r-5"},[t._v(t._s(e.price))])])],1)])])})),0):n("div",[n("p",{staticClass:"text-center",staticStyle:{background:"#f2dede","font-size":"13px",color:"#a94442 !important"}},[t._v("No products available")])])]),t._v(" "),t.products.last_page>1?n("div",{staticClass:"text-xs-center",staticStyle:{margin:"auto",width:"100%"}},[n("v-pagination",{attrs:{length:t.products.last_page,"total-visible":"6",circle:""},on:{input:function(e){return t.next(t.products.path,t.products.current_page,"products")}},model:{value:t.products.current_page,callback:function(e){t.$set(t.products,"current_page",e)},expression:"products.current_page"}})],1):t._e()])])]),t._v(" "),n("myVariants")],1)}),[],!1,null,"14a2c023",null);e.default=component.exports;_()(component,{VBtn:x.a,VIcon:y.a,VPagination:w.a,VProgressCircular:C.a,VTooltip:k.a})}}]);