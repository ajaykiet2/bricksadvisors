const mongoose = require('mongoose');

const propertySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: Text
    },
    type: {
        type: String,
        enum: ["residentail", "commercial"],
        default: 'residentail',
    },
    subType: {
        type: String,
        enum: ["house", "flat", "villa", "plot", "land"],
        required: true
    },
    transactionType: {
        type: String,
        required: true
    },
    area: {
        type: Number,
        required: true
    },
    amanities: {
        type: Array
    },
    projectId: {
        type: Schema.ObjectId
    },
    postedBy: {
        type: String,
        required: true
    },
    postedDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.Model("Property", propertySchema);