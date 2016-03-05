(function() {
	'use strict';
	var webpack = require('webpack');
	var path = require('path');
	
	var BUILD_DIR = path.resolve(__dirname, 'dist/js');
	var APP_DIR = path.resolve(__dirname, 'src');
	
	var config = {
	  entry: [
//	          'webpack-dev-server/client?http://localhost:8080',
//	          'webpack/hot/only-dev-server',
	          APP_DIR + '/index.jsx'
	          ],
	  output: {
	    path: BUILD_DIR,
	    filename: 'bundle.js'
	  },
	  resolve: {
		    extensions: ['', '.js', '.jsx']
		  },
	  module : {
		  loaders : [
	           {
	             test : /\.jsx?$/,
	             include : APP_DIR,
	             exclude : /node_modules/,
//	             loader : 'react-hot!babel'
	             loader : 'babel'
	           }
	         ]
	  },
	  devtool : "#inline-source-map",
//	  devServer: {
//		    contentBase: './dist',
//		    hot: true
//		  },
	  plugins: [
	            new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
//	            new webpack.HotModuleReplacementPlugin()
	          ]
	};
	
	module.exports = config;
}());