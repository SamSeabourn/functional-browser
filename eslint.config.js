import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import perfectionist from 'eslint-plugin-perfectionist';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
    { ignores: ['dist', 'node_modules'] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            prettierConfig, // Always last
        ],
        plugins: {
            perfectionist,
            prettier: prettierPlugin,
        },
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        rules: {
            'perfectionist/sort-imports': [
                'error',
                {
                    type: 'line-length',
                    order: 'asc',
                },
            ],
            'perfectionist/sort-objects': [
                'error',
                {
                    type: 'line-length',
                    order: 'asc',
                },
            ],
            'perfectionist/sort-classes': [
                'error',
                {
                    type: 'alphabetical',
                    order: 'asc',
                },
            ],
            'prettier/prettier': [
                'error',
                {
                    printWidth: 100,
                    singleQuote: true,
                    jsxSingleQuote: false,
                    bracketSameLine: false,
                },
            ],
            '@typescript-eslint/no-explicit-any': 'off', // NOTE: Setting for experimental API's
        },
    },
);
