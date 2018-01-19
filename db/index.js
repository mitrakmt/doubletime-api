const mongoose = require('mongoose')
const moment = require('moment')
mongoose.Promise = Promise;
const db = mongoose.connection;

mongoose.connect(process.env.MLAB_URL, (err) => {
  if (err) {
    console.log('Could NOT connect to database: ', err)
  } else {
    console.log(`--${moment().format('hh:mm:ss')}-- Database connection established`)
  }
})

module.exports = db
