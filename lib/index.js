'use strict';
exports = module.exports = writtenNumber;
var util = require('./util');

var languages = ['en', 'es', 'pt', 'fr', 'eo', 'it', 'vi'];
var i18n = {
  en: require('./i18n/en.json'),
  es: require('./i18n/es.json'),
  pt: require('./i18n/pt.json'),
  fr: require('./i18n/fr.json'),
  eo: require('./i18n/eo.json'),
  it: require('./i18n/it.json'),
  vi: require('./i18n/vi.json'),
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
  lang: 'en',
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

  n = Math.round(+n);

  var language = typeof options.lang === 'string'
    ? i18n[options.lang]
    : options.lang;
  var scale = language.useLongScale ? longScale : shortScale;
  var unit;

  if (!language) {
    if (languages.indexOf(writtenNumber.defaults.lang) < 0) {
      writtenNumber.defaults.lang = 'en';
    }
    language = i18n[writtenNumber.defaults.lang];
  }

  var baseCardinals = language.base;

  if (language.unitExceptions[n]) return language.unitExceptions[n];
  if(baseCardinals[n]) return baseCardinals[n];
  if(n < 100) return handleSmallerThan100(n, language, unit, baseCardinals, options);

  var m = n % 100;
  var ret = [];
  if(m) {
    if(options.noAnd && !(language.andException && language.andException[10])
      ) {
        ret.push(writtenNumber(m, options));
    } else {
      ret.push(language.unitSeparator + writtenNumber(m, options));
    }
    n -= m;
  } else ret = [];

  for(var i = 0, len = language.units.length; i < len; i++) {
    var r = Math.floor(n / scale[i]);
    if(i === 0) {
      r %= 10;
    } else if(!language.useLongScale || (i === 1 && language.useLongScale)) {
      r %= 1000;
    } else r %= 1000000;

    unit = language.units[i];
    if(r && unit.useBaseInstead) {
      if(unit.useBaseException.indexOf(r) < 0) {
        ret.push(baseCardinals[r * scale[i]]);
      }
      else {
        ret.push(r > 1 && unit.plural ? unit.plural : unit.singular);
      }
    }
    else if(r) {
      var str;
      if(typeof unit === 'string') {
        str = unit;
      }
      else {
        str = r > 1 && unit.plural && (!unit.avoidInNumberPlural || !m) ? unit.plural : unit.singular;
      }
      if(unit.avoidPrefixException && unit.avoidPrefixException.indexOf(r) > -1) {
        ret.push(str);
      }
      else {
        var exception = language.unitExceptions[r];
        var number = exception || writtenNumber(r, util.defaults({
          // Languages with and exceptions need to set `noAnd` to false
          noAnd: !(language.andException && language.andException[r] ||
                   unit.andException) &&
                 true,
        }, options));
        ret.push(number + ' ' + str);
      }
    }

  }
  return ret.reverse().join(' ');
}

function handleSmallerThan100(n, language, unit, baseCardinals, options) {
  var dec = Math.floor(n / 10) * 10;
  unit = n - dec;
  if(unit) {
    return baseCardinals[dec] + language.baseSeparator + writtenNumber(unit, options);
  }
  return baseCardinals[dec];
}
