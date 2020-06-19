/**
 * Since the library is just a really straightforward utility, I'm adding these
 * regression tests.
 *
 * These will snapshot test numbers in all locales to prevent regressions.
 *
 * The tests hash the strings for all numbers under 100k and for a deterministic
 * pseudo-random sequence between 100k and 1 million.
 *
 * These take around 16s to run.
 */
const crypto = require('crypto');
const writtenNumber = require('..');

const supportedLocales = Object.keys(writtenNumber.i18n);

/**
 * Testing
 */
function makeFakeRandom(minimum, seed) {
  let curr = seed;
  return (limit) => {
    curr++;
    return Math.floor(minimum + Math.sin(curr) * limit);
  }
}

const random = makeFakeRandom(1000, 1231492843);

describe('Regression tests', () => {
  supportedLocales.forEach(locale => {
    describe(locale, () => {
      function testStableHash(limit) {
        const hash = crypto.createHash('md5');

        for (let i = 0; i < limit; i++) {
          const result = writtenNumber(i, {lang: locale});
          hash.update(i + ':' + result);
        }

        expect(hash.digest('hex')).toMatchSnapshot();
      }

      it('has not changed from previous versions lower to 10', () => {
        testStableHash(10);
      });

      it('has not changed from previous versions lower to 100', () => {
        testStableHash(100);
      });

      it('has not changed from previous versions lower to 1k', () => {
        testStableHash(1000);
      });

      it('has not changed from previous versions lower to 10k', () => {
        testStableHash(10000);
      });

      it('has not changed from previous versions lower to 100k', () => {
        testStableHash(100000);
      });

      it('has not changed from previous versions', () => {
        const hash = crypto.createHash('md5');
        const results = [];

        for (let i = 10e4; i < 10e6; i += random(10e3)) {
          const result = writtenNumber(i, { lang: locale });
          hash.update(i + ':' + result);
        }

        expect(hash.digest('hex')).toMatchSnapshot();
      });
    })
  });
});
