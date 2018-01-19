const Router = require('express')
const user = require('./user')
const auth = require('./auth')
const team = require('./team')

const routes = Router();

routes.use('/user', user)
routes.use('/team', team)
routes.use('/auth', auth)

module.exports = routes
