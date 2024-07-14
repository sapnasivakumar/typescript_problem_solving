import swapCandies  from './swapCandies';

describe('testing XinaDeck file', () => {
  test('shld return a boolean', () => {
    expect(swapCandies([2], [1, 3])).toBe(false);
  });
});