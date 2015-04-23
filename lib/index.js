'use strict';
exports = module.exports = writtenNumber;
var languages = ['en', 'es'];
var i18n = {
  en: require('./i18n/en.json'),
  es: require('./i18n/es.json'),
  pt: require('./i18n/pt.json'),
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

var DEFAULTS = writtenNumber.DEFAULTS = {
  noAnd: false,
  lang: 'en',
};

function writtenNumber(n, options) {
  options = options || {};
  if(options.lang) options.lang = options.lang.toLowerCase();
  options = defaults(options, DEFAULTS);

  var language = i18n[options.lang];
  var scale = language.useLongScale ? longScale : shortScale;
  var unit;

  if (!language) {
    if (languages.indexOf(writtenNumber.defaults.lang) < 0) {
      writtenNumber.defaults.lang = 'en';
    }
    language = i18n[writtenNumber.defaults.lang];
  }

  var baseCardinals = language.base;

  if(baseCardinals[n]) {
    return baseCardinals[n];
  }

  if(n < 100) {
    var dec = Math.floor(n / 10) * 10;
    unit = n - dec;
    if(unit) {
      return baseCardinals[dec] + language.baseSeparator + writtenNumber(unit);
    }
    return baseCardinals[dec];
  }

  var m = n % 100;
  var ret = [];
  if(m) {
    if(!options.noAnd) {
      ret.push(language.unitSeparator + writtenNumber(m));
    } else ret.push(writtenNumber(m));
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
      if (typeof unit === 'string') {
        str = unit;
      }
      else {
        str = r > 1 && unit.plural ? unit.plural : unit.singular;
      }
      if (unit.avoidPrefixException && unit.avoidPrefixException.indexOf(r) > -1) {
        ret.push(str);
      }
      else {
        var exception = language.unitExceptions[r];
        var number = exception || writtenNumber(r, { noAnd: true });
        ret.push(number + ' ' + str);
      }
    }

  }
  return ret.reverse().join(' ');
}

/**
 * Merges a set of default keys with a target object
 * (Like _.defaults)
 *
 * @param {Object} target The object to extend
 * @param {Object} defaults The object to default to
 * @return {Object} extendedTarget
 */

function defaults(target, defs) {
  var ret = {};
  var keys = Object.keys(defs);
  for(var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    ret[key] = target[key] || defs[key];
  }
  return ret;
}
exports._defaults = defaults;
