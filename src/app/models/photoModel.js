const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
    key: { type: String, required: true },
    path: { type: String, required: true },
    title: { type: String },
    order: { type: Number },
    size: {type: Number},
    mimetype: { type: String },
    createDate: { type: Date },
})

module.exports = mongoose.model('Photos', photoSchema)

