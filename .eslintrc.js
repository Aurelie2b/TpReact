module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/destructuring-assignment':0,
    'react/prop-types':0,
    'jsx-a11y/label-has-associated-control':0,
    'react/no-unescaped-entities':0,
    'react/jsx-no-duplicate-props':0,
    'indent':0,
    'linebreak-style':0,
    'react/jsx-one-expression-per-line':0,
    'react/jsx-filename-extension':0,
    'react/jsx-indent':0,
  },
};
