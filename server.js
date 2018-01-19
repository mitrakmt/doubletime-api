const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const routes = require('./routes')
const jwt = require('express-jwt')
require('dotenv')
const { PORT = 3001 } = process.env;
const db = './db' // eslint-disable-line no-unused-vars
const app = express();

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(helmet())
app.use(cors());

app.use('/api', jwt({ secret: process.env.JWT_SECRET }));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); // eslint-disable-line no-console

module.exports = app
