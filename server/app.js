const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require(path.join(__dirname, 'middleware', 'api'));

// Express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', api());
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Static files
app.use(express.static(path.resolve(__dirname + '/../dist')));

module.exports = app;