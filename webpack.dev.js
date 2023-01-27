const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development', //in webpack v4+ "mode" can be accessed in any script as process.env.NODE_ENV
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    optimization: {
        usedExports: true,
    },
})