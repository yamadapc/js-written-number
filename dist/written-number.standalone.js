(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["writtenNumber"] = factory();
	else
		root["writtenNumber"] = factory();
})(window, function() {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/standalone.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/core.js":
/*!*********************!*\
  !*** ./lib/core.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = writtenNumber;\n\nvar util = __webpack_require__(/*! ./util */ \"./lib/util.js\");\n\nvar shortScale = [100];\nfor (var i = 1; i <= 16; i++) {\n  shortScale.push(Math.pow(10, i * 3));\n}\n\nvar longScale = [100, 1000];\nfor (i = 1; i <= 15; i++) {\n  longScale.push(Math.pow(10, i * 6));\n}\n\n/**\n * Converts numbers to their written form.\n *\n * @param {Number} n The number to convert\n * @param {Object} [options] An object representation of the options\n * @return {String} writtenN The written form of `n`\n */\nfunction writtenNumber(n, options) {\n  if (n < 0) {\n    return \"\";\n  }\n\n  n = Math.round(+n);\n\n  var language = options.lang;\n\n  var scale = language.useLongScale ? longScale : shortScale;\n  var units = language.units;\n  var unit;\n\n  if (!(units instanceof Array)) {\n    var rawUnits = units;\n\n    units = [];\n    scale = Object.keys(rawUnits);\n\n    for (var i in scale) {\n      units.push(rawUnits[scale[i]]);\n      scale[i] = Math.pow(10, parseInt(scale[i]));\n    }\n  }\n\n  var baseCardinals = language.base;\n  var alternativeBaseCardinals = options.alternativeBase\n    ? language.alternativeBase[options.alternativeBase]\n    : {};\n\n  if (language.unitExceptions[n]) return language.unitExceptions[n];\n  if (alternativeBaseCardinals[n]) return alternativeBaseCardinals[n];\n  if (baseCardinals[n]) return baseCardinals[n];\n  if (n < 100)\n    return handleSmallerThan100(\n      n,\n      language,\n      unit,\n      baseCardinals,\n      alternativeBaseCardinals,\n      options\n    );\n\n  var m = n % 100;\n  var ret = [];\n\n  if (m) {\n    if (\n      options.noAnd &&\n      !(language.andException && language.andException[10])\n    ) {\n      ret.push(writtenNumber(m, options));\n    } else {\n      ret.push(language.unitSeparator + writtenNumber(m, options));\n    }\n  }\n\n  var firstSignificant;\n\n  for (var i = 0, len = units.length; i < len; i++) {\n    var r = Math.floor(n / scale[i]);\n    var divideBy;\n\n    if (i === len - 1) divideBy = 1000000;\n    else divideBy = scale[i + 1] / scale[i];\n\n    r %= divideBy;\n\n    unit = units[i];\n\n    if (!r) continue;\n    firstSignificant = scale[i];\n\n    if (unit.useBaseInstead) {\n      var shouldUseBaseException =\n        unit.useBaseException.indexOf(r) > -1 &&\n        (unit.useBaseExceptionWhenNoTrailingNumbers\n          ? i === 0 && ret.length\n          : true);\n      if (!shouldUseBaseException) {\n        ret.push(\n          alternativeBaseCardinals[r * scale[i]] || baseCardinals[r * scale[i]]\n        );\n      } else {\n        ret.push(r > 1 && unit.plural ? unit.plural : unit.singular);\n      }\n      continue;\n    }\n\n    var str;\n    if (typeof unit === \"string\") {\n      str = unit;\n    } else if (\n      r === 1 ||\n      (unit.useSingularEnding &&\n        r % 10 === 1 &&\n        (!unit.avoidEndingRules || unit.avoidEndingRules.indexOf(r) < 0))\n    ) {\n      str = unit.singular;\n    } else if (\n      unit.few &&\n      ((r > 1 && r < 5) ||\n        (unit.useFewEnding &&\n          r % 10 > 1 &&\n          r % 10 < 5 &&\n          (!unit.avoidEndingRules || unit.avoidEndingRules.indexOf(r) < 0)))\n    ) {\n      str = unit.few;\n    } else {\n      str =\n        unit.plural && (!unit.avoidInNumberPlural || !m)\n          ? unit.plural\n          : unit.singular;\n\n      // Languages with dual\n      str = r === 2 && unit.dual ? unit.dual : str;\n\n      // \"restrictedPlural\" : use plural only for 3 to 10\n      str = r > 10 && unit.restrictedPlural ? unit.singular : str;\n    }\n\n    if (\n      unit.avoidPrefixException &&\n      unit.avoidPrefixException.indexOf(r) > -1\n    ) {\n      ret.push(str);\n      continue;\n    }\n\n    var exception = language.unitExceptions[r];\n    var number =\n      exception ||\n      writtenNumber(\n        r,\n        util.defaults(\n          {\n            // Languages with and exceptions need to set `noAnd` to false\n            noAnd:\n              !(\n                (language.andException && language.andException[r]) ||\n                unit.andException\n              ) && true,\n            alternativeBase: unit.useAlternativeBase\n          },\n          options\n        )\n      );\n    n -= r * scale[i];\n    ret.push(number + \" \" + str);\n  }\n\n  var firstSignificantN = firstSignificant * Math.floor(n / firstSignificant);\n  var rest = n - firstSignificantN;\n\n  if (\n    language.andWhenTrailing &&\n    firstSignificant &&\n    0 < rest &&\n    ret[0].indexOf(language.unitSeparator) !== 0\n  ) {\n    ret = [ret[0], language.unitSeparator.replace(/\\s+$/, \"\")].concat(\n      ret.slice(1)\n    );\n  }\n\n  // Languages that have separators for all cardinals.\n  if (language.allSeparator) {\n    for (var j = 0; j < ret.length - 1; j++) {\n      ret[j] = language.allSeparator + ret[j];\n    }\n  }\n  var result = ret.reverse().join(\" \");\n  return result;\n}\n\nfunction handleSmallerThan100(\n  n,\n  language,\n  unit,\n  baseCardinals,\n  alternativeBaseCardinals,\n  options\n) {\n  var dec = Math.floor(n / 10) * 10;\n  unit = n - dec;\n  if (unit) {\n    return (\n      alternativeBaseCardinals[dec] ||\n      baseCardinals[dec] + language.baseSeparator + writtenNumber(unit, options)\n    );\n  }\n  return alternativeBaseCardinals[dec] || baseCardinals[dec];\n}\n\n\n//# sourceURL=webpack://writtenNumber/./lib/core.js?");

/***/ }),

/***/ "./lib/standalone.js":
/*!***************************!*\
  !*** ./lib/standalone.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = facade;\n\nvar util = __webpack_require__(/*! ./util */ \"./lib/util.js\");\nvar writtenNumber = __webpack_require__(/*! ./core */ \"./lib/core.js\");\n\nfacade.defaults = {\n  noAnd: false,\n  alternativeBase: null,\n  lang: null\n};\n\n/**\n * Converts numbers to their written form.\n *\n * @param {Number} n The number to convert\n * @param {Object} options An object representation of the options\n * @return {String} writtenN The written form of `n`\n */\n\nfunction facade(n, options) {\n  options = options || {};\n  options = util.defaults(options, facade.defaults);\n\n  if (n < 0) {\n    return \"\";\n  }\n\n  n = Math.round(+n);\n\n  var language = options.lang;\n\n  if (language == null || typeof language === \"string\") {\n    throw new TypeError(\n      \"options.lang is required. Please import your [lang].json file from the i18n folder and specify it as the lang argument\"\n    );\n  }\n  if (typeof language.base !== \"object\" || typeof language.units !== \"object\") {\n    throw new TypeError(\"Please provide a valid lang object\");\n  }\n\n  options.lang = language;\n  return writtenNumber(n, options);\n}\n\n\n//# sourceURL=webpack://writtenNumber/./lib/standalone.js?");

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Merges a set of default keys with a target object\n * (Like _.defaults, but will also extend onto null/undefined)\n *\n * @param {Object} [target] The object to extend\n * @param {Object} defaults The object to default to\n * @return {Object} extendedTarget\n */\n\nfunction defaults(target, defs) {\n  if (target == null) target = {};\n  var ret = {};\n  var keys = Object.keys(defs);\n  for (var i = 0, len = keys.length; i < len; i++) {\n    var key = keys[i];\n    ret[key] = target[key] || defs[key];\n  }\n  return ret;\n}\nexports.defaults = defaults;\n\n\n//# sourceURL=webpack://writtenNumber/./lib/util.js?");

/***/ })

/******/ });
});