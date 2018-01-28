const quickbooksController = {}
const simpleOauthModule = require('simple-oauth2')

quickbooksController.oauth_auth = (req, res) => {
  console.dir('ojb', {
    id: process.env.QBO_CLIENT_ID,
    secret: process.env.QBO_CLIENT_SECRET,
  })
  const oauth2 = simpleOauthModule.create({
    client: {
      id: process.env.QBO_CLIENT_ID,
      secret: process.env.QBO_CLIENT_SECRET,
    },
    auth: {
      tokenHost: 'http://localhost:3000'
    },
  });
  // Authorization uri definition
  const authorizationUri = oauth2.authorizationCode.authorizeURL({
    redirect_uri: 'http://localhost:3001/api/quicbooks/oauth_callback',
    scope: 'com.intuit.quickbooks.accounting com.intuit.quickbooks.payment openid profile email phone address',
  });

  // Initial page redirecting to Github
  console.log(authorizationUri);
  res.redirect(authorizationUri);
}

quickbooksController.oauth_callback = (req, res) => {
  // Callback service parsing the authorization token and asking for the access token
  const code = req.query.code;
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

quickbooksController.oauth_success = (req, res) => {
  res.status(200).send('success')
}

quickbooksController.logHours = () => {

}


module.exports = quickbooksController;