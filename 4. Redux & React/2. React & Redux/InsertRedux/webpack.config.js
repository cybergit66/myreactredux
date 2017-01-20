const path = require('path'); // used for absolute file referencing

const config = {
    entry: './src/index.js', // must be a relative reference
    output: {
        path: path.resolve(__dirname, 'build'), // must be an absolute file reference
        filename: 'bundle.js'
    }
};
 
module.exports = config;
