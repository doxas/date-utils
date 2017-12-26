
const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        script: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dest'),
        publicPath: './',
        filename: 'du.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['es2015']
                    ]
                }
            }]
        }]
    },
    cache: true
};
