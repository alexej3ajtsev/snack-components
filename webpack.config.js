const webpack = require('webpack');
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const pkg = require('./package.json');
const isProd = process.env.NODE_ENV === 'production';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: isProd ? 'production' : 'development',
  name: pkg.name,
  entry: path.join(__dirname, '/src/index.ts'),
  output: {
    filename: `index.js`,
    path: path.join(__dirname, 'dist'),
    library: pkg.name,
    libraryTarget: 'commonjs2'
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  },
  module: {
    rules: [
      {
        test: /\.(svg)$/i,
        use: {
          loader: 'svg-url-loader',
          options: {}
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [["react-app", { flow: false, typescript: true }]]
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ],
        include: path.resolve(__dirname, 'src')
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [
      new TsconfigPathsPlugin(),
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ]
};