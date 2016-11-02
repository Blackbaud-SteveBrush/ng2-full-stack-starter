const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');

module.exports = {

    /**
     * Developer tool to enhance debugging
     *
     * See: http://webpack.github.io/docs/configuration.html#devtool
     * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
     */
    devtool: 'cheap-module-eval-source-map',

    entry: {
        'polyfills': './public/polyfills.ts',
        'vendor': './public/vendor.ts',
        'app': './public/main.ts'
    },

    output: {
        path: helpers.root('dist'),
        filename: '[name].js'
    },

    devServer: {
        port: 8080,
        contentBase: 'dist/',
        inline: true,
        progress: true,
        profile: true,
        watch: true
        // All 404 requests are routed to our Angular app.
        // historyApiFallback: {
        //     index: helpers.root('dist', 'index.html')
        // }
    },

    resolve: {
        extensions: ['', '.ts', '.js', '.json'],
        root: helpers.root('public'),
        modulesDirectories: ['node_modules']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader',

                    // Allows us to lazy load modules with webpack:
                    // https://github.com/angular/angular/issues/11625
                    'angular2-router-loader'
                ],
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [helpers.root('public/index.html')]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                loader: 'raw-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['raw-loader', 'sass-loader']
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: [
                'app',
                'vendor',
                'polyfills'
            ]
        }),

        // Where to insert script and link tags:
        new HtmlWebpackPlugin({
            template: './public/index.html',
            //filename: helpers.root('dist/index.html')
        })
    ],

    node: {
        global: 'window',
        crypto: 'empty',
        process: true,
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
};
