import  subArrayDivision from './subArrayDivision';

describe('testing subArrayDivision file', () => {
  test('shld return a number', () => {
    expect(subArrayDivision([1, 2, 1, 3, 2], 2, 3)).toEqual(2);
  });
  test('shld return a number', () => {
    expect(subArrayDivision([1,1,1,1,1,1], 2, 3)).toEqual(0);
  });
  test('shld return a number', () => {
    expect(subArrayDivision([4], 1, 4)).toEqual(1);
  });
});