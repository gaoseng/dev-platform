/* eslint-disable no-undef */
'use strict';

process.env.NODE_ENV = 'production';
const ora = require('ora');
const rm = require('rimraf');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require('./webpack.prod.conf');

const spinner = ora('work platform build for production...');
spinner.start();

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
    if (err) throw err;
    webpack(webpackConfig, (err, states) => {
        spinner.stop();
        // console.log(states);
        if (err) throw err;
        process.stdout.write(states.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n');

        if (states.hasErrors()) {
            console.log(chalk.red(' Build failed with errors.\n'));
            process.exit(1);
        }

        console.log(chalk.cyan('  dev platform build complete.\n'));
        console.log(process.env.NODE_ENV);
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
        ))
    })
})


