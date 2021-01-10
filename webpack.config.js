const debug              = process.env.NODE_ENV !== 'production',
	webpack              = require( 'webpack' ),
	path                 = require( 'path' ),
	Fiber                = require( 'fibers' ),
	MiniCssExtractPlugin = require( 'mini-css-extract-plugin' ),
	CopyWebpackPlugin    = require( 'copy-webpack-plugin' );

module.exports = {
	context: path.join( __dirname, '/' ),
	entry: './develop/src/js/index.js',
	devtool: 'source-map',
	module: {
		rules: [
			//babel
			{
				test: /\.jsx?$/,
				exclude: /( node_modules | bower_components )/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [ '@babel/preset-react', '@babel/preset-env' ]
						}
					}
				]
			},
			//scss
			{
				test: /\.(sa|sc|c)ss$/,
				exclude: /( node_modules | bower_components )/,
				use: [
					{
						loader: 'style-loader'
						// loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: {
							url: false,
							sourceMap: true,
							importLoaders: 2
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									// Autoprefixerを有効化
									// ベンダープレフィックスを自動付与する
									['autoprefixer', { grid: true }],
								],
							},
						}
					},
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass'),
							fiber: Fiber,
							sourceMap: true
						}
					}
				]
			},
			//images
			{
				test: /\.( gif|png|jpg|eot|wof|woff|ttf|svg )$/,
				// type: "asset/inline",
			}
		]
	},
	output: {
		path: path.join( __dirname, '/build/' ),
		filename: 'index.min.js',
		publicPath: '/'
	},
	devServer: {
		historyApiFallback: true,
		contentBase       : path.join(__dirname, 'develop'),
		watchContentBase  : true,
	},
	plugins: debug ?
	[
		new MiniCssExtractPlugin( { filename: 'css/style.css' } ),
		new CopyWebpackPlugin( {
			patterns: [ {
				from: '**/*.html',
				to: './',
				context: "./develop",
			} ]
		} )
	]
	:
	[
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin( { mangle: false, soucemap: true }),
		new MiniCssExtractPlugin( { filename: 'css/style.css' } ),
		new CopyWebpackPlugin( {
			patterns: [ {
				from: '**/*.html',
				to: './',
				context: "./develop",
			} ]
		} )
	],
	resolve: {
		modules: [ path.join( __dirname, 'develop' ), 'node_modules' ],
		extensions: [ '.js', '.jsx' ]
	}
}
