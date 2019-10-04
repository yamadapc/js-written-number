"use strict";
module.exports = writtenNumber;

var util = require("./util");

var shortScale = [100];
for (var i = 1; i <= 16; i++) {
  shortScale.push(Math.pow(10, i * 3));
}

var longScale = [100, 1000];
for (i = 1; i <= 15; i++) {
  longScale.push(Math.pow(10, i * 6));
}

/**
 * Converts numbers to their written form.
 *
 * @param {Number} n The number to convert
 * @param {Object} [options] An object representation of the options
 * @return {String} writtenN The written form of `n`
 */
function writtenNumber(n, options) {
  if (n < 0) {
    return "";
  }

  n = Math.round(+n);

  var language = options.lang;

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
    return handleSmallerThan100(
      n,
      language,
      unit,
      baseCardinals,
      alternativeBaseCardinals,
      options
    );

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
        ret.push(
          alternativeBaseCardinals[r * scale[i]] || baseCardinals[r * scale[i]]
        );
      } else {
        ret.push(r > 1 && unit.plural ? unit.plural : unit.singular);
      }
      continue;
    }

    var str;
    if (typeof unit === "string") {
      str = unit;
    } else if (
      r === 1 ||
      (unit.useSingularEnding &&
        r % 10 === 1 &&
        (!unit.avoidEndingRules || unit.avoidEndingRules.indexOf(r) < 0))
    ) {
      str = unit.singular;
    } else if (
      unit.few &&
      ((r > 1 && r < 5) ||
        (unit.useFewEnding &&
          r % 10 > 1 &&
          r % 10 < 5 &&
          (!unit.avoidEndingRules || unit.avoidEndingRules.indexOf(r) < 0)))
    ) {
      str = unit.few;
    } else {
      str =
        unit.plural && (!unit.avoidInNumberPlural || !m)
          ? unit.plural
          : unit.singular;

      // Languages with dual
      str = r === 2 && unit.dual ? unit.dual : str;

      // "restrictedPlural" : use plural only for 3 to 10
      str = r > 10 && unit.restrictedPlural ? unit.singular : str;
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
            noAnd:
              !(
                (language.andException && language.andException[r]) ||
                unit.andException
              ) && true,
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
    for (var j = 0; j < ret.length - 1; j++) {
      ret[j] = language.allSeparator + ret[j];
    }
  }
  var result = ret.reverse().join(" ");
  return result;
}

function handleSmallerThan100(
  n,
  language,
  unit,
  baseCardinals,
  alternativeBaseCardinals,
  options
) {
  var dec = Math.floor(n / 10) * 10;
  unit = n - dec;
  if (unit) {
    return (
      alternativeBaseCardinals[dec] ||
      baseCardinals[dec] + language.baseSeparator + writtenNumber(unit, options)
    );
  }
  return alternativeBaseCardinals[dec] || baseCardinals[dec];
}
