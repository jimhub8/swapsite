exports.ids=[1],exports.modules={259:function(t,e,r){var content=r(303);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(4).default;t.exports.__inject__=function(t){n("44798b04",content,!0,t)}},302:function(t,e,r){"use strict";r.r(e);var n=r(259),o=r.n(n);for(var d in n)"default"!==d&&function(t){r.d(e,t,(function(){return n[t]}))}(d);e.default=o.a},303:function(t,e,r){(e=r(3)(!1)).push([t.i,"#mainslider .el-carousel__container{height:60vh!important}#mainslider .image{display:block;width:100%;height:auto}#mainslider .overlay{position:absolute;bottom:20%;background:rgba(199,185,185,.14902);width:100%;transition:.5s ease;opacity:0;color:#000;font-size:20px;padding:20px;text-align:center}#mainslider .container .overlay{opacity:1;width:70%;margin:auto}@media only screen and (max-width:991px){#mainslider img{width:100vw;height:40vh}#mainslider .container .overlay{display:none}.el-carousel--horizontal{height:40vh;overflow:hidden}}",""]),t.exports=e},352:function(t,e,r){"use strict";r.r(e);r(12);var n=r(13),o={data:()=>({overlay:!0,slider_data:[]}),methods:{get_data(){this.$store.dispatch("loadSlider")}},async fetch({store:t}){await t.dispatch("getItems",{model:"slider",update:"updateSlider"})},computed:{...Object(n.mapState)(["slider"])}},d=r(9);var component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"mainslider"}},[r("el-carousel",{attrs:{"indicator-position":"outside"}},t._l(t.slider,(function(e){return r("el-carousel-item",{key:e.id},[r("img",{attrs:{src:e.image}}),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"overlay",domProps:{innerHTML:t._s(e.content)}})])])})),1)],1)}),[],!1,(function(t){var e=r(302);e.__inject__&&e.__inject__(t)}),null,"01a6dd92");e.default=component.exports}};