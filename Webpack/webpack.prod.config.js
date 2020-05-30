const AssetsPlugin = require('assets-webpack-plugin');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const helpers = require('./helpers.js');
const dist = helpers.root('dist');
const commonConfig = require('./webpack.common.config');

module.exports = module.exports = webpackMerge(commonConfig(false), {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: 4,
                terserOptions: {
                    output: {
                        comments: false
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin()
        ]
    },
    plugins: [
        new webpack.EnvironmentPlugin({ NODE_ENV: 'production' }),
        new AssetsPlugin({
            path: dist,
            processOutput: assets => {
                delete assets[''];
                return JSON.stringify(assets);
            }
        })
    ]
});
