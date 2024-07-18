import  appleAndOrange from './appleAndOrange';

describe('testing appleAndOrange file', () => {
  test('shld return an array of apple and orange count', () => {
    expect(appleAndOrange(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])).toEqual([1, 2]);
  });
});