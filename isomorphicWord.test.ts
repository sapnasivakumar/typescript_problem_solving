import isomorphicWords from './isomorphicWords';

describe('testing isomorphicWords file', () => {
  test('shld return false if words given are not isomorphic', () => {
    expect(isomorphicWords('foo', 'bar')).toBe(false);
  });
  test('shld return true if words given are isomorphic', () => {
    expect(isomorphicWords('foo', 'add')).toBe(true);
  });
});