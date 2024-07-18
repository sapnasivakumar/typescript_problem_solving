import utopianTree  from './utopianTree';

describe('testing utopianTree file', () => {
  test('shld return height of the tree corresponding to the test cases', () => {
    expect(utopianTree(4)).toEqual(7);
  });
  test('shld return height of the tree corresponding to the test cases', () => {
    expect(utopianTree(1)).toEqual(2);
  });
  test('shld return height of the tree corresponding to the test cases', () => {
    expect(utopianTree(0)).toEqual(1);
  });
});