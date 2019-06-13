'use strict';
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const config = require('../config');
const utils = require('./utils');

function resolve(dir) {
    return path.join(__dirname, '..', dir); 
}




module.exports = {
    
    context: path.resolve(__dirname , '../'),
    resolve: {
        extensions: ['.js', '.vue', '.json', '.less', '.ts'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },

    entry: ["@babel/polyfill", "./src/main.ts"],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules|vue\/src/,
                loader: "ts-loader",
                options: {
                  appendTsSuffixTo: [/\.vue$/]
                }
              },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    // fallback to style-loader in development
                    process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new VueLoaderPlugin()
    ]
}