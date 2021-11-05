/* eslint-disable no-param-reassign */
const paths = require('./paths');

module.exports = {
	reactStrictMode: true,
	webpack(config) {
		config.resolve.alias = {
			...config.resolve.alias,
			...paths,
		};

		return config;
	},
};
