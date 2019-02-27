const path = require('path');

module.exports = {
	entry: ['./src/js/index.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'
	},

	module : {
		rules : [
			{
				test: /\.css$/ ,
				use : [
					'style-loader',
					'css-loader'
				]
			}
		]
	}
};