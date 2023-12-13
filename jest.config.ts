import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ['<rootDir>/.storybook/'],
  testPathIgnorePatterns: ['<rootDir>/.storybook/'],
  moduleDirectories: ['node_modules', 'src'],
};

export default config;
