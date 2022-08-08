const Contracts = require('../model/contacts')


exports.createContracts = (req, res) => {

    Contracts.findOne({ email: req.body.email })
        .exec((error, offer) => {
            if (offer) {
                return res.status(200).json({ message: "Email already exist" })
            }

            const { name, email, phone, offerprice } = req.body;


            const newContract = new Contracts({
                name,
                email,
                phone,
                offerprice
            })

            newContract.save((error, result) => {
                if (error) {
                    return res.status(200).json(error)
                }

                if (result) {
                    return res.status(200).json({ message: "Offer is created successfully" })
                }
            })
        })

}


exports.fetchOffer = (req, res) => {

    Contracts.find({})
        .exec((error, product) => {
            if (error) {
                return res.status(200).json(error)
            } else {
                return res.status(200).json(product)
            }
        })
}