### Hexlet tests and linter status:
[![Actions Status](https://github.com/M2-cc/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/M2-cc/frontend-project-44/actions)
[![SonarQube Cloud](https://sonarcloud.io/images/project_badges/sonarcloud-light.svg)](https://sonarcloud.io/summary/new_code?id=M2-cc_frontend-project-44)
import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    plugins: {
      '@stylistic': stylistic
    },
	  languageOptions: {
	    ecmaVersion: 'latest',
	    sourceType: 'module',
	    globals: {
	      console: 'readonly',
	      process: 'readonly',
	    },
	  },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
	    '@stylistic/js/comm-dangle': ['error', 'always-multiline'],
	    'no-unused-vars': ['warn'],
	    'no-console': 'off',
    },
	ignores: ['node_modules/', 'dist/', 'coverage/'],
	},
];