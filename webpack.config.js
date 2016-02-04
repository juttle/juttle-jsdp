var webpack = require('webpack');

module.exports = {
    output: {
        library: 'JuttleJSDP',
        libraryTarget: 'umd'
    },
    externals: {
        moment: 'moment'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    }
};
