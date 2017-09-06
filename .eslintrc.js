module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  extends: ['airbnb'],
  rules: {
    'react/forbid-prop-types': [1, { forbid: ['any'] }],
    'react/prop-types': 0,
    'class-methods-use-this': [1, { exceptMethods: ['renderField'] }],
    'global-require': 0,
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/label-has-for': 0,
    'no-plusplus': 0,
    'consistent-return': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'no-confusing-arrow': ['error', { allowParens: true }],
  },
  plugins: ['react', 'jsx-a11y', 'import', 'eslint-plugin-html'],

  env: {
    browser: true,
    node: true,
  },
  globals: {
    ENV: true,
  },
};
