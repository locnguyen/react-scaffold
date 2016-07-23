/*eslint no-console: 0*/
const webpackConfig = require('./webpack.config.dev');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const host = 'localhost';
const port = 8080;

const devServer = new WebpackDevServer(webpack(webpackConfig), {
    historyApiFallback: true,
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    stats: {
        chunks: false,
        colors: true,
        'errors-only': true
    },
    watch: true
}).listen(port, host, (error) => {
    if (error) {
        console.log(error);
    }

    console.log(`Listening at http://${host}:${port}`);
});