const User = require('../models/userModel')
const Car = require('../models/carModel')
const catchAsync = require('../utility/catchAsync')

exports.getAllCars = catchAsync(async (req, res) => {
    const cars = await Car.find()

    res.status(200).json({
        status: 'success',
        results: cars.length,
        data: { cars }
    })
})