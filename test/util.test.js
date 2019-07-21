"use strict" /* global describe, it */;
var {mergeFields} = require("../lib/util");
var should = require("should");

describe("util", function() {
  describe(".defaults(target, defaults)", function() {
    it("gets exposed", function() {
      should.exist(mergeFields);
    });

    it("extends into the empty object", function() {
      mergeFields({}, { something: "here" })
        .should.eql({ something: "here" });
    });

    it("extends into null", function() {
      mergeFields(null, { something: "here" })
        .should.eql({ something: "here" });
      mergeFields(undefined, { something: "here" })
        .should.eql({ something: "here" });
    });
  });
});
