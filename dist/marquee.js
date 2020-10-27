(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("clappr"));
	else if(typeof define === 'function' && define.amd)
		define(["clappr"], factory);
	else if(typeof exports === 'object')
		exports["Marquee"] = factory(require("clappr"));
	else
		root["Marquee"] = factory(root["Clappr"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_clappr__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "<%=baseUrl%>/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _main=__webpack_require__(/*! ./src/main.js */ \"./src/main.js\");var _main2=_interopRequireDefault(_main);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_main2.default;module.exports=exports['default'];\n\n//# sourceURL=webpack://Marquee/./index.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/get-iterator */ \"./node_modules/core-js/library/fn/get-iterator.js\"), __esModule: true };\n\n//# sourceURL=webpack://Marquee/./node_modules/babel-runtime/core-js/get-iterator.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/create */ \"./node_modules/core-js/library/fn/object/create.js\"), __esModule: true };\n\n//# sourceURL=webpack://Marquee/./node_modules/babel-runtime/core-js/object/create.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/define-property */ \"./node_modules/core-js/library/fn/object/define-property.js\"), __esModule: true };\n\n//# sourceURL=webpack://Marquee/./node_modules/babel-runtime/core-js/object/define-property.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ \"./node_modules/core-js/library/fn/object/set-prototype-of.js\"), __esModule: true };\n\n//# sourceURL=webpack://Marquee/./node_modules/babel-runtime/core-js/object/set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/symbol */ \"./node_modules/core-js/library/fn/symbol/index.js\"), __esModule: true };\n\n//# sourceURL=webpack://Marquee/./node_modules/babel-runtime/core-js/symbol.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ \"./node_modules/core-js/library/fn/symbol/iterator.js\"), __esModule: true };\n\n//# sourceURL=webpack://Marquee/./node_modules/babel-runtime/core-js/symbol/iterator.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nexports.default = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n};\n\n//# sourceURL=webpack://Marquee/./node_modules/babel-runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ \"./node_modules/babel-runtime/core-js/object/define-property.js\");\n\nvar _defineProperty2 = _interopRequireDefault(_defineProperty);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if (\"value\" in descriptor) descriptor.writable = true;\n      (0, _defineProperty2.default)(target, descriptor.key, descriptor);\n    }\n  }\n\n  return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) defineProperties(Constructor, staticProps);\n    return Constructor;\n  };\n}();\n\n//# sourceURL=webpack://Marquee/./node_modules/babel-runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ \"./node_modules/babel-runtime/core-js/object/set-prototype-of.js\");\n\nvar _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);\n\nvar _create = __webpack_require__(/*! ../core-js/object/create */ \"./node_modules/babel-runtime/core-js/object/create.js\");\n\nvar _create2 = _interopRequireDefault(_create);\n\nvar _typeof2 = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/babel-runtime/helpers/typeof.js\");\n\nvar _typeof3 = _interopRequireDefault(_typeof2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : (0, _typeof3.default)(superClass)));\n  }\n\n  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      enumerable: false,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;\n};\n\n//# sourceURL=webpack://Marquee/./node_modules/babel-runtime/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _typeof2 = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/babel-runtime/helpers/typeof.js\");\n\nvar _typeof3 = _interopRequireDefault(_typeof2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return call && ((typeof call === \"undefined\" ? \"undefined\" : (0, _typeof3.default)(call)) === \"object\" || typeof call === \"function\") ? call : self;\n};\n\n//# sourceURL=webpack://Marquee/./node_modules/babel-runtime/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ \"./node_modules/babel-runtime/core-js/symbol/iterator.js\");\n\nvar _iterator2 = _interopRequireDefault(_iterator);\n\nvar _symbol = __webpack_require__(/*! ../core-js/symbol */ \"./node_modules/babel-runtime/core-js/symbol.js\");\n\nvar _symbol2 = _interopRequireDefault(_symbol);\n\nvar _typeof = typeof _symbol2.default === \"function\" && typeof _iterator2.default === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === \"function\" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? \"symbol\" : typeof obj; };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = typeof _symbol2.default === \"function\" && _typeof(_iterator2.default) === \"symbol\" ? function (obj) {\n  return typeof obj === \"undefined\" ? \"undefined\" : _typeof(obj);\n} : function (obj) {\n  return obj && typeof _symbol2.default === \"function\" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? \"symbol\" : typeof obj === \"undefined\" ? \"undefined\" : _typeof(obj);\n};\n\n//# sourceURL=webpack://Marquee/./node_modules/babel-runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.dom.iterable */ \"./node_modules/core-js/library/modules/web.dom.iterable.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\nmodule.exports = __webpack_require__(/*! ../modules/core.get-iterator */ \"./node_modules/core-js/library/modules/core.get-iterator.js\");\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/fn/get-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.create */ \"./node_modules/core-js/library/modules/es6.object.create.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function create(P, D) {\n  return $Object.create(P, D);\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/fn/object/create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.define-property */ \"./node_modules/core-js/library/modules/es6.object.define-property.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function defineProperty(it, key, desc) {\n  return $Object.defineProperty(it, key, desc);\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/fn/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ \"./node_modules/core-js/library/modules/es6.object.set-prototype-of.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.setPrototypeOf;\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/fn/object/set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.symbol */ \"./node_modules/core-js/library/modules/es6.symbol.js\");\n__webpack_require__(/*! ../../modules/es6.object.to-string */ \"./node_modules/core-js/library/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ \"./node_modules/core-js/library/modules/es7.symbol.async-iterator.js\");\n__webpack_require__(/*! ../../modules/es7.symbol.observable */ \"./node_modules/core-js/library/modules/es7.symbol.observable.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Symbol;\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/fn/symbol/index.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../../modules/web.dom.iterable */ \"./node_modules/core-js/library/modules/web.dom.iterable.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\").f('iterator');\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/fn/symbol/iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/library/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/library/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_classof.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_cof.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.6.9' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_defined.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);\n  } return result;\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_enum-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && has(exports, key)) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_html.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_iter-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/library/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/library/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/library/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_iter-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_iter-step.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = true;\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_library.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var META = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\")('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar setDesc = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function (it) {\n  setDesc(it, META, { value: {\n    i: 'O' + ++id, // object ID\n    w: {}          // weak collections IDs\n  } });\n};\nvar fastKey = function (it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n  // return object ID\n  } return it[META].i;\n};\nvar getWeak = function (it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n  // return hash weak collections IDs\n  } return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_meta.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/library/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./node_modules/core-js/library/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_object-dps.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) { /* empty */ }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_object-gopd.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/library/modules/_object-gopn.js\").f;\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_object-gopn-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/library/modules/_object-keys-internal.js\");\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\").concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_object-gopn.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_object-gops.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_object-gpo.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/library/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/library/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_object-pie.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar check = function (O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + \": can't set as prototype!\");\n};\nmodule.exports = {\n  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line\n    function (test, buggy, set) {\n      try {\n        set = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\")(Function.call, __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/library/modules/_object-gopd.js\").f(Object.prototype, '__proto__').set, 2);\n        set(test, []);\n        buggy = !(test instanceof Array);\n      } catch (e) { buggy = true; }\n      return function setPrototypeOf(O, proto) {\n        check(O, proto);\n        if (buggy) O.__proto__ = proto;\n        else set(O, proto);\n        return O;\n      };\n    }({}, false) : undefined),\n  check: check\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_set-proto.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var def = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_shared.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_string-at.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/library/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_to-iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_uid.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\");\nvar defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_wks-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.f = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\");\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_wks-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nvar Symbol = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/_wks.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/library/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/core.get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar get = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/library/modules/core.get-iterator-method.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\").getIterator = function (it) {\n  var iterFn = get(it);\n  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');\n  return anObject(iterFn.call(it));\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/core.get-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/library/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/library/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/es6.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\n$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\") });\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/es6.object.create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f });\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/es6.object.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.19 Object.setPrototypeOf(O, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/library/modules/_set-proto.js\").set });\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/es6.object.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/es6.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/library/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/es6.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// ECMAScript 6 symbols shim\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/library/modules/_redefine.js\");\nvar META = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/library/modules/_meta.js\").KEY;\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\");\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\");\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ \"./node_modules/core-js/library/modules/_enum-keys.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/library/modules/_is-array.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar _create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\");\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/library/modules/_object-gopn-ext.js\");\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/library/modules/_object-gopd.js\");\nvar $GOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\");\nvar $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = 'prototype';\nvar HIDDEN = wks('_hidden');\nvar TO_PRIMITIVE = wks('toPrimitive');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared('symbol-registry');\nvar AllSymbols = shared('symbols');\nvar OPSymbols = shared('op-symbols');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, 'a', {\n    get: function () { return dP(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function (tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    } return setSymbolDesc(it, key, D);\n  } return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) $defineProperty(it, key = keys[i++], P[key]);\n  return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  } return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  } return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function (value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/library/modules/_object-gopn.js\").f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\").f = $propertyIsEnumerable;\n  $GOPS.f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\")) {\n    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols = (\n  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'\n).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);\n\nfor (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);\n\n$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\n  // 19.4.2.1 Symbol.for(key)\n  'for': function (key) {\n    return has(SymbolRegistry, key += '')\n      ? SymbolRegistry[key]\n      : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');\n    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;\n  },\n  useSetter: function () { setter = true; },\n  useSimple: function () { setter = false; }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, 'Object', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives\n// https://bugs.chromium.org/p/v8/issues/detail?id=3443\nvar FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });\n\n$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {\n  getOwnPropertySymbols: function getOwnPropertySymbols(it) {\n    return $GOPS.f(toObject(it));\n  }\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';\n})), 'JSON', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) args.push(arguments[i++]);\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function (key, value) {\n      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, 'Symbol');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, 'Math', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/es6.symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\")('asyncIterator');\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/es7.symbol.async-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\")('observable');\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/es7.symbol.observable.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/library/modules/es6.array.iterator.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar TO_STRING_TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nvar DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +\n  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +\n  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +\n  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +\n  'TextTrackList,TouchList').split(',');\n\nfor (var i = 0; i < DOMIterables.length; i++) {\n  var NAME = DOMIterables[i];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n  Iterators[NAME] = Iterators.Array;\n}\n\n\n//# sourceURL=webpack://Marquee/./node_modules/core-js/library/modules/web.dom.iterable.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/dist/cjs.js?includePaths[]=/Users/janstabenow/Documents/Github/clappr-marquee/node_modules/compass-mixins/lib&includePaths[]=/Users/janstabenow/Documents/Github/clappr-marquee/node_modules/clappr/src/base/scss&includePaths[]=/Users/janstabenow/Documents/Github/clappr-marquee/src/base/scss!./src/public/style.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/sass-loader/dist/cjs.js?includePaths[]=/Users/janstabenow/Documents/Github/clappr-marquee/node_modules/compass-mixins/lib&includePaths[]=/Users/janstabenow/Documents/Github/clappr-marquee/node_modules/clappr/src/base/scss&includePaths[]=/Users/janstabenow/Documents/Github/clappr-marquee/src/base/scss!./src/public/style.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".marquee[data-marquee] {\\n  display: none;\\n  position: absolute;\\n  width: 100%;\\n  z-index: 9;\\n  left: 0;\\n  overflow: hidden;\\n  white-space: nowrap;\\n  background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 20%, rgba(0, 0, 0, 0) 100%);\\n  color: #fff;\\n  padding-top: 5px;\\n  margin-bottom: -60px;\\n  transition: bottom .4s ease-out; }\\n  .marquee[data-marquee] hr {\\n    margin-top: 25px;\\n    border-color: rgba(255, 255, 255, 0.5); }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack://Marquee/./src/public/style.scss?./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/sass-loader/dist/cjs.js?includePaths%5B%5D=/Users/janstabenow/Documents/Github/clappr-marquee/node_modules/compass-mixins/lib&includePaths%5B%5D=/Users/janstabenow/Documents/Github/clappr-marquee/node_modules/clappr/src/base/scss&includePaths%5B%5D=/Users/janstabenow/Documents/Github/clappr-marquee/src/base/scss");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack://Marquee/./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack://Marquee/./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack://Marquee/./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./node_modules/tlds/index.json":
/*!**************************************!*\
  !*** ./node_modules/tlds/index.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1329, 1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341, 1342, 1343, 1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480, 1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[\\\"aaa\\\",\\\"aarp\\\",\\\"abarth\\\",\\\"abb\\\",\\\"abbott\\\",\\\"abbvie\\\",\\\"abc\\\",\\\"able\\\",\\\"abogado\\\",\\\"abudhabi\\\",\\\"ac\\\",\\\"academy\\\",\\\"accenture\\\",\\\"accountant\\\",\\\"accountants\\\",\\\"aco\\\",\\\"actor\\\",\\\"ad\\\",\\\"adac\\\",\\\"ads\\\",\\\"adult\\\",\\\"ae\\\",\\\"aeg\\\",\\\"aero\\\",\\\"aetna\\\",\\\"af\\\",\\\"afamilycompany\\\",\\\"afl\\\",\\\"africa\\\",\\\"ag\\\",\\\"agakhan\\\",\\\"agency\\\",\\\"ai\\\",\\\"aig\\\",\\\"airbus\\\",\\\"airforce\\\",\\\"airtel\\\",\\\"akdn\\\",\\\"al\\\",\\\"alfaromeo\\\",\\\"alibaba\\\",\\\"alipay\\\",\\\"allfinanz\\\",\\\"allstate\\\",\\\"ally\\\",\\\"alsace\\\",\\\"alstom\\\",\\\"am\\\",\\\"amazon\\\",\\\"americanexpress\\\",\\\"americanfamily\\\",\\\"amex\\\",\\\"amfam\\\",\\\"amica\\\",\\\"amsterdam\\\",\\\"analytics\\\",\\\"android\\\",\\\"anquan\\\",\\\"anz\\\",\\\"ao\\\",\\\"aol\\\",\\\"apartments\\\",\\\"app\\\",\\\"apple\\\",\\\"aq\\\",\\\"aquarelle\\\",\\\"ar\\\",\\\"arab\\\",\\\"aramco\\\",\\\"archi\\\",\\\"army\\\",\\\"arpa\\\",\\\"art\\\",\\\"arte\\\",\\\"as\\\",\\\"asda\\\",\\\"asia\\\",\\\"associates\\\",\\\"at\\\",\\\"athleta\\\",\\\"attorney\\\",\\\"au\\\",\\\"auction\\\",\\\"audi\\\",\\\"audible\\\",\\\"audio\\\",\\\"auspost\\\",\\\"author\\\",\\\"auto\\\",\\\"autos\\\",\\\"avianca\\\",\\\"aw\\\",\\\"aws\\\",\\\"ax\\\",\\\"axa\\\",\\\"az\\\",\\\"azure\\\",\\\"ba\\\",\\\"baby\\\",\\\"baidu\\\",\\\"banamex\\\",\\\"bananarepublic\\\",\\\"band\\\",\\\"bank\\\",\\\"bar\\\",\\\"barcelona\\\",\\\"barclaycard\\\",\\\"barclays\\\",\\\"barefoot\\\",\\\"bargains\\\",\\\"baseball\\\",\\\"basketball\\\",\\\"bauhaus\\\",\\\"bayern\\\",\\\"bb\\\",\\\"bbc\\\",\\\"bbt\\\",\\\"bbva\\\",\\\"bcg\\\",\\\"bcn\\\",\\\"bd\\\",\\\"be\\\",\\\"beats\\\",\\\"beauty\\\",\\\"beer\\\",\\\"bentley\\\",\\\"berlin\\\",\\\"best\\\",\\\"bestbuy\\\",\\\"bet\\\",\\\"bf\\\",\\\"bg\\\",\\\"bh\\\",\\\"bharti\\\",\\\"bi\\\",\\\"bible\\\",\\\"bid\\\",\\\"bike\\\",\\\"bing\\\",\\\"bingo\\\",\\\"bio\\\",\\\"biz\\\",\\\"bj\\\",\\\"black\\\",\\\"blackfriday\\\",\\\"blockbuster\\\",\\\"blog\\\",\\\"bloomberg\\\",\\\"blue\\\",\\\"bm\\\",\\\"bms\\\",\\\"bmw\\\",\\\"bn\\\",\\\"bnpparibas\\\",\\\"bo\\\",\\\"boats\\\",\\\"boehringer\\\",\\\"bofa\\\",\\\"bom\\\",\\\"bond\\\",\\\"boo\\\",\\\"book\\\",\\\"booking\\\",\\\"bosch\\\",\\\"bostik\\\",\\\"boston\\\",\\\"bot\\\",\\\"boutique\\\",\\\"box\\\",\\\"br\\\",\\\"bradesco\\\",\\\"bridgestone\\\",\\\"broadway\\\",\\\"broker\\\",\\\"brother\\\",\\\"brussels\\\",\\\"bs\\\",\\\"bt\\\",\\\"budapest\\\",\\\"bugatti\\\",\\\"build\\\",\\\"builders\\\",\\\"business\\\",\\\"buy\\\",\\\"buzz\\\",\\\"bv\\\",\\\"bw\\\",\\\"by\\\",\\\"bz\\\",\\\"bzh\\\",\\\"ca\\\",\\\"cab\\\",\\\"cafe\\\",\\\"cal\\\",\\\"call\\\",\\\"calvinklein\\\",\\\"cam\\\",\\\"camera\\\",\\\"camp\\\",\\\"cancerresearch\\\",\\\"canon\\\",\\\"capetown\\\",\\\"capital\\\",\\\"capitalone\\\",\\\"car\\\",\\\"caravan\\\",\\\"cards\\\",\\\"care\\\",\\\"career\\\",\\\"careers\\\",\\\"cars\\\",\\\"casa\\\",\\\"case\\\",\\\"caseih\\\",\\\"cash\\\",\\\"casino\\\",\\\"cat\\\",\\\"catering\\\",\\\"catholic\\\",\\\"cba\\\",\\\"cbn\\\",\\\"cbre\\\",\\\"cbs\\\",\\\"cc\\\",\\\"cd\\\",\\\"ceb\\\",\\\"center\\\",\\\"ceo\\\",\\\"cern\\\",\\\"cf\\\",\\\"cfa\\\",\\\"cfd\\\",\\\"cg\\\",\\\"ch\\\",\\\"chanel\\\",\\\"channel\\\",\\\"charity\\\",\\\"chase\\\",\\\"chat\\\",\\\"cheap\\\",\\\"chintai\\\",\\\"christmas\\\",\\\"chrome\\\",\\\"church\\\",\\\"ci\\\",\\\"cipriani\\\",\\\"circle\\\",\\\"cisco\\\",\\\"citadel\\\",\\\"citi\\\",\\\"citic\\\",\\\"city\\\",\\\"cityeats\\\",\\\"ck\\\",\\\"cl\\\",\\\"claims\\\",\\\"cleaning\\\",\\\"click\\\",\\\"clinic\\\",\\\"clinique\\\",\\\"clothing\\\",\\\"cloud\\\",\\\"club\\\",\\\"clubmed\\\",\\\"cm\\\",\\\"cn\\\",\\\"co\\\",\\\"coach\\\",\\\"codes\\\",\\\"coffee\\\",\\\"college\\\",\\\"cologne\\\",\\\"com\\\",\\\"comcast\\\",\\\"commbank\\\",\\\"community\\\",\\\"company\\\",\\\"compare\\\",\\\"computer\\\",\\\"comsec\\\",\\\"condos\\\",\\\"construction\\\",\\\"consulting\\\",\\\"contact\\\",\\\"contractors\\\",\\\"cooking\\\",\\\"cookingchannel\\\",\\\"cool\\\",\\\"coop\\\",\\\"corsica\\\",\\\"country\\\",\\\"coupon\\\",\\\"coupons\\\",\\\"courses\\\",\\\"cpa\\\",\\\"cr\\\",\\\"credit\\\",\\\"creditcard\\\",\\\"creditunion\\\",\\\"cricket\\\",\\\"crown\\\",\\\"crs\\\",\\\"cruise\\\",\\\"cruises\\\",\\\"csc\\\",\\\"cu\\\",\\\"cuisinella\\\",\\\"cv\\\",\\\"cw\\\",\\\"cx\\\",\\\"cy\\\",\\\"cymru\\\",\\\"cyou\\\",\\\"cz\\\",\\\"dabur\\\",\\\"dad\\\",\\\"dance\\\",\\\"data\\\",\\\"date\\\",\\\"dating\\\",\\\"datsun\\\",\\\"day\\\",\\\"dclk\\\",\\\"dds\\\",\\\"de\\\",\\\"deal\\\",\\\"dealer\\\",\\\"deals\\\",\\\"degree\\\",\\\"delivery\\\",\\\"dell\\\",\\\"deloitte\\\",\\\"delta\\\",\\\"democrat\\\",\\\"dental\\\",\\\"dentist\\\",\\\"desi\\\",\\\"design\\\",\\\"dev\\\",\\\"dhl\\\",\\\"diamonds\\\",\\\"diet\\\",\\\"digital\\\",\\\"direct\\\",\\\"directory\\\",\\\"discount\\\",\\\"discover\\\",\\\"dish\\\",\\\"diy\\\",\\\"dj\\\",\\\"dk\\\",\\\"dm\\\",\\\"dnp\\\",\\\"do\\\",\\\"docs\\\",\\\"doctor\\\",\\\"dog\\\",\\\"domains\\\",\\\"dot\\\",\\\"download\\\",\\\"drive\\\",\\\"dtv\\\",\\\"dubai\\\",\\\"duck\\\",\\\"dunlop\\\",\\\"dupont\\\",\\\"durban\\\",\\\"dvag\\\",\\\"dvr\\\",\\\"dz\\\",\\\"earth\\\",\\\"eat\\\",\\\"ec\\\",\\\"eco\\\",\\\"edeka\\\",\\\"edu\\\",\\\"education\\\",\\\"ee\\\",\\\"eg\\\",\\\"email\\\",\\\"emerck\\\",\\\"energy\\\",\\\"engineer\\\",\\\"engineering\\\",\\\"enterprises\\\",\\\"epson\\\",\\\"equipment\\\",\\\"er\\\",\\\"ericsson\\\",\\\"erni\\\",\\\"es\\\",\\\"esq\\\",\\\"estate\\\",\\\"et\\\",\\\"etisalat\\\",\\\"eu\\\",\\\"eurovision\\\",\\\"eus\\\",\\\"events\\\",\\\"exchange\\\",\\\"expert\\\",\\\"exposed\\\",\\\"express\\\",\\\"extraspace\\\",\\\"fage\\\",\\\"fail\\\",\\\"fairwinds\\\",\\\"faith\\\",\\\"family\\\",\\\"fan\\\",\\\"fans\\\",\\\"farm\\\",\\\"farmers\\\",\\\"fashion\\\",\\\"fast\\\",\\\"fedex\\\",\\\"feedback\\\",\\\"ferrari\\\",\\\"ferrero\\\",\\\"fi\\\",\\\"fiat\\\",\\\"fidelity\\\",\\\"fido\\\",\\\"film\\\",\\\"final\\\",\\\"finance\\\",\\\"financial\\\",\\\"fire\\\",\\\"firestone\\\",\\\"firmdale\\\",\\\"fish\\\",\\\"fishing\\\",\\\"fit\\\",\\\"fitness\\\",\\\"fj\\\",\\\"fk\\\",\\\"flickr\\\",\\\"flights\\\",\\\"flir\\\",\\\"florist\\\",\\\"flowers\\\",\\\"fly\\\",\\\"fm\\\",\\\"fo\\\",\\\"foo\\\",\\\"food\\\",\\\"foodnetwork\\\",\\\"football\\\",\\\"ford\\\",\\\"forex\\\",\\\"forsale\\\",\\\"forum\\\",\\\"foundation\\\",\\\"fox\\\",\\\"fr\\\",\\\"free\\\",\\\"fresenius\\\",\\\"frl\\\",\\\"frogans\\\",\\\"frontdoor\\\",\\\"frontier\\\",\\\"ftr\\\",\\\"fujitsu\\\",\\\"fujixerox\\\",\\\"fun\\\",\\\"fund\\\",\\\"furniture\\\",\\\"futbol\\\",\\\"fyi\\\",\\\"ga\\\",\\\"gal\\\",\\\"gallery\\\",\\\"gallo\\\",\\\"gallup\\\",\\\"game\\\",\\\"games\\\",\\\"gap\\\",\\\"garden\\\",\\\"gay\\\",\\\"gb\\\",\\\"gbiz\\\",\\\"gd\\\",\\\"gdn\\\",\\\"ge\\\",\\\"gea\\\",\\\"gent\\\",\\\"genting\\\",\\\"george\\\",\\\"gf\\\",\\\"gg\\\",\\\"ggee\\\",\\\"gh\\\",\\\"gi\\\",\\\"gift\\\",\\\"gifts\\\",\\\"gives\\\",\\\"giving\\\",\\\"gl\\\",\\\"glade\\\",\\\"glass\\\",\\\"gle\\\",\\\"global\\\",\\\"globo\\\",\\\"gm\\\",\\\"gmail\\\",\\\"gmbh\\\",\\\"gmo\\\",\\\"gmx\\\",\\\"gn\\\",\\\"godaddy\\\",\\\"gold\\\",\\\"goldpoint\\\",\\\"golf\\\",\\\"goo\\\",\\\"goodyear\\\",\\\"goog\\\",\\\"google\\\",\\\"gop\\\",\\\"got\\\",\\\"gov\\\",\\\"gp\\\",\\\"gq\\\",\\\"gr\\\",\\\"grainger\\\",\\\"graphics\\\",\\\"gratis\\\",\\\"green\\\",\\\"gripe\\\",\\\"grocery\\\",\\\"group\\\",\\\"gs\\\",\\\"gt\\\",\\\"gu\\\",\\\"guardian\\\",\\\"gucci\\\",\\\"guge\\\",\\\"guide\\\",\\\"guitars\\\",\\\"guru\\\",\\\"gw\\\",\\\"gy\\\",\\\"hair\\\",\\\"hamburg\\\",\\\"hangout\\\",\\\"haus\\\",\\\"hbo\\\",\\\"hdfc\\\",\\\"hdfcbank\\\",\\\"health\\\",\\\"healthcare\\\",\\\"help\\\",\\\"helsinki\\\",\\\"here\\\",\\\"hermes\\\",\\\"hgtv\\\",\\\"hiphop\\\",\\\"hisamitsu\\\",\\\"hitachi\\\",\\\"hiv\\\",\\\"hk\\\",\\\"hkt\\\",\\\"hm\\\",\\\"hn\\\",\\\"hockey\\\",\\\"holdings\\\",\\\"holiday\\\",\\\"homedepot\\\",\\\"homegoods\\\",\\\"homes\\\",\\\"homesense\\\",\\\"honda\\\",\\\"horse\\\",\\\"hospital\\\",\\\"host\\\",\\\"hosting\\\",\\\"hot\\\",\\\"hoteles\\\",\\\"hotels\\\",\\\"hotmail\\\",\\\"house\\\",\\\"how\\\",\\\"hr\\\",\\\"hsbc\\\",\\\"ht\\\",\\\"hu\\\",\\\"hughes\\\",\\\"hyatt\\\",\\\"hyundai\\\",\\\"ibm\\\",\\\"icbc\\\",\\\"ice\\\",\\\"icu\\\",\\\"id\\\",\\\"ie\\\",\\\"ieee\\\",\\\"ifm\\\",\\\"ikano\\\",\\\"il\\\",\\\"im\\\",\\\"imamat\\\",\\\"imdb\\\",\\\"immo\\\",\\\"immobilien\\\",\\\"in\\\",\\\"inc\\\",\\\"industries\\\",\\\"infiniti\\\",\\\"info\\\",\\\"ing\\\",\\\"ink\\\",\\\"institute\\\",\\\"insurance\\\",\\\"insure\\\",\\\"int\\\",\\\"international\\\",\\\"intuit\\\",\\\"investments\\\",\\\"io\\\",\\\"ipiranga\\\",\\\"iq\\\",\\\"ir\\\",\\\"irish\\\",\\\"is\\\",\\\"ismaili\\\",\\\"ist\\\",\\\"istanbul\\\",\\\"it\\\",\\\"itau\\\",\\\"itv\\\",\\\"iveco\\\",\\\"jaguar\\\",\\\"java\\\",\\\"jcb\\\",\\\"jcp\\\",\\\"je\\\",\\\"jeep\\\",\\\"jetzt\\\",\\\"jewelry\\\",\\\"jio\\\",\\\"jll\\\",\\\"jm\\\",\\\"jmp\\\",\\\"jnj\\\",\\\"jo\\\",\\\"jobs\\\",\\\"joburg\\\",\\\"jot\\\",\\\"joy\\\",\\\"jp\\\",\\\"jpmorgan\\\",\\\"jprs\\\",\\\"juegos\\\",\\\"juniper\\\",\\\"kaufen\\\",\\\"kddi\\\",\\\"ke\\\",\\\"kerryhotels\\\",\\\"kerrylogistics\\\",\\\"kerryproperties\\\",\\\"kfh\\\",\\\"kg\\\",\\\"kh\\\",\\\"ki\\\",\\\"kia\\\",\\\"kim\\\",\\\"kinder\\\",\\\"kindle\\\",\\\"kitchen\\\",\\\"kiwi\\\",\\\"km\\\",\\\"kn\\\",\\\"koeln\\\",\\\"komatsu\\\",\\\"kosher\\\",\\\"kp\\\",\\\"kpmg\\\",\\\"kpn\\\",\\\"kr\\\",\\\"krd\\\",\\\"kred\\\",\\\"kuokgroup\\\",\\\"kw\\\",\\\"ky\\\",\\\"kyoto\\\",\\\"kz\\\",\\\"la\\\",\\\"lacaixa\\\",\\\"lamborghini\\\",\\\"lamer\\\",\\\"lancaster\\\",\\\"lancia\\\",\\\"land\\\",\\\"landrover\\\",\\\"lanxess\\\",\\\"lasalle\\\",\\\"lat\\\",\\\"latino\\\",\\\"latrobe\\\",\\\"law\\\",\\\"lawyer\\\",\\\"lb\\\",\\\"lc\\\",\\\"lds\\\",\\\"lease\\\",\\\"leclerc\\\",\\\"lefrak\\\",\\\"legal\\\",\\\"lego\\\",\\\"lexus\\\",\\\"lgbt\\\",\\\"li\\\",\\\"lidl\\\",\\\"life\\\",\\\"lifeinsurance\\\",\\\"lifestyle\\\",\\\"lighting\\\",\\\"like\\\",\\\"lilly\\\",\\\"limited\\\",\\\"limo\\\",\\\"lincoln\\\",\\\"linde\\\",\\\"link\\\",\\\"lipsy\\\",\\\"live\\\",\\\"living\\\",\\\"lixil\\\",\\\"lk\\\",\\\"llc\\\",\\\"llp\\\",\\\"loan\\\",\\\"loans\\\",\\\"locker\\\",\\\"locus\\\",\\\"loft\\\",\\\"lol\\\",\\\"london\\\",\\\"lotte\\\",\\\"lotto\\\",\\\"love\\\",\\\"lpl\\\",\\\"lplfinancial\\\",\\\"lr\\\",\\\"ls\\\",\\\"lt\\\",\\\"ltd\\\",\\\"ltda\\\",\\\"lu\\\",\\\"lundbeck\\\",\\\"lupin\\\",\\\"luxe\\\",\\\"luxury\\\",\\\"lv\\\",\\\"ly\\\",\\\"ma\\\",\\\"macys\\\",\\\"madrid\\\",\\\"maif\\\",\\\"maison\\\",\\\"makeup\\\",\\\"man\\\",\\\"management\\\",\\\"mango\\\",\\\"map\\\",\\\"market\\\",\\\"marketing\\\",\\\"markets\\\",\\\"marriott\\\",\\\"marshalls\\\",\\\"maserati\\\",\\\"mattel\\\",\\\"mba\\\",\\\"mc\\\",\\\"mckinsey\\\",\\\"md\\\",\\\"me\\\",\\\"med\\\",\\\"media\\\",\\\"meet\\\",\\\"melbourne\\\",\\\"meme\\\",\\\"memorial\\\",\\\"men\\\",\\\"menu\\\",\\\"merckmsd\\\",\\\"mg\\\",\\\"mh\\\",\\\"miami\\\",\\\"microsoft\\\",\\\"mil\\\",\\\"mini\\\",\\\"mint\\\",\\\"mit\\\",\\\"mitsubishi\\\",\\\"mk\\\",\\\"ml\\\",\\\"mlb\\\",\\\"mls\\\",\\\"mm\\\",\\\"mma\\\",\\\"mn\\\",\\\"mo\\\",\\\"mobi\\\",\\\"mobile\\\",\\\"moda\\\",\\\"moe\\\",\\\"moi\\\",\\\"mom\\\",\\\"monash\\\",\\\"money\\\",\\\"monster\\\",\\\"mormon\\\",\\\"mortgage\\\",\\\"moscow\\\",\\\"moto\\\",\\\"motorcycles\\\",\\\"mov\\\",\\\"movie\\\",\\\"mp\\\",\\\"mq\\\",\\\"mr\\\",\\\"ms\\\",\\\"msd\\\",\\\"mt\\\",\\\"mtn\\\",\\\"mtr\\\",\\\"mu\\\",\\\"museum\\\",\\\"mutual\\\",\\\"mv\\\",\\\"mw\\\",\\\"mx\\\",\\\"my\\\",\\\"mz\\\",\\\"na\\\",\\\"nab\\\",\\\"nagoya\\\",\\\"name\\\",\\\"nationwide\\\",\\\"natura\\\",\\\"navy\\\",\\\"nba\\\",\\\"nc\\\",\\\"ne\\\",\\\"nec\\\",\\\"net\\\",\\\"netbank\\\",\\\"netflix\\\",\\\"network\\\",\\\"neustar\\\",\\\"new\\\",\\\"newholland\\\",\\\"news\\\",\\\"next\\\",\\\"nextdirect\\\",\\\"nexus\\\",\\\"nf\\\",\\\"nfl\\\",\\\"ng\\\",\\\"ngo\\\",\\\"nhk\\\",\\\"ni\\\",\\\"nico\\\",\\\"nike\\\",\\\"nikon\\\",\\\"ninja\\\",\\\"nissan\\\",\\\"nissay\\\",\\\"nl\\\",\\\"no\\\",\\\"nokia\\\",\\\"northwesternmutual\\\",\\\"norton\\\",\\\"now\\\",\\\"nowruz\\\",\\\"nowtv\\\",\\\"np\\\",\\\"nr\\\",\\\"nra\\\",\\\"nrw\\\",\\\"ntt\\\",\\\"nu\\\",\\\"nyc\\\",\\\"nz\\\",\\\"obi\\\",\\\"observer\\\",\\\"off\\\",\\\"office\\\",\\\"okinawa\\\",\\\"olayan\\\",\\\"olayangroup\\\",\\\"oldnavy\\\",\\\"ollo\\\",\\\"om\\\",\\\"omega\\\",\\\"one\\\",\\\"ong\\\",\\\"onl\\\",\\\"online\\\",\\\"onyourside\\\",\\\"ooo\\\",\\\"open\\\",\\\"oracle\\\",\\\"orange\\\",\\\"org\\\",\\\"organic\\\",\\\"origins\\\",\\\"osaka\\\",\\\"otsuka\\\",\\\"ott\\\",\\\"ovh\\\",\\\"pa\\\",\\\"page\\\",\\\"panasonic\\\",\\\"paris\\\",\\\"pars\\\",\\\"partners\\\",\\\"parts\\\",\\\"party\\\",\\\"passagens\\\",\\\"pay\\\",\\\"pccw\\\",\\\"pe\\\",\\\"pet\\\",\\\"pf\\\",\\\"pfizer\\\",\\\"pg\\\",\\\"ph\\\",\\\"pharmacy\\\",\\\"phd\\\",\\\"philips\\\",\\\"phone\\\",\\\"photo\\\",\\\"photography\\\",\\\"photos\\\",\\\"physio\\\",\\\"pics\\\",\\\"pictet\\\",\\\"pictures\\\",\\\"pid\\\",\\\"pin\\\",\\\"ping\\\",\\\"pink\\\",\\\"pioneer\\\",\\\"pizza\\\",\\\"pk\\\",\\\"pl\\\",\\\"place\\\",\\\"play\\\",\\\"playstation\\\",\\\"plumbing\\\",\\\"plus\\\",\\\"pm\\\",\\\"pn\\\",\\\"pnc\\\",\\\"pohl\\\",\\\"poker\\\",\\\"politie\\\",\\\"porn\\\",\\\"post\\\",\\\"pr\\\",\\\"pramerica\\\",\\\"praxi\\\",\\\"press\\\",\\\"prime\\\",\\\"pro\\\",\\\"prod\\\",\\\"productions\\\",\\\"prof\\\",\\\"progressive\\\",\\\"promo\\\",\\\"properties\\\",\\\"property\\\",\\\"protection\\\",\\\"pru\\\",\\\"prudential\\\",\\\"ps\\\",\\\"pt\\\",\\\"pub\\\",\\\"pw\\\",\\\"pwc\\\",\\\"py\\\",\\\"qa\\\",\\\"qpon\\\",\\\"quebec\\\",\\\"quest\\\",\\\"qvc\\\",\\\"racing\\\",\\\"radio\\\",\\\"raid\\\",\\\"re\\\",\\\"read\\\",\\\"realestate\\\",\\\"realtor\\\",\\\"realty\\\",\\\"recipes\\\",\\\"red\\\",\\\"redstone\\\",\\\"redumbrella\\\",\\\"rehab\\\",\\\"reise\\\",\\\"reisen\\\",\\\"reit\\\",\\\"reliance\\\",\\\"ren\\\",\\\"rent\\\",\\\"rentals\\\",\\\"repair\\\",\\\"report\\\",\\\"republican\\\",\\\"rest\\\",\\\"restaurant\\\",\\\"review\\\",\\\"reviews\\\",\\\"rexroth\\\",\\\"rich\\\",\\\"richardli\\\",\\\"ricoh\\\",\\\"ril\\\",\\\"rio\\\",\\\"rip\\\",\\\"rmit\\\",\\\"ro\\\",\\\"rocher\\\",\\\"rocks\\\",\\\"rodeo\\\",\\\"rogers\\\",\\\"room\\\",\\\"rs\\\",\\\"rsvp\\\",\\\"ru\\\",\\\"rugby\\\",\\\"ruhr\\\",\\\"run\\\",\\\"rw\\\",\\\"rwe\\\",\\\"ryukyu\\\",\\\"sa\\\",\\\"saarland\\\",\\\"safe\\\",\\\"safety\\\",\\\"sakura\\\",\\\"sale\\\",\\\"salon\\\",\\\"samsclub\\\",\\\"samsung\\\",\\\"sandvik\\\",\\\"sandvikcoromant\\\",\\\"sanofi\\\",\\\"sap\\\",\\\"sarl\\\",\\\"sas\\\",\\\"save\\\",\\\"saxo\\\",\\\"sb\\\",\\\"sbi\\\",\\\"sbs\\\",\\\"sc\\\",\\\"sca\\\",\\\"scb\\\",\\\"schaeffler\\\",\\\"schmidt\\\",\\\"scholarships\\\",\\\"school\\\",\\\"schule\\\",\\\"schwarz\\\",\\\"science\\\",\\\"scjohnson\\\",\\\"scot\\\",\\\"sd\\\",\\\"se\\\",\\\"search\\\",\\\"seat\\\",\\\"secure\\\",\\\"security\\\",\\\"seek\\\",\\\"select\\\",\\\"sener\\\",\\\"services\\\",\\\"ses\\\",\\\"seven\\\",\\\"sew\\\",\\\"sex\\\",\\\"sexy\\\",\\\"sfr\\\",\\\"sg\\\",\\\"sh\\\",\\\"shangrila\\\",\\\"sharp\\\",\\\"shaw\\\",\\\"shell\\\",\\\"shia\\\",\\\"shiksha\\\",\\\"shoes\\\",\\\"shop\\\",\\\"shopping\\\",\\\"shouji\\\",\\\"show\\\",\\\"showtime\\\",\\\"shriram\\\",\\\"si\\\",\\\"silk\\\",\\\"sina\\\",\\\"singles\\\",\\\"site\\\",\\\"sj\\\",\\\"sk\\\",\\\"ski\\\",\\\"skin\\\",\\\"sky\\\",\\\"skype\\\",\\\"sl\\\",\\\"sling\\\",\\\"sm\\\",\\\"smart\\\",\\\"smile\\\",\\\"sn\\\",\\\"sncf\\\",\\\"so\\\",\\\"soccer\\\",\\\"social\\\",\\\"softbank\\\",\\\"software\\\",\\\"sohu\\\",\\\"solar\\\",\\\"solutions\\\",\\\"song\\\",\\\"sony\\\",\\\"soy\\\",\\\"spa\\\",\\\"space\\\",\\\"sport\\\",\\\"spot\\\",\\\"spreadbetting\\\",\\\"sr\\\",\\\"srl\\\",\\\"ss\\\",\\\"st\\\",\\\"stada\\\",\\\"staples\\\",\\\"star\\\",\\\"statebank\\\",\\\"statefarm\\\",\\\"stc\\\",\\\"stcgroup\\\",\\\"stockholm\\\",\\\"storage\\\",\\\"store\\\",\\\"stream\\\",\\\"studio\\\",\\\"study\\\",\\\"style\\\",\\\"su\\\",\\\"sucks\\\",\\\"supplies\\\",\\\"supply\\\",\\\"support\\\",\\\"surf\\\",\\\"surgery\\\",\\\"suzuki\\\",\\\"sv\\\",\\\"swatch\\\",\\\"swiftcover\\\",\\\"swiss\\\",\\\"sx\\\",\\\"sy\\\",\\\"sydney\\\",\\\"systems\\\",\\\"sz\\\",\\\"tab\\\",\\\"taipei\\\",\\\"talk\\\",\\\"taobao\\\",\\\"target\\\",\\\"tatamotors\\\",\\\"tatar\\\",\\\"tattoo\\\",\\\"tax\\\",\\\"taxi\\\",\\\"tc\\\",\\\"tci\\\",\\\"td\\\",\\\"tdk\\\",\\\"team\\\",\\\"tech\\\",\\\"technology\\\",\\\"tel\\\",\\\"temasek\\\",\\\"tennis\\\",\\\"teva\\\",\\\"tf\\\",\\\"tg\\\",\\\"th\\\",\\\"thd\\\",\\\"theater\\\",\\\"theatre\\\",\\\"tiaa\\\",\\\"tickets\\\",\\\"tienda\\\",\\\"tiffany\\\",\\\"tips\\\",\\\"tires\\\",\\\"tirol\\\",\\\"tj\\\",\\\"tjmaxx\\\",\\\"tjx\\\",\\\"tk\\\",\\\"tkmaxx\\\",\\\"tl\\\",\\\"tm\\\",\\\"tmall\\\",\\\"tn\\\",\\\"to\\\",\\\"today\\\",\\\"tokyo\\\",\\\"tools\\\",\\\"top\\\",\\\"toray\\\",\\\"toshiba\\\",\\\"total\\\",\\\"tours\\\",\\\"town\\\",\\\"toyota\\\",\\\"toys\\\",\\\"tr\\\",\\\"trade\\\",\\\"trading\\\",\\\"training\\\",\\\"travel\\\",\\\"travelchannel\\\",\\\"travelers\\\",\\\"travelersinsurance\\\",\\\"trust\\\",\\\"trv\\\",\\\"tt\\\",\\\"tube\\\",\\\"tui\\\",\\\"tunes\\\",\\\"tushu\\\",\\\"tv\\\",\\\"tvs\\\",\\\"tw\\\",\\\"tz\\\",\\\"ua\\\",\\\"ubank\\\",\\\"ubs\\\",\\\"ug\\\",\\\"uk\\\",\\\"unicom\\\",\\\"university\\\",\\\"uno\\\",\\\"uol\\\",\\\"ups\\\",\\\"us\\\",\\\"uy\\\",\\\"uz\\\",\\\"va\\\",\\\"vacations\\\",\\\"vana\\\",\\\"vanguard\\\",\\\"vc\\\",\\\"ve\\\",\\\"vegas\\\",\\\"ventures\\\",\\\"verisign\\\",\\\"versicherung\\\",\\\"vet\\\",\\\"vg\\\",\\\"vi\\\",\\\"viajes\\\",\\\"video\\\",\\\"vig\\\",\\\"viking\\\",\\\"villas\\\",\\\"vin\\\",\\\"vip\\\",\\\"virgin\\\",\\\"visa\\\",\\\"vision\\\",\\\"viva\\\",\\\"vivo\\\",\\\"vlaanderen\\\",\\\"vn\\\",\\\"vodka\\\",\\\"volkswagen\\\",\\\"volvo\\\",\\\"vote\\\",\\\"voting\\\",\\\"voto\\\",\\\"voyage\\\",\\\"vu\\\",\\\"vuelos\\\",\\\"wales\\\",\\\"walmart\\\",\\\"walter\\\",\\\"wang\\\",\\\"wanggou\\\",\\\"watch\\\",\\\"watches\\\",\\\"weather\\\",\\\"weatherchannel\\\",\\\"webcam\\\",\\\"weber\\\",\\\"website\\\",\\\"wed\\\",\\\"wedding\\\",\\\"weibo\\\",\\\"weir\\\",\\\"wf\\\",\\\"whoswho\\\",\\\"wien\\\",\\\"wiki\\\",\\\"williamhill\\\",\\\"win\\\",\\\"windows\\\",\\\"wine\\\",\\\"winners\\\",\\\"wme\\\",\\\"wolterskluwer\\\",\\\"woodside\\\",\\\"work\\\",\\\"works\\\",\\\"world\\\",\\\"wow\\\",\\\"ws\\\",\\\"wtc\\\",\\\"wtf\\\",\\\"xbox\\\",\\\"xerox\\\",\\\"xfinity\\\",\\\"xihuan\\\",\\\"xin\\\",\\\"कॉम\\\",\\\"セール\\\",\\\"佛山\\\",\\\"ಭಾರತ\\\",\\\"慈善\\\",\\\"集团\\\",\\\"在线\\\",\\\"한국\\\",\\\"ଭାରତ\\\",\\\"大众汽车\\\",\\\"点看\\\",\\\"คอม\\\",\\\"ভাৰত\\\",\\\"ভারত\\\",\\\"八卦\\\",\\\"موقع\\\",\\\"বাংলা\\\",\\\"公益\\\",\\\"公司\\\",\\\"香格里拉\\\",\\\"网站\\\",\\\"移动\\\",\\\"我爱你\\\",\\\"москва\\\",\\\"қаз\\\",\\\"католик\\\",\\\"онлайн\\\",\\\"сайт\\\",\\\"联通\\\",\\\"срб\\\",\\\"бг\\\",\\\"бел\\\",\\\"קום\\\",\\\"时尚\\\",\\\"微博\\\",\\\"淡马锡\\\",\\\"ファッション\\\",\\\"орг\\\",\\\"नेट\\\",\\\"ストア\\\",\\\"アマゾン\\\",\\\"삼성\\\",\\\"சிங்கப்பூர்\\\",\\\"商标\\\",\\\"商店\\\",\\\"商城\\\",\\\"дети\\\",\\\"мкд\\\",\\\"ею\\\",\\\"ポイント\\\",\\\"新闻\\\",\\\"家電\\\",\\\"كوم\\\",\\\"中文网\\\",\\\"中信\\\",\\\"中国\\\",\\\"中國\\\",\\\"娱乐\\\",\\\"谷歌\\\",\\\"భారత్\\\",\\\"ලංකා\\\",\\\"電訊盈科\\\",\\\"购物\\\",\\\"クラウド\\\",\\\"ભારત\\\",\\\"通販\\\",\\\"भारतम्\\\",\\\"भारत\\\",\\\"भारोत\\\",\\\"网店\\\",\\\"संगठन\\\",\\\"餐厅\\\",\\\"网络\\\",\\\"ком\\\",\\\"укр\\\",\\\"香港\\\",\\\"亚马逊\\\",\\\"诺基亚\\\",\\\"食品\\\",\\\"飞利浦\\\",\\\"台湾\\\",\\\"台灣\\\",\\\"手机\\\",\\\"мон\\\",\\\"الجزائر\\\",\\\"عمان\\\",\\\"ارامكو\\\",\\\"ایران\\\",\\\"العليان\\\",\\\"اتصالات\\\",\\\"امارات\\\",\\\"بازار\\\",\\\"موريتانيا\\\",\\\"پاکستان\\\",\\\"الاردن\\\",\\\"بارت\\\",\\\"بھارت\\\",\\\"المغرب\\\",\\\"ابوظبي\\\",\\\"البحرين\\\",\\\"السعودية\\\",\\\"ڀارت\\\",\\\"كاثوليك\\\",\\\"سودان\\\",\\\"همراه\\\",\\\"عراق\\\",\\\"مليسيا\\\",\\\"澳門\\\",\\\"닷컴\\\",\\\"政府\\\",\\\"شبكة\\\",\\\"بيتك\\\",\\\"عرب\\\",\\\"გე\\\",\\\"机构\\\",\\\"组织机构\\\",\\\"健康\\\",\\\"ไทย\\\",\\\"سورية\\\",\\\"招聘\\\",\\\"рус\\\",\\\"рф\\\",\\\"تونس\\\",\\\"大拿\\\",\\\"ລາວ\\\",\\\"みんな\\\",\\\"グーグル\\\",\\\"ευ\\\",\\\"ελ\\\",\\\"世界\\\",\\\"書籍\\\",\\\"ഭാരതം\\\",\\\"ਭਾਰਤ\\\",\\\"网址\\\",\\\"닷넷\\\",\\\"コム\\\",\\\"天主教\\\",\\\"游戏\\\",\\\"vermögensberater\\\",\\\"vermögensberatung\\\",\\\"企业\\\",\\\"信息\\\",\\\"嘉里大酒店\\\",\\\"嘉里\\\",\\\"مصر\\\",\\\"قطر\\\",\\\"广东\\\",\\\"இலங்கை\\\",\\\"இந்தியா\\\",\\\"հայ\\\",\\\"新加坡\\\",\\\"فلسطين\\\",\\\"政务\\\",\\\"xxx\\\",\\\"xyz\\\",\\\"yachts\\\",\\\"yahoo\\\",\\\"yamaxun\\\",\\\"yandex\\\",\\\"ye\\\",\\\"yodobashi\\\",\\\"yoga\\\",\\\"yokohama\\\",\\\"you\\\",\\\"youtube\\\",\\\"yt\\\",\\\"yun\\\",\\\"za\\\",\\\"zappos\\\",\\\"zara\\\",\\\"zero\\\",\\\"zip\\\",\\\"zm\\\",\\\"zone\\\",\\\"zuerich\\\",\\\"zw\\\"]\");\n\n//# sourceURL=webpack://Marquee/./node_modules/tlds/index.json?");

/***/ }),

/***/ "./node_modules/url-regex-safe/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/url-regex-safe/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar RE2 = __webpack_require__(/*! re2 */ 0);\n\nvar ipRegex = __webpack_require__(/*! ip-regex */ \"./node_modules/url-regex-safe/node_modules/ip-regex/index.js\");\n\nvar tlds = __webpack_require__(/*! tlds */ \"./node_modules/tlds/index.json\");\n/* istanbul ignore next */\n\n\nvar SafeRegExp = typeof RE2 === 'function' ? RE2 : RegExp;\nvar ipv4 = ipRegex.v4().source;\nvar ipv6 = ipRegex.v6().source;\n\nmodule.exports = function (options) {\n  options = _objectSpread({\n    exact: false,\n    strict: false,\n    auth: false,\n    localhost: true,\n    parens: false,\n    apostrophes: false,\n    trailingPeriod: false,\n    ipv4: true,\n    ipv6: true,\n    tlds: tlds,\n    returnString: false\n  }, options);\n  var protocol = \"(?:(?:[a-z]+:)?//)\".concat(options.strict ? '' : '?'); // Add option to disable matching urls with HTTP Basic Authentication\n  // <https://github.com/kevva/url-regex/pull/63>\n\n  var auth = options.auth ? '(?:\\\\S+(?::\\\\S*)?@)?' : '';\n  var host = \"(?:(?:[a-z\\\\u00a1-\\\\uffff0-9][-_]*)*[a-z\\\\u00a1-\\\\uffff0-9]+)\";\n  var domain = \"(?:\\\\.(?:[a-z\\\\u00a1-\\\\uffff0-9]-*)*[a-z\\\\u00a1-\\\\uffff0-9]+)*\"; // Add ability to pass custom list of tlds\n  // <https://github.com/kevva/url-regex/pull/66>\n\n  var tld = \"(?:\\\\.\".concat(options.strict ? \"(?:[a-z\\\\u00a1-\\\\uffff]{2,})\" : \"(?:\".concat(options.tlds.sort(function (a, b) {\n    return b.length - a.length;\n  }).join('|'), \")\"), \")\").concat(options.trailingPeriod ? '\\\\.?' : '');\n  var port = '(?::\\\\d{2,5})?'; // Not accept closing parenthesis\n  // <https://github.com/kevva/url-regex/pull/35>\n  // Don't allow apostrophes\n  // <https://github.com/kevva/url-regex/pull/55>\n\n  var path = options.parens ? options.apostrophes ? '(?:[/?#][^\\\\s\"]*)?' : '(?:[/?#][^\\\\s\"\\']*)?' : options.apostrophes ? '(?:[/?#][^\\\\s\"\\\\)]*)?' : '(?:[/?#][^\\\\s\"\\\\)\\']*)?'; // Added IPv6 support\n  // <https://github.com/kevva/url-regex/issues/60>\n\n  var regex = \"(?:\".concat(protocol, \"|www\\\\.)\").concat(auth, \"(?:\");\n  if (options.localhost) regex += 'localhost|';\n  if (options.ipv4) regex += \"\".concat(ipv4, \"|\");\n  if (options.ipv6) regex += \"\".concat(ipv6, \"|\");\n  regex += \"\".concat(host).concat(domain).concat(tld, \")\").concat(port).concat(path); // Add option to return the regex string instead of a RegExp\n\n  if (options.returnString) return regex;\n  return options.exact ? new SafeRegExp(\"(?:^\".concat(regex, \"$)\"), 'i') : new SafeRegExp(regex, 'ig');\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSRTIiLCJyZXF1aXJlIiwiaXBSZWdleCIsInRsZHMiLCJTYWZlUmVnRXhwIiwiUmVnRXhwIiwiaXB2NCIsInY0Iiwic291cmNlIiwiaXB2NiIsInY2IiwibW9kdWxlIiwiZXhwb3J0cyIsIm9wdGlvbnMiLCJleGFjdCIsInN0cmljdCIsImF1dGgiLCJsb2NhbGhvc3QiLCJwYXJlbnMiLCJhcG9zdHJvcGhlcyIsInRyYWlsaW5nUGVyaW9kIiwicmV0dXJuU3RyaW5nIiwicHJvdG9jb2wiLCJob3N0IiwiZG9tYWluIiwidGxkIiwic29ydCIsImEiLCJiIiwibGVuZ3RoIiwiam9pbiIsInBvcnQiLCJwYXRoIiwicmVnZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTUEsR0FBRyxHQUFHQyxPQUFPLENBQUMsS0FBRCxDQUFuQjs7QUFDQSxJQUFNQyxPQUFPLEdBQUdELE9BQU8sQ0FBQyxVQUFELENBQXZCOztBQUNBLElBQU1FLElBQUksR0FBR0YsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7QUFFQTs7O0FBQ0EsSUFBTUcsVUFBVSxHQUFHLE9BQU9KLEdBQVAsS0FBZSxVQUFmLEdBQTRCQSxHQUE1QixHQUFrQ0ssTUFBckQ7QUFDQSxJQUFNQyxJQUFJLEdBQUdKLE9BQU8sQ0FBQ0ssRUFBUixHQUFhQyxNQUExQjtBQUNBLElBQU1DLElBQUksR0FBR1AsT0FBTyxDQUFDUSxFQUFSLEdBQWFGLE1BQTFCOztBQUVBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBQ0MsT0FBRCxFQUFhO0FBQzVCQSxFQUFBQSxPQUFPO0FBQ0xDLElBQUFBLEtBQUssRUFBRSxLQURGO0FBRUxDLElBQUFBLE1BQU0sRUFBRSxLQUZIO0FBR0xDLElBQUFBLElBQUksRUFBRSxLQUhEO0FBSUxDLElBQUFBLFNBQVMsRUFBRSxJQUpOO0FBS0xDLElBQUFBLE1BQU0sRUFBRSxLQUxIO0FBTUxDLElBQUFBLFdBQVcsRUFBRSxLQU5SO0FBT0xDLElBQUFBLGNBQWMsRUFBRSxLQVBYO0FBUUxkLElBQUFBLElBQUksRUFBRSxJQVJEO0FBU0xHLElBQUFBLElBQUksRUFBRSxJQVREO0FBVUxOLElBQUFBLElBQUksRUFBSkEsSUFWSztBQVdMa0IsSUFBQUEsWUFBWSxFQUFFO0FBWFQsS0FZRlIsT0FaRSxDQUFQO0FBZUEsTUFBTVMsUUFBUSwrQkFBd0JULE9BQU8sQ0FBQ0UsTUFBUixHQUFpQixFQUFqQixHQUFzQixHQUE5QyxDQUFkLENBaEI0QixDQWlCNUI7QUFDQTs7QUFDQSxNQUFNQyxJQUFJLEdBQUdILE9BQU8sQ0FBQ0csSUFBUixHQUFlLHNCQUFmLEdBQXdDLEVBQXJEO0FBQ0EsTUFBTU8sSUFBSSxHQUFHLCtEQUFiO0FBQ0EsTUFBTUMsTUFBTSxHQUNWLGdFQURGLENBckI0QixDQXVCNUI7QUFDQTs7QUFDQSxNQUFNQyxHQUFHLG1CQUNQWixPQUFPLENBQUNFLE1BQVIsR0FDSSw4QkFESixnQkFFVUYsT0FBTyxDQUFDVixJQUFSLENBQWF1QixJQUFiLENBQWtCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVVBLENBQUMsQ0FBQ0MsTUFBRixHQUFXRixDQUFDLENBQUNFLE1BQXZCO0FBQUEsR0FBbEIsRUFBaURDLElBQWpELENBQXNELEdBQXRELENBRlYsTUFETyxjQUlMakIsT0FBTyxDQUFDTyxjQUFSLEdBQXlCLE1BQXpCLEdBQWtDLEVBSjdCLENBQVQ7QUFNQSxNQUFNVyxJQUFJLEdBQUcsZ0JBQWIsQ0EvQjRCLENBZ0M1QjtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQyxJQUFJLEdBQUduQixPQUFPLENBQUNLLE1BQVIsR0FDVEwsT0FBTyxDQUFDTSxXQUFSLEdBQ0Usb0JBREYsR0FFRSxzQkFITyxHQUlUTixPQUFPLENBQUNNLFdBQVIsR0FDQSx1QkFEQSxHQUVBLHlCQU5KLENBcEM0QixDQTRDNUI7QUFDQTs7QUFDQSxNQUFJYyxLQUFLLGdCQUFTWCxRQUFULHFCQUE0Qk4sSUFBNUIsUUFBVDtBQUNBLE1BQUlILE9BQU8sQ0FBQ0ksU0FBWixFQUF1QmdCLEtBQUssSUFBSSxZQUFUO0FBQ3ZCLE1BQUlwQixPQUFPLENBQUNQLElBQVosRUFBa0IyQixLQUFLLGNBQU8zQixJQUFQLE1BQUw7QUFDbEIsTUFBSU8sT0FBTyxDQUFDSixJQUFaLEVBQWtCd0IsS0FBSyxjQUFPeEIsSUFBUCxNQUFMO0FBQ2xCd0IsRUFBQUEsS0FBSyxjQUFPVixJQUFQLFNBQWNDLE1BQWQsU0FBdUJDLEdBQXZCLGNBQThCTSxJQUE5QixTQUFxQ0MsSUFBckMsQ0FBTCxDQWxENEIsQ0FvRDVCOztBQUNBLE1BQUluQixPQUFPLENBQUNRLFlBQVosRUFBMEIsT0FBT1ksS0FBUDtBQUUxQixTQUFPcEIsT0FBTyxDQUFDQyxLQUFSLEdBQ0gsSUFBSVYsVUFBSixlQUFzQjZCLEtBQXRCLFNBQWlDLEdBQWpDLENBREcsR0FFSCxJQUFJN0IsVUFBSixDQUFlNkIsS0FBZixFQUFzQixJQUF0QixDQUZKO0FBR0QsQ0ExREQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSRTIgPSByZXF1aXJlKCdyZTInKTtcbmNvbnN0IGlwUmVnZXggPSByZXF1aXJlKCdpcC1yZWdleCcpO1xuY29uc3QgdGxkcyA9IHJlcXVpcmUoJ3RsZHMnKTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IFNhZmVSZWdFeHAgPSB0eXBlb2YgUkUyID09PSAnZnVuY3Rpb24nID8gUkUyIDogUmVnRXhwO1xuY29uc3QgaXB2NCA9IGlwUmVnZXgudjQoKS5zb3VyY2U7XG5jb25zdCBpcHY2ID0gaXBSZWdleC52NigpLnNvdXJjZTtcblxubW9kdWxlLmV4cG9ydHMgPSAob3B0aW9ucykgPT4ge1xuICBvcHRpb25zID0ge1xuICAgIGV4YWN0OiBmYWxzZSxcbiAgICBzdHJpY3Q6IGZhbHNlLFxuICAgIGF1dGg6IGZhbHNlLFxuICAgIGxvY2FsaG9zdDogdHJ1ZSxcbiAgICBwYXJlbnM6IGZhbHNlLFxuICAgIGFwb3N0cm9waGVzOiBmYWxzZSxcbiAgICB0cmFpbGluZ1BlcmlvZDogZmFsc2UsXG4gICAgaXB2NDogdHJ1ZSxcbiAgICBpcHY2OiB0cnVlLFxuICAgIHRsZHMsXG4gICAgcmV0dXJuU3RyaW5nOiBmYWxzZSxcbiAgICAuLi5vcHRpb25zXG4gIH07XG5cbiAgY29uc3QgcHJvdG9jb2wgPSBgKD86KD86W2Etel0rOik/Ly8pJHtvcHRpb25zLnN0cmljdCA/ICcnIDogJz8nfWA7XG4gIC8vIEFkZCBvcHRpb24gdG8gZGlzYWJsZSBtYXRjaGluZyB1cmxzIHdpdGggSFRUUCBCYXNpYyBBdXRoZW50aWNhdGlvblxuICAvLyA8aHR0cHM6Ly9naXRodWIuY29tL2tldnZhL3VybC1yZWdleC9wdWxsLzYzPlxuICBjb25zdCBhdXRoID0gb3B0aW9ucy5hdXRoID8gJyg/OlxcXFxTKyg/OjpcXFxcUyopP0ApPycgOiAnJztcbiAgY29uc3QgaG9zdCA9ICcoPzooPzpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZjAtOV1bLV9dKikqW2EtelxcXFx1MDBhMS1cXFxcdWZmZmYwLTldKyknO1xuICBjb25zdCBkb21haW4gPVxuICAgICcoPzpcXFxcLig/OlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XS0qKSpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZjAtOV0rKSonO1xuICAvLyBBZGQgYWJpbGl0eSB0byBwYXNzIGN1c3RvbSBsaXN0IG9mIHRsZHNcbiAgLy8gPGh0dHBzOi8vZ2l0aHViLmNvbS9rZXZ2YS91cmwtcmVnZXgvcHVsbC82Nj5cbiAgY29uc3QgdGxkID0gYCg/OlxcXFwuJHtcbiAgICBvcHRpb25zLnN0cmljdFxuICAgICAgPyAnKD86W2EtelxcXFx1MDBhMS1cXFxcdWZmZmZdezIsfSknXG4gICAgICA6IGAoPzoke29wdGlvbnMudGxkcy5zb3J0KChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoKS5qb2luKCd8Jyl9KWBcbiAgfSkke29wdGlvbnMudHJhaWxpbmdQZXJpb2QgPyAnXFxcXC4/JyA6ICcnfWA7XG5cbiAgY29uc3QgcG9ydCA9ICcoPzo6XFxcXGR7Miw1fSk/JztcbiAgLy8gTm90IGFjY2VwdCBjbG9zaW5nIHBhcmVudGhlc2lzXG4gIC8vIDxodHRwczovL2dpdGh1Yi5jb20va2V2dmEvdXJsLXJlZ2V4L3B1bGwvMzU+XG4gIC8vIERvbid0IGFsbG93IGFwb3N0cm9waGVzXG4gIC8vIDxodHRwczovL2dpdGh1Yi5jb20va2V2dmEvdXJsLXJlZ2V4L3B1bGwvNTU+XG4gIGNvbnN0IHBhdGggPSBvcHRpb25zLnBhcmVuc1xuICAgID8gb3B0aW9ucy5hcG9zdHJvcGhlc1xuICAgICAgPyAnKD86Wy8/I11bXlxcXFxzXCJdKik/J1xuICAgICAgOiAnKD86Wy8/I11bXlxcXFxzXCJcXCddKik/J1xuICAgIDogb3B0aW9ucy5hcG9zdHJvcGhlc1xuICAgID8gJyg/OlsvPyNdW15cXFxcc1wiXFxcXCldKik/J1xuICAgIDogJyg/OlsvPyNdW15cXFxcc1wiXFxcXClcXCddKik/JztcblxuICAvLyBBZGRlZCBJUHY2IHN1cHBvcnRcbiAgLy8gPGh0dHBzOi8vZ2l0aHViLmNvbS9rZXZ2YS91cmwtcmVnZXgvaXNzdWVzLzYwPlxuICBsZXQgcmVnZXggPSBgKD86JHtwcm90b2NvbH18d3d3XFxcXC4pJHthdXRofSg/OmA7XG4gIGlmIChvcHRpb25zLmxvY2FsaG9zdCkgcmVnZXggKz0gJ2xvY2FsaG9zdHwnO1xuICBpZiAob3B0aW9ucy5pcHY0KSByZWdleCArPSBgJHtpcHY0fXxgO1xuICBpZiAob3B0aW9ucy5pcHY2KSByZWdleCArPSBgJHtpcHY2fXxgO1xuICByZWdleCArPSBgJHtob3N0fSR7ZG9tYWlufSR7dGxkfSkke3BvcnR9JHtwYXRofWA7XG5cbiAgLy8gQWRkIG9wdGlvbiB0byByZXR1cm4gdGhlIHJlZ2V4IHN0cmluZyBpbnN0ZWFkIG9mIGEgUmVnRXhwXG4gIGlmIChvcHRpb25zLnJldHVyblN0cmluZykgcmV0dXJuIHJlZ2V4O1xuXG4gIHJldHVybiBvcHRpb25zLmV4YWN0XG4gICAgPyBuZXcgU2FmZVJlZ0V4cChgKD86XiR7cmVnZXh9JClgLCAnaScpXG4gICAgOiBuZXcgU2FmZVJlZ0V4cChyZWdleCwgJ2lnJyk7XG59O1xuIl19\n\n//# sourceURL=webpack://Marquee/./node_modules/url-regex-safe/lib/index.js?");

/***/ }),

/***/ "./node_modules/url-regex-safe/node_modules/ip-regex/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/url-regex-safe/node_modules/ip-regex/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst word = '[a-fA-F\\\\d:]';\nconst b = options => options && options.includeBoundaries ?\n\t`(?:(?<=\\\\s|^)(?=${word})|(?<=${word})(?=\\\\s|$))` :\n\t'';\n\nconst v4 = '(?:25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]\\\\d|\\\\d)(?:\\\\.(?:25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]\\\\d|\\\\d)){3}';\n\nconst v6seg = '[a-fA-F\\\\d]{1,4}';\nconst v6 = `\n(\n(?:${v6seg}:){7}(?:${v6seg}|:)|                                // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:${v6seg}:){6}(?:${v4}|:${v6seg}|:)|                         // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:${v6seg}:){5}(?::${v4}|(:${v6seg}){1,2}|:)|                 // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:${v6seg}:){4}(?:(:${v6seg}){0,1}:${v4}|(:${v6seg}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:${v6seg}:){3}(?:(:${v6seg}){0,2}:${v4}|(:${v6seg}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:${v6seg}:){2}(?:(:${v6seg}){0,3}:${v4}|(:${v6seg}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:${v6seg}:){1}(?:(:${v6seg}){0,4}:${v4}|(:${v6seg}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::((?::${v6seg}){0,5}:${v4}|(?::${v6seg}){1,7}|:))           // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(%[0-9a-zA-Z]{1,})?                                           // %eth0            %1\n`.replace(/\\s*\\/\\/.*$/gm, '').replace(/\\n/g, '').trim();\n\n// Pre-compile only the exact regexes because adding a global flag make regexes stateful\nconst v46Exact = new RegExp(`(?:^${v4}$)|(?:^${v6}$)`);\nconst v4exact = new RegExp(`^${v4}$`);\nconst v6exact = new RegExp(`^${v6}$`);\n\nconst ip = options => options && options.exact ?\n\tv46Exact :\n\tnew RegExp(`(?:${b(options)}${v4}${b(options)})|(?:${b(options)}${v6}${b(options)})`, 'g');\n\nip.v4 = options => options && options.exact ? v4exact : new RegExp(`${b(options)}${v4}${b(options)}`, 'g');\nip.v6 = options => options && options.exact ? v6exact : new RegExp(`${b(options)}${v6}${b(options)}`, 'g');\n\nmodule.exports = ip;\n\n\n//# sourceURL=webpack://Marquee/./node_modules/url-regex-safe/node_modules/ip-regex/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _getIterator2=__webpack_require__(/*! babel-runtime/core-js/get-iterator */ \"./node_modules/babel-runtime/core-js/get-iterator.js\");var _getIterator3=_interopRequireDefault(_getIterator2);var _typeof2=__webpack_require__(/*! babel-runtime/helpers/typeof */ \"./node_modules/babel-runtime/helpers/typeof.js\");var _typeof3=_interopRequireDefault(_typeof2);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");var _inherits3=_interopRequireDefault(_inherits2);var _clappr=__webpack_require__(/*! clappr */ \"clappr\");var _urlRegexSafe=__webpack_require__(/*! url-regex-safe */ \"./node_modules/url-regex-safe/lib/index.js\");var _urlRegexSafe2=_interopRequireDefault(_urlRegexSafe);__webpack_require__(/*! ./public/style.scss */ \"./src/public/style.scss\");var _icon2=__webpack_require__(/*! ./public/icon.svg */ \"./src/public/icon.svg\");var _icon3=_interopRequireDefault(_icon2);var _icon_disabled=__webpack_require__(/*! ./public/icon_disabled.svg */ \"./src/public/icon_disabled.svg\");var _icon_disabled2=_interopRequireDefault(_icon_disabled);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Marquee=function(_UIContainerPlugin){(0,_inherits3.default)(Marquee,_UIContainerPlugin);function Marquee(container){(0,_classCallCheck3.default)(this,Marquee);var _this=(0,_possibleConstructorReturn3.default)(this,_UIContainerPlugin.call(this,container));_this.configure();return _this;}Marquee.prototype.bindEvents=function bindEvents(){var _this2=this;this.listenTo(this.container,_clappr.Events.CONTAINER_MEDIACONTROL_SHOW,function(){if(_this2.cfg&&_this2.cfg.position==='bottom'){// Move the marquee up such that it will not be covered by the mediacontrol\nvar offset=2*(0,_clappr.$)('.media-control-layer').height();var currentOffset=parseInt(_this2.$el.css('bottom'));if(currentOffset<offset){_this2.$el.css('bottom',offset+'px');}}});this.listenTo(this.container,_clappr.Events.CONTAINER_MEDIACONTROL_HIDE,function(){if(_this2.cfg&&_this2.cfg.position==='bottom'){_this2.$el.css('bottom',_this2.cfg.offset);}});this.listenTo(this.container,_clappr.Events.CONTAINER_OPTIONS_CHANGE,this.configure);this.listenTo(this.container,_clappr.Events.CONTAINER_RESIZE,function(){_this2.pause();_this2.start(true);});this.listenTo(this.container,_clappr.Events.CONTAINER_PLAY,function(){_this2.show();_this2.start(true);});this.listenTo(this.container,_clappr.Events.CONTAINER_STOP,function(){_this2.hide();_this2.pause();});document.addEventListener('fullscreenchange',function(){_this2.resize();});window.addEventListener('resize',function(){_this2.resize();});};Marquee.prototype.configure=function configure(){// Defaults\nthis.cfg={text:'',speed:10,fps:25,direction:'left',position:'top',offset:'0px',height:'90px',style:{},linkStyle:{},pauseOnHover:true};var cfg=this.options.marqueeConfig||{};if('text'in cfg){this.cfg.text=cfg.text;}if('speed'in cfg){this.cfg.speed=parseInt(cfg.speed);}if('fps'in cfg){this.cfg.fps=parseInt(cfg.fps);}if('direction'in cfg){if(cfg.direction==='right'){this.cfg.direction='right';}}if('style'in cfg){if((0,_typeof3.default)(cfg.style)==='object'){this.cfg.style=cfg.style;}}if('linkStyle'in cfg){if((0,_typeof3.default)(cfg.linkStyle)==='object'){this.cfg.linkStyle=cfg.linkStyle;}}if('pauseOnHover'in cfg){this.cfg.pauseOnHover=!!cfg.pauseOnHover;}if('position'in cfg){if(cfg.position==='bottom'){this.cfg.position='bottom';}}if('offset'in cfg){this.cfg.offset=cfg.offset;}if('height'in cfg){this.cfg.height=cfg.height;}this.state={container:null,div:null,position:0,interval:null,// ticker for the animation\nresize:null,// delay recalculation of elements during resize\nstepsize:this.cfg.speed/this.cfg.fps,windowWidth:0,textWidth:0};this.render();};Marquee.prototype.destroy=function destroy(){this.$el.remove();};Marquee.prototype.enable=function enable(){this.enabled=true;this.show();this.start(true);};Marquee.prototype.disable=function disable(){this.enabled=false;this.hide();this.pause();};Marquee.prototype.render=function render(){var _this3=this;var container=document.createElement('div');container.style.position='absolute';container.style.width='100%';var div=document.createElement('div');div.style.position='absolute';div.style.left='0px';// Parse the text for links\nvar re=(0,_urlRegexSafe2.default)({exact:false,strict:false,auth:false,localhost:false,parens:false,apostrophes:false,trailingPeriod:false,ipv4:false,ipv6:false,returnString:false});var matches=[];var match=null;while((match=re.exec(this.cfg.text))!==null){// This is necessary to avoid infinite loops with zero-width matches\nif(match.index===re.lastIndex){re.lastIndex++;}var link=document.createElement('a');if(/^https?:\\/\\//.test(match[0])){link.href=match[0];}else{link.href='https://'+match[0];}link.setAttribute('target','_blank');for(var key in this.cfg.linkStyle){link.style[key]=this.cfg.linkStyle[key];}link.append(document.createTextNode(match[0]));matches.push({element:link,start:match.index,end:re.lastIndex});}if(matches.length==0){div.append(document.createTextNode(this.cfg.text));}else{var pos=0;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=(0,_getIterator3.default)(matches),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var m=_step.value;var _text=this.cfg.text.substring(pos,m.start);if(_text.length!=0){div.append(document.createTextNode(_text));}div.append(m.element);pos=m.end;}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}var text=this.cfg.text.substring(pos);if(text.length!=0){div.append(document.createTextNode(text));}}container.append(div);container.append(document.createElement('hr'));this.state.div=div;this.state.container=container;this.$el.empty();this.$el.append(this.state.container);if(this.cfg.pauseOnHover==true){this.$el.mouseover(function(){_this3.pause();});this.$el.mouseleave(function(){_this3.start(false);});}for(var _key in this.cfg.style){this.$el.css(_key,this.cfg.style[_key]);}if(this.cfg.position=='bottom'){this.$el.css('bottom',this.cfg.offset);}else{this.$el.css('top',this.cfg.offset);}this.$el.css('height',this.cfg.height);this.$el.css('opacity',0);this.$el.hide();this.$el.remove();this.container.$el.append(this.$el);};Marquee.prototype.resize=function resize(){var _this4=this;if(!this.state){return;}if(this.state.resize!==null){clearTimeout(this.state.resize);this.state.resize=null;}this.hide();this.pause();this.state.resize=setTimeout(function(){_this4.state.resize=null;_this4.show();_this4.start(true);},1000);};Marquee.prototype.update=function update(){this.state.div.style.left=Math.round(this.state.position)+'px';};Marquee.prototype.show=function show(){if(this.enabled===true&&this.cfg.text.length==0){return;}this.$el.show();this.$el.css('opacity',1);};Marquee.prototype.hide=function hide(){this.$el.css('opacity',0);this.$el.hide();};Marquee.prototype.start=function start(recalculate){var _this5=this;if(this.state.interval!==null){return;}if(recalculate===true){// The width of the player (w)\nthis.state.windowWidth=this.container.$el.width();// The width of the text (t)\nthis.state.textWidth=this.state.div.clientWidth;// 0        t                            w+t      w+2t\n// |--text--|------------player-----------|--text--|\n//                           <- |--text--| ->\nthis.state.container.style.width=this.state.windowWidth+2*this.state.textWidth+'px';this.state.container.style.left=-this.state.textWidth+'px';if(this.cfg.direction=='right'){this.state.position=0;}else{this.state.position=this.state.windowWidth+this.state.textWidth;}}this.update();this.state.interval=setInterval(function(){if(_this5.cfg.direction=='right'){_this5.state.position+=_this5.state.stepsize;if(_this5.state.position>=_this5.state.windowWidth+_this5.state.textWidth){_this5.state.position=0;}}else{_this5.state.position-=_this5.state.stepsize;if(_this5.state.position<=0){_this5.state.position=_this5.state.windowWidth+_this5.state.textWidth;}}_this5.update();},1000/this.cfg.fps);};Marquee.prototype.pause=function pause(){clearInterval(this.state.interval);this.state.interval=null;};// PluginControl interface\nMarquee.prototype.pluginControl=function pluginControl(){var self=this;if(this.cfg.text.length==0){return null;}return{icon:function icon(){if(self.enabled===true){return _icon3.default;}else{return _icon_disabled2.default;}},name:function name(){var lang=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'en';var name='Marquee';switch(lang){case'de':name='Lauftext';break;}return name;},toggle:function toggle(){if(self.enabled===true){self.disable();}else{self.enable();}return self.enabled;},toggled:function toggled(){return self.enabled;}};};(0,_createClass3.default)(Marquee,[{key:'name',get:function get(){return'marquee';}},{key:'attributes',get:function get(){return{'class':this.name,'data-marquee':''};}},{key:'events',get:function get(){return{};}}]);return Marquee;}(_clappr.UIContainerPlugin);exports.default=Marquee;module.exports=exports['default'];\n\n//# sourceURL=webpack://Marquee/./src/main.js?");

/***/ }),

/***/ "./src/public/icon.svg":
/*!*****************************!*\
  !*** ./src/public/icon.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMi43NSAzaC0xLjVMNi41IDE0aDIuMWwuOS0yLjJoNWwuOSAyLjJoMi4xTDEyLjc1IDN6bS0yLjYyIDdMMTIgNC45OCAxMy44NyAxMGgtMy43NHptMTAuMzcgOGwtMy0zdjJINXYyaDEyLjV2MmwzLTN6Ii8+PC9zdmc+Cg==\");\n\n//# sourceURL=webpack://Marquee/./src/public/icon.svg?");

/***/ }),

/***/ "./src/public/icon_disabled.svg":
/*!**************************************!*\
  !*** ./src/public/icon_disabled.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBmaWxsPSIjQURBREFEIj48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyLjc1IDNoLTEuNUw2LjUgMTRoMi4xbC45LTIuMmg1bC45IDIuMmgyLjFMMTIuNzUgM3ptLTIuNjIgN0wxMiA0Ljk4IDEzLjg3IDEwaC0zLjc0em0xMC4zNyA4bC0zLTN2Mkg1djJoMTIuNXYybDMtM3oiLz48L3N2Zz4K\");\n\n//# sourceURL=webpack://Marquee/./src/public/icon_disabled.svg?");

/***/ }),

/***/ "./src/public/style.scss":
/*!*******************************!*\
  !*** ./src/public/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/lib!../../node_modules/sass-loader/dist/cjs.js?includePaths[]=/Users/janstabenow/Documents/Github/clappr-marquee/node_modules/compass-mixins/lib&includePaths[]=/Users/janstabenow/Documents/Github/clappr-marquee/node_modules/clappr/src/base/scss&includePaths[]=/Users/janstabenow/Documents/Github/clappr-marquee/src/base/scss!./style.scss */ \"./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/dist/cjs.js?includePaths[]=/Users/janstabenow/Documents/Github/clappr-marquee/node_modules/compass-mixins/lib&includePaths[]=/Users/janstabenow/Documents/Github/clappr-marquee/node_modules/clappr/src/base/scss&includePaths[]=/Users/janstabenow/Documents/Github/clappr-marquee/src/base/scss!./src/public/style.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"singleton\":true,\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack://Marquee/./src/public/style.scss?");

/***/ }),

/***/ 0:
/*!*********************!*\
  !*** re2 (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack://Marquee/re2_(ignored)?");

/***/ }),

/***/ "clappr":
/*!******************************************************************************************!*\
  !*** external {"amd":"clappr","commonjs":"clappr","commonjs2":"clappr","root":"Clappr"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_clappr__;\n\n//# sourceURL=webpack://Marquee/external_%7B%22amd%22:%22clappr%22,%22commonjs%22:%22clappr%22,%22commonjs2%22:%22clappr%22,%22root%22:%22Clappr%22%7D?");

/***/ })

/******/ });
});