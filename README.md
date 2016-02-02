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

## Install with npm

```bash
npm i --save written-number
```

## Install with bower

```bash
bower install written-number
```

## Usage
```javascript
var writtenNumber = require('written-number');
writtenNumber(1234); // => 'one thousand two hundred and thirty-four'
```

## Options
- `noAnd` - Defaults to `false`. Determines whether to use a separator. The
  separator is internationalized.
- `lang` - Defaults to `'en'`. Determines which language to use.

## Internationalization
Currently supported languages are:
- English `lang = "en"`
- Portuguese `lang = "pt"`
- Spanish `lang = "es"`
- French `lang = "fr"`

### Spanish Example
```javascript
var writtenNumber = require('written-number');
writtenNumber(1234, { lang: 'es' }); // => 'mil doscientos treinta y cuatro'
```

```javascript
var writtenNumber = require('written-number');
writtennumber.defaults.lang = 'es';
writtenNumber(4758); // => 'cuatro mil setecientos cincuenta y ocho'
```

### Portuguese Example
```javascript
var writtenNumber = require('written-number');
writtenNumber(1234, { lang: 'pt' }); // => 'mil duzentos e trinta e quatro'
```

### French Example
```javascript
var writtenNumber = require('written-number');
writtenNumber(1234, { lang: 'fr' }); // => 'mille deux cent trente-quatre'
```

## Options
Property       | Value
-------------- | -------------
noAnd          | false
lang           | 'en'

### Configure your own language
Each language has it's own unique grammar exceptions.  You can create your own
language.json file in the folder "i18n" and give writtenNumber support for it. I
don't think the current scheme and logic cover all the cases, but may be cover
some.

##### useLongScale:
'Boolean' that indicates if it use [long or short
scale](http://en.wikipedia.org/wiki/Long_and_short_scales). This differs the
meaning of the words `billion`, `trillion` and so on.

##### baseSeparator:
'String' that separates the base cardinal numbers.
Example: 29 -> twenty`-`eight. Spanish uses the conector " y ".

##### unitSeparator:
'String' that separates the units from the last base cardinal numbers.
Example: 1234 -> one thousand two hundred **and** thirty-four

##### base:
Base cardinals numbers. Numbers that have unique names and are used to build
others.

##### units:
Number units.
It can be:
- String

- Object normal flow. Give support to singular and plural units. English does
  not need this, but spanish does.

```json
{
  "singular": "millón",
  "plural": "millones"
}
```

- Object with `useBaseInstead` exception.
In some languages like spanish, specific units like "ciento", use the base
cardinal number instead.

With `useBaseException` you can also specify with which unit (1 to 9) you don't
want use the base cardinal instead and use the regular behaviour.

```json
{
  "singular": "ciento",
  "useBaseInstead": true,
  "useBaseException": [1]
}
```

- Object with `avoidPrefixException` exception.

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

##### unitExceptions:
Sometimes grammar exceptions affect the base cardinal joined to the unit. You
can set specific exceptions to any base cardinal number.

Spanish example:

```
Without Exception (Wrong): 1232000 -> **uno** millón doscientos treinta y dos mil
```

```
With Exception: 1232000 -> **un** millón doscientos treinta y dos mil
```

### English configuration example
```json
{
  "useLongScale": false,
  "baseSeparator": "-",
  "unitSeparator": "and ",
  "base": {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    ...
    "90": "ninety"
  },
  "units" : [
    "hundred",
    "thousand",
    "million",
    "billion",
    "trillion",
    ...
    "quindecillion"
  ],
  "unitExceptions": []
}
```

### Spanish configuration example
```json
{
  "useLongScale": true,
  "baseSeparator": " y ",
  "unitSeparator": "",
  "base": {
    "0": "cero",
    "1": "uno",
    "2": "dos",
    "3": "tres",
    ...
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
    ...
  ]
}
```

## Contributing
Do your changes and submit a PR. If you've write access and want to bump the
version, run `mversion [major|minor|patch] -m`. That'll bump both `bower.json`
and `package.json`.

## License
This code is licensed under the MIT license for Pedro Tacla Yamada. For more
information, please refer to the [LICENSE](/LICENSE) file.
