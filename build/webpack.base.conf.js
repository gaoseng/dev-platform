
const webpack = require('webpack');
const path = require('path');


function resolve(dir) {
    return path.join(__dirname, '..', dir); 
}


module.exports = {
    context: path.resolve(__dirname , '../'),
    
    entry: ["@babel/polyfill", "./src/main.js"],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    }
}