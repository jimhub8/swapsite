(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{866:function(t,e,r){var content=r(946);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("1d070316",content,!0,{sourceMap:!1})},945:function(t,e,r){"use strict";var o=r(866);r.n(o).a},946:function(t,e,r){(e=r(9)(!1)).push([t.i,"#login .v-card:not(.v-sheet--tile):not(.v-card--shaped){box-shadow:7px 7px 8px -4px #d2e1f6,0 12px 17px 2px #d2e1f6,0 5px 22px 4px #d2e1f6!important;width:70%;margin:auto;padding:40px 0}label{color:#999}.el-input__inner{border:1px solid #dcdfe6!important}.v-card__actions>.v-btn.v-btn{margin:auto}",""]),t.exports=e},989:function(t,e,r){"use strict";r.r(e);var o={name:"Login",data:function(){return{form:{email:"",password:""}}},methods:{login:function(){var t={model:"auth/login",data:this.form};this.$store.dispatch("postItems",t)}}},n=(r(945),r(26)),l=r(33),c=r.n(l),d=r(305),m=r(283),v=r(83),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{id:"login"}},[r("v-card-title",{staticClass:"text-center",staticStyle:{"margin-left":"25%"},attrs:{"primary-title":""}},[t._v("Login Page")]),t._v(" "),r("v-card-text",{staticStyle:{width:"50%",margin:"auto"}},[r("div",[r("label",{attrs:{for:""}},[t._v("Email")]),t._v(" "),r("el-input",{attrs:{placeholder:"jane@gmail.com"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),r("div",[r("label",{attrs:{for:""}},[t._v("Password")]),t._v(" "),r("el-input",{attrs:{placeholder:"...",type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)]),t._v(" "),r("v-card-actions",[r("VBtn",{staticClass:"text-center",attrs:{color:"primary",text:""},on:{click:t.login}},[t._v("Login")]),t._v(" "),r("nuxt-link",{attrs:{to:"/register"}},[r("VBtn",{staticClass:"text-center",attrs:{color:"primary",text:""}},[t._v("Register")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c})}}]);