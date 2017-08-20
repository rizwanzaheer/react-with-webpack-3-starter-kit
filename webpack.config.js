const webpack = require('webpack');
const path = require('path');
const glob = require('glob');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const $ = require('jquery');
const PurifyCSSPlugin = require('purifycss-webpack');


const bootstrapEntryPoints = require('./webpack.bootstrap.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const cssDev = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: [
    {
      loader: 'css-loader',
      options: {
        modules: true,
        sourceMap: true,
        importLoaders: 1,
      },
    }, {
      loader: 'postcss-loader',
      options: {
        modules: true,
        sourceMap: true,
      },
    }, {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
      },
    },
  ],
});
const cssProd = ExtractTextPlugin.extract({
  use: ['css-loader', 'postcss-loader', 'sass-loader'],
});
const cssConfig = isProd ? cssProd : cssDev;
const bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;

module.exports = {

  entry: {
    app: './src/app.jsx',
    bootstrap: bootstrapConfig,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      assets: path.resolve('src/assets'),
      components: path.resolve('src/components'),
      general: path.resolve('src/general'),
      layouts: path.resolve('src/layouts'),
      routes: path.resolve('src/routes'),
      styles: path.resolve('src/styles'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|jpg|gif|svg)$/i,
        loader: [
          'file-loader?name=img/[name].[ext]',
          'image-webpack-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: cssConfig,
      },
      { test: /\.(jsx|js)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000&name=fonts/[name].[ext]' },
      { test: /\.(ttf|eot)$/, loader: 'file-loader?name=fonts/[name].[ext]' },
      { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports-loader?jQuery=jquery' },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    port: 9090,
    stats: 'errors-only',
    open: false,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React webpack starter kit',
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      template: './src/index.html',
    }),
    new ExtractTextPlugin({ filename: '/css/[name].scss', disable: !isProd, allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    //new ExtractTextPlugin({ filename: '[name].scss', allChunks: true }),
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync(path.join(__dirname, 'src/*.html')),
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Tether: 'tether',
      'window.Tether': 'tether',
      Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
      Button: 'exports-loader?Button!bootstrap/js/dist/button',
      Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
      Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
      Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
      Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
      Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
      Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
      Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
      Tooltip: 'exports-loader?Tooltip!bootstrap/js/dist/tooltip',
      Util: 'exports-loader?Util!bootstrap/js/dist/util',
    }),
  ],
};
