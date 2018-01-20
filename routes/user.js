const Router = require('express')
const userController = require('../controllers/user')
const verifyJwt = require('../middleware/auth')

const userRoute = Router();

userRoute.route('/')
  .get(userController.findUser)
  .post(userController.createUser)
  .patch(userController.updateUser)
  .delete(userController.disableUser)

userRoute.route('/admin')
  .post(userController.createAdmin)

module.exports = userRoute
