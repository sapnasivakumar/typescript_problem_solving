import contiguousSubstringVowels  from './contiguousSubstringVowels';

describe('testing contiguousSubstringVowels file', () => {
  test('shld return true if contiguous substring of vowels', () => {
    expect(contiguousSubstringVowels('abcdeeafg')).toBe(true);
  });
  test('shld return true if contiguous substring of vowels', () => {
    expect(contiguousSubstringVowels('aeiou')).toBe(true);
  });
  test('shld return true if contiguous substring of vowels', () => {
    expect(contiguousSubstringVowels('abxy')).toBe(false);
  });
  test('shld return true if contiguous substring of vowels', () => {
    expect(contiguousSubstringVowels('aebcdefghij')).toBe(false);
  });
  test('shld return true if contiguous substring of vowels', () => {
    expect(contiguousSubstringVowels('ae')).toBe(false);
  });
});