'use strict'; /* global describe, it, before */
var should = require('should');
var writtenNumber = require('..');

describe('written-number', function() {
  describe('writtenNumber(n, { lang: \'en\', ... })', function() {
    before(function() {
      writtenNumber.defaults.lang = 'en';
    });

    it('gets exposed', function() {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it('correctly converts numbers < 10', function() {
      writtenNumber(1000000000).should.equal('one billion');
      writtenNumber(3).should.equal('three');
      writtenNumber(8).should.equal('eight');
    });

    it('correctly converts numbers < 20', function() {
      writtenNumber(13).should.equal('thirteen');
      writtenNumber(19).should.equal('nineteen');
    });

    it('correctly converts numbers < 100', function() {
      writtenNumber(20).should.equal('twenty');
      writtenNumber(25).should.equal('twenty-five');
      writtenNumber(88).should.equal('eighty-eight');
      writtenNumber(73).should.equal('seventy-three');
    });

    it('correctly converts numbers < 1000', function() {
      writtenNumber(200).should.equal('two hundred');
      writtenNumber(242).should.equal('two hundred and forty-two');
      writtenNumber(1234).should.equal(
        'one thousand two hundred and thirty-four'
      );
      writtenNumber(4323).should.equal(
        'four thousand three hundred and twenty-three'
      );
    });

    it('correctly converts numbers > 1000', function() {
      writtenNumber(4323000).should.equal(
        'four million three hundred twenty-three thousand'
      );
      writtenNumber(4323055).should.equal(
          'four million three hundred twenty-three thousand and fifty-five'
        );
      writtenNumber(1570025).should.equal(
        'one million five hundred seventy thousand and twenty-five'
      );
    });

    it('correctly converts numbers > 1 000 000 000', function() {
      writtenNumber(1000000000).should.equal('one billion');
      writtenNumber(2580000000).should.equal(
        'two billion five hundred eighty million'
      );
      writtenNumber(1000000000000).should.equal('one trillion');
      writtenNumber(3627000000000).should.equal(
        'three trillion six hundred twenty-seven billion'
      );
    });
  });

  describe('writtenNumber(n, { lang: \'es\', ... })', function() {
    before(function() {
      writtenNumber.defaults.lang = 'es';
    });

    it('gets exposed', function() {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it('correctly converts numbers < 10', function() {
      writtenNumber(3).should.equal('tres');
      writtenNumber(8).should.equal('ocho');
    });

    it('correctly converts numbers < 20', function() {
      writtenNumber(13).should.equal('trece');
      writtenNumber(19).should.equal('diecinueve');
    });

    it('correctly converts numbers < 100', function() {
      writtenNumber(20).should.equal('veinte');
      writtenNumber(25).should.equal('veinticinco');
      writtenNumber(88).should.equal('ochenta y ocho');
      writtenNumber(73).should.equal('setenta y tres');
    });

    it('correctly converts numbers < 1000', function() {
      writtenNumber(144).should.equal('ciento cuarenta y cuatro');
      writtenNumber(200).should.equal('doscientos');
      writtenNumber(1234).should.equal('mil doscientos treinta y cuatro');
      writtenNumber(4323).should.equal('cuatro mil trescientos veintitres');
      writtenNumber(242).should.equal('doscientos cuarenta y dos');
    });

    it('correctly converts numbers > 1000', function() {
      writtenNumber(4323000).should.equal(
        'cuatro millones trescientos veintitres mil'
      );
      writtenNumber(4323055).should.equal(
        'cuatro millones trescientos veintitres mil cincuenta y cinco'
      );
      writtenNumber(1570025).should.equal(
        'un millón quinientos setenta mil veinticinco'
      );
    });

    it('correctly converts numbers > 1 000 000 000', function() {
      writtenNumber(1000000000).should.equal('mil millones');
      writtenNumber(2580000000).should.equal(
        'dos mil quinientos ochenta millones'
      );
      writtenNumber(1000000000000).should.equal('un billón');
      writtenNumber(3627000000000).should.equal(
        'tres billones seiscientos veintisiete mil millones'
      );
    });
  });

  describe('writtenNumber(n, { lang: \'pt\', ... })', function() {
    before(function() {
      writtenNumber.defaults.lang = 'pt';
    });

    it('gets exposed', function() {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it('correctly converts numbers < 10', function() {
      writtenNumber(3).should.equal('três');
      writtenNumber(8).should.equal('oito');
    });

    it('correctly converts numbers < 20', function() {
      writtenNumber(13).should.equal('treze');
      writtenNumber(19).should.equal('dezenove');
    });

    it('correctly converts numbers < 100', function() {
      writtenNumber(20).should.equal('vinte');
      writtenNumber(25).should.equal('vinte e cinco');
      writtenNumber(88).should.equal('oitenta e oito');
      writtenNumber(73).should.equal('setenta e três');
    });

    it('correctly converts numbers < 1000', function() {
      writtenNumber(144).should.equal('cento e quarenta e quatro');
      writtenNumber(200).should.equal('duzentos');
      writtenNumber(1234).should.equal('mil duzentos e trinta e quatro');
      writtenNumber(4323).should.equal('quatro mil trezentos e vinte e três');
      writtenNumber(242).should.equal('duzentos e quarenta e dois');
    });

    it('correctly converts numbers > 1000', function() {
      writtenNumber(4323000).should.equal(
        'quatro milhões trezentos e vinte e três mil'
      );
      writtenNumber(4323055).should.equal(
        'quatro milhões trezentos e vinte e três mil e cinquenta e cinco'
      );
      writtenNumber(1570025).should.equal(
        'um milhão setecentos mil e vinte e cinco'
      );
    });

    it('correctly converts numbers > 1 000 000 000', function() {
      writtenNumber(1000000000).should.equal('um bilhão');
      writtenNumber(2580000000).should.equal(
        'dois bilhões quinhentos e oitenta milhões'
      );
      writtenNumber(1000000000000).should.equal('um bilhão');
      writtenNumber(3627000000000).should.equal(
        'TODO'
      );
    });
  });
});
