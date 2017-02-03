import * as t from './action-types';
import * as a from './actions';


describe('<%= featureName %>', () => {
  describe('actions', () => {
    it(`should create an ${t.ACTION} action`, () => {
      const expected = { type: t.ACTION, payload: {} };
      const actual = a.action();

      expect(expected).toEqual(actual);
    });

    // todo: add more tests!
  });
});
