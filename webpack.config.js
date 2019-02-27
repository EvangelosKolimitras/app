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
				test: /\.(png|jpe?g|svg|gif)$/i,
				use : [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 65
							},
							// optipng.enabled: false will disable optipng
							optipng: {
								enabled: true,
							},
							pngquant: {
								quality: '65-90',
								speed: 4
							},
							gifsicle: {
								interlaced: false,
							},
							// the webp option will enable WEBP
							webp: {
								quality: 75
							}
						}
					}
				]
			}
		]
	}
};