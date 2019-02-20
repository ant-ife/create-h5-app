'use strict';

module.exports = {
  extends: [
    'stylelint-config-antife',
    'stylelint-config-rational-order',
  ],
  plugins: [
    'stylelint-order',
    'stylelint-declaration-block-no-ignored-properties',
  ],
  rules: {
    'function-comma-space-after': null,
    'function-whitespace-after': null,
    'function-name-case': null,
    'plugin/declaration-block-no-ignored-properties': true,
  },
}
