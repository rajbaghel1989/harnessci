/**
 * Calculator module - A simple utility for basic arithmetic operations
 * Used to demonstrate testing with Harness CI
 */

class Calculator {
  /**
   * Adds two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum of a and b
   */
  add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new TypeError('Both arguments must be numbers');
    }
    return a + b;
  }

  /**
   * Subtracts second number from first
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Difference of a and b
   */
  subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new TypeError('Both arguments must be numbers');
    }
    return a - b;
  }

  /**
   * Multiplies two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Product of a and b
   */
  multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new TypeError('Both arguments must be numbers');
    }
    return a * b;
  }

  /**
   * Divides first number by second
   * @param {number} a - Dividend
   * @param {number} b - Divisor
   * @returns {number} Quotient of a and b
   * @throws {Error} When dividing by zero
   */
  divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new TypeError('Both arguments must be numbers');
    }
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }

  /**
   * Calculates the power of a number
   * @param {number} base - The base number
   * @param {number} exponent - The exponent
   * @returns {number} base raised to the power of exponent
   */
  power(base, exponent) {
    if (typeof base !== 'number' || typeof exponent !== 'number') {
      throw new TypeError('Both arguments must be numbers');
    }
    return Math.pow(base, exponent);
  }

  /**
   * Calculates the factorial of a number
   * @param {number} n - Non-negative integer
   * @returns {number} Factorial of n
   * @throws {Error} When n is negative
   */
  factorial(n) {
    if (typeof n !== 'number') {
      throw new TypeError('Argument must be a number');
    }
    if (n < 0) {
      throw new Error('Cannot calculate factorial of negative number');
    }
    if (!Number.isInteger(n)) {
      throw new Error('Factorial is only defined for integers');
    }
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.factorial(n - 1);
  }

  /**
   * Checks if a number is prime
   * @param {number} n - Positive integer
   * @returns {boolean} True if n is prime, false otherwise
   */
  isPrime(n) {
    if (typeof n !== 'number') {
      throw new TypeError('Argument must be a number');
    }
    if (!Number.isInteger(n) || n < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  /**
   * Calculates the nth Fibonacci number
   * @param {number} n - Position in Fibonacci sequence (0-indexed)
   * @returns {number} The nth Fibonacci number
   */
  fibonacci(n) {
    if (typeof n !== 'number') {
      throw new TypeError('Argument must be a number');
    }
    if (n < 0 || !Number.isInteger(n)) {
      throw new Error('Fibonacci is only defined for non-negative integers');
    }
    if (n <= 1) {
      return n;
    }
    let prev = 0, curr = 1;
    for (let i = 2; i <= n; i++) {
      [prev, curr] = [curr, prev + curr];
    }
    return curr;
  }
}

module.exports = Calculator;

