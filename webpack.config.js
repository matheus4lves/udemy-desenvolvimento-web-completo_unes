// to access built in plugins
const webpack = require('webpack');
const path = require('path');
const postcssPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('autoprefixer'),
]

module.exports = {
    entry: {
        index: './app/assets/scripts/index.js',
        quemSomos: './app/assets/scripts/quemSomos.js',
        contato: './app/assets/scripts/contato.js',
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'app'),
    },

    // Tell me exactly where an error has occurred
    devtool: 'inline-source-map',

    devServer: {
        contentBase: path.join(__dirname, 'app'),
        before: function(app, server) {
            server._watch('./app/**/*.html')
        },
        index: 'index.html',
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
            app: ['/opt/firefox-84.0b4/firefox/firefox', '--private-window'],
        },
    },
    module: {
        rules: [
            {
                test: /\.html$/i,

                // replaces <use: raw-loader>
                type: 'asset/source',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', {loader: 'css-loader', options: {url: false,}}, {loader: 'postcss-loader', options: {postcssOptions: {plugins: postcssPlugins}}}],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({}),
    ],
    mode: 'development',
};
