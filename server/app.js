const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require(path.join(__dirname, 'middleware', 'api'));
const environment = process.env.NODE_ENV || 'development';
const BUILD_PATH = 'dist';

// Express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', BUILD_PATH)));

// Routes
app.use('/api', api());

if (environment === 'production') {
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', BUILD_PATH, 'index.html'));
    });

} else {
    const webpack = require('webpack');
    const webpackConfig = require(path.join(__dirname, '../config/webpack.dev.config.js'));
    const compiler = webpack(webpackConfig);

    // Route webpack's resources
    app.use(require('webpack-dev-middleware')(compiler, {
        publicPath: webpackConfig.output.publicPath
    }));

    /**
     * Takes all requests and points them to the index.html file stored
     * in Webpack's server memory.
     * https://stackoverflow.com/questions/26845101/webpack-dev-middleware-does-not-compile-output-into-folder/39941763#39941763
     */
    app.use('/', function (req, res, next) {
        var filename;
        filename = path.join(compiler.outputPath, 'index.html');
        compiler.outputFileSystem.readFile(filename, function (err, result) {
            if (err) {
                return next(err);
            }
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        });
    });
}

module.exports = app;
