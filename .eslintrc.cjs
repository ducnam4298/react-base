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
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'prefer-const': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
};
