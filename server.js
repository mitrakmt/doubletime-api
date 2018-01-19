const express = require('express')
const logger = require('morgan')
require('dotenv').config()
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const routes = require('./routes')
const jwt = require('express-jwt')
const PORT = process.env.PORT || 3001
const db = './db'
const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())

app.use('/api', routes)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

module.exports = app
