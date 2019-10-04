"use strict" /* global describe, it, before */;
var should = require("should");
var writtenNumber = require("../lib/standalone");

var en = require("../lib/i18n/en");
var es = require("../lib/i18n/es");

describe("written-number.standalone", function() {
  describe("writtenNumber(n, { lang: 'zzz', ... })", function() {
    before(function() {
      writtenNumber.defaults.lang = "";
    });

    it("gets exposed", function() {
      should.exist(writtenNumber);
      writtenNumber.should.be.instanceof(Function);
    });

    it("throws an error with invalid or no lang object", function() {
      should.throws(function() {
        writtenNumber(1, { lang: "zzz" });
      }, TypeError);
      should.throws(function() {
        writtenNumber(1);
      }, TypeError);
      should.throws(function() {
        writtenNumber(1, { lang: { wrong: "stuff" } });
      }, TypeError);
    });
  });

  describe("writtenNumber(n, { lang: enObject, ... })", function() {
    before(function() {
      writtenNumber.defaults.lang = en;
    });

    it("correctly converts numbers < 10", function() {
      writtenNumber(1000000000).should.equal("one billion");
      writtenNumber(3).should.equal("three");
      writtenNumber(8).should.equal("eight");
    });
  });

  describe("writtenNumber(n, { lang: esObject, ... })", function() {
    before(function() {
      writtenNumber.defaults.lang = es;
    });

    it("correctly converts numbers < 10", function() {
      writtenNumber(1).should.equal("uno");
      writtenNumber(3).should.equal("tres");
      writtenNumber(8).should.equal("ocho");
    });
  });
});
