webpackJsonp([1,0],[function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var i=n(41),s=o(i),r=n(40),a=o(r),u=n(15),l=o(u),c=n(20),d=o(c),f=n(17),h=o(f),p=n(18),m=o(p),g=n(19),_=o(g),v=n(21),w=o(v),x=n(26),C=o(x),y=n(22),b=o(y),R=n(25),F=o(R),j=n(24),N=o(j),k=n(23),O=o(k);s["default"].use(a["default"]);var $="",L=[{path:"init",name:"default",component:l["default"]},{path:$+"xchat",name:"xchat",component:d["default"],children:[{path:$+"xchat/welcome",name:"welcome",component:_["default"]},{path:$+"xchat/login",name:"login",component:h["default"]},{path:$+"xchat/register",name:"register",component:m["default"]},{path:$+"xchat/:userName",name:"xChatHome",component:w["default"],children:[{path:"chatList",name:"chatList",component:b["default"]},{path:"groupChatList",name:"groupChatList",component:F["default"]},{path:"createChat",name:"createChat",component:O["default"]},{path:"friendList",name:"friendList",component:N["default"]},{path:"profile",name:"profile",component:C["default"]}]}]}],I=new a["default"]({mode:"history",routes:L});new s["default"]({router:I}).$mount("#xbr-chat-app")},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"XUI-Loading",props:{autoHide:{type:Boolean,required:!0,"default":!1,twoWay:!0},autoHideSec:{type:Number,required:!1,"default":500,twoWay:!0},showObj:{type:Object,required:!0,"default":!1,twoWay:!0},content:{type:String,required:!0,"default":"",twoWay:!0}},data:function(){return{activeClasss:""}},created:function(){var t=this;t.$watch("showObj.show",function(e,n){var o="";o=e?"active":"",t.activeClasss=o})},methods:{autoDismiss:function(){this.autoHide&&this.$set(this.showObj,"show",!1)}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(16),s=o(i);e["default"]={name:"app",components:{Hello:s["default"]}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"hello",data:function(){return{msg:"Vue.js 2 练习Demo"}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(14),s=o(i);e["default"]={components:{Loading:s["default"]},data:function(){return{loginConfig:{username:"",password:"",isloggingObj:{show:!1,content:""},loginTimer:null}}},ready:function(){console.log("ready")},created:function(){console.log("login view create ...")},methods:{login:function(){if(this.chekValid()){var t=this;t.loginConfig.isloggingObj.content="登录中, 请稍候 ...... ",t.loginConfig.isloggingObj.show=!0,t.loginConfig.loginTimer=setTimeout(function(){clearTimeout(t.loginConfig.loginTimer),t.loginConfig.loginTimer=null,t.loginConfig.isloggingObj.show=!1,setTimeout(function(){t.$router.push({name:"chatList",params:{userName:t.loginConfig.username,userId:t.loginConfig.username}})},450)},2e3)}},goRegister:function(){this.$router.push("register")},chekValid:function(){return""===this.loginConfig.username.trim()?(console.log(" 请先输入用户名! "),!1):""!==this.loginConfig.password.trim()||(console.log(" 请先输入密码! "),!1)}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{loginConfig:{username:"",password:""}}},ready:function(){console.log("ready")},methods:{login:function(){console.log("login")},goRegister:function(){console.log("goRegister")}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{welcomeConfig:{timeout:2e3,timer:null,isLoaing:null}}},created:function(){console.log("created...");var t=this;console.log(t.$route),console.log(t.$router),t.welcomeConfig.isLoaing=!0,t.welcomeConfig.timer=setTimeout(function(){t.welcomeConfig.isLoaing=!1,console.log(" timeouted ......"),clearTimeout(t.welcomeConfig.timer),t.$router.push("/xchat/login")},t.welcomeConfig.timeout)},ready:function(){console.log("ready...")}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){var o,i;n(11),o=n(1);var s=n(37);i=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(i=o=o["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(9),o=n(2);var s=n(31);i=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(i=o=o["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(10),o=n(3);var s=n(34);i=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(i=o=o["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-502ad457",t.exports=o},function(t,e,n){var o,i;n(8),o=n(4);var s=n(28);i=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(i=o=o["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-1233a142",t.exports=o},function(t,e,n){var o,i;n(13),o=n(5);var s=n(39);i=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(i=o=o["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-a9988dc6",t.exports=o},function(t,e,n){var o,i;n(12),o=n(6);var s=n(38);i=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(i=o=o["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-73179150",t.exports=o},function(t,e,n){var o,i,s=n(32);i=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(i=o=o["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=o},function(t,e,n){var o,i;n(7);var s=n(27);i=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(i=o=o["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-0443eae5",t.exports=o},function(t,e,n){var o,i,s=n(35);i=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(i=o=o["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=o},function(t,e,n){var o,i,s=n(36);i=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(i=o=o["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=o},function(t,e,n){var o,i,s=n(29);i=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(i=o=o["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=o},function(t,e,n){var o,i,s=n(33);i=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(i=o=o["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=o},function(t,e,n){var o,i,s=n(30);i=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(i=o=o["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=o},function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"view-xChatHome"}},[_h("header",{staticClass:"xChat-header"},[_m(0)," ",_m(1)," ",_h("div",{staticClass:"right single-line-ellipsis"},[_h("div",{staticClass:"x-name"},["\n\t\t\t\t"+_s($route.params.userName)+"\n\t\t\t"])," ",_m(2)])])," ",_h("router-view")," ",_h("footer",{staticClass:"xChat-footer"},[_h("div",{staticClass:"footer-item flex-center c-left"},[_h("router-link",{attrs:{to:{name:"chatList",params:{userId:$route.params.userName,userName:$route.params.userName}}}},["聊天"])])," ",_m(3)," ",_h("div",{staticClass:"footer-item flex-center c-left"},[_h("router-link",{attrs:{to:{name:"groupChatList",params:{userId:$route.params.userName,userName:$route.params.userName}}}},["群聊"])])," ",_m(4)," ",_m(5)," ",_m(6)," ",_h("div",{staticClass:"footer-item flex-center c-right"},[_h("router-link",{attrs:{to:{name:"friendList",params:{userId:$route.params.userName,userName:$route.params.userName}}}},["好友"])])," ",_m(7)," ",_h("div",{staticClass:"footer-item flex-center c-right"},[_h("router-link",{attrs:{to:{name:"profile",params:{userId:$route.params.userName,userName:$route.params.userName}}}},["我的"])])])])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"left"},[" "])},function(){with(this)return _h("div",{staticClass:"center single-line-ellipsis"},["xChat聊天室"])},function(){with(this)return _h("div",{staticClass:"x-logout single-line-ellipsis"},[" | 退出"])},function(){with(this)return _h("div",{staticClass:"footer-item-gap"})},function(){with(this)return _h("div",{staticClass:"footer-item-gap"})},function(){with(this)return _h("div",{staticClass:"footer-item flex-center c-add flex-center"},[_h("span",{staticClass:"flex-center"},[_h("div",{staticClass:"flex-center fill-parent plus-inner"},["+"])])])},function(){with(this)return _h("div",{staticClass:"footer-item-gap"})},function(){with(this)return _h("div",{staticClass:"footer-item-gap"})}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"fill-parent",attrs:{id:"xchat-view-login"}},[_h("div",{staticClass:"xchat-view-login-inner"},[_h("div",{staticClass:"login-box"},[_h("div",{staticClass:"username-line"},[_h("input",{directives:[{name:"model",rawName:"v-model",value:loginConfig.username,expression:"loginConfig.username"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入用户名",name:"xbr-username"},domProps:{value:_s(loginConfig.username)},on:{input:function(t){t.target.composing||(loginConfig.username=t.target.value)}}})])," ",_h("div",{staticClass:"password-line"},[_h("input",{directives:[{name:"model",rawName:"v-model",value:loginConfig.password,expression:"loginConfig.password"}],staticClass:"input",attrs:{type:"password",placeholder:"请输入密码",name:"xbr-password"},domProps:{value:_s(loginConfig.password)},on:{input:function(t){t.target.composing||(loginConfig.password=t.target.value)}}})])," ",_h("div",{staticClass:"submit-line"},[_h("button",{staticClass:"login",on:{click:function(t){login()}}},["登录"])," ",_h("button",{staticClass:"register",on:{click:function(t){goRegister()}}},["注册"])])])," ",_h("Loading",{attrs:{showObj:loginConfig.isloggingObj,content:loginConfig.isloggingObj.content,autoHide:!1}})])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _m(0)},staticRenderFns:[function(){with(this)return _h("div",{attrs:{id:"xchart-view-friendlist"}},["\n\tfriend list\n"])}]}},function(module,exports){module.exports={render:function(){with(this)return _m(0)},staticRenderFns:[function(){with(this)return _h("div",{attrs:{id:"xchart-view-profile"}},["\n\tprofile\n"])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"app"}},[_h("Hello")," "," "])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"fill-parent",attrs:{id:"xchat-app"}},[_h("router-view")])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _m(0)},staticRenderFns:[function(){with(this)return _h("div",{attrs:{id:"xchart-view-groupchatlist"}},["\n\tgroup chat list\n"])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"hello"},[_h("h1",[_s(msg)])," ",_m(0)," ",_h("ul",[_h("li",[_h("router-link",{attrs:{to:{path:"/xchat/welcome"}}},["xChat 聊天室"])])])," ",_m(1)," "])},staticRenderFns:[function(){with(this)return _h("h2",["示例"])},function(){with(this)return _h("footer",[_h("h2",["感谢"])," ",_h("ul",[_h("li",[_h("a",{attrs:{href:"http://vuejs.org/api/index.html",target:"_blank"}},["Vue.js 2"])])," ",_h("li",[_h("a",{attrs:{href:"http://router.vuejs.org/en/index.html",target:"_blank"}},["Vue Router 2"])])," ",_h("li",[_h("a",{attrs:{href:"http://webpack.github.io/docs/index.html",target:"_blank"}},["webpack"])])," ",_h("li",[_h("a",{attrs:{href:"https://jsfiddle.net",target:"_blank"}},["JSFiddle"])])])])}]}},function(module,exports){module.exports={render:function(){with(this)return _m(0)},staticRenderFns:[function(){with(this)return _h("div",{attrs:{id:"xchart-view-chatlist"}},["\n\tchat list\n"])}]}},function(module,exports){module.exports={render:function(){with(this)return _m(0)},staticRenderFns:[function(){with(this)return _h("div",{attrs:{id:"xchart-view-createchat"}},["\n\tcreate chat\n"])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"xui_loading-compentent","class":activeClasss,on:{click:function(t){autoDismiss()}}},[_h("div",{directives:[{name:"show",rawName:"v-show",value:showObj.show,expression:"showObj.show"}],staticClass:"xui_info_wrapper"},[_h("div",{staticClass:"xui_loading"},[_l(12,function(t){return _h("div",{staticClass:"weui_loading_leaf","class":"weui_loading_leaf_"+t})})])," ",_h("p",{staticClass:"weui_info_content"},[_s(content)])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _m(0)},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"flex-center fill-parent",attrs:{id:"view-welcome"}},["\n  欢迎来到 xChat 聊天室!\n"])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"view-login"}},[_h("div",{staticClass:"login-box"},[_h("div",{staticClass:"username-line"},[_h("input",{directives:[{name:"model",rawName:"v-model",value:loginConfig.username,expression:"loginConfig.username"}],attrs:{type:"text",placeholder:"请输入用户名",name:"xbr-username"},domProps:{value:_s(loginConfig.username)},on:{input:function(t){t.target.composing||(loginConfig.username=t.target.value)}}})])," ",_h("div",{staticClass:"password-line"},[_h("input",{directives:[{name:"model",rawName:"v-model",value:loginConfig.password,expression:"loginConfig.password"}],attrs:{type:"password",placeholder:"请输入密码",name:"xbr-password"},domProps:{value:_s(loginConfig.password)},on:{input:function(t){t.target.composing||(loginConfig.password=t.target.value)}}})])," ",_h("div",{staticClass:"submit-line"},[_h("input",{attrs:{type:"submit",value:"登录"},on:{click:function(t){login($index)}}})," ",_h("input",{attrs:{type:"submit",value:"注册"},on:{click:function(t){goRegister(t)}}})])])])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.06750a4481b69963d672.js.map