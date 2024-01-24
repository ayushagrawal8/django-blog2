/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/argument@0.0.2/argument.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(){var e={},t=!1;e.test=function(e,n){if(t)return this;e=(n=Array.prototype.slice.apply(arguments)).shift();var r=Array.prototype.slice.apply(arguments.callee.caller.arguments);return this.virtual(r,e,n)},e.testValue=function(e,n){if(t)return this;(n=Array.prototype.slice.apply(arguments)).shift();var r=[e];return this.virtual(r,0,n)},e.turnOff=function(){return t=!0,this},e.turnOn=function(){return t=!1,this},e.virtual=function(e,n,r){if(t)return this;n<1&&(n=1);var a=new Error,i=a.stack.split("\n"),s=e[n-1];i.shift(),i.shift(),0===i[0].trim().indexOf("at argument.test")&&i.shift();for(var u=0;u<r.length;u++)if(this.isValid(r[u],s))return this;var o=i[0].trim().split(" ")[1],c=this.getDataType(s);throw a.message="Argument {NUMBER} in {METHOD}() was expecting {EXPECTED}, however {ACTUAL} was given.".replace("{NUMBER}",n).replace("{METHOD}",o).replace("{EXPECTED}",r.join(" or ")).replace("{ACTUAL}",c),i.unshift(a.message),a.stack=i.join("\n"),a},e.isValid=function(e,t){if("object"==typeof e)return t instanceof e;switch(e){case"bool":return"boolean"==typeof t;case"number":return"number"==typeof t;case"int":return"number"==typeof t&&-1==(""+t).indexOf(".");case"float":return"number"==typeof t&&-1!=(""+t).indexOf(".");case"date":return t instanceof Date;case"email":return"string"==typeof t&&r(t);case"url":return"string"==typeof t&&s(t);case"html":return"string"==typeof t&&i(t);case"cc":return"string"==typeof t&&n(t);case"hex":return"string"==typeof t&&a(t);case"alphanum":return"string"==typeof t&&u(t);case"alphanumscore":return"string"==typeof t&&o(t);case"alphanumhyphen":return"string"==typeof t&&c(t);case"alphanumline":return"string"==typeof t&&f(t);case"null":case null:return null===t;case"undef":case"undefined":return void 0===t;case"array":return t instanceof Array;case"hash":return"[object Object]"===toString.call(t)&&t.constructor===Object&&!t.nodeType&&!t.setInterval;case"numeric":return!isNaN(parseFloat(t))&&isFinite(t);case"regex":case"regexp":return t instanceof RegExp;case"mixed":return null!=t;default:return typeof t==e}return!0},e.getDataType=function(e){return"string"==typeof e?"'"+e+"'":e instanceof Array?"Array":e instanceof RegExp?"RegExp":e instanceof Date?"Date":"boolean"==typeof e?e?"true":"false":"object"==typeof e?"Object":null===e?"null":void 0===e?"undefined":typeof e};var n=function(e){return new RegExp("^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$","ig").test(e)},r=function(e){return new RegExp('^(([^<>()[\\]\\.,,:\\s@\\"]+(\\.[^<>()[\\]\\.,,:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',"ig").test(e)},a=function(e){return new RegExp("^[0-9a-fA-F]{6}$","ig").test(e)},i=function(e){return new RegExp("<(?:([a-zA-Z\\?][\\w:\\-]*)(\\s(?:\\s*[a-zA-Z][\\w:\\-]*(?:\\s*=(?:\\s*\"(?:\\\\\"|[^\"])*\"|\\s*'(?:\\\\'|[^'])*'|[^\\s>]+))?)*)?(\\s*[/\\?]?)|/([a-zA-Z][\\w:\\-]*)\\s*|!--((?:[^\\-]|-(?!->))*)--|!\\[CDATA\\[((?:[^\\]]|\\](?!\\]>))*)\\]\\])>","ig").test(e)},s=function(e){return new RegExp("^(http|https|ftp)://([a-zA-Z0-9][a-zA-Z0-9_-]*(?:.[a-zA-Z0-9][a-zA-Z0-9_-]*)+):?(d+)?/?","ig").test(e)},u=function(e){return new RegExp("^[a-zA-Z0-9]+$","ig").test(e)},o=function(e){return new RegExp("^[a-zA-Z0-9_]+$","ig").test(e)},c=function(e){return new RegExp("^[a-zA-Z0-9-]+$","ig").test(e)},f=function(e){return new RegExp("^[a-zA-Z0-9-_]+$","ig").test(e)};"object"==typeof module&&module.exports?module.exports=e:"function"==typeof define?define((function(){return e})):"function"==typeof jQuery&&"function"==typeof jQuery.extend?jQuery.extend({argument:e}):"object"==typeof window&&(window.argument=e)}();
//# sourceMappingURL=/sm/5dd48c9d91455a0a1a800cb8e6402c6b3d76af613c95261a81f359530924abf4.map