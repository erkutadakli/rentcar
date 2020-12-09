const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    name: { type: String, required: true },
    photos: [
        {
            title: { type: String },
            path: { type: String, required: true }
        }
    ],
    description: [
        {
            key: { type: String },
            value: { type: String, required: true }
        }
    ],
    properties: [
        {type: Number}
    ],
    language: {type: String, required: true},
    createDate: { type: Date },
})

module.exports = mongoose.model('Cars', carSchema)

