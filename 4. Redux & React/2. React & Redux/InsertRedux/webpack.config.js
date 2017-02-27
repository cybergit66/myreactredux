const webpack = require('webpack');
const path = require('path'); // used for absolute file referencing


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
    }
};
