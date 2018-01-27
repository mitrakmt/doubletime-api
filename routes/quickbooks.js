const Router = require('express')
const quickbooksController = require('../controllers/quickbooks')

const quickbooksRoute = Router();

quickbooksRoute.route('/')
  .post(quickbooksController.logHours)

quickbooksRoute.route('/oauth_auth')
  .get(quickbooksController.oauth_auth)

quickbooksRoute.route('/oauth_callback')
  .get(quickbooksController.oauth_callback)

quickbooksRoute.route('/oauth_success')
  .get(quickbooksController.oauth_success)

module.exports = quickbooksRoute
