import webpack, { ProvidePlugin } from 'webpack';

export default function override(config, env) {
	config.resolve.fallback = {
		url: webpack.Resolver('url'),
		fs: webpack.Resolver('fs'),
		assert: webpack.Resolver('assert'),
		crypto: webpack.Resolver('crypto-browserify'),
		http: webpack.Resolver('stream-http'),
		https: webpack.Resolver('https-browserify'),
		os: webpack.Resolver('os-browserify/browser'),
		buffer: webpack.Resolver('buffer'),
		stream: webpack.Resolver('stream-browserify'),
	};

	config.plugins.push(
		new ProvidePlugin({
			process: 'process/browser',
			Buffer: ['buffer', 'Buffer'],
		}),
	);

	return config;
}
