import  leftRotation from './leftRotation';

describe('testing leftRotation file', () => {
  test('shld return a boolean', () => {
    expect(leftRotation([1,2,3,4,5], 2)).toEqual([ 3, 4, 5, 1, 2 ]);
  });
});