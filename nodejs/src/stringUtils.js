/**
 * String Utilities module - Common string manipulation functions
 * Used to demonstrate testing with Harness CI
 */

class StringUtils {
  /**
   * Reverses a string
   * @param {string} str - Input string
   * @returns {string} Reversed string
   */
  reverse(str) {
    if (typeof str !== 'string') {
      throw new TypeError('Argument must be a string');
    }
    return str.split('').reverse().join('');
  }

  /**
   * Checks if a string is a palindrome
   * @param {string} str - Input string
   * @returns {boolean} True if palindrome, false otherwise
   */
  isPalindrome(str) {
    if (typeof str !== 'string') {
      throw new TypeError('Argument must be a string');
    }
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
  }

  /**
   * Counts the number of words in a string
   * @param {string} str - Input string
   * @returns {number} Number of words
   */
  wordCount(str) {
    if (typeof str !== 'string') {
      throw new TypeError('Argument must be a string');
    }
    const trimmed = str.trim();
    if (trimmed === '') {
      return 0;
    }
    return trimmed.split(/\s+/).length;
  }

  /**
   * Converts string to title case
   * @param {string} str - Input string
   * @returns {string} Title cased string
   */
  toTitleCase(str) {
    if (typeof str !== 'string') {
      throw new TypeError('Argument must be a string');
    }
    return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  /**
   * Truncates a string to specified length with ellipsis
   * @param {string} str - Input string
   * @param {number} maxLength - Maximum length
   * @returns {string} Truncated string
   */
  truncate(str, maxLength) {
    if (typeof str !== 'string') {
      throw new TypeError('First argument must be a string');
    }
    if (typeof maxLength !== 'number' || maxLength < 0) {
      throw new TypeError('Second argument must be a non-negative number');
    }
    if (str.length <= maxLength) {
      return str;
    }
    return str.slice(0, maxLength - 3) + '...';
  }

  /**
   * Counts occurrences of a character in a string
   * @param {string} str - Input string
   * @param {string} char - Character to count
   * @returns {number} Number of occurrences
   */
  countChar(str, char) {
    if (typeof str !== 'string' || typeof char !== 'string') {
      throw new TypeError('Both arguments must be strings');
    }
    if (char.length !== 1) {
      throw new Error('Second argument must be a single character');
    }
    return str.split(char).length - 1;
  }

  /**
   * Removes duplicate characters from a string
   * @param {string} str - Input string
   * @returns {string} String with unique characters only
   */
  removeDuplicates(str) {
    if (typeof str !== 'string') {
      throw new TypeError('Argument must be a string');
    }
    return [...new Set(str)].join('');
  }

  /**
   * Converts a string to camelCase
   * @param {string} str - Input string (can be kebab-case, snake_case, or space separated)
   * @returns {string} camelCase string
   */
  toCamelCase(str) {
    if (typeof str !== 'string') {
      throw new TypeError('Argument must be a string');
    }
    return str
      .replace(/[-_\s]+(.)?/g, (_, char) => char ? char.toUpperCase() : '')
      .replace(/^(.)/, (char) => char.toLowerCase());
  }
}

module.exports = StringUtils;

