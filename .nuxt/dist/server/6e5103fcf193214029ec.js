exports.ids=[10],exports.modules={171:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(0),o=r.n(n);function c(t){return o.a.extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:r,data:data,children:n}){data.staticClass=`${t} ${data.staticClass||""}`.trim();const{attrs:o}=data;if(o){data.attrs={};const t=Object.keys(o).filter(t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e});t.length&&(data.staticClass+=" "+t.join(" "))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),e(r.tag,data,n)}})}},188:function(t,e,r){"use strict";r(75);var n=r(171);e.a=Object(n.a)("flex")},189:function(t,e,r){"use strict";r(75);var n=r(171);e.a=Object(n.a)("layout")},335:function(t,e,r){"use strict";r.r(e);var n=r(8),o=r(12),c=r.n(o),l=r(188),d=r(189),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",[e("v-flex",{staticClass:"text-center"},[e("img",{staticClass:"mb-5",attrs:{src:"/v.png",alt:"Vuetify.js"}}),this._v(" "),e("blockquote",{staticClass:"blockquote"},[this._v("\n      “First, solve the problem. Then, write the code.”\n      "),e("footer",[e("small",[e("em",[this._v("—John Johnson")])])])])])],1)}),[],!1,null,null,"1ea5a11a");e.default=component.exports;c()(component,{VFlex:l.a,VLayout:d.a})}};