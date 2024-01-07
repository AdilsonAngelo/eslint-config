'use strict';

module.exports = {
    parser: '@typescript-eslint/parser',
    overrides: [
        {
            files: ['src/**/*.ts'],
            parserOptions: {
                project: ['./tsconfig.json'],
            },
            extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
            rules: {
                '@typescript-eslint/no-floating-promises': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-unsafe-argument': 'off',
                '@typescript-eslint/no-unsafe-assignment': 'off',
                '@typescript-eslint/no-unsafe-call': 'off',
                '@typescript-eslint/no-unsafe-enum-comparison': 'off',
                '@typescript-eslint/no-unsafe-member-access': 'off',
                '@typescript-eslint/no-unsafe-return': 'off',
                '@typescript-eslint/prefer-regexp-exec': 'off',
                '@typescript-eslint/require-await': 'warn',
                '@typescript-eslint/restrict-template-expressions': 'off',
                '@typescript-eslint/unbound-method': 'off',
            },
        },
    ],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    rules: {
        'no-restricted-imports': ['error', {
            'patterns': [{
              'group': ['src/*'],
              'message': 'Avoid absolute src path: use relative path instead'
            }]
        }],
        'curly': 'error',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'object-curly-spacing': ['error', 'always'],
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                tabWidth: 4,
                printWidth: 120,
                trailingComma: 'all',
                endOfLine: 'lf',
            },
        ],
    },
};
