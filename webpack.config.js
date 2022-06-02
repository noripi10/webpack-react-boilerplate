const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.log(process.env.NODE_ENV);
const isDevelopment = process.env.NODE_ENV === 'development';

/** @type {import('webpack').Configuration} */
module.exports = {
  // mode: "development",
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  entry: {
    main: './src/index.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.jpeg$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 1024 * 3,
          },
        },
      },
    ],
  },
  devtool: isDevelopment ? 'source-map' : undefined,
  devServer: {
    static: {
      directory: './dist',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new HtmlWebpackPlugin({
      template: path.join('src', 'index.html'),
      inject: 'body',
      scriptLoading: 'defer',
    }),
  ],
};
