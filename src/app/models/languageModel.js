const mongoose = require('mongoose');

const languagePropertySchema = mongoose.Schema({
    key: { type: String, required: true },
    value: { type: String, required: true },
    createDate: { type: Date },
})

module.exports = mongoose.model('Languages', languagePropertySchema)

