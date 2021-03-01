// to access built in plugins
const webpack = require('webpack');

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
        contentBase: path.join(__dirname, 'app'),
        // enable HMR
        hot: true,

        // makes the server externally accessible
        host: '0.0.0.0',

        // in you phone's browser type: <yourComputerLocalIp>:9000
        port: 9000,

        // display your local ip in the address bar
        useLocalIp: true,

        // Tells devServer to write generated assets to the disk.
        // for example, the bundle.js asset
        // writeToDisk: true,

        //index: './app/index.html', what is it for?
        open: {
            app: ['brave-browser', '--incognito'],
        },
    },
    module: {
        rules: [
            {
                test: /\.html$/,

                // replaces <use: raw-loader>
                type: 'asset/source',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({}),
    ],
    mode: 'development',
};
