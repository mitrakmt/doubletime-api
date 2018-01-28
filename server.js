const express = require('express')
const logger = require('morgan')
const simpleOauthModule = require('simple-oauth2')
require('dotenv').config()
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const routes = require('./routes')
const jwt = require('express-jwt')
const PORT = process.env.PORT || 3001
const db = require('./db')
const app = express()
const oauth_callback = (req, res) => {
  const oauth2 = simpleOauthModule.create({
    client: {
      id: process.env.QBO_CLIENT_ID,
      secret: process.env.QBO_CLIENT_SECRET,
    },
    auth: {
      tokenHost: 'http://localhost:3001'
    },
  });
  // Callback service parsing the authorization token and asking for the access token
  const code = req.query.code;
  console.log('code', code)
  const options = {
    code,
  };

  oauth2.authorizationCode.getToken(options, (error, result) => {
    if (error) {
      console.error('Access Token Error', error.message);
      return res.json('Authentication failed');
    }

    console.log('The resulting token: ', result);
    const token = oauth2.accessToken.create(result);

    return res
      .status(200)
      .json(token);
  });
}

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())

app.use('/api', routes)

app.use('/oauth/authorize', oauth_callback)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

module.exports = app
