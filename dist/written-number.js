(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.writtenNumber = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "useLongScale": false,
  "baseSeparator": "-",
  "unitSeparator": "and ",
  "base": {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen",
    "20": "twenty",
    "30": "thirty",
    "40": "forty",
    "50": "fifty",
    "60": "sixty",
    "70": "seventy",
    "80": "eighty",
    "90": "ninety"
  },
  "units" : [
    "hundred",
    "thousand",
    "million",
    "billion",
    "trillion",
    "quadrillion",
    "quintillion",
    "sextillion",
    "septillion",
    "octillion",
    "nonillion",
    "decillion",
    "undecillion",
    "duodecillion",
    "tredecillion",
    "quattuordecillion",
    "quindecillion"
  ],
  "unitExceptions": []
}
},{}],2:[function(require,module,exports){
module.exports={
  "useLongScale": true,
  "baseSeparator": " y ",
  "unitSeparator": "",
  "base": {
    "0": "cero",
    "1": "uno",
    "2": "dos",
    "3": "tres",
    "4": "cuatro",
    "5": "cinco",
    "6": "seis",
    "7": "siete",
    "8": "ocho",
    "9": "nueve",
    "10": "diez",
    "11": "once",
    "12": "doce",
    "13": "trece",
    "14": "catorce",
    "15": "quince",
    "16": "diecis�is",
    "17": "diecisiete",
    "18": "dieciocho",
    "19": "diecinueve",
    "20": "veinte",
    "21": "veintiuno",
    "22": "veintidos",
    "23": "veintitres",
    "24": "veinticuatro",
    "25": "veinticinco",
    "26": "veintiseis",
    "27": "veintisiete",
    "28": "veintiocho",
    "29": "veintinueve",
    "30": "treinta",
    "40": "cuarenta",
    "50": "cincuenta",
    "60": "sesenta",
    "70": "setenta",
    "80": "ochenta",
    "90": "noventa",
    "100": "cien",
    "200": "doscientos",
    "300": "trescientos",
    "400": "cuatrocientos",
    "500": "quinientos",
    "600": "seiscientos",
    "700": "setecientos",
    "800": "ochocientos",
    "900": "novecientos",
    "1000": "mil"
  },
  "unitExceptions": {
    "1": "un"
  },
  "units" : [
    {
      "singular": "ciento",
      "useBaseInstead": true,
      "useBaseException": [1]
    },
    {
      "singular": "mil",
      "avoidPrefixException": [1]
    },
    {
      "singular": "mill�n",
      "plural": "millones"
    },
    {
      "singular": "bill�n",
      "plural": "billones"
    },
    {
      "singular": "trill�n",
      "plural": "trillones"
    },
    {
      "singular": "cuatrill�n",
      "plural": "cuatrillones"
    },
    {
      "singular": "quintill�n",
      "plural": "quintillones"
    },
    {
      "singular": "sextill�n",
      "plural": "sextillones"
    },
    {
      "singular": "septill�n",
      "plural": "septillones"
    },
    {
      "singular": "octill�n",
      "plural": "octillones"
    },
    {
      "singular": "nonill�n",
      "plural": "nonillones"
    },
    {
      "singular": "decill�n",
      "plural": "decillones"
    },
    {
      "singular": "undecill�n",
      "plural": "undecillones"
    },
    {
      "singular": "duodecill�n",
      "plural": "duodecillones"
    },
    {
      "singular": "tredecill�n",
      "plural": "tredecillones"
    },
    {
      "singular": "cuatrodecill�n",
      "plural": "cuatrodecillones"
    },
    {
      "singular": "quindecill�n",
      "plural": "quindecillones"
    }
  ]
}
},{}],3:[function(require,module,exports){
module.exports={
  "useLongScale": false,
  "baseSeparator": "-",
  "unitSeparator": "",
  "base": {
    "0": "zero",
    "1": "un",
    "2": "deux",
    "3": "trois",
    "4": "quatre",
    "5": "cinq",
    "6": "six",
    "7": "sept",
    "8": "huit",
    "9": "neuf",
    "10": "dix",
    "11": "onze",
    "12": "douze",
    "13": "treize",
    "14": "quatorze",
    "15": "quinze",
    "16": "seize",
    "17": "dix-sept",
    "18": "dix-huit",
    "19": "dix-neuf",
    "20": "vingt",
    "30": "trente",
    "40": "quarente",
    "50": "cinquante",
    "60": "soixante",
    "70": "soixante-dix",
    "80": "quatre-vingt",
    "90": "quatre-vingt-dix"
  },
  "units" : [
    {
      "singular": "cent",
      "plural": "cents",
      "avoidInNumberPlural": true,
      "avoidPrefixException": [1]
    },
    {
      "singular": "mille",
      "avoidPrefixException": [1]
    },
    {
      "singular": "million",
      "plural": "millions"
    },
    {
      "singular": "milliard",
      "plural": "milliards"
    },
    {
      "singular": "billion",
      "plural": "billions"
    },
    {
      "singular": "billiard",
      "plural": "billiards"
    },
    {
      "singular": "trillion",
      "plural": "trillions"
    },
    {
      "singular": "trilliard",
      "plural": "trilliards"
    },
    {
      "singular": "quadrillion",
      "plural": "quadrillions"
    },
    {
      "singular": "quadrilliard",
      "plural": "quadrilliards"
    },
    {
      "singular": "quintillion",
      "plural": "quintillions"
    },
    {
      "singular": "quintilliard",
      "plural": "quintilliards"
    },
    {
      "singular": "sextillion",
      "plural": "sextillions"
    },
    {
      "singular": "sextilliard",
      "plural": "sextilliards"
    },
    {
      "singular": "septillion",
      "plural": "septillions"
    },
    {
      "singular": "septilliard",
      "plural": "septilliards"
    },
    {
      "singular": "octillion",
      "plural": "octillions"
    }
  ],
  "unitExceptions": {
    "71": "soixante et onze",
    "72": "soixante-douze",
    "73": "soixante-treize",
    "74": "soixante-quatorze",
    "75": "soixante-quinze",
    "76": "soixante-seize",
    "77": "soixante-dix-sept",
    "78": "soixante-dix-huit",
    "79": "soixante-dix-neuf",
    "80": "quatre-vingts",
    "91": "quatre-vingt-onze",
    "92": "quatre-vingt-douze",
    "93": "quatre-vingt-treize",
    "94": "quatre-vingt-quatorze",
    "95": "quatre-vingt-quinze",
    "96": "quatre-vingt-seize",
    "97": "quatre-vingt-dix-sept",
    "98": "quatre-vingt-dix-huit",
    "99": "quatre-vingt-dix-neuf"
  }
}
},{}],4:[function(require,module,exports){
module.exports={
  "useLongScale": false,
  "baseSeparator": " e ",
  "unitSeparator": "e ",
  "base": {
    "0": "zero",
    "1": "um",
    "2": "dois",
    "3": "tr�s",
    "4": "quatro",
    "5": "cinco",
    "6": "seis",
    "7": "sete",
    "8": "oito",
    "9": "nove",
    "10": "dez",
    "11": "onze",
    "12": "doze",
    "13": "treze",
    "14": "catorze",
    "15": "quinze",
    "16": "dezasseis",
    "17": "dezassete",
    "18": "dezoito",
    "19": "dezenove",
    "20": "vinte",
    "30": "trinta",
    "40": "quarenta",
    "50": "cinquenta",
    "60": "sessenta",
    "70": "setenta",
    "80": "oitenta",
    "90": "noventa",
    "100": "cem",
    "200": "duzentos",
    "300": "trezentos",
    "400": "quatrocentos",
    "500": "quinhentos",
    "600": "seiscentos",
    "700": "setecentos",
    "800": "oitocentos",
    "900": "novecentos",
    "1000": "mil"
  },
  "andException": {
    "10": true
  },
  "unitExceptions": {
    "1": "um"
  },
  "units" : [
    {
      "singular": "cento",
      "useBaseInstead": true,
      "useBaseException": [1],
      "andException": true
    },
    {
      "singular": "mil",
      "avoidPrefixException": [1],
      "andException": true
    },
    {
      "singular": "milh�o",
      "plural": "milh�es"
    },
    {
      "singular": "bilh�o",
      "plural": "bilh�es"
    },
    {
      "singular": "trilh�o",
      "plural": "trilh�es"
    },
    {
      "singular": "quadrilh�o",
      "plural": "quadrilh�o"
    },
    {
      "singular": "quintilh�o",
      "plural": "quintilh�es"
    },
    {
      "singular": "sextilh�o",
      "plural": "sextilh�es"
    },
    {
      "singular": "septilh�o",
      "plural": "septilh�es"
    },
    {
      "singular": "octilh�o",
      "plural": "octilh�es"
    },
    {
      "singular": "nonilh�o",
      "plural": "nonilh�es"
    },
    {
      "singular": "decilh�o",
      "plural": "decilh�es"
    },
    {
      "singular": "undecilh�o",
      "plural": "undecilh�es"
    },
    {
      "singular": "doudecilh�o",
      "plural": "doudecilh�es"
    },
    {
      "singular": "tredecilh�o",
      "plural": "tredecilh�es"
    }
  ]
}

},{}],5:[function(require,module,exports){
'use strict';
exports = module.exports = writtenNumber;
var util = require('./util');

var languages = ['en', 'es', 'pt', 'fr'];
var i18n = {
  en: require('./i18n/en.json'),
  es: require('./i18n/es.json'),
  pt: require('./i18n/pt.json'),
  fr: require('./i18n/fr.json'),
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
  if(options.lang) options.lang = options.lang.toLowerCase();
  options = util.defaults(options, writtenNumber.defaults);

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

},{"./i18n/en.json":1,"./i18n/es.json":2,"./i18n/fr.json":3,"./i18n/pt.json":4,"./util":6}],6:[function(require,module,exports){
'use strict';
/**
 * Merges a set of default keys with a target object
 * (Like _.defaults, but will also extend onto null/undefined)
 *
 * @param {Object} [target] The object to extend
 * @param {Object} defaults The object to default to
 * @return {Object} extendedTarget
 */

function defaults(target, defs) {
  if(target == null) target = {};
  var ret = {};
  var keys = Object.keys(defs);
  for(var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    ret[key] = target[key] || defs[key];
  }
  return ret;
}
exports.defaults = defaults;

},{}]},{},[5])(5)
});