/*! NutUI v1.2.8 Wed Jun 27 2018 20:09:26 GMT+0800 (CST) */
webpackJsonpnutui([46],{1038:function(t,n,v){(t.exports=v(1)()).push([t.i,"",""])},1175:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,v=t._self._c||n;return v("div",[v("nut-docheader",{attrs:{name:t.$route.name,showQrCode:!0}}),t._v(" "),v("h5",[t._v("基本用法")]),t._v(" "),v("nut-codebox",{attrs:{code:"this.$dialog(options);"}}),t._v(" "),v("h5",[t._v("示例")]),t._v(" "),v("h6",[t._v("自定义标题和内容")]),t._v(" "),v("nut-codebox",{attrs:{code:"export default {\n    methods:{\n      'showDialog1'(){\n            const options = {\n                    'title':'自定义Dialog标题',\n                    'content':'小屏或移动端浏览效果最佳'\n                  };\n\n            this.$dialog(options);\n      }\n    }\n}",imgUrl:"../asset/img/demo/dialog1.png"}}),t._v(" "),v("h6",[t._v("移除右上角关闭按钮、标题栏、按钮栏")]),t._v(" "),v("nut-codebox",{attrs:{code:"export default {\n    methods:{\n      //移除右上角按钮\n      'showDialog2':function(){\n            const options = {\n                    'title':'自定义Dialog标题',\n                    'content':'小屏或移动端浏览效果最佳',\n                    'noCloseBtn': true\n                  };\n\n            this.$dialog(options);\n      },\n      //移除顶部标题栏\n      'showDialog3':function(){\n            const options = {\n                    'content':'小屏或移动端浏览效果最佳',\n                    'noHeader': true\n                  };\n\n            this.$dialog(options);\n      },\n      //移除底部按钮栏\n      'showDialog4':function(){\n            const options = {\n                    'title':'自定义Dialog标题',\n                    'content':'小屏或移动端浏览效果最佳',\n                    'noFooter': true\n                  };\n\n            this.$dialog(options);\n      },\n    }\n}",imgUrl:["../asset/img/demo/dialog2.png","../asset/img/demo/dialog3.png","../asset/img/demo/dialog4.png"]}}),t._v(" "),v("h6",[t._v("事件")]),t._v(" "),v("nut-codebox",{attrs:{code:"export default {\n    methods:{\n      'showDialog5':function(){\n            const options = {\n                    'title':'自定义Dialog标题',\n                    'content':'小屏或移动端浏览效果最佳',\n                    //确定按钮事件\n                    'onOkBtn'(event){\n                      alert('okBtn');\n                      this.close(); //关闭对话框\n                    },\n                    //取消按钮事件\n                    'onCancelBtn'(event){\n                      alert('cancelBtn');\n                      //return false;  //阻止默认“关闭对话框”的行为\n                    },\n                    //右上角关闭按钮事件\n                    'onCloseBtn'(event){\n                      alert('closeBtn');\n                      //return false;  //阻止默认“关闭对话框”的行为\n                    },\n                    //关闭对话框回调，任何地方关闭对话框都会调用\n                    'closeCallback'(target){\n                      alert('will close');\n                    }\n                  };\n\n            this.$dialog(options);\n      }\n}"}}),t._v(" "),v("h5",[t._v("Options")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,n=t.$createElement,v=t._self._c||n;return v("div",{staticClass:"tbl-wrapper"},[v("table",{staticClass:"u-full-width"},[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("可选值/备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("id")]),t._v(" "),v("td",[t._v("对话框ID")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("''")]),t._v(" "),v("td",[t._v("相同ID的对话框共享一个实例")])]),t._v(" "),v("tr",[v("td",[t._v("content")]),t._v(" "),v("td",[t._v("对话框内容，支持HTML")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("title")]),t._v(" "),v("td",[t._v("对话框标题")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("noCloseBtn")]),t._v(" "),v("td",[t._v("是否隐藏关闭按钮")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("true/false")])]),t._v(" "),v("tr",[v("td",[t._v("closeOnClickModal")]),t._v(" "),v("td",[t._v("是否允许点击蒙层关闭对话框")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("true/false")])]),t._v(" "),v("tr",[v("td",[t._v("noHeader")]),t._v(" "),v("td",[t._v("是否隐藏头部标题栏区域（不影响关闭按钮）")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("true/false")])]),t._v(" "),v("tr",[v("td",[t._v("noFooter")]),t._v(" "),v("td",[t._v("是否隐藏底部按钮区域")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("true/false")])]),t._v(" "),v("tr",[v("td",[t._v("noOkBtn")]),t._v(" "),v("td",[t._v("是否隐藏确定按钮")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("true/false")])]),t._v(" "),v("tr",[v("td",[t._v("noCancelBtn")]),t._v(" "),v("td",[t._v("是否隐藏取消按钮")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("true/false")])]),t._v(" "),v("tr",[v("td",[t._v("okBtnTxt")]),t._v(" "),v("td",[t._v("确定按钮文字")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("确 定")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("cancelBtnTxt")]),t._v(" "),v("td",[t._v("取消按钮文字")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("取 消")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("okBtnDisabled")]),t._v(" "),v("td",[t._v("把确定按钮设为禁用状态")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("true/false")])]),t._v(" "),v("tr",[v("td",[t._v("cancelAutoClose")]),t._v(" "),v("td",[t._v("点击取消按钮是否默认关闭对话框")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("true/false")])]),t._v(" "),v("tr",[v("td",[t._v("onOkBtn")]),t._v(" "),v("td",[t._v("确定按钮点击事件")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("唯一参数为原生事件对象")])]),t._v(" "),v("tr",[v("td",[t._v("onCancelBtn")]),t._v(" "),v("td",[t._v("取消按钮点击事件")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("唯一参数为原生事件对象")])]),t._v(" "),v("tr",[v("td",[t._v("onCloseBtn")]),t._v(" "),v("td",[t._v("关闭对话框按钮点击事件")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("唯一参数为原生事件对象")])]),t._v(" "),v("tr",[v("td",[t._v("closeCallback")]),t._v(" "),v("td",[t._v("对话框关闭回调函数")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("可通过唯一参数判断关闭对话框的行为来自哪个元素，'modal'表示蒙层，'closeBtn'表示关闭按钮")])])])])])}]}},1247:function(t,n,v){var _=v(1038);"string"==typeof _&&(_=[[t.i,_,""]]),_.locals&&(t.exports=_.locals);v(3)("ccf1830a",_,!0,{})},875:function(t,n,v){var _=v(2)(v(975),v(1175),function(t){v(1247)},null,null);t.exports=_.exports},975:function(t,n,v){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{demo1:""}},mounted:function(){},methods:{}}}});