const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    username: {
        type: String,
        required: true,
    }, 
    comment: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Post', postSchema);