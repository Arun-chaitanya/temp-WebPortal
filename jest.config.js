/** @type {import('jest').Config} */
const config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.test.json",
    },
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    "^@api/(.*)$": "<rootDir>/src/api/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@config/(.*)$": "<rootDir>/src/config/$1",
    "^@contexts/(.*)$": "<rootDir>/src/contexts/$1",
    "^@hocs/(.*)$": "<rootDir>/src/hocs/$1",
    "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@icons/(.*)$": "<rootDir>/src/icons/$1",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@types$": "<rootDir>/src/types",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@views/(.*)$": "<rootDir>/src/views/$1",
    "^@store/(.*)$": "<rootDir>/src/store/$1",
  },
};

module.exports = config;
