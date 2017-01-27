const webpack = require('webpack');
const path = require('path'); // used for absolute file referencing

const VENDOR_LIBS = [
  'faker', 'lodash', 'redux', 'react-redux', 'react-dom',
    'react-input-range', 'redux-form', 'redux-thunk', 
    'react-router', 'react'
];

module.exports = {
    entry: './src/index.js', // must be a relative reference
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: ['style-loader','css-loader'],
                test: /\.css$/
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
};
