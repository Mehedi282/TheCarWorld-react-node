const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    price: {
        type: Number,
        default: 0.0
    },
    description: {
        type: String,

    },
    condition: {
        type: String,

    },
    year: {
        type: Number,


    },
    body: {
        type: String,

    },
    mileage: {
        type: Number,

    },
    fuel: {
        type: String,

    },
    transmission: {
        type: String,
    },
    eColor: {
        type: String,
    },
    drive: {
        type: String,
    },
    model: {
        type: String,

    },
    make: {
        type: String,


    },

    img: {
        data: Buffer,
        contentType: String
    }

}, {
    timestamps: true,
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;