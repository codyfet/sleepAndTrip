const webpack = require('webpack');
var path = require('path');
// Access-Control-Allow-Origin: localhost:808*;

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
        {
            test: /\.js$/,
            use: ["source-map-loader"],
            enforce: "pre"
        },
        {
            test: /\.(jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
            test: /\.(less|css)$/,
            use: [
              'style-loader',
              { loader: 'css-loader'},
              'less-loader',
            ],
          },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.less', '.css']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
      host: 'localhost',
      port: 8081,
      historyApiFallback: true

  }
};
