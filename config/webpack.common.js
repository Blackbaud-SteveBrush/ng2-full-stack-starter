const helpers = require('./helpers');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': './public/app/polyfills.ts',
        'vendor': './public/app/vendor.ts',
        'app': './public/app/main.ts'
    },

    output: {
        path: helpers.root('dist'),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.(hbs|handlebars)$/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('public', 'app'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
            test: /\.css$/,
                include: helpers.root('public', 'app'),
                loader: 'raw'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        // Where to insert script and link tags:
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ]
};
