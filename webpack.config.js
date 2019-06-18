const path = require('path');
const webpack = require('webpack');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = function(env, argv) {
	return {
		mode: 'development',
		devtool: 'inline-source-map',
		// mode: env.production ? 'production' : 'development',
		// devtool: env.production ? 'source-maps' : 'eval',

		entry: './src/index.js',
		output: {
			filename: '[name].[hash].js',
			path: path.resolve(__dirname, 'dist')
		},

		plugins: [
			// 打包前先清空
			new CleanWebpackPlugin() ,
			new webpack.ProgressPlugin(),
			new HtmlWebpackPlugin({
				// 用哪个html作为模板
				// 在src目录下创建一个index.html页面当做模板来用
				template: './src/index.html',
				hash: true, // 会在打包好的bundle.js后面加上hash串
			}),
			// 热更新，热更新不是刷新
			new webpack.HotModuleReplacementPlugin()
		],

		module: {
			rules: [{
					test: /.(js|jsx)$/,
					include: [path.resolve(__dirname, 'src')],
					loader: 'babel-loader',
					options: {
						plugins: ['syntax-dynamic-import'],
						presets: [
							[ '@babel/preset-env', { modules: false } ]
						]
					}
				},
				{
					test: /\.css$/, // 解析css
					use: ['style-loader', 'css-loader'] // 从右向左解析
					/*  也可以这样写，这种方式方便写一些配置参数
							use: [
									{loader: 'style-loader'},
									{loader: 'css-loader'}
							]
					*/
				},
				{
					test: /\.(jpe?g|png|gif)$/,
					use: [{
						loader: 'url-loader',
						options: {
							limit: 8192, // 小于8k的图片自动转成base64格式，并且不会存在实体图片
							outputPath: 'images/' // 图片打包后存放的目录
						}
					}]
				},
				{
					test: /\.(htm|html)$/, // img标签内src引用的图片
					use: 'html-withimg-loader'
				},
				{
					test: /\.js$/,
					use: 'babel-loader',
					include: /src/, // 只转化src目录下的js
					exclude: /node_modules/ // 排除掉node_modules，优化打包速度
				},
				/* // svg图片以及字体文件
				{
					test: /\.(eot|ttf|woff|svg)$/,
					use: 'file-loader'
				} */
			]
		},

		optimization: {
			splitChunks: {
				cacheGroups: {
					vendors: {
						priority: -10,
						test: /[\\/]node_modules[\\/]/
					}
				},
				chunks: 'async',
				minChunks: 1,
				minSize: 30000,
				name: true
			}
		},

		devServer: {
			// port: 3000,          // 端口
			open: true,             // 自动打开浏览器
			hot: true,              // 开启热更新
			overlay: true, 					// 浏览器页面上显示错误
		}
	}
};

if (module.hot) {
  // 实现热更新
  module.hot.accept();
}