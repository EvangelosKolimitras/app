const path = require('path');


module.exports = {
	entry: ['./src/js/index.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'
	},
	mode: 'development',

	module : {
		rules : [
			{
				test: /\.css$/ ,
				use : [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				use : [
					'file-loader'
				]
			}
		]
	}
};