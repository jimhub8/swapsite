(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{818:function(e,t,r){var content=r(885);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("5d5728c4",content,!0,{sourceMap:!1})},884:function(e,t,r){"use strict";var o=r(818);r.n(o).a},885:function(e,t,r){(t=r(10)(!1)).push([e.i,".v-card[data-v-49a74966]:not(.v-sheet--tile):not(.v-card--shaped){padding:20px;width:80%;box-shadow:7px 7px 8px -4px #d2e1f6,0 12px 17px 2px #d2e1f6,0 5px 22px 4px #d2e1f6!important;margin:auto auto 50px}@media only screen and (max-width:991px){.v-card[data-v-49a74966]:not(.v-sheet--tile):not(.v-card--shaped){padding:0;width:100%}}",""]),e.exports=t},944:function(e,t,r){"use strict";r.r(t);var o={data:function(){return{address:{},errors:{},form:{},loading:!1,logged_in:!1,user:{}}},methods:{setPlace:function(e){this.form.address=e},save:function(data){if("exists"==data)var e={model:"billing",id:this.user.id,data:this.user};else e={model:"billing",id:this.user.id,data:this.form};this.$store.dispatch("patchItems",e)},user_logged:function(){this.$store.state.auth.loggedIn&&(this.logged_in=!0,this.user=this.$store.state.auth.user)}},mounted:function(){this.user_logged()}},l=r(31),n=r(39),d=r.n(n),c=r(775),v=r(842),f=r(843),m=r(935),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-layout",{attrs:{wrap:""}},[null!=e.user.billing?r("div",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"Full name",required:""},model:{value:e.user.billing.name,callback:function(t){e.$set(e.user.billing,"name",t)},expression:"user.billing.name"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"Email",required:""},model:{value:e.user.billing.email,callback:function(t){e.$set(e.user.billing,"email",t)},expression:"user.billing.email"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"Address",required:""},model:{value:e.user.billing.street_address,callback:function(t){e.$set(e.user.billing,"street_address",t)},expression:"user.billing.street_address"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"City/Town",required:""},model:{value:e.user.billing.town,callback:function(t){e.$set(e.user.billing,"town",t)},expression:"user.billing.town"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"Country",required:""},model:{value:e.user.billing.country,callback:function(t){e.$set(e.user.billing,"country",t)},expression:"user.billing.country"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"County",required:""},model:{value:e.user.billing.county,callback:function(t){e.$set(e.user.billing,"county",t)},expression:"user.billing.county"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"Phone",required:""},model:{value:e.user.billing.phone,callback:function(t){e.$set(e.user.billing,"phone",t)},expression:"user.billing.phone"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"Zip/Postcode",required:""},model:{value:e.user.billing.postal_code,callback:function(t){e.$set(e.user.billing,"postal_code",t)},expression:"user.billing.postal_code"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm2:"","offset-sm10":""}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.save("exists")}}},[e._v("Submit")])],1)],1)],1):r("div",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"Full name",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"Email",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"Address",required:""},model:{value:e.form.street_address,callback:function(t){e.$set(e.form,"street_address",t)},expression:"form.street_address"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"City/Town",required:""},model:{value:e.form.town,callback:function(t){e.$set(e.form,"town",t)},expression:"form.town"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"Country",required:""},model:{value:e.form.country,callback:function(t){e.$set(e.form,"country",t)},expression:"form.country"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"County",required:""},model:{value:e.form.county,callback:function(t){e.$set(e.form,"county",t)},expression:"form.county"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"Phone",required:""},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"Zip/Postcode",required:""},model:{value:e.form.postal_code,callback:function(t){e.$set(e.form,"postal_code",t)},expression:"form.postal_code"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm2:"","offset-sm10":""}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.save("doesnt")}}},[e._v("Submit")])],1)],1)],1)])],1)}),[],!1,null,null,null),x=component.exports;d()(component,{VBtn:c.a,VFlex:v.a,VLayout:f.a,VTextField:m.a});var _={data:function(){return{address:{},errors:{},form:{},loading:!1,logged_in:!1,user:{}}},methods:{setPlace:function(e){this.form.address=e},save:function(data){if("exists"==data)var e={model:"shipping",id:this.user.id,data:this.user};else e={model:"shipping",id:this.user.id,data:this.form};this.$store.dispatch("patchItems",e)},user_logged:function(){this.$store.state.auth.loggedIn&&(this.logged_in=!0,this.user=this.$store.state.auth.user)}},mounted:function(){this.user_logged()}},h=Object(l.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-layout",{attrs:{wrap:""}},[null!=e.user.shipping?r("div",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"Full name",required:""},model:{value:e.user.shipping.name,callback:function(t){e.$set(e.user.shipping,"name",t)},expression:"user.shipping.name"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"Email",required:""},model:{value:e.user.shipping.email,callback:function(t){e.$set(e.user.shipping,"email",t)},expression:"user.shipping.email"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"Address",required:""},model:{value:e.user.shipping.street_address,callback:function(t){e.$set(e.user.shipping,"street_address",t)},expression:"user.shipping.street_address"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"City/Town",required:""},model:{value:e.user.shipping.town,callback:function(t){e.$set(e.user.shipping,"town",t)},expression:"user.shipping.town"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"Country",required:""},model:{value:e.user.shipping.country,callback:function(t){e.$set(e.user.shipping,"country",t)},expression:"user.shipping.country"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"County",required:""},model:{value:e.user.shipping.county,callback:function(t){e.$set(e.user.shipping,"county",t)},expression:"user.shipping.county"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"Phone",required:""},model:{value:e.user.shipping.phone,callback:function(t){e.$set(e.user.shipping,"phone",t)},expression:"user.shipping.phone"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"Zip/Postcode",required:""},model:{value:e.user.shipping.postal_code,callback:function(t){e.$set(e.user.shipping,"postal_code",t)},expression:"user.shipping.postal_code"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm2:"","offset-sm10":""}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.save("exists")}}},[e._v("Submit")])],1)],1)],1):r("div",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"Full name",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"Email",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"Address",required:""},model:{value:e.form.street_address,callback:function(t){e.$set(e.form,"street_address",t)},expression:"form.street_address"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"City/Town",required:""},model:{value:e.form.town,callback:function(t){e.$set(e.form,"town",t)},expression:"form.town"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"Country",required:""},model:{value:e.form.country,callback:function(t){e.$set(e.form,"country",t)},expression:"form.country"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"County",required:""},model:{value:e.form.county,callback:function(t){e.$set(e.form,"county",t)},expression:"form.county"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"Phone",required:""},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[r("v-text-field",{attrs:{color:"blue darken-2",label:"Zip/Postcode",required:""},model:{value:e.form.postal_code,callback:function(t){e.$set(e.form,"postal_code",t)},expression:"form.postal_code"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm2:"","offset-sm10":""}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.save("doesnt")}}},[e._v("Submit")])],1)],1)],1)])],1)}),[],!1,null,null,null),y=h.exports;d()(h,{VBtn:c.a,VFlex:v.a,VLayout:f.a,VTextField:m.a});var k={components:{myShipping:y,myBilling:x},data:function(){return{activeName:"first"}},methods:{handleClick:function(e,t){console.log(e,t)}}},address=Object(l.a)(k,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"Billing Address",name:"first"}},[r("myBilling")],1),e._v(" "),r("el-tab-pane",{attrs:{label:"Shipping Address",name:"second"}},[r("myShipping")],1)],1)}),[],!1,null,null,null).exports,$={name:"showorder",data:function(){return{dialog:!1,loading:!1,form:{},payload:{model:"/leaves"}}},created:function(){var e=this;this.$nuxt.$on("viewOrdEvent",(function(data){console.log(data),e.dialog=!0,e.form=data,data.ordershipping&&e.getOrderAddress()}))},methods:{close:function(){this.dialog=!1},getOrderAddress:function(){var e={model:"order_address",update:"updateOrderAddressList",id:this.form.ordershipping.id};this.$store.dispatch("showItem",e)}},computed:{total:function(){return 0},order_address:function(){return this.$store.getters.order_address}}},w=r(272),C=r(81),V=r(813),S=r(961),A=r(777),O=r(274),P=r(788),T=r(846),E=Object(l.a)($,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"","justify-center":""}},[r("v-dialog",{attrs:{persistent:"","max-width":"1200px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"headline text-center",staticStyle:{margin:"auto"}},[e._v("Order Details")]),e._v(" "),r("VSpacer"),e._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[r("v-btn",e._g({staticClass:"mx-0",attrs:{slot:"activator",icon:""},on:{click:e.close},slot:"activator"},o),[r("v-icon",{attrs:{small:"",color:"blue darken-2"}},[e._v("close")])],1)]}}])},[e._v(" "),r("span",[e._v("close")])])],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-text",[r("v-container",{attrs:{"grid-list-md":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{sm12:""}},[r("table",{staticClass:"table table-striped table-hover table-responsive"},[r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[e._v("#")]),e._v(" "),r("th",{attrs:{scope:"col"}},[e._v("Product Name")]),e._v(" "),r("th",{attrs:{scope:"col"}},[e._v("Product Sku no.")]),e._v(" "),r("th",{attrs:{scope:"col"}},[e._v("Product Description")]),e._v(" "),r("th",{attrs:{scope:"col"}},[e._v("Quantity")]),e._v(" "),r("th",{attrs:{scope:"col"}},[e._v("Price")]),e._v(" "),r("th",{attrs:{scope:"col"}},[e._v("Total")])])]),e._v(" "),r("tbody",e._l(e.form.products,(function(t,o){return r("tr",{key:o},[r("th",{attrs:{scope:"row"}},[e._v(e._s(o+1))]),e._v(" "),r("td",[e._v(e._s(t.product_name))]),e._v(" "),r("td",[e._v(e._s(t.sku_no))]),e._v(" "),r("td",[e._v(e._s(t.description))]),e._v(" "),r("td",[r("el-tag",{attrs:{type:"danger"}},[e._v(e._s(t.pivot.quantity))])],1),e._v(" "),r("td",[r("el-tag",[e._v(e._s(t.pivot.price))])],1),e._v(" "),r("td",[r("el-tag",{attrs:{type:"success"}},[e._v(e._s(t.pivot.quantity*t.pivot.price))])],1)])})),0),e._v(" "),r("tfoot",[r("td",[e._v("Total")]),e._v(" "),r("td",{attrs:{colspan:"5"}},[e._v(e._s(e.total))])])]),e._v(" "),r("v-divider"),e._v(" "),r("span",{staticClass:"headline text-center",staticStyle:{margin:"auto"}},[e._v("Shipping Details")]),e._v(" "),r("table",{staticClass:"table table-striped table-hover table-responsive"},[r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[e._v("Client Name")]),e._v(" "),r("th",{attrs:{scope:"col"}},[e._v("Client Email")]),e._v(" "),r("th",{attrs:{scope:"col"}},[e._v("Client Address")]),e._v(" "),r("th",{attrs:{scope:"col"}},[e._v("Client Phone")]),e._v(" "),r("th",{attrs:{scope:"col"}},[e._v("County")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v(e._s(e.order_address.name))]),e._v(" "),r("td",[e._v(e._s(e.order_address.email))]),e._v(" "),r("td",[e._v(e._s(e.order_address.street_address))]),e._v(" "),r("td",[e._v(e._s(e.order_address.phone))]),e._v(" "),r("td",[e._v(e._s(e.order_address.county))])])])])],1)],1)],1)],1),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"primary",text:""},on:{click:e.close}},[e._v("Close")])],1)],1)],1)],1)}),[],!1,null,null,null),F=E.exports;d()(E,{VBtn:c.a,VCard:w.a,VCardActions:C.a,VCardText:C.b,VCardTitle:C.c,VContainer:V.a,VDialog:S.a,VDivider:A.a,VFlex:v.a,VIcon:O.a,VLayout:f.a,VSpacer:P.a,VTooltip:T.a});var I={components:{myView:F},data:function(){return{dialog:!1,headers:[{text:"Created On",value:"created_at"},{text:"Order No.",value:"order_no"},{text:"Client address",value:"user.billing.street_address"},{text:"Total",value:"sub_total"},{text:"Status",value:"status"},{text:"Actions",value:"actions",sortable:!1}]}},methods:{view:function(e){$nuxt.$emit("viewOrdEvent",e)},deleteItem:function(e){var t=this;confirm("Are you sure you want to delete this item?")&&axios.delete("/orders/".concat(e.id)).then((function(e){$nuxt.$emit("alertRequest","Successifully deleted"),t.orders.splice(index,1)})).catch((function(e){500!==e.response.status?t.errors=e.response.data.errors:$nuxt.$emit("errorEvent",e.response.statusText)}))},getOrders:function(){this.$store.dispatch("getItems",{model:"sales",update:"updateSaleList"})}},computed:{sales:function(){return this.$store.getters.sales},loading:function(){return this.$store.getters.loading}},mounted:function(){this.getOrders()}},j=r(785),B=r(946),N=Object(l.a)(I,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("div",[r("v-tooltip",{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[r("v-btn",e._g({staticClass:"mx-0",attrs:{slot:"activator",icon:""},on:{click:e.getOrders},slot:"activator"},o),[r("v-icon",{attrs:{color:"blue darken-2",small:""}},[e._v("refresh")])],1)]}}])},[e._v(" "),r("span",[e._v("Refresh")])]),e._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.sales.data,"sort-by":"calories"},scopedSlots:e._u([{key:"item.actions",fn:function(t){var o=t.item;return[r("v-tooltip",{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on;return[r("v-btn",e._g({staticClass:"mx-0",attrs:{slot:"activator",icon:""},on:{click:function(t){return e.view(o)}},slot:"activator"},l),[r("v-icon",{attrs:{color:"blue darken-2",small:""}},[e._v("visibility")])],1)]}}],null,!0)},[e._v(" "),r("span",[e._v("view order")])])]}}])}),e._v(" "),r("myView")],1)])}),[],!1,null,null,null),D=N.exports;d()(N,{VApp:j.a,VBtn:c.a,VDataTable:B.a,VIcon:O.a,VTooltip:T.a});var L={name:"account",components:{myAddress:address,myOrders:D},data:function(){return{address:!0,account:!0,drawer:!0,items:[{title:"Account",icon:"dashboard"},{title:"Address",icon:"question_answer"}],right:null,tabPosition:"top"}}},Z=(r(884),Object(l.a)(L,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-card",{staticStyle:{"margin-top":"200px"}},[t("div",{staticClass:"container",staticStyle:{"margin-top":"30px"}},[t("el-tabs",{attrs:{"tab-position":this.tabPosition}},[t("el-tab-pane",{attrs:{label:"My Account"}},[this._v("\n                My account\n            ")]),this._v(" "),t("el-tab-pane",{attrs:{label:"Orders"}},[t("myOrders")],1),this._v(" "),t("el-tab-pane",{attrs:{label:"Address"}},[t("myAddress")],1)],1)],1)])}),[],!1,null,"49a74966",null));t.default=Z.exports;d()(Z,{VCard:w.a})}}]);