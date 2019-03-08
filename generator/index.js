const {
	MergePresets,
	GetVersion
} = require('../utils');

module.exports = (api, option, rootOptions) => {
	// 扩展 package.json
	api.extendPackage({
		dependencies: {
			"react": GetVersion('react'),
			"react-dom": GetVersion('react-dom')
		},
		devDependencies: {
			"babel-preset-react-app": "^7.0.2"
		},
		eslintConfig: {
			"extends": [
				"plugin:react/recommended"
			]
		},
		scripts: {
			"config": "vue-cli-service config"
		},
	});
	// 渲染模板
	api.render('./template', {
		...option,
	});

	// 修改 babel.config.js
	api.postProcessFiles(files => {
		const babelConfigRaw = files['babel.config.js'];
		if (babelConfigRaw) {
			files['babel.config.js'] = MergePresets(babelConfigRaw, 'react-app');
		}
	});
};