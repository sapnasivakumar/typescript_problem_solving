import runningComparison  from './runningComparison';

describe('testing XinaDrunningComparisoneck file', () => {
  test('shld return a number representing  the times both A& B are happy', () => {
    expect(runningComparison([100, 200, 300], [300, 200, 100])).toEqual(1);
  });
  test('shld return a number representing  the times both A& B are happy', () => {
    expect(runningComparison([1000, 1000, 1000, 1000], [400, 500, 600, 1200])).toEqual(3);
  });
  test('shld return a number representing  the times both A& B are happy', () => {
    expect(runningComparison([800, 399, 1400, 532], [2053, 2300, 3400, 23])).toEqual(0);
  });
  test('shld return a number representing  the times both A& B are happy', () => {
    expect(runningComparison([800, 850, 900, 950, 1000],[600, 800, 1000, 1200, 1400])).toEqual(5);
  });
});