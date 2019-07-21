exports = module.exports = writtenNumber;
import {mergeFields, generateShortScale, generateLongScale } from './util';

var languages = ["en", "es", "ar", "az", "pt", "fr", "eo", "it", "vi", "tr", "uk", "ru", "id"];
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

const shortScale = generateShortScale();
const longScale = generateLongScale();

writtenNumber.defaults = {
  noAnd: false,
  alternativeBase: null,
  lang: "en"
};

const defaultParams = {
  noAnd: false,
  alternativeBase: null,
};

export class WrittenNumber {
  constructor(options){
    if(!options.language) throw new Error('WrittenNumber: you need to pass your lang object or use one of existence');
    this.options = {
      ...defaultParams,
      ...options,
    };
  }

  setOptions = (options) => {
    if(!options) throw new Error('WrittenNumber: you need to pass options of you want to change it');
    this.options = mergeFields(options, defaultParams);
  };

  convert = (number, options = this.options) => {
    let n = Math.round(+number);

    if (n < 0 || Number.isNaN(n)) {
      return "";
    }

    const {language, noAnd} = options;
    const {scale, units} = this.getUnitsAndScale();

    const baseCardinals = language.base;
    const alternativeBaseCardinals = options.alternativeBase
        ? language.alternativeBase[options.alternativeBase]
        : {};

    if (language.unitExceptions[n]) return language.unitExceptions[n];
    if (alternativeBaseCardinals[n]) return alternativeBaseCardinals[n];
    if (baseCardinals[n]) return baseCardinals[n];
    if (n < 100)
      return this.handleSmallerThan100({number, language, baseCardinals, alternativeBaseCardinals});

    const m = n % 100;
    let ret = [];

    if (m) {
      if (
          noAnd &&
          !(language.andException && language.andException[10])
      ) {
        ret.push(this.convert(m));
      } else {
        ret.push(language.unitSeparator + this.convert(m));
      }
    }

    let firstSignificant;

    for (let i = 0, len = units.length; i < len; i++) {
      let r = Math.floor(n / scale[i]);
      let divideBy;

      if (i === len - 1) divideBy = 1000000;
      else divideBy = scale[i + 1] / scale[i];

      r %= divideBy;

      let unit = units[i];

      if (!r) continue;
      firstSignificant = scale[i];

      if (unit.useBaseInstead) {
        let shouldUseBaseException =
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

      const str = this.getStr({unit, r});

      if (
          unit.avoidPrefixException &&
          unit.avoidPrefixException.indexOf(r) > -1
      ) {
        ret.push(str);
        continue;
      }

      const exception = language.unitExceptions[r];
      const num =
          exception ||
          this.convert(
              r,
              mergeFields(
                  {
                    // Languages with and exceptions need to set `noAnd` to false
                    noAnd: !((language.andException && language.andException[r]) ||
                        unit.andException) && true,
                    alternativeBase: unit.useAlternativeBase
                  },
                  this.options
              )
          );
      n -= r * scale[i];
      ret.push(num + " " + str);
    }

    const firstSignificantN = firstSignificant * Math.floor(n / firstSignificant);
    const rest = n - firstSignificantN;

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
      for (let i = 0; i < ret.length-1; i++) {
        ret[i] = language.allSeparator + ret[i];
      }
    }
    return ret.reverse().join(" ");
  };

  getStr = ({unit, r}) => {
    if (typeof unit === "string") {
      return unit;
    }
    if (r === 1 || unit.useSingularEnding && r % 10 === 1
        && (!unit.avoidEndingRules || unit.avoidEndingRules.indexOf(r) < 0)) {
      return unit.singular;
    }
    if (unit.few && (r > 1 && r < 5 || unit.useFewEnding && r % 10 > 1 && r % 10 < 5
        && (!unit.avoidEndingRules || unit.avoidEndingRules.indexOf(r) < 0))) {
      return unit.few;
    }
    let str = unit.plural && (!unit.avoidInNumberPlural || !m)
        ? unit.plural
        : unit.singular;

    // Languages with dual
    str = (r === 2 && unit.dual) ? unit.dual : str;

    // "restrictedPlural" : use plural only for 3 to 10
    return (r > 10 && unit.restrictedPlural) ? unit.singular : str;
  };

  getUnitsAndScale = () => {
    const {language: {units, useLongScale}} = this.options;
    if (!(units instanceof Array)) {
      return Object.keys(units).reduce((acc, key) => {
        return {
          scale: [...acc.scale, Math.pow(10, parseInt(key))],
          units: [...acc.units, units[key]]
        }
      }, {scale: [], units: []});
    }

    const scale = useLongScale ? longScale : shortScale;
    return {units, scale};
  };

  handleSmallerThan100 = ({number, language, baseCardinals, alternativeBaseCardinals}) => {
    const dec = Math.floor(number / 10) * 10;
    const unit = number - dec;
    if (unit) {
      return (
          alternativeBaseCardinals[dec] || baseCardinals[dec] + language.baseSeparator + this.convert(unit)
      );
    }
    return alternativeBaseCardinals[dec] || baseCardinals[dec];
  }
}

/**
 * Converts numbers to their written form.
 *
 * @param {Number} n The number to convert
 * @param {Object} [options] An object representation of the options
 * @return {String} writtenN The written form of `n`
 */

function writtenNumber(n, options) {
  options = options || {};
  options = mergeFields(options, writtenNumber.defaults);

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

  if (language.unitExceptions[n]) return language.unitExceptions[n];
  if (alternativeBaseCardinals[n]) return alternativeBaseCardinals[n];
  if (baseCardinals[n]) return baseCardinals[n];
  if (n < 100)
    return handleSmallerThan100(n, language, unit, baseCardinals, alternativeBaseCardinals, options);

  var m = n % 100;
  var ret = [];

  if (m) {
    if (
      options.noAnd &&
      !(language.andException && language.andException[10])
    ) {
      ret.push(writtenNumber(m, options));
    } else {
      ret.push(language.unitSeparator + writtenNumber(m, options));
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
        mergeFields(
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
    ret.push(number + " " + str);
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
    for (var j = 0; j < ret.length-1; j++) {
      ret[j] = language.allSeparator + ret[j];      
    }
  }
  var result = ret.reverse().join(" ");
  return result;
}

function handleSmallerThan100(n, language, unit, baseCardinals, alternativeBaseCardinals, options) {
  var dec = Math.floor(n / 10) * 10;
  unit = n - dec;
  if (unit) {
    return (
      alternativeBaseCardinals[dec] || baseCardinals[dec] + language.baseSeparator + writtenNumber(unit, options)
    );
  }
  return alternativeBaseCardinals[dec] || baseCardinals[dec];
}
