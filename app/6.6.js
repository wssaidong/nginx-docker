webpackJsonp([6],{222:function(t,e,n){var i,a;n(223),i=n(225);var r=n(226);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,a._scopeId="data-v-e2e296f2",t.exports=i},223:function(t,e,n){var i=n(224);"string"==typeof i&&(i=[[t.id,i,""]]);n(165)(i,{});i.locals&&(t.exports=i.locals)},224:function(t,e,n){e=t.exports=n(157)(),e.push([t.id,"",""])},225:function(t,e,n){"use strict";function i(){var t=navigator.userAgent||navigator.vendor||window.opera;if(null!=t){if(/android/i.test(t))return"android";if(/iphone/i.test(t))return"ios"}}function a(){return navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1}Object.defineProperty(e,"__esModule",{value:!0});var r=n(172);e.default={data:function(){return{}},created:function(){this.$store.dispatch("GET_GAME_INFO",this.$route.params.id)},computed:(0,r.mapState)({game:function(t){return t.games.gameInfo}}),methods:{download:function(t){var e=(navigator.userAgent||navigator.vendor||window.opera,i()),n=a();"android"!=e||n?this.$message({message:"请在浏览器打开"}):window.location.href=t.packageUrl}}}},226:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",[n("vHeader")],1),t._v(" "),n("div",[n("el-carousel",{attrs:{height:"545px"}},t._l(t.game.screenshots.split("|"),function(t){return n("el-carousel-item",[n("div",[n("img",{staticStyle:{width:"100%"},attrs:{src:t}})])])}))],1),t._v(" "),n("el-main",[n("div",[n("div",{staticStyle:{width:"80%",margin:"0 auto"}},[n("div",{staticClass:"page-container"},[n("h3",[t._v("\n\t\t\t\t\t\t游戏简介\n\t\t\t\t\t")])]),t._v(" "),n("div",[n("span",[t._v("\n\t\t\t\t\t\t"+t._s(t.game.introduction)+"\n\t\t\t\t\t")])]),t._v(" "),n("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[n("img",{staticStyle:{height:"100px",width:"100px"},attrs:{src:t.game.logo}}),t._v(" "),n("div",{staticStyle:{"margin-top":"5px"}},[n("el-button",{attrs:{type:"success",size:"small"},on:{click:function(e){t.download(t.game)}}},[t._v("下载游戏")])],1)])])])])],1)},staticRenderFns:[]}}});