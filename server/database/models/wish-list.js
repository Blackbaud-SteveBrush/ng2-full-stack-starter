var mongoose;

mongoose = require('mongoose');

module.exports = mongoose.model('WishList', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
}, {
    collection: 'WishList'
}));
