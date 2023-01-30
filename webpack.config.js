const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

console.info(process.env.NODE_ENV);
const isDevelopment = process.env.NODE_ENV === 'development';
const isAnalyze = process.env.ANALYZE === 'TRUE';

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
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
        // .babelrcで設定
        // options: {
        //   presets: ['@babel/preset-env', '@babel/preset-react'],
        // },
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
        test: /\.(bmp|gif|jpe?g|png)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 1024 * 10, // 10kb以上はリソース
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
    new BundleAnalyzerPlugin({
      analyzerMode: isAnalyze ? 'server' : 'disabled',
    }),
  ],
  target: ['web'], //'es5'
};
