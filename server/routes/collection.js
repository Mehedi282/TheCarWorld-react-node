const express = require('express')
const router = express.Router();

const { createCollection } = require('../contoller/collection')

router.post('/createCollection', createCollection)



module.exports = router