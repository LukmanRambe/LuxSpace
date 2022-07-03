/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge')

const webpackConfiguration = require('../webpack.config')
const environment = require('./env')

module.exports = merge(webpackConfiguration, {
	mode: 'development',

	/* Manage source maps generation process */
	// devtool: 'eval-cheap-module-source-map',

	/* Development Server Configuration */
	devServer: {
		contentBase: environment.paths.output,
		watchContentBase: true,
		publicPath: '/',
		open: true,
		historyApiFallback: false,
		compress: true,
		overlay: true,
		hot: false,
		watchOptions: {
			poll: 300
		},
		...environment.server
	},

	/* File watcher options */
	watchOptions: {
		aggregateTimeout: 300,
		poll: 300,
		ignored: /node_modules/
	},

	/* Additional plugins configuration */
	plugins: []
})
