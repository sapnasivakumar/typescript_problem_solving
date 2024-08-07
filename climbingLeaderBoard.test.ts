import  climbingLeaderBoard from './climbingLeaderBoard';

describe('testing climbingLeaderBoard file', () => {
  test('shld return a position array', () => {
    expect(climbingLeaderBoard([100, 90, 90, 80], [70, 80, 105])).toEqual([4, 3, 1]);
  });
  test('shld return a position array', () => {
    expect(climbingLeaderBoard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])).toEqual([6, 5, 4, 2, 1]);
  });
  test('shld return a position array', () => {
    expect(climbingLeaderBoard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])).toEqual([6, 4, 2, 1]);
  });
  
});