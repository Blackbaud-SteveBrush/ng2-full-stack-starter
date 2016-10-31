const mongoose = require('mongoose');
const app = require('./server/app');
const PORT = process.env.PORT || '4000';

// Database
mongoose.connect('mongodb://localhost:27017/demo');
mongoose.connection.on('error', function () {
    console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
});

// Start server
app.listen(PORT, function () {
    console.log(`Listening on http://localhost:${PORT}...`);
});
