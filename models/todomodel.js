const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    startData:{
        type: Date,
        default: DataTransfer.now
    },
    endDate:{
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('todoModel', todoSchema);