!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["wox-vue-scroll"]=t():e["wox-vue-scroll"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=1)}([function(e,t,o){"use strict";t.a={name:"WoxVueScroll",data:function(){return{isScrollDown:!0,scrollTop:0,showGoTop:!1,timer:null}},methods:{handleScroll:function(){var e=this.getScrollTop();this.isScrollDown=this.scrollTop>e,this.scrollTop=e,this.showGoTop=e>100},throttle:function(){var e=this,t=null,o=0;return function(){var n=Date.now();n-o>500?(t&&clearTimeout(t),o=n,e.handleScroll()):(t&&clearTimeout(t),t=setTimeout(e.handleScroll,500))}},getScrollTop:function(){var e=0,t=0;return document.body&&(e=document.body.scrollTop),document.documentElement&&(t=document.documentElement.scrollTop),e-t>0?e:t}},mounted:function(){window.addEventListener("scroll",this.throttle())}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(2);n.a.install=function(e,t){e.component(n.a.name,n.a)},t.default=n.a},function(e,t,o){"use strict";var n=o(0),r=o(4),l=o(3),s=l(n.a,r.a,!1,null,null,null);s.options.__file="src/woxVueScroll.vue",t.a=s.exports},function(e,t){e.exports=function(e,t,o,n,r,l){var s,c=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(s=e,c=e.default);var u="function"==typeof c?c.options:c;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),o&&(u.functional=!0),r&&(u._scopeId=r);var a;if(l?(a=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},u._ssrRegister=a):n&&(a=n),a){var d=u.functional,f=d?u.render:u.beforeCreate;d?(u._injectStyles=a,u.render=function(e,t){return a.call(t),f(e,t)}):u.beforeCreate=f?[].concat(f,a):[a]}return{esModule:s,exports:c,options:u}}},function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"wox-vue-scroll"},[e._t("default",null,{isScrollDown:e.isScrollDown,showGoTop:e.showGoTop})],2)},r=[];n._withStripped=!0;var l={render:n,staticRenderFns:r};t.a=l}])});