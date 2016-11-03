var mongoose;

mongoose = require('mongoose');

module.exports = mongoose.model('WishList', new mongoose.Schema({
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    }
}, {
    collection: 'WishList'
}));
