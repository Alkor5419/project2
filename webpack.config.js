const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
        context: path.resolve(__dirname, 'src'),
        mode: 'development',
        entry: './app/index.js',
        output: {
                filename: 'bundle.js',
                path:path.resolve(__dirname, 'dist')
        },
        plugins: [
                // new HTMLWebpackPlugin({
                //         template: './public/index.html'
                // }),
                new HtmlWebpackPlugin({
                        filename: 'index.html',
                        template: './pug/index.pug',
                }),
                new CleanWebpackPlugin(),
        ],
        devServer: {
                port:4200
        },
        module: {
                rules: [
                        {
                                test: /\.css$/,
                                use: ['style-loader', 'css-loader']
                        },
                        {
                                test: /\.(png|jpg|gif)$/,
                                use: ['file-loader']
                        },
                        {
                                test: /\.(ttf|woff|svg)$/,
                                use: ['file-loader']
                        },
                        {
                                test: /\.s[ac]ss$/,
                                use: ['style-loader','css-loader','sass-loader']
                        },
                        {
                                test: /\.pug$/,
                                loader: 'pug-loader'
                        }
                ]
        }
}