import  nonDivisibleSubset from './nonDivisibleSubset';

describe('testing nonDivisibleSubset file', () => {
  // test('shld return a position array', () => {
  //   expect(nonDivisibleSubset([1, 7, 2, 4], 3)).toEqual(3);
  // });
  test('shld return a position array', () => {
    expect(nonDivisibleSubset([19, 10, 12, 10, 24, 25, 22], 4)).toEqual(3);
  });
  
});