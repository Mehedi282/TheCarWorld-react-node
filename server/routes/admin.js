const express = require('express')
const router = express.Router();

const { createAdmin, adminLogin } = require('../contoller/admin')

router.post('/createAdmin', createAdmin)
router.post('/adminLogin', adminLogin)



module.exports = router