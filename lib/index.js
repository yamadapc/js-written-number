"use strict";
exports = module.exports = writtenNumber;
var util = require("./util");

var languages = ["en", "es", "ar", "az", "pt", "fr", "eo", "it", "vi", "tr", "uk", "ru", "id", "zh"];
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
  id: require("./i18n/id.json"),
  zhTW: require("./i18n/zh-TW.json"),
  zhCN: require("./i18n/zh-CN.json")
};
exports.i18n = i18n;

var shortScale = [100];
for (var i = 1; i <= 16; i++) {
  shortScale.push(Math.pow(10, i * 3));
}

var longScale = [100, 1000];
for (i = 1; i <= 15; i++) {
  longScale.push(Math.pow(10, i * 6));
}

writtenNumber.defaults = {
  noAnd: false,
  alternativeBase: null,
  lang: "en",
  smallMeans10: false
};

/**
 * Converts numbers to their written form.
 *
 * @param {Number} n The number to convert
 * @param {Object} [options] An object representation of the options
 * @return {String} writtenN The written form of `n`
 */

function writtenNumber(n, options) {
  options = options || {};
  options = util.defaults(options, writtenNumber.defaults);

  if (n < 0) {
    return "";
  }

  n = Math.round(+n);

  var language = typeof options.lang === "string"
    ? i18n[options.lang]
    : options.lang;

  if (!language) {
    if (languages.indexOf(writtenNumber.defaults.lang) < 0) {
      writtenNumber.defaults.lang = "en";
    }

    language = i18n[writtenNumber.defaults.lang];
  }

  if (!language.hasOwnProperty('joinSeparator')) {
    language.joinSeparator = " ";
  }

  var scale = language.useLongScale ? longScale : shortScale;
  var units = language.units;
  var unit;

  if (!(units instanceof Array)) {
    var rawUnits = units;

    units = [];
    scale = Object.keys(rawUnits);

    for (var i in scale) {
      units.push(rawUnits[scale[i]]);
      scale[i] = Math.pow(10, parseInt(scale[i]));
    }
  }

  var baseCardinals = language.base;
  var alternativeBaseCardinals = options.alternativeBase
    ? language.alternativeBase[options.alternativeBase]
    : {};
  var smallFactor = options.smallMeans10 ? 10 : 100;

  if (language.unitExceptions[n]) return language.unitExceptions[n];
  if (alternativeBaseCardinals[n]) return alternativeBaseCardinals[n];
  if (baseCardinals[n]) return baseCardinals[n];
  if (n < smallFactor)
    return handleSmallerThan100(n, language, unit, baseCardinals, alternativeBaseCardinals, options);

  setSmallMeans10(options, baseCardinals, alternativeBaseCardinals);
  smallFactor = options.smallMeans10 ? 10 : 100;

  var m = n % smallFactor;
  var ret = [];

  if (language.prependZero) {
    var _n = n, _n10 = Math.pow(10, Math.floor(Math.log10(_n)));
    var zero = writtenNumber(0, options);
  }

  if (m) {
    if (
      options.noAnd &&
      !(language.andException && language.andException[10])
    ) {
      ret.push(writtenNumber(m, options));
    } else {
      ret.push(language.unitSeparator + writtenNumber(m, options));
    }
    if (language.prependZero && Math.floor(n / 10) % smallFactor == 0) {
      ret[0] = zero + ret[0];
    }
  }

  var firstSignificant;

  for (var i = 0, len = units.length; i < len; i++) {
    var r = Math.floor(n / scale[i]);
    var divideBy;

    if (i === len - 1) divideBy = 1000000;
    else divideBy = scale[i + 1] / scale[i];

    r %= divideBy;

    unit = units[i];

    if (!r) continue;
    firstSignificant = scale[i];
    var prependedZero = "";
    if (
      language.prependZero
      && i < len - 1
      && scale[i] < _n10
    ) {
      var nextSpaceFloor = Math.floor(_n / scale[i] / (divideBy / 10));
      var nextUnitFloor = Math.floor(_n / scale[i + 1]);
      if (
        (nextSpaceFloor && nextSpaceFloor % 10 == 0)
        || (nextUnitFloor && nextUnitFloor % 10 == 0)
      ) prependedZero = zero;
    }

    if (unit.useBaseInstead) {
      var shouldUseBaseException =
        unit.useBaseException.indexOf(r) > -1 &&
        (unit.useBaseExceptionWhenNoTrailingNumbers
          ? i === 0 && ret.length
          : true);
      if (!shouldUseBaseException) {
        ret.push(alternativeBaseCardinals[r * scale[i]] || baseCardinals[r * scale[i]]);
      } else {
        ret.push(r > 1 && unit.plural ? unit.plural : unit.singular);
      }
      continue;
    }

    var str;
    if (typeof unit === "string") {
      str = unit;
    } else if (r === 1 || unit.useSingularEnding && r % 10 === 1
      && (!unit.avoidEndingRules || unit.avoidEndingRules.indexOf(r) < 0)) {
      str = unit.singular;
    } else if (unit.few && (r > 1 && r < 5 || unit.useFewEnding && r % 10 > 1 && r % 10 < 5
      && (!unit.avoidEndingRules || unit.avoidEndingRules.indexOf(r) < 0))) {
      str = unit.few;
    } else {
      str = unit.plural && (!unit.avoidInNumberPlural || !m)
        ? unit.plural
        : unit.singular;

      // Languages with dual
      str = (r === 2 && unit.dual) ? unit.dual : str;

      // "restrictedPlural" : use plural only for 3 to 10
      str = (r > 10 && unit.restrictedPlural) ? unit.singular : str;
    }

    if (
      unit.avoidPrefixException &&
      unit.avoidPrefixException.indexOf(r) > -1
    ) {
      ret.push(str);
      continue;
    }

    var exception = language.unitExceptions[r];
    var number =
      exception ||
      writtenNumber(
        r,
        util.defaults(
          {
            // Languages with and exceptions need to set `noAnd` to false
            noAnd: !((language.andException && language.andException[r]) ||
              unit.andException) && true,
            alternativeBase: unit.useAlternativeBase
          },
          options
        )
      );
    n -= r * scale[i];
    ret.push(prependedZero + number + language.joinSeparator + str);
  }

  var firstSignificantN = firstSignificant * Math.floor(n / firstSignificant);
  var rest = n - firstSignificantN;

  if (
    language.andWhenTrailing &&
    firstSignificant &&
    0 < rest &&
    ret[0].indexOf(language.unitSeparator) !== 0
  ) {
    ret = [ret[0], language.unitSeparator.replace(/\s+$/, "")].concat(
      ret.slice(1)
    );
  }

  // Languages that have separators for all cardinals.
  if (language.allSeparator) {
    for (var j = 0; j < ret.length - 1; j++) {
      ret[j] = language.allSeparator + ret[j];
    }
  }
  var result = ret.reverse().join(language.joinSeparator);
  return result;
}

function handleSmallerThan100(n, language, unit, baseCardinals, alternativeBaseCardinals, options) {
  var smallMeans10 = options.smallMeans10;
  setSmallMeans10(options, baseCardinals, alternativeBaseCardinals);
  var dec = Math.floor(n / 10) * 10;
  unit = n - dec;
  var decCardinal = alternativeBaseCardinals[dec] || baseCardinals[dec];
  if (smallMeans10) {
    decCardinal = '';
  } else if (!decCardinal) {
    decCardinal = writtenNumber(dec, options);
  }
  if (unit) {
    return (
      decCardinal + language.baseSeparator + writtenNumber(unit, options)
    );
  }
  return decCardinal;
}

function setSmallMeans10(options, baseCardinals, alternativeBaseCardinals) {
  if (options.smallMeans10) return;
  var f = function (i) {return parseInt(i);};
  var keys = Object.keys(baseCardinals).map(f);
  keys = keys.concat(Object.keys(alternativeBaseCardinals).map(f));
  options.smallMeans10 = Math.max.apply(null, keys) < 10;
}