/*global writtenNumber */
'use strict';

var _ = require('underscore');

exports = module.exports = writtenNumber;

var languages = ['en', 'es'];

var i18n = {};

languages.forEach(function (lang) {
  i18n[lang] = require('./i18n/' + lang + '.json');
});

exports.i18n = i18n;

var shortScale = [100];

for (var i = 1; i <= 16; i++) {
  shortScale.push(Math.pow(10, i * 3));
}

var longScale = [100, 1000];

for (i = 1; i <= 15; i++) {
  longScale.push(Math.pow(10, i * 6));
}

function writtenNumber(n, options) {
  options = options || {};
  options = _.extend(_.clone(writtenNumber.defaults), options);

  options.lang = typeof options.lang !== 'string' ? 'en' : options.lang.toLowerCase();
  var language = i18n[options.lang];
  var scale = language.useLongScale ? longScale : shortScale;

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
    var unit = n - dec;
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
      r %= 1000
    } else r %= 1000000;

    var unit = language.units[i];
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

writtenNumber.defaults = {
  noAnd: false,
  lang: 'en'
};