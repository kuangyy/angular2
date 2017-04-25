var webpack = require('webpack');
var helpers = require('./config/helpers');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 指定入口 将从此开始编译
    entry: './src/main.ts',
    output: {
        // 通过方法获取根目录
        path: helpers.root('dist'),
        //JS文件名
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.css$/,
                exclude: [
                    helpers.root('src', 'app')
                ],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.css$/,
                include: [
                    helpers.root('src', 'app')
                ],
                use: [
                    {loader: 'to-string-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.scss$/,
                exclude: [
                    helpers.root('src', 'app')
                ],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {loader: 'css-loader'},
                        {loader: 'sass-loader'}
                    ]
                })
            },
            {
                test: /\.scss$/,
                include: [
                    helpers.root('src', 'app')
                ],
                use: [
                    {loader: 'to-string-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            },
            {
                test: /\.(svg|woff|woff2|ttf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/iconfonts/[name].[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'assets/imgs/[name].[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};