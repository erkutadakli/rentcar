const mongoose = require('mongoose');

const carPropertySchema = mongoose.Schema({
    key: { type: String, required: true },
    value: { type: String, required: true },
    createDate: { type: Date },
})

module.exports = mongoose.model('CarProperties', carPropertySchema)

