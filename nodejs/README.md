# Node.js Harness CI Demo

A simple Node.js application designed to demonstrate and test Harness CI pipelines.

## 📋 Overview

This application includes:
- **Calculator Module**: Basic arithmetic operations (add, subtract, multiply, divide, factorial, fibonacci, prime check)
- **StringUtils Module**: Common string manipulation functions (reverse, palindrome check, word count, title case, etc.)
- **Express API**: REST endpoints to interact with both modules
- **Comprehensive Test Suite**: 50+ unit tests using Jest with JUnit XML output

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (recommended: 20.x)
- npm 9+

### Installation

```bash
cd nodejs
npm install
```

### Running the Application

```bash
npm start
```

The server will start on `http://localhost:3000`

### Running Tests

```bash
# Run tests with JUnit XML output (for Harness CI)
npm test

# Run tests in watch mode (for development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## 📁 Project Structure

```
nodejs/
├── src/
│   ├── index.js          # Express server & API routes
│   ├── calculator.js     # Calculator utility class
│   └── stringUtils.js    # String manipulation utilities
├── tests/
│   ├── calculator.test.js    # Calculator unit tests
│   └── stringUtils.test.js   # StringUtils unit tests
├── .harness/
│   └── nodejs-pipeline.yaml  # Harness CI pipeline definition
├── package.json
├── .gitignore
└── README.md
```

## 🔌 API Endpoints

### Health Check
- `GET /health` - Returns server health status

### Calculator Operations
- `GET /api/calculator/add?a=5&b=3` - Add two numbers
- `GET /api/calculator/subtract?a=10&b=4` - Subtract two numbers
- `GET /api/calculator/multiply?a=6&b=7` - Multiply two numbers
- `GET /api/calculator/divide?a=20&b=5` - Divide two numbers
- `GET /api/calculator/factorial/:n` - Calculate factorial
- `GET /api/calculator/fibonacci/:n` - Get nth Fibonacci number
- `GET /api/calculator/isprime/:n` - Check if number is prime

### String Operations
- `GET /api/string/reverse?str=hello` - Reverse a string
- `GET /api/string/palindrome?str=racecar` - Check if palindrome
- `GET /api/string/wordcount?str=hello%20world` - Count words

## 🔧 Harness CI Configuration

### Pipeline Setup

1. **Create a new pipeline** in your Harness project
2. **Configure the codebase**:
   - Connect your Git repository
   - Set the repository path
3. **Import or copy** the pipeline from `.harness/nodejs-pipeline.yaml`
4. **Update placeholders**:
   - `YOUR_PROJECT_ID` - Your Harness project identifier
   - `YOUR_ORG_ID` - Your Harness organization identifier
   - `YOUR_GIT_CONNECTOR_ID` - Your Git connector reference

### Pipeline Features

The included pipeline demonstrates:

- ✅ **Cache Intelligence** - Automatic caching of `node_modules`
- ✅ **Dependency Installation** - Using `npm ci` for reproducible builds
- ✅ **Unit Testing** - Jest tests with JUnit XML reports
- ✅ **Test Visualization** - Test results visible in Harness UI
- ✅ **Code Coverage** - Coverage reports generated

### Test Reports

Tests are configured to output JUnit XML format, which Harness CI uses to:
- Display test results in the pipeline execution
- Show pass/fail status for each test
- Track test trends over time

## 📊 Test Coverage

The test suite includes 50+ tests covering:

| Module | Tests | Coverage |
|--------|-------|----------|
| Calculator | 35+ | add, subtract, multiply, divide, power, factorial, isPrime, fibonacci |
| StringUtils | 40+ | reverse, isPalindrome, wordCount, toTitleCase, truncate, countChar, removeDuplicates, toCamelCase |

## 🔗 Resources

- [Harness CI Node.js Guide](https://developer.harness.io/docs/continuous-integration/development-guides/ci-nodejs)
- [Harness CI Documentation](https://developer.harness.io/docs/continuous-integration)
- [Jest Documentation](https://jestjs.io/)

## 📝 License

MIT

