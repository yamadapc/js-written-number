'use strict'; /* global describe, it */
var should = require('should');
var writtenNumber = require('..');

describe('written-number', function() {
  describe('writtenNumber(n)', function() {
    it('gets exposed', function() {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it('correctly converts numbers < 10', function() {
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

    it('correctly converts numbers > 100', function() {
      writtenNumber(200).should.equal('two hundred');
      writtenNumber(1234).should.equal('one thousand two hundred and thirty-four');
      writtenNumber(4323).should.equal('four thousand three hundred and twenty-three');
      writtenNumber(242).should.equal('two hundred and forty-two');
      writtenNumber(4323000).should.equal('four million three hundred twenty-three thousand');
      writtenNumber(4323055).should.equal('four million three hundred twenty-three thousand and fifty-five');
    });
  });
});
