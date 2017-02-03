import * as s from './selectors';


describe('<%= featureName %>', () => {
  describe('seletors', () => {
    // todo: fill out state to match your feature's state
    const state = {
      <%= featureName %>: {
        value: 3,
      },
    };

    it('should get value from state', () => {
      const expected = 3;
      const actual = s.getValue(state);

      expect(expected).toBe(actual);
    });

    // todo: add more tests!
  });
})
