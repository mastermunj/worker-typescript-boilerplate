// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    bundle: path.join(__dirname, './src/index.ts'),
  },
  output: {
    filename: 'worker.js',
    path: path.join(__dirname, 'dist'),
  },
  mode: process.env.NODE_ENV || 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [],
  },
  plugins: [new Dotenv()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
};
