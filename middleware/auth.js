const jwt = require('express-jwt')

const verifyJwt = jwt({ secret: process.env.JWT_SECRET })

module.exports = {
  verifyJwt
}