module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:react/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
      jsx: true,
    },
    sourceType: 'module',
    requireConfigFile: false,
    // babelOptions: {
    //   cwd: __dirname, // The working directory that all paths in the programmatic options will be resolved relative to.
    //   presets: ['babel-preset-expo', '@babel/preset-env', '@babel/preset-react'],
    // },
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },

  rules: {
    'no-debugger': 0,
    'no-alert': 0,
    'no-await-in-loop': 0,
    'no-return-assign': ['error', 'except-parens'],
    'no-restricted-syntax': [2, 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-unused-vars': [
      1,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err|^_',
      },
    ],
    'unused-imports/no-unused-imports': 'warn',
    'prefer-const': [
      1,
      {
        destructuring: 'all',
      },
    ],
    'arrow-body-style': [2, 'as-needed'],
    'no-unused-expressions': 0,
    '@babel/no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
        allowTernary: true,
        allowShortCircuit: true,
      },
    ],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-plusplus': 0,
    'no-console': 0,
    'import/prefer-default-export': 0,
    import: 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'class-methods-use-this': 0,
    'react/destructuring-assignment': [0, 'always', { ignoreClassFields: true }],
    'react/prop-types': 0,
    'react/no-array-index-key': 0,
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/display-name': 0,
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': [1, 'never'],
    'react/style-prop-object': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        required: {
          every: ['id'],
        },
      },
    ],
    'react/require-default-props': 0,
    'spaced-comment': 0,
    'prefer-template': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    radix: 0,
    'no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 100,
        endOfLine: 'auto',
      },
    ],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  plugins: [
    'prettier',
    'react-hooks',
    '@babel',
    'react',
    'jsx-a11y',
    'import',
    'unused-imports',
    'better-styled-components',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },

  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
      ],
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/quotes': [
          'error',
          'single',
          {
            allowTemplateLiterals: true,
          },
        ],
        'object-curly-newline': 0,
        'operator-linebreak': 0,
        'no-confusing-arrow': 0,
        'implicit-arrow-linebreak': 0,
        'react/jsx-props-no-spreading': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/no-unused-expressions': [
          2,
          {
            allowTaggedTemplates: true,
            allowTernary: true,
            allowShortCircuit: true,
          },
        ],
        '@typescript-eslint/indent': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        'babel/no-unused-expressions': 0,
        'no-console': 0,
        'react/react-in-jsx-scope': 0,
        'import/prefer-default-export': 0,
        '@typescript-eslint/no-unused-vars': [
          1,
          {
            ignoreRestSiblings: true,
            argsIgnorePattern: 'res|next|^err|^_',
          },
        ],
      },
    },
  ],
};
