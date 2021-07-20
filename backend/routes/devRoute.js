const express = require('express')
const devController = require('../controllers/devController')
const { route } = require('./carRoute')
const router = express.Router()

router.route('/')
    .get(devController.addDevTestData)

router.route('/image')
    .delete(devController.deleteAllImages)

router.route('/car')
    .delete(devController.deleteAllCars)

module.exports = router