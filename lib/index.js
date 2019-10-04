"use strict";
exports = module.exports = facade;
var util = require("./util");
var writtenNumber = require("./core");

var languages = [
  "en",
  "es",
  "ar",
  "az",
  "pt",
  "fr",
  "eo",
  "it",
  "vi",
  "tr",
  "uk",
  "ru",
  "id"
];
var i18n = {
  en: require("./i18n/en.json"),
  es: require("./i18n/es.json"),
  ar: require("./i18n/ar.json"),
  az: require("./i18n/az.json"),
  pt: require("./i18n/pt.json"),
  ptPT: require("./i18n/pt-PT.json"),
  fr: require("./i18n/fr.json"),
  eo: require("./i18n/eo.json"),
  it: require("./i18n/it.json"),
  vi: require("./i18n/vi.json"),
  tr: require("./i18n/tr.json"),
  hu: require("./i18n/hu.json"),
  enIndian: require("./i18n/en-indian.json"),
  uk: require("./i18n/uk.json"),
  ru: require("./i18n/ru.json"),
  id: require("./i18n/id.json")
};
exports.i18n = i18n;

facade.defaults = {
  noAnd: false,
  alternativeBase: null,
  lang: "en"
};

/**
 * Facade for the writtenNumber function
 *
 * @param {Number} n The number to convert
 * @param {Object} [options] An object representation of the options
 * @return {String} writtenN The written form of `n`
 */

function facade(n, options) {
  options = options || {};
  options = util.defaults(options, facade.defaults);

  var language =
    typeof options.lang === "string" ? i18n[options.lang] : options.lang;

  if (!language) {
    if (languages.indexOf(facade.defaults.lang) < 0) {
      facade.defaults.lang = "en";
    }

    language = i18n[facade.defaults.lang];
  }
  options.lang = language;
  return writtenNumber(n, options);
}
