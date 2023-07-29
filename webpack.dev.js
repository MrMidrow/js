const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/script.js',
    output: {
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.js$/i,
                enforce: "pre",
                use: ["source-map-loader"],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets'
                        }
                    },
                    {
                        loader: "image-webpack-loader",
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 70,
                            },
                            optipng: {
                                progressive: true,
                                quality: 70,
                            },
                            pngquant: {
                                progressive: true,
                                quality: 70,
                            }
                        },
                    },
                ],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'production',
            inject: 'body',
        }),
        new MiniCssExtractPlugin()
    ],
};