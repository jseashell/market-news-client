export const environment = {
  production: true,
  cognito: {
    issuer: 'https://market-news-dev.auth.us-east-1.amazoncognito.com',
    clientId: '3o3nrjgl4s7knidk560jt8i0c4',
    redirectUri: 'http://localhost:4200/login-callback',
    pkce: true,
    userPoolId: 'us-east-1_KEURVYwh7',
    scopes: ['openid', 'email'],
  },
  finnhub: {
    token: 'cafa81qad3ibf4h8v020',
  },
  marketaux: {
    token: 'mNWUFXRriPRsYar8VWTLHnHVxoUP5TCv0EIwHPBM',
    url: 'https://api.marketaux.com/v1/news/all',
  },
  resourceApi: {
    // TODO Update for prod
    url: 'https://6ebf4je7og.execute-api.us-east-1.amazonaws.com/dev',
  },
};
