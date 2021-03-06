const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const path = require('path');


module.exports = function(){
    return {
        mode: 'development',
        entry: ['./src/main.ts', './src/assets/styles/style.scss'],
        output: {
            path: __dirname + '/dist',
            filename: 'app.js'
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        module: {
            rules: [
                { test: /\.ts$/, loader: '@ngtools/webpack'},
                { test: /\.css$/, loader: 'raw-loader' },
                { test: /\.html$/, loader: 'raw-loader' },
                {
                    test: /\.scss$/,
                    use:[
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'assets/styles/[name].css',
                            }
                        },
                        {
                            loader: 'extract-loader'
                        },
                        {
                            loader: 'css-loader?-url'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: __dirname + '/index.html',
                output: __dirname + '/dist',
                inject: 'head'
            }),

            new ScriptExtPlugin({
                defaultAttribute: 'defer'
            }),

            new AngularCompilerPlugin({
                tsConfigPath: './tsconfig.json',
                entryModule: './src/app/app.module#AppModule',
                sourceMap: true
            })
        ]
    }
};