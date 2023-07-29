const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const dev = require('./webpack.dev.js');
const compiler = webpack(dev);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: dev.output.publicPath,
    })
);

// Serve the files on port 3000.
app.listen(8080, function () {
    console.log('Example app listening on port 8080!\n');
});