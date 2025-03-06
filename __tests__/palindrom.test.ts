import {isPalindrome} from 'src/utils/palindrom';

describe('Palindrome', () => {
  it('should return true for a palindrome string', () => {
    expect(isPalindrome('madam')).toBe(true);
    expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
  });

  it('should return false for a non-palindrome string', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  it('should return true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  it('should return true for a string with only one character', () => {
    expect(isPalindrome('a')).toBe(true);
  });
});
