const paths = require('./paths');

const map = Object.entries(paths);

module.exports = {
	env: { es6: true, browser: true, node: true },
	extends: ['airbnb', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:prettier/recommended'],
	plugins: ['import', 'react', 'react-hooks', 'jsx-a11y'],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		requireConfigFile: false,
		ecmaFeatures: {
			legacyDecorators: true,
			allowImportExportEverywhere: true,
			jsx: true,
		},
	},
	settings: {
		'import/resolver': {
			alias: {
				map,
			},
		},
	},
	rules: {
		camelcase: 'off',
		'no-constant-condition': 'error',
		'no-dupe-else-if': 'error',
		'no-import-assign': 'error',
		'no-loss-of-precision': 'error',
		'no-promise-executor-return': 'error',
		'no-setter-return': 'error',
		'no-unreachable-loop': 'error',
		'no-useless-backreference': 'error',
		'default-case-last': 'error',
		'default-param-last': 'error',
		'grouped-accessor-pairs': 'error',
		'no-constructor-return': 'error',
		'import/prefer-default-export': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/forbid-prop-types': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
		'jsx-a11y/label-has-associated-control': [
			'error',
			{
				depth: 25,
			},
		],
		'prettier/prettier': [
			'error',
			{},
			{
				usePrettierrc: true,
			},
		],
	},
};
