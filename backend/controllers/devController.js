const Car = require('../models/carModel')
const Image = require('../models/imageModel')
const catchAsync = require('../utility/catchAsync')
const { addImagesToCar } = require('./carController')

exports.addDevTestData = catchAsync(async (req, res) => {
    try {
        const data = [
            { 
                vin: '1',
                make: 'toyota',
                model: 'camry' 
            }, 
            { 
                vin: '2',
                make: 'nissan',
                model: 'altima'
            },
            {
                vin: '3',
                make: 'honda',
                model: 'accord'
            }
        ]

        Car.insertMany(data)

        res.status(200).json({
            status: 'success',
            results: data.length,
        })
    } catch (error) {
        console.log('devTest/addDevTestData error: ', error)
        res.status(500).json({
            status: 'fail',
        })
    }
})

exports.deleteAllImages = catchAsync(async (req, res) => {
    try {
        await Image.remove({}) 

        res.status(200).json({
            status: 'success'
        })
    } catch (error) {
        console.log('devTest/deleteAllImages error: ', error)
        res.status(500).json({
            status: 'fail',
        })
    }
})

exports.deleteAllCars = catchAsync(async (req, res) => {
    try {
        await Car.remove({}) 

        res.status(200).json({
            status: 'success'
        })
    } catch (error) {
        console.log('devTest/deleteAllCars error: ', error)
        res.status(500).json({
            status: 'fail',
        })
    }
})