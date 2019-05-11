
const webpack = require('webpack');
const path = require('path');


function resolve(dir) {
    return path.join(__dirname, '..', dir); 
}


module.exports = {
    context: path.resolve(__dirname , '../'),
    
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    module: {

    }
}