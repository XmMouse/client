
module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        '@vue/standard',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2020
    },
    rules: {
        indent: ['error', 4]
    }
}
