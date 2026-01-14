/**
 * Test suite for StringUtils module
 * These tests will be run by Harness CI and generate JUnit XML reports
 */

const StringUtils = require('../src/stringUtils');

describe('StringUtils', () => {
  let stringUtils;

  beforeEach(() => {
    stringUtils = new StringUtils();
  });

  describe('reverse()', () => {
    test('should reverse a simple string', () => {
      expect(stringUtils.reverse('hello')).toBe('olleh');
    });

    test('should reverse a string with spaces', () => {
      expect(stringUtils.reverse('hello world')).toBe('dlrow olleh');
    });

    test('should handle empty string', () => {
      expect(stringUtils.reverse('')).toBe('');
    });

    test('should handle single character', () => {
      expect(stringUtils.reverse('a')).toBe('a');
    });

    test('should throw error for non-string', () => {
      expect(() => stringUtils.reverse(123)).toThrow(TypeError);
      expect(() => stringUtils.reverse(null)).toThrow(TypeError);
    });
  });

  describe('isPalindrome()', () => {
    test('should return true for palindromes', () => {
      expect(stringUtils.isPalindrome('racecar')).toBe(true);
      expect(stringUtils.isPalindrome('level')).toBe(true);
      expect(stringUtils.isPalindrome('madam')).toBe(true);
    });

    test('should return true for palindromes with mixed case', () => {
      expect(stringUtils.isPalindrome('Racecar')).toBe(true);
      expect(stringUtils.isPalindrome('Level')).toBe(true);
    });

    test('should return true for palindromes with spaces and punctuation', () => {
      expect(stringUtils.isPalindrome('A man a plan a canal Panama')).toBe(true);
      expect(stringUtils.isPalindrome("Was it a car or a cat I saw?")).toBe(true);
    });

    test('should return false for non-palindromes', () => {
      expect(stringUtils.isPalindrome('hello')).toBe(false);
      expect(stringUtils.isPalindrome('world')).toBe(false);
    });

    test('should handle empty string', () => {
      expect(stringUtils.isPalindrome('')).toBe(true);
    });

    test('should throw error for non-string', () => {
      expect(() => stringUtils.isPalindrome(12321)).toThrow(TypeError);
    });
  });

  describe('wordCount()', () => {
    test('should count words in a simple sentence', () => {
      expect(stringUtils.wordCount('hello world')).toBe(2);
    });

    test('should count words with multiple spaces', () => {
      expect(stringUtils.wordCount('hello   world')).toBe(2);
    });

    test('should handle single word', () => {
      expect(stringUtils.wordCount('hello')).toBe(1);
    });

    test('should handle empty string', () => {
      expect(stringUtils.wordCount('')).toBe(0);
    });

    test('should handle string with only spaces', () => {
      expect(stringUtils.wordCount('   ')).toBe(0);
    });

    test('should handle string with tabs and newlines', () => {
      expect(stringUtils.wordCount('hello\tworld\nnew')).toBe(3);
    });

    test('should throw error for non-string', () => {
      expect(() => stringUtils.wordCount(123)).toThrow(TypeError);
    });
  });

  describe('toTitleCase()', () => {
    test('should convert to title case', () => {
      expect(stringUtils.toTitleCase('hello world')).toBe('Hello World');
    });

    test('should handle all caps', () => {
      expect(stringUtils.toTitleCase('HELLO WORLD')).toBe('Hello World');
    });

    test('should handle mixed case', () => {
      expect(stringUtils.toTitleCase('hELLo WoRLD')).toBe('Hello World');
    });

    test('should handle single word', () => {
      expect(stringUtils.toTitleCase('hello')).toBe('Hello');
    });

    test('should handle empty string', () => {
      expect(stringUtils.toTitleCase('')).toBe('');
    });

    test('should throw error for non-string', () => {
      expect(() => stringUtils.toTitleCase(123)).toThrow(TypeError);
    });
  });

  describe('truncate()', () => {
    test('should truncate long string', () => {
      expect(stringUtils.truncate('Hello, World!', 10)).toBe('Hello, ...');
    });

    test('should not truncate short string', () => {
      expect(stringUtils.truncate('Hello', 10)).toBe('Hello');
    });

    test('should handle exact length', () => {
      expect(stringUtils.truncate('Hello', 5)).toBe('Hello');
    });

    test('should handle empty string', () => {
      expect(stringUtils.truncate('', 5)).toBe('');
    });

    test('should throw error for non-string first argument', () => {
      expect(() => stringUtils.truncate(123, 5)).toThrow(TypeError);
    });

    test('should throw error for non-number second argument', () => {
      expect(() => stringUtils.truncate('hello', '5')).toThrow(TypeError);
    });

    test('should throw error for negative length', () => {
      expect(() => stringUtils.truncate('hello', -5)).toThrow(TypeError);
    });
  });

  describe('countChar()', () => {
    test('should count character occurrences', () => {
      expect(stringUtils.countChar('hello', 'l')).toBe(2);
    });

    test('should return 0 for missing character', () => {
      expect(stringUtils.countChar('hello', 'z')).toBe(0);
    });

    test('should handle case sensitivity', () => {
      expect(stringUtils.countChar('Hello', 'h')).toBe(0);
      expect(stringUtils.countChar('Hello', 'H')).toBe(1);
    });

    test('should handle empty string', () => {
      expect(stringUtils.countChar('', 'a')).toBe(0);
    });

    test('should throw error for non-string arguments', () => {
      expect(() => stringUtils.countChar(123, 'a')).toThrow(TypeError);
      expect(() => stringUtils.countChar('hello', 1)).toThrow(TypeError);
    });

    test('should throw error for multi-character second argument', () => {
      expect(() => stringUtils.countChar('hello', 'll')).toThrow('Second argument must be a single character');
    });
  });

  describe('removeDuplicates()', () => {
    test('should remove duplicate characters', () => {
      expect(stringUtils.removeDuplicates('hello')).toBe('helo');
    });

    test('should preserve order', () => {
      expect(stringUtils.removeDuplicates('aabbccddee')).toBe('abcde');
    });

    test('should handle string with no duplicates', () => {
      expect(stringUtils.removeDuplicates('abcde')).toBe('abcde');
    });

    test('should handle empty string', () => {
      expect(stringUtils.removeDuplicates('')).toBe('');
    });

    test('should handle single character', () => {
      expect(stringUtils.removeDuplicates('a')).toBe('a');
    });

    test('should throw error for non-string', () => {
      expect(() => stringUtils.removeDuplicates(123)).toThrow(TypeError);
    });
  });

  describe('toCamelCase()', () => {
    test('should convert kebab-case to camelCase', () => {
      expect(stringUtils.toCamelCase('hello-world')).toBe('helloWorld');
    });

    test('should convert snake_case to camelCase', () => {
      expect(stringUtils.toCamelCase('hello_world')).toBe('helloWorld');
    });

    test('should convert space separated to camelCase', () => {
      expect(stringUtils.toCamelCase('hello world')).toBe('helloWorld');
    });

    test('should handle multiple words', () => {
      expect(stringUtils.toCamelCase('this-is-a-test')).toBe('thisIsATest');
    });

    test('should handle mixed separators', () => {
      expect(stringUtils.toCamelCase('hello-world_test case')).toBe('helloWorldTestCase');
    });

    test('should handle already camelCase', () => {
      expect(stringUtils.toCamelCase('helloWorld')).toBe('helloWorld');
    });

    test('should handle empty string', () => {
      expect(stringUtils.toCamelCase('')).toBe('');
    });

    test('should throw error for non-string', () => {
      expect(() => stringUtils.toCamelCase(123)).toThrow(TypeError);
    });
  });
});

