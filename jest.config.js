module.exports = {
  automock: false,
  collectCoverage: true,
  verbose: true,
  setupFilesAfterEnv: ['./src/setupTests.js'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/index.jsx',
  ]
};
