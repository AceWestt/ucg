const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
	alias({
		'@': 'src',
		'@components': 'src/components',
		'@pages': 'src/pages',
		'@imgs': 'src/imgs',
		'@files': 'src/files',
	})(config);

	return config;
};
