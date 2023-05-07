const path = require('path')

module.exports = {
    env: {
        es2021: true,
    },
    extends: ['standard-with-typescript', 'prettier'],
    parserOptions: {
        project: path.join(__dirname, '/tsconfig.json'),
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    overrides: [],
}
