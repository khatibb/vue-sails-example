(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3887"],{"0ff7":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row justify-content-md-center"},[r("div",{staticClass:"col-6"},[r("b-form-fieldset",{attrs:{description:t.t("register.mixin.description.first"),label:t.t("register.mixin.label.first")}},[r("b-form-input",{attrs:{state:t.isValidName},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._l(t.errors.name,function(e,n){return r("b-form-feedback",{key:n},[t._v("\n        "+t._s(e)+"\n      ")])})],2),r("b-form-fieldset",{attrs:{description:t.t("register.mixin.description.second"),label:t.t("register.mixin.label.second")}},[r("b-form-input",{attrs:{state:t.isValidPassword,type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._l(t.errors.password,function(e,n){return r("b-form-feedback",{key:n},[t._v("\n        "+t._s(e)+"\n      ")])})],2),r("b-button",{attrs:{variant:"outline-success",size:"sm"},on:{click:t.signUp}},[t._v(t._s(t.t("register.mixin.button.first")))])],1)])},o=[],i=r("156f"),a=r("f704"),s={mixins:[i["a"],a["a"]]},c=s,u=r("2877"),f=Object(u["a"])(c,n,o,!1,null,null,null);f.options.__file="Register.desktop.vue";e["default"]=f.exports},"156f":function(t,e,r){"use strict";r("96cf");var n=r("3040");r("7f7f");e["a"]={computed:{user:{get:function(){return this.$store.state.User.user}},name:{get:function(){return this.$store.state.User.user.name},set:function(t){this.$store.commit("SET_USER_NAME",t)}},password:{get:function(){return this.$store.state.User.user.password},set:function(t){this.$store.commit("SET_USER_PASSWORD",t)}}},methods:{signUp:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("signUp",this.user);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}},3040:function(t,e,r){"use strict";function n(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function a(t,e){try{var r=i[t](e),a=r.value}catch(t){return void o(t)}r.done?n(a):Promise.resolve(a).then(s,c)}function s(t){a("next",t)}function c(t){a("throw",t)}s()})}}r.d(e,"a",function(){return n})},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"===typeof t,f=e.regeneratorRuntime;if(f)u&&(t.exports=f);else{f=e.regeneratorRuntime=u?t.exports:{},f.wrap=b;var l="suspendedStart",h="suspendedYield",p="executing",m="completed",d={},v={};v[a]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(R([])));g&&g!==n&&o.call(g,a)&&(v=g);var w=L.prototype=_.prototype=Object.create(v);E.prototype=w.constructor=L,L.constructor=E,L[c]=E.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},f.awrap=function(t){return{__await:t}},k(j.prototype),j.prototype[s]=function(){return this},f.AsyncIterator=j,f.async=function(t,e,r,n){var o=new j(b(t,e,r,n));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},k(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=R,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return s.type="throw",s.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:R(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}}}function b(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=O(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function _(){}function E(){}function L(){}function k(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function j(t){function e(r,n,i,a){var s=x(t[r],t,n);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){c.value=t,i(c)},a)}a(s.arg)}var r;function n(t,n){function o(){return new Promise(function(r,o){e(t,n,r,o)})}return r=r?r.then(o,o):o()}this._invoke=n}function O(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw i;return U()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var s=N(a,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=x(t,e,r);if("normal"===c.type){if(n=r.done?m:h,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=m,r.method="throw",r.arg=c.arg)}}}function N(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,N(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function R(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:U}}function U(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},f704:function(t,e,r){"use strict";r("7f7f");var n=r("13ea"),o=r.n(n),i=r("6b58"),a=r.n(i);e["a"]={data:function(){return{errors:{name:[],password:[]}}},computed:{isValidName:{get:function(){if(o()(this.user.name))return null;var t=a.a.single(this.user.name,{presence:!0,length:{minimum:3,message:"Name must be at least three characters long"},format:{pattern:"^[A-Z](.*)$",message:"Name must start capitalized"}});return!t||(this.errors.name=t,!1)}},isValidPassword:{get:function(){if(o()(this.user.password))return null;var t=a.a.single(this.user.password,{presence:!0,length:{minimum:3,message:"Password must be at least three characters long"}});return!t||(this.errors.password=t,!1)}}}}}}]);