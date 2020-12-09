const mongoose = require('mongoose');

const languageDefinationSchema = mongoose.Schema({
    key: { type: String, required: true },
    value: { type: String, required: true },
    createDate: { type: Date },
})

module.exports = mongoose.model('LanguageDefinations', languageDefinationSchema)

