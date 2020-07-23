module.exports = {
  plugins: ['jquery'],
  env: {
    browser: true,
    es6: true,
    jquery: true,
  },
  extends: ['eslint:recommended', 'plugin:jquery/slim'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'jquery/no-slide': 0,
    'jquery/no-animate': 0,
  },
};
