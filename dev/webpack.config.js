const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
  entry: {
    options: './client/options.js',
    actions: './client/actions.js',
    inject: './client/inject.js',
  },
  resolve: {
    extensions: ['.mjs', '.js', '.svelte'],
  },
  output: {
    path: __dirname + '/public',
    filename: '[name]/bundle.js',
    chunkFilename: '[name].[id].js',
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            hotReload: true,
            preprocess: require('svelte-preprocess')({
              /* options */
            }),
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          /**
           * MiniCssExtractPlugin doesn't support HMR.
           * For developing, use 'style-loader' instead.
           * */
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/styles.css',
    }),
    new HtmlWebpackPlugin({
      title: 'Options',
      chunks: ['options'],
      template: './client/template.html',
      filename: './options/index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Actions',
      chunks: ['actions'],
      template: './client/template.html',
      filename: './actions/index.html',
    }),
    new FileManagerPlugin({
      onEnd: [
        {
          copy: [
            {
              source: './public/**/*',
              destination: '../ext/src',
            },
          ],
        },
        {
          delete: ['./public'],
        },
      ],
    }),
  ],
  devtool: prod ? false : 'source-map',
};
