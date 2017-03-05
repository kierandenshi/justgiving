const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_ENV = process.env.NODE_ENV;
const DEPLOYMENT_ENV = process.env.DEPLOYMENT_ENV || 'local';
const HOST = process.env.CLIENT_HOST || '0.0.0.0';
const PORT = process.env.CLIENT_PORT || 4040;

const isDev = BUILD_ENV !== 'production';

module.exports = {

  devtool: (isDev) ? 'eval' : 'cheap-source-map',

  entry: [
    'babel-polyfill',
  ].concat(isDev ? [
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    path.join(__dirname, 'src/index.js'),
  ] : [
    path.join(__dirname, 'src/index.js'),
  ]),
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [

      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', 'stage-0']
        },
      },

      {
        test: /\.scss?$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader"
        })
      },

    ],

  },

  plugins: [
    new ExtractTextPlugin(isDev ? 'bundle.css' : 'bundle.[hash].css'),
    new webpack.DefinePlugin({
      '__DEV__': JSON.stringify(isDev),
    }),
    // new webpack.ProvidePlugin({
    //   'fetch': 'imports?this=>global!exports?global.fetch!isomorphic-fetch',
    //   'flexibility': 'imports?this=>global!exports?global.flexibility!flexibility',
    // }),
  ],

  resolve: {
    alias: {
      app:    path.resolve(__dirname) + '/src/app',
      static: path.resolve(__dirname) + '/src/static',
    }
  },

  devServer: {
    contentBase: path.join(__dirname, 'src'),
    host: HOST,
    port: PORT,
    https: false,
    historyApiFallback: true,
  },

};
