const mongoose = require('mongoose')

const collectionSchema = new mongoose.Schema({
    name: String,
    model: String,
    price: Number,
})

module.exports = mongoose.model('Carcollection', collectionSchema)