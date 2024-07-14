import  maxProfit from './maxProfit';

describe('testing maxProfit', () => {
  test('shld return the max profit', () => {
    expect(maxProfit([7, 2, 8, 1, 4])).toEqual(6);
  });
});