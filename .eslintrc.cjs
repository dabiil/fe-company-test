const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:eslint-comments/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'prettier',
  ],
  plugins: [
    'eslint-comments',
    'prettier',
    'promise',
    'react',
    'react-hooks',
    'simple-import-sort',
    '@typescript-eslint',
    'react-refresh',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: path.join(__dirname, 'tsconfig.json'),
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['dist', 'node_modules', '.next', '.eslint.cjs'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_+$',
        argsIgnorePattern: '^_+$',
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-return-assign': 'warn',
    'no-param-reassign': ['warn', { props: false }],
    'no-useless-escape': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'simple-import-sort/exports': 'error',
    'no-bitwise': 'off',
    'no-underscore-dangle': 'off',
    'no-empty': 'error',
    curly: ['error', 'all'],
    'newline-before-return': 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: ['function'],
        next: '*',
      },
    ],
    'sort-imports': 'off',
    'import/order': 'off',
    'comma-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info', 'log'],
      },
    ],
    'no-plusplus': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    'prefer-regex-literals': 'off',
    'arrow-body-style': [
      'warn',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // External packages.
          ['^react', '^@?\\w'],
          // Internal packages.
          ['^containers', '^components', '^hooks', '^helpers', '^types'],
          // Internal folders.
          ['^src/'],
          // Parent imports.
          ['^\\.\\.'],
          // Other relative imports. Put same-folder imports last.
          ['^\\./(?=[^/]*?/)', '^\\.'],
          // Style and types imports.
          ['\\.s?css$', '\\.styles', '\\.types', '^types'],
        ],
      },
    ],
    'react/no-unstable-nested-components': [
      'error',
      {
        allowAsProps: true,
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 'off',
    'react/boolean-prop-naming': [
      'warn',
      {
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
      },
    ],
    'react/destructuring-assignment': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-danger': 'off',
    'no-return-assign': 'off',
    'react/no-children-prop': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/function-component-definition': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: false,
        shorthandLast: true,
        ignoreCase: false,
        noSortAlphabetically: false,
      },
    ],
    'max-len': [
      'error',
      {
        tabWidth: 2,
        code: 120,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'eslint-comments/disable-enable-pair': 'off',
    'eslint-comments/no-unlimited-disable': 'warn',
  },
};
