const express = require('express')
const router = express.Router();

const { createContracts, fetchOffer } = require('../contoller/contracts')

router.post('/createOffer', createContracts)
router.get('/fetchOffer', fetchOffer)




module.exports = router