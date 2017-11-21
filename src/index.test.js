/* eslint-env jest */
import yeep from './index';


describe('Yeep client', () => {
  describe('create()', () => {
    it('returns without throwing', () => {
      expect(() => yeep.create()).not.toThrow();
    });
  });
});
