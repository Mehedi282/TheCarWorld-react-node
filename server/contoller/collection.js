const Collection = require('../model/collection')


exports.createCollection = (req, res) => {

    Collection.findOne({ model: req.body.model })
        .exec((error, car) => {
            if (car) return res.status(200).json({
                message: "Car already exist"
            })

            const { name, model, price } = req.body;


            const newCar = new Collection({
                name,
                model,
                price
            })

            newCar.save((error, result) => {
                if (error) {
                    return res.status(200).json(error)
                }

                if (result) {
                    return res.status(200).json({ message: "Car is created successfully" })
                }
            })

        })
}