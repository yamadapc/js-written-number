import { mergeFields, generateShortScale, generateLongScale } from './utils';

const shortScale = generateShortScale();
const longScale = generateLongScale();

const defaultParams = {
  noAnd: false,
  alternativeBase: null,
};

export class WrittenNumber {
  constructor(options = {}) {
    if (!options.language) throw new Error('WrittenNumber: you need to pass your language object');
    this.options = {
      ...defaultParams,
      ...options,
    };
    this.setOptions = this.setOptions.bind(this);
    this.convert = this.convert.bind(this);
    this.__getStr = this.__getStr.bind(this);
    this.__getUnitsAndScale = this.__getUnitsAndScale.bind(this);
    this.__handleSmallerThan100 = this.__handleSmallerThan100.bind(this);
  }

  /**
   * setOptions to WrittenNumber
   *
   * @param {Object} [options] An object representation of the options
   * @error {String} options wasn't passed
   */
  setOptions(options) {
    if (!options) throw new Error('WrittenNumber: you need to pass options of you want to change it');
    this.options = { ...defaultParams, ...options };
  }

  /**
   * Converts numbers to their written form.
   *
   * @param {Number} number The number to convert
   * @param {Object} [options] An object representation of the options
   * @return {String} writtenN The written form of `number`
   */
  convert(number, options = this.options) {
    let n = Math.round(+number);

    if (n < 0 || Number.isNaN(n)) {
      return '';
    }

    const { language, noAnd } = options;
    const { scale, units } = this.__getUnitsAndScale();

    const baseCardinals = language.base;
    const alternativeBaseCardinals = options.alternativeBase
      ? language.alternativeBase[options.alternativeBase]
      : {};

    if (language.unitExceptions[n]) return language.unitExceptions[n];
    if (alternativeBaseCardinals[n]) return alternativeBaseCardinals[n];
    if (baseCardinals[n]) return baseCardinals[n];
    if (n < 100) {
      return this.__handleSmallerThan100({
        number, language, baseCardinals, alternativeBaseCardinals,
      });
    }

    const m = n % 100;
    let ret = [];

    if (m) {
      if (
        noAnd
          && !(language.andException && language.andException[10])
      ) {
        ret.push(this.convert(m));
      } else {
        ret.push(language.unitSeparator + this.convert(m));
      }
    }

    let firstSignificant;

    for (let i = 0, len = units.length; i < len; i += 1) {
      let r = Math.floor(n / scale[i]);
      let divideBy;

      if (i === len - 1) divideBy = 1000000;
      else divideBy = scale[i + 1] / scale[i];

      r %= divideBy;

      const unit = units[i];

      // eslint-disable-next-line no-continue
      if (!r) continue;
      firstSignificant = scale[i];

      if (unit.useBaseInstead) {
        const shouldUseBaseException = unit.useBaseException.indexOf(r) > -1
            && (unit.useBaseExceptionWhenNoTrailingNumbers
              ? i === 0 && ret.length
              : true);
        if (!shouldUseBaseException) {
          ret.push(alternativeBaseCardinals[r * scale[i]] || baseCardinals[r * scale[i]]);
        } else {
          ret.push(r > 1 && unit.plural ? unit.plural : unit.singular);
        }
        // eslint-disable-next-line no-continue
        continue;
      }

      const str = this.__getStr({ unit, r, m });

      if (
        unit.avoidPrefixException
          && unit.avoidPrefixException.indexOf(r) > -1
      ) {
        ret.push(str);
        // eslint-disable-next-line no-continue
        continue;
      }

      const exception = language.unitExceptions[r];
      const num = exception
          || this.convert(
            r,
            mergeFields(
              {
                // Languages with and exceptions need to set `noAnd` to false
                noAnd: !((language.andException && language.andException[r])
                        || unit.andException) && true,
                alternativeBase: unit.useAlternativeBase,
              },
              this.options,
            ),
          );
      n -= r * scale[i];
      ret.push(`${num} ${str}`);
    }

    const firstSignificantN = firstSignificant * Math.floor(n / firstSignificant);
    const rest = n - firstSignificantN;

    if (
      language.andWhenTrailing
        && firstSignificant
        && rest > 0
        && ret[0].indexOf(language.unitSeparator) !== 0
    ) {
      ret = [ret[0], language.unitSeparator.replace(/\s+$/, '')].concat(
        ret.slice(1),
      );
    }

    // Languages that have separators for all cardinals.
    if (language.allSeparator) {
      for (let i = 0; i < ret.length - 1; i += 1) {
        ret[i] = language.allSeparator + ret[i];
      }
    }
    return ret.reverse().join(' ');
  }

  __getStr({ unit, r, m }) {
    if (typeof unit === 'string') {
      return unit;
    }
    if (r === 1 || (unit.useSingularEnding && r % 10 === 1
        && (!unit.avoidEndingRules || unit.avoidEndingRules.indexOf(r) < 0))) {
      return unit.singular;
    }
    if (unit.few && ((r > 1 && r < 5) || (unit.useFewEnding && r % 10 > 1 && r % 10 < 5
        && (!unit.avoidEndingRules || unit.avoidEndingRules.indexOf(r) < 0)))) {
      return unit.few;
    }
    let str = unit.plural && (!unit.avoidInNumberPlural || !m)
      ? unit.plural
      : unit.singular;

    // Languages with dual
    str = (r === 2 && unit.dual) ? unit.dual : str;

    // "restrictedPlural" : use plural only for 3 to 10
    return (r > 10 && unit.restrictedPlural) ? unit.singular : str;
  }

  __getUnitsAndScale() {
    const { language: { units, useLongScale } } = this.options;
    if (!(units instanceof Array)) {
      return Object.keys(units).reduce((acc, key) => ({
        scale: [...acc.scale, Math.pow(10, parseInt(key, 10))],
        units: [...acc.units, units[key]],
      }), { scale: [], units: [] });
    }

    const scale = useLongScale ? longScale : shortScale;
    return { units, scale };
  }

  __handleSmallerThan100({
    number, language, baseCardinals, alternativeBaseCardinals,
  }) {
    const dec = Math.floor(number / 10) * 10;
    const unit = number - dec;
    if (unit) {
      return (
        alternativeBaseCardinals[dec]
        || (baseCardinals[dec] + language.baseSeparator + this.convert(unit))
      );
    }
    return alternativeBaseCardinals[dec] || baseCardinals[dec];
  }
}
