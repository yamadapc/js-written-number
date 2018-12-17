# js-written-number
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/yamadapc/js-written-number?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Build Status](https://secure.travis-ci.org/yamadapc/js-written-number.png?branch=master)](http://travis-ci.org/yamadapc/js-written-number)
[![Code Climate](https://codeclimate.com/github/yamadapc/js-written-number.png)](https://codeclimate.com/github/yamadapc/js-written-number)
[![Coverage Status](https://coveralls.io/repos/yamadapc/js-written-number/badge.png?branch=master)](https://coveralls.io/r/yamadapc/js-written-number?branch=master)
[![Dependency Status](https://david-dm.org/yamadapc/js-written-number.png)](https://david-dm.org/yamadapc/js-written-number)
[![devDependency Status](https://david-dm.org/yamadapc/js-written-number/dev-status.png)](https://david-dm.org/yamadapc/js-written-number#info=devDependencies)
[![Analytics](https://ga-beacon.appspot.com/UA-54450544-1/js-written-number/README)](https://github.com/igrigorik/ga-beacon)
[![npm downloads per month](http://img.shields.io/npm/dm/written-number.svg)](https://www.npmjs.org/package/written-number)
[![npm version](https://img.shields.io/npm/v/written-number.svg)](https://www.npmjs.org/package/written-number)
- - -
Convert numbers to words - their written form.

## Install
With npm:
```bash
npm install --save written-number
```
With bower:
```bash
bower install written-number
```

## Usage
```javascript
var writtenNumber = require('written-number');
writtenNumber(1234); // => 'one thousand two hundred and thirty-four'

writtenNumber(1234, {lang: 'fr'}); // => 'mille deux cent trente-quatre'
writtenNumber.defaults.lang = 'es';
writtenNumber(4758); // => 'cuatro mil setecientos cincuenta y ocho'

writtenNumber(1234, {lang: 'es'});   // => 'mil doscientos treinta y cuatro'
writtenNumber(1234, {lang: 'pt'});   // => 'mil duzentos e trinta e quatro'
writtenNumber(1234, {lang: 'ar'});   // => 'ألف ومائتان وأربعة وثلاثون'
writtenNumber(1234, {lang: 'eo'});   // => 'mil ducent tridek kvar'
writtenNumber(1234, {lang: 'vi'});   // => 'một ngàn hai trăm và ba mươi bốn'
writtenNumber(1234, {lang: 'uk'});   // => 'одна тисяча двісті тридцять чотири'
writtenNumber(1234, {lang: 'id'});   // => 'seribu dua ratus tiga puluh empat'
```

## Options
- `noAnd` - Defaults to `false`. Determines whether to use a separator. The
  separator is internationalized.
- `lang` - Could be `string` or `object`. Defaults to `'en'`. Determines which
  language to use. An i18n configuration object may be passed to support
  external language definitions.

Currently supported languages are:

| Language | `lang` |
|---------|--------|
| English | `en` |
| Portuguese (Brazil) | `pt` |
| Portuguese (Portugal) | `ptPT` |
| Spanish | `es` |
| French | `fr` |
| Esperanto | `eo` |
| Vietnamese | `vi` |
| Arabic | `ar` |
| Turkish | `tr` |
| English (Indian) | `enIndian` |
| Ukrainian | `uk` |
| Indonesian | `id` |


## Configure your own language
Each language has it's own unique grammar exceptions.  You can create your own 
language.json file in the folder "i18n" and give writtenNumber support for it. I 
don't think the current scheme and logic cover all the cases, but may be cover 
some.

##### useLongScale:
'Boolean' that indicates if it use [long or short scale](http://en.wikipedia.org/wiki/Long_and_short_scales). This differs the meaning of the words `billion`, `trillion` and so on.

##### baseSeparator:
'String' that separates the base cardinal numbers.
Example: 29 -> twenty`-`eight. Spanish uses the conector " y ".

##### unitSeparator:
'String' that separates the units from the last base cardinal numbers.
Example: 1234 -> one thousand two hundred **and** thirty-four

##### allSeparator:
'String' that separates all cardinals, not only the last one.
Example: 1125 -> ألف **و**مائة **و**خمسة **و**عشرون

##### base:
Base cardinals numbers. Numbers that have unique names and are used to build others.

##### alternativeBase:
Alternative versions of base cardinals numbers for usage with specific units (ex. thousands in Ukrainian use feminine form of base cardinal numbers). These bases will be treated as an extension for the default `base`.

```json
"alternativeBase": {
  "feminine": {
    "1": "одна",
    "2": "дві"
  }
}
```

##### units:
Number units.
It can be:
- String
- Object normal flow. Give support to singular, dual, and plural units. English does not need this, but spanish does.
```json
{
  "singular": "millón",
  "plural": "millones"
}
```

- Object with `few` word form.

In some languages like Ukrainian, there are specific unit forms for values from 2 (including) to 4 (including). This forms can be specified with `few`.

```json
{
  "singular": "мільйон",
  "few": "мільйони",
  "plural": "мільйонів",
}
```

- Object with `useAlternativeBase`.

Selects an `alternativeBase` name which this unit should prefer over the default `base` if possible.

```json
{
  "singular": "тисяча",
  "few": "тисячі",
  "plural": "тисяч",
  "useAlternativeBase": "feminine"
}
```


- Object with `useBaseInstead` exception.

In some languages like spanish and arabic, specific units like "ciento", use the base cardinal number instead.

- Object with `useBaseException`: You can also specify with which unit (1 to 9) you don't
want use the base cardinal instead and use the regular behaviour:

```json
{
  "singular": "ciento",
  "useBaseInstead": true,
  "useBaseException": [1]
}
```
- Object with `avoidPrefixException` exception:
In some languages like spanish, specific units like "mil" does not use the base
cardinal number prefix for unit 1.
```json
{
  "singular": "mil",
  "avoidPrefixException": [1]
}
```
- Object with `avoidInNumberPlural` exception.
In some languages like french, specific units like "cent" does not use the plural form inside of
numbers wioth trailing numbers other than 0, for example "deux cents" and "deux cent trois".
```json
{
  "singular": "cent",
  "plural": "cents",
  "avoidInNumberPlural": true
}
```
- Object with `restrictedPlural` boolean:
If plural is used only for numbers from 3 to 10 , but the singular form is used if the number is older than 11. 

- Object with `useSingularEnding` exception and `useFewEnding` exception.

In some languages like Ukrainian, singular form of the unit is also used for any values that end with 1 (21, 31, 14, ..., 101, ...) and "few" form of the unit is also used for any values that end with 2, 3 and 4 (22, 33, 44, ..., 104, ...). The `avoidEndingRules` exception provides values (1 to 999) where these rules must be ignored and the plural form must be used instead.

```json
{
  "singular": "мільйон",
  "few": "мільйони",
  "plural": "мільйонів",
  "useSingularEnding": true,
  "useFewEnding": true,
  "avoidEndingRules": [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
}
```

##### unitExceptions:
Sometimes grammar exceptions affect the base cardinal joined to the unit. You
can set specific exceptions to any base cardinal number.
Spanish example:
```
Without Exception (Wrong): 1232000 -> **uno** millón doscientos treinta y dos mil
With Exception: 1232000 -> **un** millón doscientos treinta y dos mil
```

## Contributing
Do your changes and submit a PR. If you've write access and want to bump the version, run `mversion [major|minor|patch] -m`. That'll bump both `bower.json` and `package.json`.

## License
This code is licensed under the MIT license for Pedro Tacla Yamada. For more information, please refer to the [LICENSE](/LICENSE) file.
