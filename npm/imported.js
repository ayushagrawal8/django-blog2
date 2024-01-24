/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/imported@2.2.1/imported.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var directory,dir_list,req=require("require-dir-all"),path=require("path"),lo=require("lodash"),helper=require("./helper"),isInitialized=!1,imported_interface={init:init,get:get};function init(e,r){if(lo.isObject(e))return helper.overrideDependency(e,imported_interface),void(isInitialized=!0);var i=lo.get(r,"override");if(i&&helper.overrideDependency(i,imported_interface),isInitialized)return imported_interface;e||(e="."),dir_list=helper.constructDirectoryList(helper.getDirectoryList(e),r);var t=module.parent.filename,d=path.dirname(t);directory=path.resolve(d,e);var n=req(directory,{recursive:!0,excludeDirs:lo.get(r,"exclude")});return helper.loadObjects(imported_interface,n,dir_list),isInitialized=!0,imported_interface}function get(e){if(imported_interface[e])return imported_interface[e];if(!isInitialized&&dir_list[e]){var r=helper.manualRequire(dir_list,e,directory);return imported_interface[e]=r,r}throw"Dependency not found: "+e}module.exports=imported_interface;
//# sourceMappingURL=/sm/635ec6b20dbc93221c9c397e29a14a2b4b5e28cc5dd28a1d2f1ca8d7ad8cfd32.map