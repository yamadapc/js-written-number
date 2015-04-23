'use strict'; /* global describe, it, before */
var should = require('should');

describe('EN - writtenNumber(n)', function() {
  var writtenNumber = require('..');

  before(function() {
    writtenNumber.DEFAULTS.lang = 'en';
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
    writtenNumber(1234).should.equal('one thousand two hundred and thirty-four');
    writtenNumber(4323).should.equal('four thousand three hundred and twenty-three');
    writtenNumber(242).should.equal('two hundred and forty-two');
  });

  it('correctly converts numbers > 1000', function () {
    writtenNumber(4323000).should.equal('four million three hundred twenty-three thousand');
    writtenNumber(4323055).should.equal('four million three hundred twenty-three thousand and fifty-five');
    writtenNumber(1570025).should.equal('one million five hundred seventy thousand and twenty-five');
  });

  it('correctly converts numbers > 1 000 000 000', function () {
    writtenNumber(1000000000).should.equal('one billion');
    writtenNumber(2580000000).should.equal('two billion five hundred eighty million');
    writtenNumber(1000000000000).should.equal('one trillion');
    writtenNumber(3627000000000).should.equal('three trillion six hundred twenty-seven billion');
  });
});

describe('ES - writtenNumber(n)', function() {
  var writtenNumber = require('..');

  before(function() {
    writtenNumber.DEFAULTS.lang = 'es';
  });

  it('gets exposed', function () {
    should.exist(writtenNumber);
    writtenNumber.should.be.instanceof(Function);
  });

  it('correctly converts numbers < 10', function () {
    writtenNumber(3).should.equal('tres');
    writtenNumber(8).should.equal('ocho');
  });

  it('correctly converts numbers < 20', function () {
    writtenNumber(13).should.equal('trece');
    writtenNumber(19).should.equal('diecinueve');
  });

  it('correctly converts numbers < 100', function () {
    writtenNumber(20).should.equal('veinte');
    writtenNumber(25).should.equal('veinticinco');
    writtenNumber(88).should.equal('ochenta y ocho');
    writtenNumber(73).should.equal('setenta y tres');
  });

  it('correctly converts numbers < 1000', function () {
    writtenNumber(144).should.equal('ciento cuarenta y cuatro');
    writtenNumber(200).should.equal('doscientos');
    writtenNumber(1234).should.equal('mil doscientos treinta y cuatro');
    writtenNumber(4323).should.equal('cuatro mil trescientos veintitres');
    writtenNumber(242).should.equal('doscientos cuarenta y dos');
  });

  it('correctly converts numbers > 1000', function () {
    writtenNumber(4323000).should.equal('cuatro millones trescientos veintitres mil');
    writtenNumber(4323055).should.equal('cuatro millones trescientos veintitres mil cincuenta y cinco');
    writtenNumber(1570025).should.equal('un millón quinientos setenta mil veinticinco');
  });

  it('correctly converts numbers > 1 000 000 000', function () {
    writtenNumber(1000000000).should.equal('mil millones');
    writtenNumber(2580000000).should.equal('dos mil quinientos ochenta millones');
    writtenNumber(1000000000000).should.equal('un billón');
    writtenNumber(3627000000000).should.equal('tres billones seiscientos veintisiete mil millones');
  });

  describe('._defaults(target, defaults)', function() {
    it('extends into the empty object', function() {
      writtenNumber._defaults({}, {something: 'here'})
        .should.eql({something: 'here'});
    });
  });
});
