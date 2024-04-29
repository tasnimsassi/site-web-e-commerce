export default {

    oidc: {
        clientId: '0oag5kxk2cfJ7lmRY5d7', //authentification pour okta
        issuer: 'https://dev-16982960.okta.com/oauth2/default',
        redirectUri: 'http://localhost:4200/login/callback',
        scopes: ['openid', 'profile', 'email'],

    }

}
