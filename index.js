const app = require('./app')
const mongoose = require('mongoose')
require('dotenv').config()

const date = new Date()
app.get('/', (req,res) => {
    res.send('Welcome to the Depipson Motors API! Update: ' + date)
})

// Note to self: jiangsteven99@gmail.com Mongo Atlas account
const uri = process.env.MONGO_ATLAS_URI

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port: ${process.env.PORT}`)
})