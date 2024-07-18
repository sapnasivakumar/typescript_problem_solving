import socksWithoutPair  from './pairsOfSocks';

describe('testing pairsOfSocks file', () => {
  test('shld return number of socks without a pair', () => {
    expect(socksWithoutPair([1,1,2,2,2,2])).toEqual(0);
  });
});