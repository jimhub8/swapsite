(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{791:function(t,e,r){var content=r(793);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("779444aa",content,!0,{sourceMap:!1})},792:function(t,e,r){"use strict";var n=r(791);r.n(n).a},793:function(t,e,r){(e=r(10)(!1)).push([t.i,".bg-title-page[data-v-62353448]{background-image:url(http://dellmat.jim/storage/8.jpg)!important;background-attachment:fixed!important}",""]),t.exports=e},794:function(t,e,r){"use strict";var n={},o=(r(792),r(31)),component=Object(o.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"bg-title-page p-t-50 p-b-40 flex-col-c-m"},[e("h2",{staticClass:"l-text2 t-center",staticStyle:{color:"rgb(87, 205, 252)","text-transform":"none"}},[this._v("\n        SW"),e("span",{staticStyle:{color:"#FFF"}},[this._v("APP")])]),this._v(" "),e("p",{staticClass:"m-text13 t-center"},[this._v("\n        Living in the future\n    ")])])}],!1,null,"62353448",null);e.a=component.exports},831:function(t,e,r){var content=r(920);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("6a8f95fc",content,!0,{sourceMap:!1})},919:function(t,e,r){"use strict";var n=r(831);r.n(n).a},920:function(t,e,r){(e=r(10)(!1)).push([t.i,".wrap-pic-w img[data-v-7218e585]{height:300px}.slick3-dots li[data-v-7218e585]{display:none!important}.w-100[data-v-7218e585]{height:230px;transition:height .3s,opacity .3s}.w-100.selected[data-v-7218e585]{transition:height .6s,opacity .6s;opacity:.8}.caption[data-v-7218e585]{display:none}.caption.selected[data-v-7218e585]{transition:height .6s,opacity .6s;display:block}#container[data-v-7218e585]{position:relative;width:100%;height:100%}#container.after[data-v-7218e585]{position:absolute;color:#000;display:none}#container:hover.after[data-v-7218e585]{display:block;background:#000}.image-container[data-v-7218e585]{position:relative;height:230px;width:100%}.image-container .after[data-v-7218e585]{position:absolute;top:0;left:0;height:230px;width:100%;display:none;color:#fff}.image-container:hover .after[data-v-7218e585]{display:block;background:rgba(0,0,0,.6)}#tooltip .v-btn[data-v-7218e585]{background:hsla(0,0%,94.1%,.26)}#tooltip .v-btn[data-v-7218e585]:hover{background:rgba(0,0,0,.24)}.v-btn .v-btn__content .v-icon[data-v-7218e585]{box-shadow:0 9px 30px -6px rgba(255,54,54,.5)}.theme--light.v-data-iterator .v-data-iterator__actions[data-v-7218e585]{margin-top:0!important}li[data-v-7218e585],ul[data-v-7218e585]{margin:0}",""]),t.exports=e},959:function(t,e,r){"use strict";r.r(e);r(12),r(6),r(5),r(4),r(7);var n=r(1),o=(r(53),r(13)),c=r(794),d=r(43);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={name:"productDetails",components:{headerP:c.a},data:function(){return{form:{quantity:1},proId:this.$route.params.id,showError:!1,error_msg:"",rowsPerPageItems:[4,8,12],pagination:{rowsPerPage:4},selectedCard:-1,reviews:[],sizes:[],avgRating:null,originalImage:""}},fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.route,o={model:"products",update:"updateShowProduct",id:n.params.id},e.next=4,r.dispatch("showItem",o);case 4:case"end":return e.stop()}}),e)})))()},methods:{redirect:function(t){this.$router.push({name:"details",params:{id:t}}),this.getProduct()},addToCart:function(){var t=this.product;t.product_variants.length>0?$nuxt.$emit("selectVariantsEvent",t):(t.order_qty=this.form.quantity,$nuxt.$emit("addCartEvent",t))},hoverCard:function(t){this.selectedCard=t},isSelected:function(t){return this.selectedCard===t},view:function(t){$nuxt.$emit("viewProEvent",t)},wishList:function(t){$nuxt.$emit("WishListEvent",t)},getProduct:function(){var t={model:"products",update:"updateProductsList",id:this.$route.params.id};this.$store.dispatch("showItem",t)},getRelated:function(){var t={model:"related",update:"updateRelatedList",id:this.$route.params.id};this.$store.dispatch("showItem",t)},getReviews:function(){this.$store.dispatch("getItems",{model:"reviews",update:"updateReviewsList"})},getAvgReviews:function(){var t={model:"ratings",update:"updatAvgReviewsList",id:this.proId};this.$store.dispatch("showItem",t)},next:function(t){var e=this;$nuxt.$emit("progressEvent"),axios.get(this.reviews.path+"?page="+this.reviews.current_page).then((function(t){$nuxt.$emit("StoprogEvent"),e.reviews=t.data})).catch((function(t){$nuxt.$emit("StoprogEvent"),e.errors=t.response.data.errors}))},getCategory:function(t){var e={model:"categories",update:"updateCategoryList",id:t};this.$store.dispatch("showItem",e)},imageUrlAlt:function(t){event.target.src="https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/notfound.jpg"},priceChange:function(data){var t=this;$nuxt.$emit("progressEvent"),axios.get("product_attribute/".concat(data)).then((function(e){$nuxt.$emit("StoprogEvent"),t.product.price=e.data.price})).catch((function(e){$nuxt.$emit("StoprogEvent"),t.errors=e.response.data.errors}))}},mounted:function(){$nuxt.$emit("ScollEvent")},created:function(){var t=this;this.$nuxt.$on("ReviewRequest",(function(data){t.getReviews(),t.getAvgReviews()}))},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.b)(["product"]))},m=(r(919),r(31)),h=r(39),f=r.n(h),w=r(790),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("headerP"),t._v(" "),r("div",{staticClass:"container bgwhite p-t-35 p-b-80"},[r("div",{staticClass:"flex-w flex-sb"},[r("div",{staticClass:"w-size13 p-t-30 respon5"},[r("div",{staticClass:"wrap-slick3 flex-sb flex-w"},[r("div",{staticClass:"wrap-slick3-dots",staticStyle:{"max-height":"60vh","overflow-y":"scroll","overflow-x":"hidden"}},[t._l(t.product.images,(function(image){return r("div",{key:image.id,staticClass:"wrap-pic-w"},[r("img",{staticStyle:{height:"100px","margin-bottom":"10px"},attrs:{src:image.image,alt:image.mimetype},on:{click:function(e){t.product.image=image.image},error:t.imageUrlAlt}})])})),t._v(" "),r("img",{staticStyle:{height:"100px","margin-bottom":"10px"},attrs:{src:t.originalImage},on:{click:function(e){t.product.image=t.originalImage},error:t.imageUrlAlt}})],2),t._v(" "),r("div",{staticClass:"slick3"},[r("div",{staticClass:"item-slick3"},[r("div",{staticClass:"wrap-pic-w"},[r("img",{attrs:{src:t.product.image,alt:t.product.product_name},on:{error:t.imageUrlAlt}}),t._v(" "),r("div",{staticClass:"text-xs-center"},[r("v-rating",{attrs:{readonly:"","half-increments":""},model:{value:t.avgRating,callback:function(e){t.avgRating=e},expression:"avgRating"}})],1)])])])])]),t._v(" "),r("div",{staticClass:"w-size14 p-t-30 respon5"},[r("h4",{staticClass:"product-detail-name m-text16 p-b-13"},[t._v("\n                    "+t._s(t.product.product_name)+"\n                ")]),t._v(" "),r("span",{staticClass:"m-text17"},[t._v("\n                    Price: "+t._s(t.product.price)+"\n                ")]),t._v(" "),r("p",[t._v("Available: "+t._s(t.product.quantity))]),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.product.description)}}),t._v(" "),r("div",{staticClass:"p-t-33 p-b-60"},[r("div",{staticClass:"flex-r-m flex-w p-t-10"},[r("div",{staticClass:"w-size16 flex-m flex-w"},[r("div",{staticClass:"flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.quantity,expression:"form.quantity"}],staticClass:"size8 m-text18 t-center num-product",attrs:{type:"number",min:"1",name:"num-product",value:"1"},domProps:{value:t.form.quantity},on:{input:function(e){e.target.composing||t.$set(t.form,"quantity",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"btn-addcart-product-detail size9 trans-0-4 m-t-10 m-b-10"},[r("button",{staticClass:"flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4",on:{click:t.addToCart}},[t._v("Add to Cart")])])])])]),t._v(" "),r("div",{staticClass:"p-b-45"}),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.product.details)}})])])])],1)}),[],!1,null,"7218e585",null);e.default=component.exports;f()(component,{VRating:w.a})}}]);