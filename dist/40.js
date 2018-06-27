/*! NutUI v1.2.8 Wed Jun 27 2018 20:09:26 GMT+0800 (CST) */
webpackJsonpnutui([40],{1082:function(t,e,i){(t.exports=i(1)()).push([t.i,"",""])},1174:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"图片加载组件，支持检测环境加载webp格式图片，支持设置加载中和加载失败占位图。",showQrCode:!0}}),t._v(" "),i("h5",[t._v("示例")]),t._v(" "),i("h6",[t._v("开启webp时，如果浏览器支持，组件尝试在给定的url后加“.webp”,若请求失败则自动重新请求一次原始url(不含“.webp”)，如果还失败则请求errorImg。")]),t._v(" "),i("div",{staticStyle:{width:"100%",overflow:"hidden"}},[i("nut-image",{attrs:{imgSrc:"//img10.360buyimg.com/n1/s368x368_jfs/t15451/283/338246331/345534/6b69d792/5a2a07c2N38f87e33.jpg",webp:!0}})],1),t._v(" "),i("nut-codebox",{attrs:{code:t.demo1}}),t._v(" "),i("h6",[t._v("自定义loading占位图（模拟低速网络环境可看到）")]),t._v(" "),i("div",{staticStyle:{width:"100%",overflow:"hidden"}},[i("nut-image",{attrs:{imgSrc:"//img30.360buyimg.com/vip/jfs/t11617/103/1999233618/120608/7aff545e/5a0d6e25N89c245dd.jpg",loadingImg:"//static-o2o.360buyimg.com/daojia/new/images/icon/newLoading.gif"}})],1),t._v(" "),i("nut-codebox",{attrs:{code:t.demo2}}),t._v(" "),i("h6",[t._v("自定义加载失败时的占位图")]),t._v(" "),i("div",{staticStyle:{width:"100%",overflow:"hidden"}},[i("nut-image",{attrs:{imgSrc:"//img10.360buyimg.com/test",errorImg:"//misc.360buyimg.com/mtd/pc/common/img/no_login.jpg"}})],1),t._v(" "),i("nut-codebox",{attrs:{code:t.demo3}}),t._v(" "),i("h6",[t._v("事件")]),t._v(" "),i("div",{staticStyle:{width:"100%",overflow:"hidden"}},[i("nut-image",{attrs:{imgSrc:"http://img10.360buyimg.com/n1/s368x368_jfs/t2590/194/2825053760/121163/21a0bec9/577335b9N8990670f.jpg",webp:!0},on:{"image-load-complete":t.imgLoadComplete}})],1),t._v(" "),i("div",[t._v("加载结果："+t._s(t.rst))]),t._v(" "),i("nut-codebox",{attrs:{code:t.demo4}}),t._v(" "),i("nut-codebox",{attrs:{code:"export default {\n    data(){\n        return{\n            rst:'',\n        }\n    },\n    methods:{\n        imgLoadComplete(img,result){\n            this.rst = result;\n        }\n    }\n}"}}),t._v(" "),i("h5",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),i("h5",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tbl-wrapper"},[i("table",{staticClass:"u-full-width"},[i("thead",[i("tr",[i("th",[t._v("参数")]),t._v(" "),i("th",[t._v("说明")]),t._v(" "),i("th",[t._v("类型")]),t._v(" "),i("th",[t._v("默认值")]),t._v(" "),i("th",[t._v("备注")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("imgSrc")]),t._v(" "),i("td",[t._v("图片地址")]),t._v(" "),i("td",[t._v("String")]),t._v(" "),i("td",[t._v("''")]),t._v(" "),i("td",[t._v("--")])]),t._v(" "),i("tr",[i("td",[t._v("webp")]),t._v(" "),i("td",[t._v("是否尝试加载webp格式图片")]),t._v(" "),i("td",[t._v("Boolean")]),t._v(" "),i("td",[t._v("false")]),t._v(" "),i("td",[t._v("若开启且浏览器支持，组件会尝试在给定的url后加“.webp”,若请求失败则自动重新请求一次原始url(不含“.webp”)，如果还失败则请求errorImg")])]),t._v(" "),i("tr",[i("td",[t._v("loadingImg")]),t._v(" "),i("td",[t._v("加载中占位图url")]),t._v(" "),i("td",[t._v("String")]),t._v(" "),i("td",[t._v("'../../../asset/img/loading.gif'")]),t._v(" "),i("td",[t._v("--")])]),t._v(" "),i("tr",[i("td",[t._v("errorImg")]),t._v(" "),i("td",[t._v("加载失败占位图url")]),t._v(" "),i("td",[t._v("String")]),t._v(" "),i("td",[t._v("'../../../asset/img/default.png'")]),t._v(" "),i("td",[t._v("--")])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tbl-wrapper"},[i("table",{staticClass:"u-full-width"},[i("thead",[i("tr",[i("th",[t._v("事件名")]),t._v(" "),i("th",[t._v("说明")]),t._v(" "),i("th",[t._v("回调参数")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("image-load-start")]),t._v(" "),i("td",[t._v("图片开始加载时触发")]),t._v(" "),i("td",[t._v("图片对象")])]),t._v(" "),i("tr",[i("td",[t._v("image-loaded")]),t._v(" "),i("td",[t._v("图片加载成功时触发")]),t._v(" "),i("td",[t._v("图片对象")])]),t._v(" "),i("tr",[i("td",[t._v("image-load-fail")]),t._v(" "),i("td",[t._v("图片加载失败时触发")]),t._v(" "),i("td",[t._v("图片对象")])]),t._v(" "),i("tr",[i("td",[t._v("webp-load-fail")]),t._v(" "),i("td",[t._v("webp格式图片加载失败时触发，接下来组件会尝试请求一次不带“.webp”的原始图片url")]),t._v(" "),i("td",[t._v("图片对象")])]),t._v(" "),i("tr",[i("td",[t._v("image-load-complete")]),t._v(" "),i("td",[t._v("图片加载完成时触发，无论成功或失败都会触发")]),t._v(" "),i("td",[t._v("第一个参数是图片对象，第二个参数是表示结果的字符串（“success”/“fail”）")])])])])])}]}},1291:function(t,e,i){var v=i(1082);"string"==typeof v&&(v=[[t.i,v,""]]),v.locals&&(t.exports=v.locals);i(3)("a42acfe6",v,!0,{})},881:function(t,e,i){var v=i(2)(i(981),i(1174),function(t){i(1291)},null,null);t.exports=v.exports},981:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{demo1:'<nut-image \nimgSrc="//img10.360buyimg.com/n1/s368x368_jfs/t15451/283/338246331/345534/6b69d792/5a2a07c2N38f87e33.jpg" \n:webp="true">\n</nut-image>',demo2:'<nut-image \nimgSrc="//img30.360buyimg.com/vip/jfs/t11617/103/1999233618/120608/7aff545e/5a0d6e25N89c245dd.jpg" \nloadingImg="//static-o2o.360buyimg.com/daojia/new/images/icon/newLoading.gif">\n</nut-image>',demo3:'<nut-image \nimgSrc="//img10.360buyimg.com/test" \nerrorImg="//misc.360buyimg.com/mtd/pc/common/img/no_login.jpg">\n</nut-image>',demo4:'<nut-image \nimgSrc="//img10.360buyimg.com/n1/s368x368_jfs/t2590/194/2825053760/121163/21a0bec9/577335b9N8990670f.jpg" \n:webp="true" \n@image-load-complete="imgLoadComplete">\n</nut-image>',rst:""}},methods:{imgLoadComplete:function(t,e){this.rst=e}}}}});