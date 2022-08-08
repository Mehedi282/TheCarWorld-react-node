const Admin = require('../model/admin')


exports.createAdmin = (req, res) => {

    Admin.findOne({ email: req.body.email })
        .exec((error, admin) => {
            if (admin) return res.status(200).json({
                message: "Admin already exist"
            })

            const { username, email, password } = req.body;


            const newAdmin = new Admin({
                username,
                email,
                password
            })

            newAdmin.save((error, result) => {
                if (error) {
                    return res.status(200).json(error)
                }

                if (result) {
                    return res.status(200).json({ message: "Admin is created successfully" })
                }
            })

        })
}

exports.adminLogin = (req, res) => {
    const { email, password } = req.body

    Admin.findOne({ email: email }).exec((error, result) => {
        if (error) {
            return res.status(200).json({ message: "Email dose not exist" })
        }

        if (result) {
            const passcode = result.password;

            if (password == passcode) {
                return res.status(200).json({ message: "Successfully logged in" })

            }

            if (password != passcode) {
                return res.status(200).json({ message: "Wrong Password!" })

            }
        }
    })
}