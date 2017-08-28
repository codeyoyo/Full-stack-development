const servers = require('./servers/index.js');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/main.js', //入口文件
    output: { //代码输出生成
        path: __dirname + '/dist', //生成路径
        filename: 'bundle.js' //输出文件名
    },
    module: { //loader模块配置
        rules: [{ //es6语法解析配置
            test: '/\.js$/',
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader',
                options: { presets: ['es2016'] }
            }],
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{ loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader', 'sass-loader'],

            })
        }],
        loaders: [{
            test: /\.html$/,
            loader: 'file-loader?name=[path][name].[ext]!extract-loader!html-loader',
            query: {
                minimize: true
            }
        }]
    },
    devServer: { //生成环境构建
        port: 7777,
        host: 'localhost',
        historyApiFallback: true,
        setup: function(app) { //使用nodejs作代理请求或后台数据构造
            servers(app);
        },
        hot: true, //热更新开启
        contentBase: __dirname + '/dist'
    },
    plugins: [ //webpack插件配置
        new htmlWebpackPlugin({
            title: 'Full-stack-development'
        }),
        new webpack.HotModuleReplacementPlugin(), //webpack自带的热更新插件
        new ExtractTextPlugin(__dirname + '/dist/css/[name].css')
    ]
}