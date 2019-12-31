const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: Text
    },
    seoUrl: {
        type: Text,
        required: true
    },
    reraNumber: {
        type: String,
        required: true
    },
    area: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['residentail', 'commercial', 'township'],
        default: 'residentail'
    },
    banners: {
        type: Array,
    },
    location: {
        type: Object
    },
    address: {
        type: Text
    },
    builderId: {
        type: Schema.ObjectId,
        required: true
    },
    banks: {
        type: Array
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

module.exports = mongoose.Model("Project", projectSchema);