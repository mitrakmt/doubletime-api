const request = require('request-promise')
const user = require('../models/user')
const userController = {}

/**
 * Create user
 * @name post/user
 * @function
 * @memberof module:user
 * @param email type: string
 * @param team type: integer
 * @param role type: string
 * @param firstName type: string
 * @param lastName type: string
 */
userController.createUser = (req, res) => {
  user.createUser(req.body.email, req.body.team, req.body.role, req.body.firstName, req.body.lastName)
    .then(status => {
      if (status.error) {
        res.status(400).send(status.error)
      } else {
        res.status(200).send(status)
      }
    })
}

/**
 * Find user (self)
 * @name get/user
 * @function
 * @memberof module:user
 */
userController.findUser = (req, res) => {
  user.findUser(req.user.id)
    .then(status => {
      res.status(200).send(status)
    })
}

/**
 * Find user by ID
 * @name get/user/:userId
 * @function
 * @memberof module:user
 */
userController.findUserById = (req, res) => {
  user.findUserById(req.params.userId)
    .then(status => {
      res.status(200).send(status)
    })
}

/**
 * Update user (selef)
 * @name patch/user
 * @function
 * @memberof module:user
 */
userController.updateUser = (req, res) => {
  user.updateUser(req.user.id)
    .then(status => {
      res.status(200).send(status)
    })
}

/**
 * Update user by ID
 * @name patch/user/:userId
 * @function
 * @memberof module:user
 */
userController.updateUserById = (req, res) => {
  user.updateUser(req.params.userId)
    .then(status => {
      res.status(200).send(status)
    })
}

/**
 * Disable user
 * @name delete/user/:userId
 * @function
 * @memberof module:user
 */
userController.disableUser = (req, res) => {
  user.disableUser(req.params.userId)
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