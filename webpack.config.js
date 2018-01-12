const path = require("path");
const htmlplugin = require("html-webpack-plugin");
const webpack = require("webpack");
const extractTextPlugin = require("extract-text-webpack-plugin");

function getHtmlConfig(name) {
	return {
		filename: `view/${name}.html`,
		template: `./src/view/${name}.html`,
		chunks: ["common", name],
		hash: true,
		minify: {
			removeAttributeQuotes: true
		}
	}
}

const devConfig = {
	entry: {
		"common": "./src/page/common/index.js",
		"index": "./src/page/index/index.js",
		"login": "./src/page/login/index.js"
	},
	output: {
		path: path.resolve(__dirname,"./dist"),
		filename: "js/[name].js"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: extractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			}
		]
	},
	plugins: [
		new htmlplugin(
			getHtmlConfig("index")
		),
		new htmlplugin(
			getHtmlConfig("login")
		),
		new webpack.optimize.CommonsChunkPlugin({
			name: "common",
			filename: "js/base.js"
		}),
		new extractTextPlugin("css/[name].css")
	],
	devServer: {
		contentBase: "./src/",
		host: "localhost",
		compress: true,
		port: 3000
	}
}

module.exports = devConfig;