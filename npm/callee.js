/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/callee@1.1.1/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
const callsite=require("callsite"),path=require("path");let cachedIndex=null,cwd=process.cwd();function wrap(e){return e.getRelativeFileName=()=>e.getFileName().replace(cwd,""),e}cwd.length>1&&(cwd+="/"),module.exports=function(e,t){return void 0===e&&(e=1),"number"==typeof e?wrap(callsite()[Math.abs(e+1)]):module.exports.search(e,t)},module.exports.search=function(e,t){if("string"==typeof e){if("number"==typeof cachedIndex)return wrap(callsite()[cachedIndex]);let r=callsite().find(((r,a)=>{let l=r.getTypeName()===e||r.getMethodName()===e||r.getFunctionName()===e||r.getFileName().split(path.sep).includes(e);return l&&t&&(cachedIndex=a),l}));if(r)return wrap(r)}return wrap(callsite()[0])},module.exports.invalidate=function(){return cachedIndex=null,module.exports};
//# sourceMappingURL=/sm/4408d8c76b529aee6500685dc88d0ee73b34d8f8ccd6f64ba3d031301aa98ab0.map