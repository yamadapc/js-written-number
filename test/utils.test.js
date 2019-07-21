import {mergeFields} from '../lib/utils';

describe("utils", function() {
  describe(".mergeFields(target, defaults)", function() {
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
