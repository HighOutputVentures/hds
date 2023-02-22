module.exports = {
  setupFilesAfterEnv: ['jest-canvas-mock'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  }
};