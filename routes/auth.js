const Router = require('express')
const authController = require('../controllers/auth')
const verifyJwt = require('../middleware/auth')

const authRoute = Router();

authRoute.route(verifyJwt, '/')
  .delete(authController.logout)

authRoute.route(verifyJwt, '/login')
  .post(authController.login)

authRoute.route(verifyJwt, '/signup')
  .post(authController.signup)

module.exports = authRoute
