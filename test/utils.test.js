import { mergeFields } from '../lib/utils';

describe('utils', () => {
  describe('.mergeFields(target, defaults)', () => {
    it('extends into the empty object', () => {
      mergeFields({}, { something: 'here' })
        .should.eql({ something: 'here' });
    });

    it('extends into null', () => {
      mergeFields(null, { something: 'here' })
        .should.eql({ something: 'here' });
      mergeFields(undefined, { something: 'here' })
        .should.eql({ something: 'here' });
    });
  });
});
