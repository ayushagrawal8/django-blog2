/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/cases@1.0.0/dist/cases.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
"use strict";function _toConsumableArray(r){if(Array.isArray(r)){for(var n=0,t=Array(r.length);n<r.length;n++)t[n]=r[n];return t}return Array.from(r)}var async=require("async"),cases=function r(n,t){return"function"==typeof n?r(n(),t):n[0].length!==t.length?function(r){async.eachSeries(n,(function(r,n){t.apply(void 0,_toConsumableArray(r.concat(n)))}),(function(){if(r)return r()}))}:function(){for(var r=0;r<n.length;r++)t.apply(void 0,_toConsumableArray(n[r]))}};module.exports=cases;
//# sourceMappingURL=/sm/28827eac1f3a286b5cb174edf3c0756b8463ae942f83a74d2bbe6cf136f8134a.map