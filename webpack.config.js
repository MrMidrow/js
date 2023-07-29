const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: 'production',
    entry: './src/script.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.js$/i,
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