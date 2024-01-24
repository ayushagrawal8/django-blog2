/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/params@0.1.1/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var type=require("type-detect");function Params(e){if(!(this instanceof Params))return new Params(e);this.hash=e,this.allowed=[]}
/*!
 * Actually extend
 */
function extend(e,r){if(e&&r)for(var t in r)e[t]=r[t];return e}
/*!
 * Start merge scenario by detecting if capable
 * and proxying to the appropriate sub-function.
 *
 * @param {Array|Object} destination
 * @param {Array|ObjectArray|Object} source
 * @return {Array|Object} destination merged
 * @api private
 */function merge(e,r){if(type(e)!==type(r))throw new Error("Incompatible merge scenario.");if("object"===type(e))return mergeObject(e,r);if("array"===type(e))return mergeArray(e,r);throw new Error("Unsupported merge scenario")}
/*!
 * Start merge scenario for arrays.
 *
 * @param {Array} destination
 * @param {Array} source
 * @return {Array} destination merged
 * @api private
 */function mergeArray(e,r){for(var t=[],n=0,a=0;a<r.length;a++)"object"===type(e[a])&&"object"===type(r[a])||"array"===type(e[a])&&"array"===type(r[a])?e[a]=merge(e[a],r[a]):"object"===type(r[a])?t.push(merge({},r[a])):"array"===type(r[a])?t.push(merge([],r[a])):~e.indexOf(r[a])||t.push(r[a]);for(;n<t.length;n++)e.push(t[n]);return e}
/*!
 * Start merge scenario for objects.
 *
 * @param {Object} destination
 * @param {Object} source
 * @return {Object} destination merged
 * @api private
 */function mergeObject(e,r){for(var t,n=Object.keys(r),a=0;a<n.length;a++)t=n[a],"object"!==type(r[t])&&"array"!==type(r[t])?e[t]=r[t]:e[t]=e.hasOwnProperty(t)?merge(e[t],r[t]):merge("array"===type(r[t])?[]:{},r[t]);return e}Params.extend=function(){for(var e=[].slice.call(arguments),r=e.shift(),t=0;t<e.length;t++)extend(r,e[t]);return r},Params.merge=function(){for(var e=[].slice.call(arguments),r=e[0],t=1;t<e.length;t++)merge(r,e[t]);return r},Params.include=function(){var e=[].slice.call(arguments);function r(r,t){Object.keys(t).forEach((function(n){~e.indexOf(n)&&(r[n]=t[n])}))}return function(){for(var e=[].slice.call(arguments),t={},n=0;n<e.length;n++)r(t,e[n]);return t}},Params.exclude=function(){var e=[].slice.call(arguments);function r(r,t){Object.keys(t).forEach((function(n){~e.indexOf(n)||(r[n]=t[n])}))}return function(){for(var e=[].slice.call(arguments),t={},n=0;n<e.length;n++)r(t,e[n]);return t}},Params.prototype.only=function(e){var r=this.parse(arguments),t={};return r.forEach((function(e){this.hash.hasOwnProperty(e)&&(t[e]=this.hash[e])}),this),t},Params.prototype.except=function(e){var r=this.parse(arguments),t={};return Object.keys(this.hash).forEach((function(e){~r.indexOf(e)||(t[e]=this.hash[e])}),this),t},Params.prototype.require=function(e){var r=this.parse(arguments);return r.forEach((function(e){if(!(e in this.hash))throw new Error('Missing key "'+e+'"')}),this),this.hash},Params.prototype.permit=function(e){return this.allowed.push(e),this},Params.prototype.slice=function(){Object.keys(this.hash).forEach((function(e){~this.allowed.indexOf(e)||delete this.hash[e]}),this)},Params.prototype.parse=function(e){return 1===(e=[].slice.call(e)).length&&"array"===type(e[0])?e[0]:e},module.exports=Params;
//# sourceMappingURL=/sm/120d768c1c06a082d8d4adcb8372db5deccd6cd1f03de89adf092190ec32e31b.map