require('dotenv').config()
const mongoose = require('mongoose')


const setup = async () => {
    try {
        await mongoose.connect(process.env.DB, {useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
        console.log('DB Connected')
    } catch(err) {
        console.log(err.message)
    }
}

module.exports = setup