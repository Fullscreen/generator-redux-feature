import reducer, { initialState } from './reducer';


describe('<%= featureName %>', () => {
  describe('reducer', () => {
    it('should have a default state', () => {
      const expected = { ...initialState };
      const actual = reducer(undefined, { type: null });

      expect(expected).toEqual(actual);
    });

    // todo: add more tests!
  });
});
