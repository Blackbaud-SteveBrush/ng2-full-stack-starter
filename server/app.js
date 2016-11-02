const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require(path.join(__dirname, 'middleware', 'api'));

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const webpackHotMiddleware = require('webpack-hot-middleware');
//const config = require('../config/webpack.dev.config');
//const compiler = webpack(config);

// Express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//const compiler = webpack(require('../webpack.config.js'));
const compiler = webpack({
    entry: {
        'polyfills': path.join(__dirname, '../public/polyfills.ts'),
        'vendor': path.join(__dirname, '../public/vendor.ts'),
        'app': path.join(__dirname, '../public/main.ts')
    },
    output: {
        path: path.join(__dirname, '../dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.json'],
        root: path.join(__dirname, '../public'),
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
                loader: 'raw-loader'
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
            template: path.join(__dirname, '../public/index.html'),
            filename: path.join(__dirname + '../dist/index.html')
        })
    ]
});

app.use(express.static(path.join(__dirname, '../dist')));
app.use(require('webpack-dev-middleware')(compiler));
// app.get('*', function response(req, res) {
//     res.sendFile(path.join(__dirname, '../index.html'));
// });
app.use('/', function (req, res, next) {
    var filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, function (err, result) {
        if (err) {
            console.log("ERROR!!!", filename);
            return next(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
});

// app.use(webpackHotMiddleware(compiler, {
//     log: console.log
// }));

// Routes
//app.use('/api', api());
//app.use('/assets', express.static(path.join(__dirname, '../dist/assets/')));
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../dist/index.html'));
// });

// Static files
//app.use(express.static(path.resolve(__dirname + '/../dist')));

module.exports = app;
