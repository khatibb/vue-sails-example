(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a17"],{3040:function(t,e,r){"use strict";function n(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function c(t,e){try{var r=i[t](e),c=r.value}catch(t){return void o(t)}r.done?n(c):Promise.resolve(c).then(a,u)}function a(t){c("next",t)}function u(t){c("throw",t)}a()})}}r.d(e,"a",function(){return n})},8205:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isVisibleProductPatch?r("product-patch",{attrs:{id:t.id}}):t._e(),t.products.length>0?r("b-table",{attrs:{items:t.products,fields:t.fields},scopedSlots:t._u([{key:"price",fn:function(e){return[t._v("\n      $"+t._s(e.item.price)+"\n    ")]}},{key:"actions",fn:function(e){return[r("b-button-group",[r("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(r){t.showPatchForm(e.item.id)}}},[t._v("\n          "+t._s(t.t("productsget.mixin.button.first"))+"\n        ")]),r("b-button",{attrs:{size:"sm",variant:"outline-warning"},on:{click:function(r){t.deleteProduct(e.item.id)}}},[t._v("\n          "+t._s(t.t("productsget.mixin.button.second"))+"\n        ")])],1)]}}])}):r("p",[t._v(t._s(t.t("productsget.mixin.p.first")))])],1)},o=[],i=(r("96cf"),r("3040")),c=r("8cab"),a=function(){return Promise.all([r.e("chunk-6017"),r.e("chunk-1563")]).then(r.bind(null,"981f"))},u={mixins:[c["a"]],components:{ProductPatch:a},methods:{showPatchForm:function(t){this.$set(this,"id",t),this.$store.commit("SET_IS_VISIBLE_PRODUCT_PATCH",!0)},deleteProduct:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("deleteProduct",e);case 2:return t.next=4,this.$store.dispatch("getProductsByUser",this.user);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},s=u,h=r("2877"),f=Object(h["a"])(s,n,o,!1,null,null,null);f.options.__file="ProductsGet.desktop.vue";e["default"]=f.exports},"8cab":function(t,e,r){"use strict";r("96cf");var n=r("3040");r("cadf"),r("551c"),r("097d");e["a"]={data:function(){return{id:""}},created:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("getProductsByUser",this.user);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),computed:{fields:{get:function(){return{title:{label:this.t("productsget.mixin.field.first")},description:{label:this.t("productsget.mixin.field.second")},price:{label:this.t("productsget.mixin.field.third")},actions:{label:this.t("productsget.mixin.field.fourth")}}}},products:{get:function(){return this.$store.state.Products.products}},user:{get:function(){return this.$store.state.User.user}},isVisibleProductPatch:{get:function(){return this.$store.state.isVisibleProductPatch},set:function(t){this.$store.commit("SET_IS_VISIBLE_PRODUCT_PATCH",t)}}}}},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"===typeof t,h=e.regeneratorRuntime;if(h)s&&(t.exports=h);else{h=e.regeneratorRuntime=s?t.exports:{},h.wrap=b;var f="suspendedStart",l="suspendedYield",p="executing",d="completed",y={},v={};v[c]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(G([])));g&&g!==n&&o.call(g,c)&&(v=g);var w=L.prototype=_.prototype=Object.create(v);P.prototype=w.constructor=L,L.constructor=P,L[u]=P.displayName="GeneratorFunction",h.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===P||"GeneratorFunction"===(e.displayName||e.name))},h.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},h.awrap=function(t){return{__await:t}},E(k.prototype),k.prototype[a]=function(){return this},h.AsyncIterator=k,h.async=function(t,e,r,n){var o=new k(b(t,e,r,n));return h.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},E(w),w[u]="Generator",w[c]=function(){return this},w.toString=function(){return"[object Generator]"},h.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},h.values=G,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var u=o.call(c,"catchLoc"),s=o.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function b(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),c=new $(n||[]);return i._invoke=O(t,r,c),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function _(){}function P(){}function L(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){function e(r,n,i,c){var a=x(t[r],t,n);if("throw"!==a.type){var u=a.arg,s=u.value;return s&&"object"===typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,c)},function(t){e("throw",t,i,c)}):Promise.resolve(s).then(function(t){u.value=t,i(u)},c)}c(a.arg)}var r;function n(t,n){function o(){return new Promise(function(r,o){e(t,n,r,o)})}return r=r?r.then(o,o):o()}this._invoke=n}function O(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return I()}r.method=o,r.arg=i;while(1){var c=r.delegate;if(c){var a=j(c,r);if(a){if(a===y)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=x(t,e,r);if("normal"===u.type){if(n=r.done?d:l,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function G(t){if(t){var e=t[c];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:I}}function I(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())}}]);