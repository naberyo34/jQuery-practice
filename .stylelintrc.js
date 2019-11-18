module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    './node_modules/prettier-stylelint/config.js',
  ],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'declaration-empty-line-before': 'never',
    indentation: 2,
    'no-missing-end-of-source-newline': null,
    'string-quotes': 'single',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
};
