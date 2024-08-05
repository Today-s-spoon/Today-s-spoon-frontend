import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export default {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(new URL('.', import.meta.url).pathname, 'dist'),
		publicPath: '/',
	},
	devServer: {
		static: {
			directory: path.join(new URL('.', import.meta.url).pathname, 'dist'),
		},
		compress: true,
		port: 3000,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new webpack.ProvidePlugin({
			process: 'process/browser.js',
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
};
