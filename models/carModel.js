const mongoose = require('mongoose')

const Schema = mongoose.Schema

const carSchema = new Schema(
    {
        vin: {
            type: String,
            required: [true, 'VIN field required!'],
            unique: true,
        },
        price: { 
            type: Number,
        },
        year: {
            type: String,
        },
        make: {
            type: String,
        },
        model: {
            type: String,
        },
        manufacturer: {
            type: String,
        },
        fuel_type: {
            type: String,
        },
        num_doors: {
            type: String,
        },
        num_seats: {
            type: String,
        }
    }, 
    {
        timestamps: true,
    }
)

const Car = mongoose.model('Car', carSchema)

module.exports = Car