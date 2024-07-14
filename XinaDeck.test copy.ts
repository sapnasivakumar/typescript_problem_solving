import hasGroupsSizeX  from './XinaDeck';

describe('testing XinaDeck file', () => {
  test('shld return a boolean', () => {
    expect(hasGroupsSizeX([1,1,2,2,2,2])).toBe(true);
  });
});