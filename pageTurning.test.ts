import pageTurning from './pageTurning';

describe('testing pageTurning file', () => {
  test('shld return a number representing minimum page turns', () => {
    expect(pageTurning(5,4)).toEqual(1);
  });
});