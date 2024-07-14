import  stonePile from './stonePile';

describe('testing stonePile file', () => {
  test('shld return the last number in the pile and the player who took the last turn', () => {
    expect(stonePile([-1,0,0,0,0,0])).toEqual([1,0]);
  });
  test('shld return the last number in the pile and the player who took the last turn', () => {
    expect(stonePile([-1,-3,2,4])).toEqual([1,2]);
  });
  test('shld return the last number in the pile and the player who took the last turn', () => {
    expect(stonePile([-5,0,5])).toEqual([0,-5]);
  });
});