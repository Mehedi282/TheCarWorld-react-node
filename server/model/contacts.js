const mongoose = require('mongoose')

const contactsSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    offerprice: Number,

})

module.exports = mongoose.model('Contracts', contactsSchema)