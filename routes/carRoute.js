const express = require('express')
const carController = require('../controllers/carController')
const router = express.Router()

router.route('/')
    .get(carController.getAllCars)
    .post(carController.createCar)

router.route('/:vin')
    .get(carController.getCarInfo)
    .patch(carController.editCarDetails)
    .delete(carController.deleteCar)

router.route('/motormvc/:vin')
    .get(carController.getCarInfoMVC)

router.route('/image/:vin')
    .get(carController.getImagesForCar)
    .post(carController.addImagesToCar)

module.exports = router