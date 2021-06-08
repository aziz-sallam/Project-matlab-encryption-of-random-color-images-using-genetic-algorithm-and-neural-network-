module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true
  },
  plugins: ['jsx-a11y'],
  parser: '@babel/eslint-parser',
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:jsx-a11y/recommended'
  ],
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
    'import/no-extraneous-dependencies': ['error']
  },
  overrides: [
    {
      files: [
        '**/tests/**/*.js'
      ],
      env: {
        jest: true
      }
    }
  ]
}
