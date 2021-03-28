const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp = require('hpp')

const userRouter = require('./routes/userRoute')
const carRouter = require('./routes/carRoute')
const devRouter = require('./routes/devRoute')

const app = express()

///////////////////////
// Global Middlewear
///////////////////////

// Set security HTTP Headers
app.use(helmet())

// Limit request from same API
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many request from this IP, please try again in an hour!' 
})
app.use('/api', limiter)

// Setting CORS
app.use(cors())
app.options('*', cors())

// Body parser, reading data from body into req.body
app.use(express.json())

// Data sanitization against NoSQL query injection
app.use(mongoSanitize())

// Data sanitization against XSS
app.use(xss())

// Prevent parameter pollution
// Pass in whitelist property to allow for some words to 'pollute'
app.use(hpp())

////////////////
// Routes
app.use('/api/v1/user', userRouter)
app.use('/api/v1/car', carRouter)
app.use('/api/v1/dev', devRouter)

module.exports = app