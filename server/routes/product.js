const express = require('express')
const router = express.Router();
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})


const upload = multer({ storage: storage })

const { createProduct, fetchProduct, fetchProductByid, deleteProduct } = require('../contoller/projuct')


router.post('/createProduct', upload.single('productimage'), createProduct)
router.get('/fetchProduct', fetchProduct)
router.get('/fetchProductByid/:id', fetchProductByid)
router.delete('/deleteProduct/:id', deleteProduct)



module.exports = router