/**
 * Main entry point for the Node.js Harness CI Demo application
 */

const express = require('express');
const Calculator = require('./calculator');
const StringUtils = require('./stringUtils');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Create instances
const calculator = new Calculator();
const stringUtils = new StringUtils();

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Calculator endpoints
app.get('/api/calculator/add', (req, res) => {
  try {
    const { a, b } = req.query;
    const result = calculator.add(Number(a), Number(b));
    res.json({ operation: 'add', a: Number(a), b: Number(b), result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/calculator/subtract', (req, res) => {
  try {
    const { a, b } = req.query;
    const result = calculator.subtract(Number(a), Number(b));
    res.json({ operation: 'subtract', a: Number(a), b: Number(b), result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/calculator/multiply', (req, res) => {
  try {
    const { a, b } = req.query;
    const result = calculator.multiply(Number(a), Number(b));
    res.json({ operation: 'multiply', a: Number(a), b: Number(b), result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/calculator/divide', (req, res) => {
  try {
    const { a, b } = req.query;
    const result = calculator.divide(Number(a), Number(b));
    res.json({ operation: 'divide', a: Number(a), b: Number(b), result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/calculator/factorial/:n', (req, res) => {
  try {
    const n = Number(req.params.n);
    const result = calculator.factorial(n);
    res.json({ operation: 'factorial', n, result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/calculator/fibonacci/:n', (req, res) => {
  try {
    const n = Number(req.params.n);
    const result = calculator.fibonacci(n);
    res.json({ operation: 'fibonacci', n, result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/calculator/isprime/:n', (req, res) => {
  try {
    const n = Number(req.params.n);
    const result = calculator.isPrime(n);
    res.json({ operation: 'isPrime', n, result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// String utility endpoints
app.get('/api/string/reverse', (req, res) => {
  try {
    const { str } = req.query;
    const result = stringUtils.reverse(str);
    res.json({ operation: 'reverse', input: str, result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/string/palindrome', (req, res) => {
  try {
    const { str } = req.query;
    const result = stringUtils.isPalindrome(str);
    res.json({ operation: 'isPalindrome', input: str, result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/string/wordcount', (req, res) => {
  try {
    const { str } = req.query;
    const result = stringUtils.wordCount(str);
    res.json({ operation: 'wordCount', input: str, result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    name: 'Node.js Harness CI Demo',
    version: '1.0.0',
    description: 'A demo application for testing Harness CI pipelines',
    endpoints: {
      health: '/health',
      calculator: {
        add: '/api/calculator/add?a=5&b=3',
        subtract: '/api/calculator/subtract?a=10&b=4',
        multiply: '/api/calculator/multiply?a=6&b=7',
        divide: '/api/calculator/divide?a=20&b=5',
        factorial: '/api/calculator/factorial/:n',
        fibonacci: '/api/calculator/fibonacci/:n',
        isPrime: '/api/calculator/isprime/:n'
      },
      string: {
        reverse: '/api/string/reverse?str=hello',
        palindrome: '/api/string/palindrome?str=racecar',
        wordcount: '/api/string/wordcount?str=hello world'
      }
    }
  });
});

// Start server only if not in test mode
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/health`);
  });
}

module.exports = app;

