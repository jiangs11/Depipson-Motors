const User = require('../models/userModel')
const Car = require('../models/carModel')
const Image = require('../models/imageModel')
const catchAsync = require('../utility/catchAsync')
const axios = require('axios')

exports.getAllCars = catchAsync(async (req, res) => {
    try {
        const cars = await Car.find().populate('images')

        res.status(200).json({
            status: 'success',
            results: cars.length,
            data: cars
        })
    } catch (error) {
        console.log('cars/getAllCars error: ', error)
        res.status(500).json({
            status: 'fail',
        })
    }
})

exports.getCarInfo = catchAsync(async (req, res) => {
    try {
        const vin = req.params.vin

        const carDoc = await Car.findOne({ vin }).populate('images')

        res.status(200).json({
            status: 'success',
            data: carDoc
        })
    } catch (error) {
        console.log('cars/getCarInfo error: ', error)
        res.status(500).json({
            status: "Couldn't find car with that VIN",
        })
    }
})

exports.getCarInfoMVC = catchAsync(async (req, res) => {
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

exports.getImagesForCar = catchAsync(async (req, res) => {
    try {
        const vin = req.params.vin

        const images = await Car.find({ vin }).images
        console.log('img: ', images)

        res.status(200).json({
            status: 'success',
            data: images
        })
    } catch (error) {
        console.log('cars/getImagesForCar error: ', error)
        res.status(500).json({
            status: "Couldn't find car with that VIN",
        })
    }
})

exports.addImagesToCar = catchAsync(async (req, res) => {
    try {
        const vin = req.params.vin
        const imagesToAdd = req.body.images

        const carID = await Car.find({ vin })._id

        imagesToAdd.forEach(async image => {
            const url = image.url

            // Create a new Image document for each image in array
            const newImage = await Image.create({ url })

            // Update current image's car ID
            await Image.findByIdAndUpdate(newImage._id, { 
                car: carID
            }, { useFindAndModify: false })

            // Add each image's ID to the car's image array
            await Car.findByIdAndUpdate(carID, { 
                '$push': {
                    'images': newImage._id
                }
            }, { useFindAndModify: false })
        })

        res.status(200).json({
            status: 'Images successfully added',
        })
    } catch (error) {
        console.log('cars/addImagesToCar error: ', error)
        res.status(500).json({
            status: "Couldn't find car with that VIN",
        })
    }
})

// Cascade deletes all Image associated with the Car
exports.deleteCar = catchAsync(async (req, res) => {
    try {
        const vin = req.params.vin

        const carDoc = await Car.findOneAndDelete({ vin })

        await Image.deleteMany({ car: carDoc._id })

        res.status(200).json({
            status: 'Car has been successfully deleted',
        })
    } catch (error) {
        console.log('cars/deleteCar error: ', error)
        res.status(500).json({
            status: "Couldn't find car with that VIN",
        })
    }
})