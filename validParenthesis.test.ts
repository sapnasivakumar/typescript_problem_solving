//import validParenthesis  from './validParenthesis';
import isValidParenthesis from './validParenthesis';

describe('testing validParenthesis file', () => {
//   test('shld return true if all types of brackets are opened and closed correspondingly', () => {
//     expect(isValidParenthesis('(]')).toBe(false);
//   });
  test('shld return true if all types of brackets are opened and closed correspondingly', () => {
    expect(isValidParenthesis('{()}')).toBe(true);
   });
//   test('shld return true if all types of brackets are opened and closed correspondingly', () => {
//     expect(isValidParenthesis('([)]')).toBe(false);
//   });
});