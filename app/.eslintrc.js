module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/jsx-no-constructed-context-values': 0,
    'react/function-component-definition': [2, { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }],
    semi: ['error', 'never'],
    'no-console': 0,
    'import/no-cycle': 0,
    'linebreak-style': 0,
  },
}
