module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
};
