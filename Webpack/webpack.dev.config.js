const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common.config');

module.exports = webpackMerge(commonConfig(true), {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        publicPath: '/dist',
        host: 'localhost',
        port: 8081,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
});
