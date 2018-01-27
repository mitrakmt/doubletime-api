const request = require('request-promise')
const auth = require('../models/user')
const authController = {}

/**
 * Create user
 * @name post/auth/signup
 * @function
 * @memberof module:auth
 */
authController.signup = (req, res) => {

}

authController.requestQuickbooksToken = (req, res) => {
  var postBody = {
    url: QuickBooks.REQUEST_TOKEN_URL,
    oauth: {
      callback: 'http://localhost:' + port + '/callback/',
      consumer_key: consumerKey,
      consumer_secret: consumerSecret
    }
  }
  request.post(postBody, function (e, r, data) {
    var requestToken = qs.parse(data)
    req.session.oauth_token_secret = requestToken.oauth_token_secret
    console.log(requestToken)
    res.redirect(QuickBooks.APP_CENTER_URL + requestToken.oauth_token)
  })
}

/**
 * Create user
 * @name post/auth/login
 * @function
 * @memberof module:auth
 */
authController.login = (req, res) => {

}

/**
 * Logout
 * @name delete/auth
 * @function
 * @memberof module:auth
 */
authController.logout = (req, res) => {

}

module.exports = authController