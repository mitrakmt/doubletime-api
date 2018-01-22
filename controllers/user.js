const request = require('request-promise')
const user = require('../models/user')
const userController = {}

/**
 * Create user
 * @name post/user
 * @function
 * @memberof module:user
 */
userController.createUser = (req, res) => {
  user.createUser(req.body.email, req.body.team)
    .then(status => {
      res.status(200).send(status)
    })
}

/**
 * Find user
 * @name get/user
 * @function
 * @memberof module:user
 */
userController.findUser = (req, res) => {
  user.findUser(req.body.email, req.body.team)
    .then(status => {
      res.status(200).send(status)
    })
}

/**
 * Update user
 * @name patch/user
 * @function
 * @memberof module:user
 */
userController.updateUser = (req, res) => {
  user.updateUser(req.body.email)
    .then(status => {
      res.status(200).send(status)
    })
}

/**
 * Disable user
 * @name delete/user
 * @function
 * @memberof module:user
 */
userController.disableUser = (req, res) => {
  user.disableUser(req.user.id)
    .then(status => {
      res.status(200).send(status)
    })
}

/**
 * Create admin user
 * @name post/user/admin
 * @function
 * @memberof module:user
 */
userController.createAdmin = (req, res) => {
  user.createAdin(req.body.email, req.body.team)
    .then(status => {
      res.status(200).send(status)
    })
}

module.exports = userController