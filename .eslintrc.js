module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
    },

    parserOptions: {
        ecmaVersion: 2020,
    },

    plugins: ['@typescript-eslint'],

    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        'plugin:eslint-comments/recommended',
        'plugin:json/recommended',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint',
    ],

    rules: {
        // TODO:
        // this rule should not be turned of for master
        'no-console': 'off',
        // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: [
            'error',
            4,
            {
                // 0 would be nicer but somehow eslint is not working with that
                SwitchCase: 1,
            },
        ],
        'brace-style': [
            'error',
            'stroustrup',
            {
                allowSingleLine: true,
            },
        ],
        'space-before-blocks': [
            'error',
            {
                functions: 'never',
                keywords: 'always',
                classes: 'always',
            },
        ],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'no-multiple-empty-lines': [
            'error',
            {
                max: 3,
                maxEOF: 3, // due to vue sfc
                maxBOF: 0,
            },
        ],
        'no-multi-spaces': [
            'error',
            {
                exceptions: {
                    VariableDeclarator: true,
                    ImportDeclaration: true,
                },
            },
        ],
        'comma-dangle': ['error', 'always-multiline'],
        'key-spacing': [
            'error',
            {
                mode: 'minimum',
            },
        ],
        'object-curly-spacing': ['off'],
        'object-property-newline': [
            'error',
            {
                allowAllPropertiesOnSameLine: true,
            },
        ],
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        // some stuff in Prettier can't be controlled nicely.
        'prettier/prettier': 'off',
    },

    overrides: [
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
}
