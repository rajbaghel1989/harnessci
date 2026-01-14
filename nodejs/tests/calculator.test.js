/**
 * Test suite for Calculator module
 * These tests will be run by Harness CI and generate JUnit XML reports
 */

const Calculator = require('../src/calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add()', () => {
    test('should add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add negative numbers', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });

    test('should add a positive and negative number', () => {
      expect(calculator.add(5, -3)).toBe(2);
    });

    test('should add zero', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });

    test('should add decimal numbers', () => {
      expect(calculator.add(1.5, 2.5)).toBe(4);
    });

    test('should throw error for non-number arguments', () => {
      expect(() => calculator.add('2', 3)).toThrow(TypeError);
      expect(() => calculator.add(2, '3')).toThrow(TypeError);
    });
  });

  describe('subtract()', () => {
    test('should subtract two positive numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('should subtract negative numbers', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });

    test('should handle subtraction resulting in negative', () => {
      expect(calculator.subtract(3, 5)).toBe(-2);
    });

    test('should subtract zero', () => {
      expect(calculator.subtract(5, 0)).toBe(5);
    });

    test('should throw error for non-number arguments', () => {
      expect(() => calculator.subtract('5', 3)).toThrow(TypeError);
    });
  });

  describe('multiply()', () => {
    test('should multiply two positive numbers', () => {
      expect(calculator.multiply(4, 5)).toBe(20);
    });

    test('should multiply with negative number', () => {
      expect(calculator.multiply(-4, 5)).toBe(-20);
    });

    test('should multiply two negative numbers', () => {
      expect(calculator.multiply(-4, -5)).toBe(20);
    });

    test('should multiply by zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    test('should multiply decimal numbers', () => {
      expect(calculator.multiply(2.5, 4)).toBe(10);
    });

    test('should throw error for non-number arguments', () => {
      expect(() => calculator.multiply(null, 3)).toThrow(TypeError);
    });
  });

  describe('divide()', () => {
    test('should divide two positive numbers', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });

    test('should divide with negative number', () => {
      expect(calculator.divide(-20, 5)).toBe(-4);
    });

    test('should divide two negative numbers', () => {
      expect(calculator.divide(-20, -5)).toBe(4);
    });

    test('should handle decimal result', () => {
      expect(calculator.divide(7, 2)).toBe(3.5);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error for non-number arguments', () => {
      expect(() => calculator.divide(undefined, 3)).toThrow(TypeError);
    });
  });

  describe('power()', () => {
    test('should calculate positive power', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('should calculate power of zero', () => {
      expect(calculator.power(5, 0)).toBe(1);
    });

    test('should calculate negative power', () => {
      expect(calculator.power(2, -2)).toBe(0.25);
    });

    test('should handle zero base', () => {
      expect(calculator.power(0, 5)).toBe(0);
    });

    test('should throw error for non-number arguments', () => {
      expect(() => calculator.power('2', 3)).toThrow(TypeError);
    });
  });

  describe('factorial()', () => {
    test('should calculate factorial of 0', () => {
      expect(calculator.factorial(0)).toBe(1);
    });

    test('should calculate factorial of 1', () => {
      expect(calculator.factorial(1)).toBe(1);
    });

    test('should calculate factorial of 5', () => {
      expect(calculator.factorial(5)).toBe(120);
    });

    test('should calculate factorial of 10', () => {
      expect(calculator.factorial(10)).toBe(3628800);
    });

    test('should throw error for negative number', () => {
      expect(() => calculator.factorial(-5)).toThrow('Cannot calculate factorial of negative number');
    });

    test('should throw error for non-integer', () => {
      expect(() => calculator.factorial(3.5)).toThrow('Factorial is only defined for integers');
    });

    test('should throw error for non-number', () => {
      expect(() => calculator.factorial('5')).toThrow(TypeError);
    });
  });

  describe('isPrime()', () => {
    test('should return true for prime numbers', () => {
      expect(calculator.isPrime(2)).toBe(true);
      expect(calculator.isPrime(3)).toBe(true);
      expect(calculator.isPrime(5)).toBe(true);
      expect(calculator.isPrime(7)).toBe(true);
      expect(calculator.isPrime(11)).toBe(true);
      expect(calculator.isPrime(97)).toBe(true);
    });

    test('should return false for non-prime numbers', () => {
      expect(calculator.isPrime(1)).toBe(false);
      expect(calculator.isPrime(4)).toBe(false);
      expect(calculator.isPrime(6)).toBe(false);
      expect(calculator.isPrime(9)).toBe(false);
      expect(calculator.isPrime(100)).toBe(false);
    });

    test('should return false for negative numbers', () => {
      expect(calculator.isPrime(-5)).toBe(false);
    });

    test('should return false for non-integers', () => {
      expect(calculator.isPrime(3.5)).toBe(false);
    });

    test('should throw error for non-number', () => {
      expect(() => calculator.isPrime('7')).toThrow(TypeError);
    });
  });

  describe('fibonacci()', () => {
    test('should return 0 for n=0', () => {
      expect(calculator.fibonacci(0)).toBe(0);
    });

    test('should return 1 for n=1', () => {
      expect(calculator.fibonacci(1)).toBe(1);
    });

    test('should calculate fibonacci sequence correctly', () => {
      expect(calculator.fibonacci(2)).toBe(1);
      expect(calculator.fibonacci(3)).toBe(2);
      expect(calculator.fibonacci(4)).toBe(3);
      expect(calculator.fibonacci(5)).toBe(5);
      expect(calculator.fibonacci(6)).toBe(8);
      expect(calculator.fibonacci(10)).toBe(55);
    });

    test('should throw error for negative number', () => {
      expect(() => calculator.fibonacci(-1)).toThrow('Fibonacci is only defined for non-negative integers');
    });

    test('should throw error for non-integer', () => {
      expect(() => calculator.fibonacci(3.5)).toThrow('Fibonacci is only defined for non-negative integers');
    });

    test('should throw error for non-number', () => {
      expect(() => calculator.fibonacci('5')).toThrow(TypeError);
    });
  });
});

