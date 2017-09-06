const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  modules: path.join(__dirname, 'node_modules'),
};

module.exports = function webpackConfig() {
  return {
    entry: `${PATHS.src}/index.jsx`,

    output: {
      path: `${PATHS.dist}`,
      filename: 'index.js',
    },

    plugins: [
      new webpack.EnvironmentPlugin(['NODE_ENV']),
      new HtmlWebpackPlugin({
        title: 'React Project Template',
        template: HtmlWebpackTemplate,
        appMountId: 'app',
        inject: false,
      }),
      new HtmlWebpackPlugin({
        filename: 'redirect.html',
        template: 'src/redirect.html',
        inject: false,
      }),
      new webpack.HotModuleReplacementPlugin(),
      // new ExtractTextPlugin('style.css'),
    ],

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: path.resolve(__dirname, 'node_modules'),
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
          include: [`${PATHS.src}`],
        },
      ],
    },

    resolve: {
      extensions: ['.js', '.jsx', '.css'],
    },

    devServer: {
      contentBase: './dist',
      port: 8080,
      hot: true,
      inline: true,
      historyApiFallback: true,
      proxy: {
        // insert proxies here
      },
    },
  };
};
