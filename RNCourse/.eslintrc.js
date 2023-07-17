module.exports = {
  extends: ['@braisc'],
  rules: {
    'react/style-prop-object': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'function-expression', 'arrow-function'],
        unnamedComponents: 'function-expression',
      },
    ],
  },
};
