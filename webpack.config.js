var webpack            = require('webpack');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var bourbon            = require('node-bourbon').includePaths;
var RootStyles         = './src/Root/styles';

var config = {
  entry: {
    WebApp: [ 'webpack/hot/dev-server', './src/Root/webapp.js' ],
    WebSite: [ 'webpack/hot/dev-server', './src/Root/website.js' ]
  },
  output: {
    path: './dist',
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.js$/, loader: 'babel' },
      { test: /\.scss$/, loader: 'style!css!sass?outputStyle=expanded&' +
        'includePaths[]=' + bourbon + "&" +
        'includePaths[]=' + RootStyles
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components', './src/Root'],
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new CommonsChunkPlugin('WebCommons.js', ['WebApp', 'WebSite']),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 3000,
    contentBase: './src',
    hot: true,
    lazy: false,
    progress: true,
    colors: true
  }
};

module.exports = config;