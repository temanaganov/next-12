function config(plop) {
	plop.setGenerator('Component', {
		description: 'Create a React Component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Component name',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'components/{{kebabCase name}}/{{kebabCase name}}.tsx',
				templateFile: '.plop/component-template.hbs',
			},
			{
				type: 'add',
				path: 'components/{{kebabCase name}}/{{kebabCase name}}.module.scss',
				templateFile: '',
			},
			{
				type: 'add',
				path: 'components/{{kebabCase name}}/index.ts',
				template: "export { default } from './{{kebabCase name}}';\n",
			},
		],
	});
}

module.exports = config;
