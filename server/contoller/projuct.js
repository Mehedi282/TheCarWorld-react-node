const Product = require('../model/product')
const fs = require('fs')



exports.createProduct = (req, res, next) => {


    Product.findOne({ model: req.body.model })
        .exec((error, product) => {
            if (product) return res.status(200).json({
                message: "Product already exist"
            })

            const {
                name,
                price,
                description,
                condition,
                year,
                body,
                mileage,
                fuel,
                transmission,
                eColor,
                drive,
                model,
                make
            } = req.body;




            const newProduct = new Product({
                name,
                price,
                description,
                condition,
                year,
                body,
                mileage,
                fuel,
                transmission,
                eColor,
                drive,
                model,
                make,
                img: {
                    data: fs.readFileSync("uploads/" + req.file.filename),
                    contentType: 'image/png'
                }


            })

            newProduct.save((error, result) => {
                if (error) {
                    return res.status(200).json(error)
                }

                if (result) {
                    return res.status(200).json({ message: "Product is created successfully" })
                }
            })

        })
}


exports.fetchProduct = (req, res) => {

    Product.find({})
        .exec((error, product) => {
            if (error) {
                return res.status(200).json(error)
            } else {
                return res.status(200).json(product)
            }
        })
}

exports.fetchProductByid = (req, res) => {
    Product.findById({ _id: req.params.id })
        .exec((error, product) => {
            if (error) {
                return res.status(200).json(error)
            }

            if (product) {
                return res.status(200).json(product)
            }
        })
}



exports.deleteProduct = (req, res) => {

    Product.findByIdAndDelete(req.params.id)
        .exec((error, product) => {
            if (error) {
                return res.status(200).json(error)
            } else {
                return res.status(200).json({ message: "Deleted Successfully" })
            }
        })
}