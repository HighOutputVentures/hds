import { Config } from 'jest';

const config: Config = {
  displayName: 'date-picker',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/date-picker',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
