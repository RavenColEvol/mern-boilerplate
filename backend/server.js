const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const app = express()

// DB setup
require('./config/db')();


// Middleware 
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())
app.use(helmet())


app.use('/api/user', require('./routes/api/user.api'));


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server listening to port ${PORT}`))