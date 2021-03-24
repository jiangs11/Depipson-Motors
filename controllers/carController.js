const User = require('../models/userModel')
const Car = require('../models/carModel')
const Image = require('../models/imageModel')
const catchAsync = require('../utility/catchAsync')
const axios = require('axios')

exports.getAllCars = catchAsync(async (req, res) => {
    try {
        const cars = await Car.find()

        res.status(200).json({
            status: 'success',
            results: cars.length,
            data: { cars }
        })
    } catch (error) {
        console.log('cars/getAllCars error: ', error)
        res.status(500).json({
            status: 'fail',
        })
    }
})

exports.getCarInfoByVIN = catchAsync(async (req, res) => {
    try {
        // const vin = 'SCBFR7ZA5CC072256'
        const vin = req.params.vin
        const response = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/${vin}?format=json`)

        res.status(200).json({
            status: 'success',
            data: response.data
        })
    } catch (error) {
        console.log('cars/getCarInfoByVIN error: ', error)
        res.status(500).json({
            status: 'Motor DMC API failed',
        })
    }
})

// One to Many of Car to Images
exports.createCar = catchAsync(async (req, res) => {
    try {
        let reqBody = req.body

        const images = reqBody.images
        delete reqBody.images

        // Create a new Car document without the images yet
        const newCar = await Car.create(reqBody)

        images.forEach(async image => {
            const url = image.url

            // Create a new Image document for each image in array
            const newImage = await Image.create({ url })

            // Update current image's car ID
            await Image.findByIdAndUpdate(newImage._id, { 
                car: newCar._id
            }, { useFindAndModify: false })

            // Add each image's ID to the car's image array
            await Car.findByIdAndUpdate(newCar._id, { 
                '$push': {
                    'images': newImage._id
                }
            }, { useFindAndModify: false })
        })
        
        res.status(200).json({
            status: 'Car has been successfully created',
        })
    } catch (error) {
        console.log('cars/createCar error: ', error)
        res.status(500).json({
            status: 'Car already exists with that VIN',
        })
    }
})

exports.editCarDetails = catchAsync(async (req, res) => {
    try {
        const vin = req.params.vin
        const newCarDetails = req.body

        await Car.findOneAndUpdate(
            { vin }, newCarDetails,
            { useFindAndModify: false }
        )

        res.status(200).json({
            status: 'Car details successfully updated',
        })
    } catch (error) {
        console.log('cars/editCarDetails error: ', error)
        res.status(500).json({
            status: "Couldn't find car with that VIN",
        })
    }
})

exports.addImagesToCar = catchAsync(async (req, res) => {
    try {
        const vin = req.params.vin
        const newCarDetails = req.body

        await Car.findOneAndUpdate(
            { vin }, newCarDetails
        )

        res.status(200).json({
            status: 'Car detail successfully updated',
        })
    } catch (error) {
        console.log('cars/editCarDetails error: ', error)
        res.status(500).json({
            status: "Couldn't find car with that VIN",
        })
    }
})

exports.getImagesForCar = catchAsync(async (req, res) => {
    try {
        const vin = req.params.vin

        await Car.findOneAndUpdate(
            { vin }, newCarDetails
        )

        res.status(200).json({
            status: 'Car detail successfully updated',
        })
    } catch (error) {
        console.log('cars/editCarDetails error: ', error)
        res.status(500).json({
            status: "Couldn't find car with that VIN",
        })
    }
})