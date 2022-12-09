const { application } = require('express')
const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB Connection Successful')
}

module.exports = {
    connectDB
}
