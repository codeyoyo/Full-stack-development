const servers = require('./servers/index.js');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('css/[name].css');
const extractSASS = new ExtractTextPlugin('css/[name].css');

module.exports = {
    entry: {
        resume: __dirname + '/resume/app.js',
        main: __dirname + '/src/main.js', //入口文件
    },
    output: { //代码输出生成
        path: __dirname + '/dist', //生成路径
        filename: 'js/[name].js' //输出文件名
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
            test: /\.css$/,
            use: extractCSS.extract(['css-loader', 'postcss-loader'])
        }, {
            test: /\.scss$/i,
            include: [/src/, /resume/],
            exclude: [/node_modules/],
            use: extractCSS.extract(['css-loader', 'postcss-loader', 'sass-loader'])
        }],
        loaders: [{
            test: /\.html$/,
            loader: 'file-loader',
            query: {
                minimize: true
            }
        }]
    },
    devServer: { //生成环境构建
        port: 8777,
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
            title: 'Full-stack-development',
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            chunks: ['main']
        }),
        new htmlWebpackPlugin({
            title: 'resume',
            template: __dirname + '/resume/index.html',
            filename: 'resume.html',
            chunks: ['resume']
        }),
        new webpack.HotModuleReplacementPlugin(), //webpack自带的热更新插件
        extractCSS,
        extractSASS
    ]
}