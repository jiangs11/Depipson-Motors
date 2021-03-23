const crypto = require('crypto')
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        email_address: {
            type: String,
            required: [true, 'Email field required!'],
            unique: true,
            lowercase: true,
            validate: validator.isEmail
        },
        password: {
            type: String,
            required: [true, 'Password field required!'],
            minlength: 5,
            select: false
        },
    },
    {
        timestamps: true,
    }
)

userSchema.pre('save', async (next) => {
    if (!this.isModified('password')) return next()

    this.password = await bcrypt.hash(this.password, 12)
})

userSchema.methods.correctPassword = async (candidatePassword, userPassword) => {
    return await bcrypt.compare(candidatePassword, userPassword)
}

const User = mongoose.model('User', userSchema)

module.exports = User