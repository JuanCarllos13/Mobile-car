module.exports = function (api) {
	api.cache(true);

	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['./src'],
					alias: {
						'@assets': './src/assets',
						'@components': './src/components',
						'@routes': './src/routes',
						'@pages': './src/pages',
						'@storage': './src/storage',
						'@styles': './src/styles',
						'@utils': './src/utils',
						'@service': './src/service',
						'@contexts': './src/contexts',
					},
				},
			],
		],
	};
};
