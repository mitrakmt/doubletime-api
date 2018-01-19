const Router = require('express')
const authController = require('../controllers/auth')

const authRoute = Router();

authRoute.route('/')
  .delete(authController.logout)

authRoute.route('/login')
  .post(authController.login)

authRoute.route('/signup')
  .post(authController.signup)

module.exports = authRoute
