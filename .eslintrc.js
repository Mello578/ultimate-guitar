module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:promise/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
        'prettier/@typescript-eslint'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2019,
        sourceType: 'module'
    },
    plugins: ['prettier', 'react', 'react-hooks', '@typescript-eslint', 'promise', 'import'],
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            typescript: {}
        }
    },
    rules: {
        'import/order': [
            'error',
            {
                groups: ['external', 'internal', 'unknown', 'builtin', 'parent', 'sibling', 'index'],
                'newlines-between': 'always'
            }
        ],
        'import/first': 'error',
        'prettier/prettier': 'error',
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        // 'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/array-type': 'warn',
        '@typescript-eslint/explicit-member-accessibility': [
            'warn',
            {
                overrides: {
                    constructors: 'off'
                }
            }
        ],
        "@typescript-eslint/no-empty-interface": [
            "error",
            {
                "allowSingleExtends": true
            }
        ],
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/prefer-for-of': 'off',
        '@typescript-eslint/prefer-function-type': 'warn',
        'no-trailing-spaces': 'warn',
        'prefer-const': 'warn',
        'comma-dangle': ['warn', 'never'],
        curly: 'warn',
        'dot-notation': 'warn',
        'no-var': 'warn',
        'prefer-object-spread': 'warn',
        'prefer-template': 'warn',
        radix: 'warn',
        yoda: 'warn'
    }
};
