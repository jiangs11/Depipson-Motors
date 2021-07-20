const mongoose = require('mongoose')

const Schema = mongoose.Schema

const imageSchema = new Schema(
    {
        url: {
            type: String,
        },
        car: {
            type: Schema.Types.ObjectId,
            ref: 'Car'
        }
    },
    {
        timestamps: true,
    }
)

const Image = mongoose.model('Image', imageSchema)

module.exports = Image