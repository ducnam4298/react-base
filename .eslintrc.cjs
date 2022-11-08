module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: '*/tsconfig.json',
  },
  env: {
    node: true,
    browser: true,
    commonjs: true,
    amd: true,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'prefer-const': 'off',

    'no-empty': 'off',
    'no-unused-vars': 'off',
    'no-empty-function': 'off',
    'no-useless-escape': 'off',

    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
};
