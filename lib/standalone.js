"use strict";
module.exports = facade;

var util = require("./util");
var writtenNumber = require("./core");

facade.defaults = {
  noAnd: false,
  alternativeBase: null,
  lang: null
};

/**
 * Facade for the writtenNumber function
 *
 * @param {Number} n The number to convert
 * @param {Object} options An object representation of the options
 * @return {String} writtenN The written form of `n`
 */

function facade(n, options) {
  options = options || {};
  options = util.defaults(options, facade.defaults);

  var language = options.lang;

  if (language == null || typeof language === "string") {
    throw new TypeError(
      "options.lang is required. Please import your [lang].json file from the i18n folder and specify it as the lang argument"
    );
  }
  if (typeof language.base !== "object" || typeof language.units !== "object") {
    throw new TypeError("Please provide a valid lang object");
  }

  return writtenNumber(n, options);
}
