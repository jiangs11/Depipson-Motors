const app = require('./app')
const mongoose = require('mongoose')
require('dotenv').config()

app.get('/', (req,res) => {
    res.send('Welcome to the Depipson Motors API!')
})

// note to self: rowan account
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