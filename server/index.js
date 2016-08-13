const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const path = require('path');
const lists = require(path.join(__dirname, 'middleware', 'lists'));
const PORT = process.env.PORT || '4000';

// Express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', lists());
app.get('/', (request, response) => {
    response.render('home', {});
});

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts')
}));

// Static files
app.use(express.static(path.resolve(__dirname + '/../dist')));

// Start server
app.listen(PORT, function () {
    console.log(`Listening on http://localhost:${PORT}...`);
});
