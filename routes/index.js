const Router = require('express')
const user = require('./user')
const auth = require('./auth')
const team = require('./team')
const quickbooks = require('./quickbooks')

const routes = Router();

routes.use('/user', user)
routes.use('/team', team)
routes.use('/auth', auth)
routes.use('/quickbooks', quickbooks)

module.exports = routes
