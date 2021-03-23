const express = require('express')
const carController = require('../controllers/carController')
const router = express.Router()

router.route('/')
    .get(carController.getAllCars)

module.exports = router