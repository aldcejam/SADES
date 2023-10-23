import type { Config } from 'jest';

const config: Config = {
  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: [
    "./src/app/**/*.tsx",
    "./src/components/**/*.tsx",
    "./src/slices/**/*.tsx",
    "./src/contexts/**/*.tsx",
    "!**/*.stories.tsx", 
    "!**/*.illustration.tsx"
  ],
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
/*     '^@redux-config/(.*)$': '<rootDir>/.redux/$1',
    '^@base-project/(.*)$': '<rootDir>/$1',
    '^public/(.*)$': '<rootDir>/public/$1', */
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  modulePaths: ['<rootDir>/src/'],
};

export default config;
