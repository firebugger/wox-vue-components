var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var pkg = require('./package.json');

module.exports = {
  entry: {
    'index': path.join(__dirname, 'src/index.vue')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    library: pkg.name,
    libraryTarget: 'umd',
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        use: ['babel-loader'], 
        exclude: /node_modules/},
      {
        test: /\.vue$/, 
        use: 'vue-loader'
      },
      {
        test: /\.(le|c)ss$/, 
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 102400,
          name: 'images/[name].[hash:7].[ext]'
        }
      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};