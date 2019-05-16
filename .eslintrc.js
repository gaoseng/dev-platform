
    
// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    // 'prettier'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'html',
    'vuefix'
    // 'prettier' //统一代码
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 'off',
    'eol-last': ['error', 'always'],
    'semi': ['error', 'never'],
    // "prettier/prettier": "error"
    "vuefix/vuefix": [2, {"auto": true}]
  }
}
