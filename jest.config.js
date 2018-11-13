// Copyright (c) 2014-present, Facebook, Inc. All rights reserved.

'use strict';

module.exports = {
  collectCoverageFrom: [
    '**/packages/*/**/*.js',
    '!**/bin/**',
    '!**/cli/**',
    '!**/perf/**',
    '!**/__mocks__/**',
    '!**/__tests__/**',
    '!**/build/**',
    '!**/vendor/**',
    '!e2e/**',
  ],
  modulePathIgnorePatterns: [
    'examples/.*',
    'packages/.*/build',
    'packages/.*/build-es5',
    'packages/jest-runtime/src/__tests__/test_root.*',
    'website/.*',
    'e2e/runtime-internal-module-registry/__mocks__',
  ],
  projects: ['<rootDir>', '<rootDir>/examples/*/'],
  setupFilesAfterEnv: ['<rootDir>/testSetupFile.js'],
  snapshotSerializers: [
    '<rootDir>/packages/pretty-format/build/plugins/ConvertAnsi.js',
  ],
  testEnvironment: './packages/jest-environment-node',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/examples/',
    '/e2e/.*/__tests__',
    '\\.snap$',
    '/packages/.*/build',
    '/packages/.*/build-es5',
    '/packages/.*/src/__tests__/getPrettyPrint.js',
    '/packages/jest-cli/src/__tests__/test_root',
    '/packages/jest-cli/src/__tests__/__fixtures__/',
    '/packages/jest-cli/src/lib/__tests__/fixtures/',
    '/packages/jest-haste-map/src/__tests__/haste_impl.js',
    '/packages/jest-resolve-dependencies/src/__tests__/__fixtures__/',
    '/packages/jest-runtime/src/__tests__/defaultResolver.js',
    '/packages/jest-runtime/src/__tests__/module_dir/',
    '/packages/jest-runtime/src/__tests__/NODE_PATH_dir',
    '/packages/jest-snapshot/src/__tests__/plugins',
    '/packages/jest-snapshot/src/__tests__/fixtures/',
    '/packages/jest-validate/src/__tests__/fixtures/',
    '/packages/jest-worker/src/__performance_tests__',
    '/packages/pretty-format/perf/test.js',
    '/e2e/__tests__/iterator-to-null-test.js',
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/packages/babel-jest',
  },
};
