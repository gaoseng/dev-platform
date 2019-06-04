const webpack = require('webpack');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const config = require('../config');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const portfinder = require('portfinder');
const utils = require('./utils');

const devWebpackConfig = merge(baseWebpackConfig, {
    devtool: config.dev.devtool,
    mode: 'development',

    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
                {
                    from: '/.*/', to: path.posix.join(config.dev.assetsPublicPath, 'index.html'),
                }
            ]
        },
        hot: true,
        contentBase: false, // since we use CopyWebpackPlugin.
        compress: true,
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
        open: config.dev.autoOpenBrowser,
        overlay: config.dev.errorOverlay
            ? { warnings: false, errors: true }
            : false,
        publicPath: config.dev.assetsPublicPath,
        proxy: config.dev.proxyTable,
        quiet: true, // necessary for FriendlyErrorsPlugin
        watchOptions: {
            poll: config.dev.poll,
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // 当开启 HMR 的时候使用该插件会显示模块的相对路径， 建议用于开发环境
        new webpack.NoEmitOnErrorsPlugin(), // 在编译出现错误是，使用 该插件来跳过输出阶段
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
          }),
        // copy custom static assets
        new CopyWebpackPlugin([
            {
              from: path.resolve(__dirname, '../static'),
              to: config.dev.assetsSubDirectory,
              ignore: ['.*']
            }
          ])
    ]

});

// module.exports = devWebpackConfig;
module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port;
    portfinder.getPort((err, port) => {
        if( err ) reject(err);

        devWebpackConfig.devServer.port = process.env.PORT = port;
         devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
             compilationSuccessInfo: {
                messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
                notes: ['开发平台前端服务器已启动，按住ctrl并单击可访问']
             },
             onErrors: config.dev.notifyOnErrors
          ? utils.createNotifierCallback()
          : undefined
         }));
         resolve(devWebpackConfig);
    })
})