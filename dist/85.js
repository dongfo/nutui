/*! NutUI v1.2.8 Wed Jun 27 2018 20:09:26 GMT+0800 (CST) */
webpackJsonpnutui([85],{1063:function(e,n,t){(e.exports=t(1)()).push([e.i,".item-li{height:1rem;display:flex;align-items:center;justify-content:center;border-bottom:1px solid #e7e7e7}.no-more{text-align:center}",""])},1139:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("nut-demoheader",{attrs:{name:e.$route.name}}),e._v(" "),t("nut-infiniteloading",{attrs:{noMore:e.noMore},on:{"on-refresh":e.onRefresh,"on-infinite":e.onInfinite}},e._l(e.resultList,function(n){return t("div",{staticClass:"item-li"},[e._v(e._s(n))])}))],1)},staticRenderFns:[]}},1272:function(e,n,t){var i=t(1063);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(3)("ec3608ea",i,!0,{})},834:function(e,n,t){var i=t(2)(t(933),t(1139),function(e){t(1272)},null,null);e.exports=i.exports},933:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i,s=t(67),o=(i=s)&&i.__esModule?i:{default:i};n.default={data:function(){return{teml1:'<nut-infiniteloading @on-refresh="onRefresh" @on-infinite="onInfinite" :noMore="noMore">\n    <div v-for="item in resultList">{{item}}</div>\n</nut-infiniteloading>',teml2:"export default {\n    data(){\n        return{\n            page: 1, //当前页\n            pageSize: 10, // 一页显示多少条\n            noMore: false, //暂无更多数据显示\n            resultList:[]\n        }\n    },\n    created(){\n        this.getList();\n    },\n    methods:{\n        //查询列表\n        getList(suc){\n            let self = this;\n            //模拟异步\n            setTimeout(function(){\n                let queryList = [1,2,3,4,5,6,7,8,9,10,11,12,13];\n                if(self.page == 1){\n                    self.resultList = queryList;\n                } else {\n                    self.resultList =[...self.resultList, ...queryList];\n                }\n                // self.noMoreFlag = true;//根据查询回的数据判断是否还有更多数据\n                if(suc){\n                    suc();\n                }\n            },600);\n        },\n        //刷新调用\n        onRefresh(done) {\n            this.page = 1;\n            this.getList(done);\n        },\n        //下一页调用\n        onInfinite(done) {\n            this.page++;\n            this.getList(done);\n        }\n    }\n}",page:1,pageSize:10,noMore:!1,resultList:[]}},created:function(){this.getList()},methods:{getList:function(e){var n=this;setTimeout(function(){var t=[1,2,3,4,5,6,7,8,9,10];1==n.page?n.resultList=t:n.resultList=[].concat((0,o.default)(n.resultList),t),e&&e()},600)},onRefresh:function(e){this.page=1,this.getList(e)},onInfinite:function(e){this.page++,this.getList(e)}}}}});