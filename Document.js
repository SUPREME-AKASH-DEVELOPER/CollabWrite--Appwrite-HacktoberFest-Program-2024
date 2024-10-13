const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    version: {
        type: Number,
        default: 1
    },
    lastModified: {
        type: Date,
        default: Date.now
    },
    collaborators: [{
        type: String
    }]
});

module.exports = mongoose.model('Document', DocumentSchema);
