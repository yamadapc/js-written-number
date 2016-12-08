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
  "useLongScale": false,
  "baseSeparator": " ",
  "unitSeparator": "",
  "base": {
    "0": "nulo",
    "1": "unu",
    "2": "du",
    "3": "tri",
    "4": "kvar",
    "5": "kvin",
    "6": "ses",
    "7": "sep",
    "8": "ok",
    "9": "naŭ",
    "10": "dek",
    "20": "dudek",
    "30": "tridek",
    "40": "kvardek",
    "50": "kvindek",
    "60": "sesdek",
    "70": "sepdek",
    "80": "okdek",
    "90": "naŭdek",
    "100": "cent",
    "200": "ducent",
    "300": "tricent",
    "400": "kvarcent",
    "500": "kvincent",
    "600": "sescent",
    "700": "sepcent",
    "800": "okcent",
    "900": "naŭcent"
  },
  "units" : [
    {
      "useBaseInstead": true,
      "useBaseException": []
    },
    {
      "singular": "mil",
      "avoidPrefixException": [1]
    },
    {
      "singular": "miliono",
      "plural": "milionoj",
      "avoidPrefixException": [1]
    },
    {
      "singular": "miliardo",
      "plural": "miliardoj",
      "avoidPrefixException": [1]
    },
    {
      "singular": "biliono",
      "plural": "bilionoj",
      "avoidPrefixException": [1]
    }
  ],
  "unitExceptions": []
}

},{}],3:[function(require,module,exports){
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
    "16": "dieciséis",
    "17": "diecisiete",
    "18": "dieciocho",
    "19": "diecinueve",
    "20": "veinte",
    "21": "veintiuno",
    "22": "veintidós",
    "23": "veintitrés",
    "24": "veinticuatro",
    "25": "veinticinco",
    "26": "veintiséis",
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
      "singular": "millón",
      "plural": "millones"
    },
    {
      "singular": "billón",
      "plural": "billones"
    },
    {
      "singular": "trillón",
      "plural": "trillones"
    },
    {
      "singular": "cuatrillón",
      "plural": "cuatrillones"
    },
    {
      "singular": "quintillón",
      "plural": "quintillones"
    },
    {
      "singular": "sextillón",
      "plural": "sextillones"
    },
    {
      "singular": "septillón",
      "plural": "septillones"
    },
    {
      "singular": "octillón",
      "plural": "octillones"
    },
    {
      "singular": "nonillón",
      "plural": "nonillones"
    },
    {
      "singular": "decillón",
      "plural": "decillones"
    },
    {
      "singular": "undecillón",
      "plural": "undecillones"
    },
    {
      "singular": "duodecillón",
      "plural": "duodecillones"
    },
    {
      "singular": "tredecillón",
      "plural": "tredecillones"
    },
    {
      "singular": "cuatrodecillón",
      "plural": "cuatrodecillones"
    },
    {
      "singular": "quindecillón",
      "plural": "quindecillones"
    }
  ]
}

},{}],4:[function(require,module,exports){
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
    "40": "quarante",
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

},{}],5:[function(require,module,exports){
module.exports={
    "useLongScale": false,
    "baseSeparator": "",
    "unitSeparator": "",
    "generalSeparator": "",
    "wordSeparator": "",
    "base": {
        "0": "zero",
        "1": "uno",
        "2": "due",
        "3": "tre",
        "4": "quattro",
        "5": "cinque",
        "6": "sei",
        "7": "sette",
        "8": "otto",
        "9": "nove",
        "10": "dieci",
        "11": "undici",
        "12": "dodici",
        "13": "tredici",
        "14": "quattordici",
        "15": "quindici",
        "16": "sedici",
        "17": "diciassette",
        "18": "diciotto",
        "19": "diciannove",
        "20": "venti",
        "21": "ventuno",
        "23": "ventitré",
        "28": "ventotto",
        "30": "trenta",
        "31": "trentuno",
        "33": "trentatré",
        "38": "trentotto",
        "40": "quaranta",
        "41": "quarantuno",
        "43": "quaranta­tré",
        "48": "quarantotto",
        "50": "cinquanta",
        "51": "cinquantuno",
        "53": "cinquantatré",
        "58": "cinquantotto",
        "60": "sessanta",
        "61": "sessantuno",
        "63": "sessanta­tré",
        "68": "sessantotto",
        "70": "settanta",
        "71": "settantuno",
        "73": "settantatré",
        "78": "settantotto",
        "80": "ottanta",
        "81": "ottantuno",
        "83": "ottantatré",
        "88": "ottantotto",
        "90": "novanta",
        "91": "novantuno",
        "93": "novantatré",
        "98": "novantotto",
        "100": "cento",
        "101": "centuno",
        "108": "centootto",
        "180": "centottanta",
        "201": "duecentuno",
        "301": "tre­cent­uno",
        "401": "quattro­cent­uno",
        "501": "cinque­cent­uno",
        "601": "sei­cent­uno",
        "701": "sette­cent­uno",
        "801": "otto­cent­uno",
        "901": "nove­cent­uno"
    },
    "unitExceptions": {
        "1": "un"
    },
    "units": [
        {
            "singular": "cento",
            "avoidPrefixException": [
                1
            ]
        },
        {
            "singular": "mille",
            "plural": "mila",
            "avoidPrefixException": [
                1
            ]
        },
        {
            "singular": "milione",
            "plural": "milioni"
        },
        {
            "singular": "miliardo",
            "plural": "miliardi"
        },
        {
            "singular": "bilione",
            "plural": "bilioni"
        },
        {
            "singular": "biliardo",
            "plural": "biliardi"
        },
        {
            "singular": "trilione",
            "plural": "trilioni"
        },
        {
            "singular": "triliardo",
            "plural": "triliardi"
        },
        {
            "singular": "quadrilione",
            "plural": "quadrilioni"
        },
        {
            "singular": "quadriliardo",
            "plural": "quadriliardi"
        }
    ]
}

},{}],6:[function(require,module,exports){
module.exports={
  "useLongScale": false,
  "baseSeparator": " e ",
  "unitSeparator": "e ",
  "base": {
    "0": "zero",
    "1": "um",
    "2": "dois",
    "3": "três",
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
      "singular": "milhão",
      "plural": "milhões"
    },
    {
      "singular": "bilhão",
      "plural": "bilhões"
    },
    {
      "singular": "trilhão",
      "plural": "trilhões"
    },
    {
      "singular": "quadrilhão",
      "plural": "quadrilhão"
    },
    {
      "singular": "quintilhão",
      "plural": "quintilhões"
    },
    {
      "singular": "sextilhão",
      "plural": "sextilhões"
    },
    {
      "singular": "septilhão",
      "plural": "septilhões"
    },
    {
      "singular": "octilhão",
      "plural": "octilhões"
    },
    {
      "singular": "nonilhão",
      "plural": "nonilhões"
    },
    {
      "singular": "decilhão",
      "plural": "decilhões"
    },
    {
      "singular": "undecilhão",
      "plural": "undecilhões"
    },
    {
      "singular": "doudecilhão",
      "plural": "doudecilhões"
    },
    {
      "singular": "tredecilhão",
      "plural": "tredecilhões"
    }
  ]
}

},{}],7:[function(require,module,exports){
module.exports={
  "useLongScale": false,
  "baseSeparator": " ",
  "unitSeparator": "và ",
  "base": {
    "0": "không",
    "1": "một",
    "2": "hai",
    "3": "ba",
    "4": "bốn",
    "5": "năm",
    "6": "sáu",
    "7": "bảy",
    "8": "tám",
    "9": "chín",
    "10": "mười",
    "15": "mười lăm",
    "20": "hai mươi",
    "21": "hai mươi mốt",
    "25": "hai mươi lăm",
    "30": "ba mươi",
    "31": "ba mươi mốt",
    "40": "bốn mươi",
    "41": "bốn mươi mốt",
    "45": "bốn mươi lăm",
    "50": "năm mươi",
    "51": "năm mươi mốt",
    "55": "năm mươi lăm",
    "60": "sáu mươi",
    "61": "sáu mươi mốt",
    "65": "sáu mươi lăm",
    "70": "bảy mươi",
    "71": "bảy mươi mốt",
    "75": "bảy mươi lăm",
    "80": "tám mươi",
    "81": "tám mươi mốt",
    "85": "tám mươi lăm",
    "90": "chín mươi",
    "91": "chín mươi mốt",
    "95": "chín mươi lăm"
  },
  "units" : [
    "trăm",
    "ngàn",
    "triệu",
    "tỷ",
    "nghìn tỷ"
  ],
  "unitExceptions": []
}
},{}],8:[function(require,module,exports){
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

},{"./i18n/en.json":1,"./i18n/eo.json":2,"./i18n/es.json":3,"./i18n/fr.json":4,"./i18n/it.json":5,"./i18n/pt.json":6,"./i18n/vi.json":7,"./util":9}],9:[function(require,module,exports){
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

},{}]},{},[8])(8)
});