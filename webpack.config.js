const webpack = require('webpack'); // to access built in plugins
const path = require('path');

module.exports = {
    entry: './app/assets/scripts/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app'),
    },
    // Tell me exactly where an error has occurred
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './app',
        host: '0.0.0.0', // makes the server externally accessible
        // in you phone's browser type: <yourComputerLocalIp>:9000
        port: 9000,
        hot: true, // enable HMR
        //index: './app/index.html', what is it for?
        open: {
            app: ['brave-browser', '--incognito'],
        },
        // display in the browser your computer's local ip
        useLocalIp: true,
        // Tells devServer to write generated assets to the disk.
        // for example, the bundle.js asset
        // writeToDisk: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                type: 'asset/source', // replaces <use: raw-loader>
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    // Does it make the browser apply CSS on the fly?
    plugins: [
        new webpack.HotModuleReplacementPlugin({}),
    ],
    mode: 'development',
};