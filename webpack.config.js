const path = require("path");
const htmlplugin = require("html-webpack-plugin");

const devConfig = {
	entry: "./src/util/test.js",
	output: {
		path: path.resolve(__dirname,"./dist"),
		filename: "bundle.js"
	},
	plugins: [
		new htmlplugin(
			{
				minify: {
					removeAttributeQuotes: true
				},
				hash: true,
				template: "./src/page/index.html"
			}
		)
	],
	devServer: {
		contentBase: "./src/",
		host: "localhost",
		compress: true,
		port: 3000
	}
}

module.exports = devConfig;