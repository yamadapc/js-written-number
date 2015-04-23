'use strict'; /* global describe, it */
var util = require('../lib/util');
var should = require('should');

describe('util', function() {
  describe('.defaults(target, defaults)', function() {
    it('gets exposed', function() {
      should.exist(util.defaults);
    });

    it('extends into the empty object', function() {
      util.defaults({}, {something: 'here'})
        .should.eql({something: 'here'});
    });

    it('extends into null', function() {
      util.defaults({}, {something: 'here'})
        .should.eql({something: 'here'});
    });
  });
});
