/*jshint esversion: 6 */

// const NODE_ENV = process.env.NODE_ENV || 'development';
var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');
var compiler = webpack(config);

module.exports = {
  context: path.join(__dirname, 'app/scripts'), // исходная директория
  entry: './script.js', // файл для сборки, если несколько - указываем hash (entry name => filename)
  output: {
    path: path.join(__dirname, 'dist/scripts'), // выходная директория
    filename: './scriptNew.js'
  },
  resolve: {
    modulesDirectories: ['node_modules']
  },

  // watch: NODE_ENV == 'development',

  watch: true,

  watchOptions: {
    aggregateTimeout: 150
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
      }
    }]
  },

  plugins: [
    // new webpack.DefinePlugin({
    //   NODE_ENV: JSON.stringify(NODE_ENV)
    // }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true
      }
    }),
    new webpack.optimize.DedupePlugin()
  ]

};

compiler.run(function(err, stats) {
  console.log(stats.toJson()); // по завершению, выводим всю статистику
});
