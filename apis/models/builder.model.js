const mongoose = require('mongoose');

const builderSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: Text
    },
    url: {
        type: Text,
        required: true
    },
    reraNumber: {
        type: String,
        required: true
    },
    address: {
        type: Text
    },
    createdBy: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date()
    }
});

module.exports = mongoose.Model("Builder", builderSchema);