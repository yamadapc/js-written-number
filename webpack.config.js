const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pkg = require('./package.json');
const libPath = path.resolve(__dirname, 'lib');
const distPath = path.resolve(__dirname, 'dist');

module.exports = (options = {}) => {
    return {
        mode: 'development',
        entry: [
            path.resolve(libPath, 'index.js')
        ],
        target: 'web',
        output: {
            path: options.outputPath || distPath,
            filename: 'index.js',
            libraryTarget: 'commonjs2',
            library: pkg.name
        },
        resolve: {
            extensions: ['.js', '.json']
        },
        module: {
            rules: [{
                test: /\.(js)$/,
                include: libPath,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true
                }
            }]
        },
        plugins: [
            new CleanWebpackPlugin(),
        ]
    };
};