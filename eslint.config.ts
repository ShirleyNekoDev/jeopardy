import * as angular from '@angular-eslint/eslint-plugin';
import * as angularTemplate from '@angular-eslint/eslint-plugin-template';
import * as tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import angularTemplateParser from '@angular-eslint/template-parser';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
	{
		ignores: [
			'dist/',
			'out-tsc/',
			'node_modules/',
			'**/*.js',
			'eslint.config.ts',
			'src/environments/*.ts',
			'*.generated.ts',
			'.vscode/',
			'.idea/',
		],
	},
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: './tsconfig.eslint.json',
				tsconfigRootDir: import.meta.dirname,
			},
		},
		plugins: {
			'@angular-eslint': angular,
			'@typescript-eslint': tseslint,
			prettier: prettierPlugin,
		},
		rules: {
			...tseslint.configs.recommended.rules,
			...tseslint.configs.stylistic.rules,
			...angular.configs.recommended.rules,
			'prettier/prettier': 'error',

			'@angular-eslint/directive-selector': [
				'error',
				{
					type: 'attribute',
					prefix: 'jpr',
					style: 'camelCase',
				},
			],
			'@angular-eslint/component-selector': [
				'error',
				{
					type: 'element',
					prefix: 'jpr',
					style: 'kebab-case',
				},
			],
			'@angular-eslint/prefer-on-push-component-change-detection': 'error',
			'@angular-eslint/prefer-standalone': 'error',
			'@angular-eslint/prefer-signals': 'error',
			'@angular-eslint/no-output-on-prefix': 'error',
			'@angular-eslint/prefer-host-metadata-property': 'error',
			'@angular-eslint/use-lifecycle-interface': 'warn',
			'@angular-eslint/no-async-lifecycle-method': 'warn',
			'@angular-eslint/no-empty-lifecycle-method': 'warn',
			'@angular-eslint/use-component-selector': 'warn',

			'max-depth': ['warn', 4],
			'max-lines-per-function': ['warn', { max: 80 }],
			complexity: ['warn', { max: 20 }],
			'no-unused-vars': 'error',

			'sort-imports': [
				'error',
				{
					ignoreCase: false,
					ignoreDeclarationSort: false,
					ignoreMemberSort: false,
					memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
					allowSeparatedGroups: true,
				},
			],
		},
	},

	{
		files: ['**/*.html'],
		languageOptions: {
			parser: angularTemplateParser,
		},
		plugins: {
			'@angular-eslint/template': angularTemplate,
		},
		rules: {
			...angularTemplate.configs.recommended.rules,
			...angularTemplate.configs.accessibility.rules,

			'@angular-eslint/template/cyclomatic-complexity': ['warn', { maxComplexity: 5 }],

			'@angular-eslint/template/prefer-control-flow': 'error',
			'@angular-eslint/template/no-negated-async': 'error',
			'@angular-eslint/template/banana-in-box': 'error',
			'@angular-eslint/template/no-call-expression': 'warn',
			'@angular-eslint/template/no-duplicate-attributes': 'error',
			'@angular-eslint/template/eqeqeq': 'error',
		},
	},

	prettierConfig,
];
