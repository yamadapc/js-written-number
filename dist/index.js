module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: WrittenNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WrittenNumber\", function() { return WrittenNumber; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./lib/utils.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar shortScale = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"generateShortScale\"])();\nvar longScale = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"generateLongScale\"])();\nvar defaultParams = {\n  noAnd: false,\n  alternativeBase: null\n};\nvar WrittenNumber = function WrittenNumber() {\n  var _this = this;\n\n  var _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  _classCallCheck(this, WrittenNumber);\n\n  _defineProperty(this, \"setOptions\", function (options) {\n    if (!options) throw new Error('WrittenNumber: you need to pass options of you want to change it');\n    _this.options = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"mergeFields\"])(options, defaultParams);\n  });\n\n  _defineProperty(this, \"convert\", function (number) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.options;\n    var n = Math.round(+number);\n\n    if (n < 0 || Number.isNaN(n)) {\n      return '';\n    }\n\n    var language = options.language,\n        noAnd = options.noAnd;\n\n    var _this$_getUnitsAndSca = _this._getUnitsAndScale(),\n        scale = _this$_getUnitsAndSca.scale,\n        units = _this$_getUnitsAndSca.units;\n\n    var baseCardinals = language.base;\n    var alternativeBaseCardinals = options.alternativeBase ? language.alternativeBase[options.alternativeBase] : {};\n    if (language.unitExceptions[n]) return language.unitExceptions[n];\n    if (alternativeBaseCardinals[n]) return alternativeBaseCardinals[n];\n    if (baseCardinals[n]) return baseCardinals[n];\n\n    if (n < 100) {\n      return _this.__handleSmallerThan100({\n        number: number,\n        language: language,\n        baseCardinals: baseCardinals,\n        alternativeBaseCardinals: alternativeBaseCardinals\n      });\n    }\n\n    var m = n % 100;\n    var ret = [];\n\n    if (m) {\n      if (noAnd && !(language.andException && language.andException[10])) {\n        ret.push(_this.convert(m));\n      } else {\n        ret.push(language.unitSeparator + _this.convert(m));\n      }\n    }\n\n    var firstSignificant;\n\n    for (var i = 0, len = units.length; i < len; i += 1) {\n      var r = Math.floor(n / scale[i]);\n      var divideBy = void 0;\n      if (i === len - 1) divideBy = 1000000;else divideBy = scale[i + 1] / scale[i];\n      r %= divideBy;\n      var unit = units[i]; // eslint-disable-next-line no-continue\n\n      if (!r) continue;\n      firstSignificant = scale[i];\n\n      if (unit.useBaseInstead) {\n        var shouldUseBaseException = unit.useBaseException.indexOf(r) > -1 && (unit.useBaseExceptionWhenNoTrailingNumbers ? i === 0 && ret.length : true);\n\n        if (!shouldUseBaseException) {\n          ret.push(alternativeBaseCardinals[r * scale[i]] || baseCardinals[r * scale[i]]);\n        } else {\n          ret.push(r > 1 && unit.plural ? unit.plural : unit.singular);\n        } // eslint-disable-next-line no-continue\n\n\n        continue;\n      }\n\n      var str = _this.__getStr({\n        unit: unit,\n        r: r,\n        m: m\n      });\n\n      if (unit.avoidPrefixException && unit.avoidPrefixException.indexOf(r) > -1) {\n        ret.push(str); // eslint-disable-next-line no-continue\n\n        continue;\n      }\n\n      var exception = language.unitExceptions[r];\n\n      var num = exception || _this.convert(r, Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"mergeFields\"])({\n        // Languages with and exceptions need to set `noAnd` to false\n        noAnd: !(language.andException && language.andException[r] || unit.andException) && true,\n        alternativeBase: unit.useAlternativeBase\n      }, _this.options));\n\n      n -= r * scale[i];\n      ret.push(\"\".concat(num, \" \").concat(str));\n    }\n\n    var firstSignificantN = firstSignificant * Math.floor(n / firstSignificant);\n    var rest = n - firstSignificantN;\n\n    if (language.andWhenTrailing && firstSignificant && rest > 0 && ret[0].indexOf(language.unitSeparator) !== 0) {\n      ret = [ret[0], language.unitSeparator.replace(/\\s+$/, '')].concat(ret.slice(1));\n    } // Languages that have separators for all cardinals.\n\n\n    if (language.allSeparator) {\n      for (var _i = 0; _i < ret.length - 1; _i += 1) {\n        ret[_i] = language.allSeparator + ret[_i];\n      }\n    }\n\n    return ret.reverse().join(' ');\n  });\n\n  _defineProperty(this, \"__getStr\", function (_ref) {\n    var unit = _ref.unit,\n        r = _ref.r,\n        m = _ref.m;\n\n    if (typeof unit === 'string') {\n      return unit;\n    }\n\n    if (r === 1 || unit.useSingularEnding && r % 10 === 1 && (!unit.avoidEndingRules || unit.avoidEndingRules.indexOf(r) < 0)) {\n      return unit.singular;\n    }\n\n    if (unit.few && (r > 1 && r < 5 || unit.useFewEnding && r % 10 > 1 && r % 10 < 5 && (!unit.avoidEndingRules || unit.avoidEndingRules.indexOf(r) < 0))) {\n      return unit.few;\n    }\n\n    var str = unit.plural && (!unit.avoidInNumberPlural || !m) ? unit.plural : unit.singular; // Languages with dual\n\n    str = r === 2 && unit.dual ? unit.dual : str; // \"restrictedPlural\" : use plural only for 3 to 10\n\n    return r > 10 && unit.restrictedPlural ? unit.singular : str;\n  });\n\n  _defineProperty(this, \"_getUnitsAndScale\", function () {\n    var _this$options$languag = _this.options.language,\n        units = _this$options$languag.units,\n        useLongScale = _this$options$languag.useLongScale;\n\n    if (!(units instanceof Array)) {\n      return Object.keys(units).reduce(function (acc, key) {\n        return {\n          scale: [].concat(_toConsumableArray(acc.scale), [Math.pow(10, parseInt(key, 10))]),\n          units: [].concat(_toConsumableArray(acc.units), [units[key]])\n        };\n      }, {\n        scale: [],\n        units: []\n      });\n    }\n\n    var scale = useLongScale ? longScale : shortScale;\n    return {\n      units: units,\n      scale: scale\n    };\n  });\n\n  _defineProperty(this, \"__handleSmallerThan100\", function (_ref2) {\n    var number = _ref2.number,\n        language = _ref2.language,\n        baseCardinals = _ref2.baseCardinals,\n        alternativeBaseCardinals = _ref2.alternativeBaseCardinals;\n    var dec = Math.floor(number / 10) * 10;\n    var unit = number - dec;\n\n    if (unit) {\n      return alternativeBaseCardinals[dec] || baseCardinals[dec] + language.baseSeparator + _this.convert(unit);\n    }\n\n    return alternativeBaseCardinals[dec] || baseCardinals[dec];\n  });\n\n  if (!_options.language) throw new Error('WrittenNumber: you need to pass your language object');\n  this.options = _objectSpread({}, defaultParams, {}, _options);\n}\n/**\n * setOptions to WrittenNumber\n *\n * @param {Object} [options] An object representation of the options\n * @error {String} options wasn't passed\n */\n;\n\n//# sourceURL=webpack://written-number/./lib/index.js?");

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! exports provided: mergeFields, generateShortScale, generateLongScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeFields\", function() { return mergeFields; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateShortScale\", function() { return generateShortScale; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateLongScale\", function() { return generateLongScale; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * Merges a set of default keys with a target object\n * (Like _.defaults, but will also extend onto null/undefined)\n *\n * @param {Object} [target] The object to extend\n * @param {Object} defs The object to default to\n * @return {Object} extendedTarget\n */\nfunction mergeFields(target, defs) {\n  var targetObj = {};\n  if (target) targetObj = target;\n  return Object.keys(defs).reduce(function (acc, key) {\n    return _objectSpread({}, acc, _defineProperty({}, key, targetObj[key] || defs[key]));\n  }, {});\n}\nfunction generateShortScale() {\n  var base = [100];\n\n  for (var i = 1; i <= 16; i += 1) {\n    // eslint-disable-next-line no-restricted-properties\n    base.push(Math.pow(10, i * 3));\n  }\n\n  return base;\n}\nfunction generateLongScale() {\n  var base = [100, 1000];\n\n  for (var i = 1; i <= 15; i += 1) {\n    // eslint-disable-next-line no-restricted-properties\n    base.push(Math.pow(10, i * 6));\n  }\n\n  return base;\n}\n\n//# sourceURL=webpack://written-number/./lib/utils.js?");

/***/ })

/******/ });