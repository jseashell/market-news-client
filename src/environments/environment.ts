// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  finnhub: {
    token: 'cafa81qad3ibf4h8v020',
  },
  marketaux: {
    token: 'mNWUFXRriPRsYar8VWTLHnHVxoUP5TCv0EIwHPBM',
    url: 'https://api.marketaux.com/v1/news/all',
  },
  resourceApi: {
    url: 'https://6ebf4je7og.execute-api.us-east-1.amazonaws.com/dev',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
