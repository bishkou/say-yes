const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredNumber = {
    type: Number,
    required: true,
};

const logEntrySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    comments: String,
    latitude: {
        ...requiredNumber,
        min: -90,
        max: 90,
    },
    longitude: {
        ...requiredNumber,
        min: -180,
        max: 180,
    },
    visitDate: {
        required: true,
        type: Date,
        default: Date.now()
    },
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;
