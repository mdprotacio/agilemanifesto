module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'prettier/standard'
  ],
  plugins: ['prettier', 'react'],
  rules: {
    'prettier/prettier': 'error'
  }
};
