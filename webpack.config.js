const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const pkg = require('./package.json');

const libPath = path.resolve(__dirname, 'lib');
const distPath = path.resolve(__dirname, 'dist');

module.exports = (options = {}) => ({
  mode: 'development',
  entry: {
    index: path.resolve(libPath, 'index.js'),
  },
  target: 'web',
  output: {
    path: options.outputPath || distPath,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    library: pkg.name,
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  module: {
    rules: [{
      test: /\.(js)$/,
      include: libPath,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true,
      },
    }],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: path.resolve(libPath, 'i18n'), to: 'i18n' },
    ]),
  ],
});
