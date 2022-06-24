import { environment } from './environments/environment';

export default {
  aws_project_region: 'us-east-1',
  aws_cognito_region: 'us-east-1',
  aws_user_pools_id: environment.cognito.userPoolId,
  aws_user_pools_web_client_id: environment.cognito.clientId,
  oauth: {
    domain: environment.cognito.issuer,
    scope: environment.cognito.scopes,
    redirectSignIn: environment.cognito.redirectUri,
    responseType: 'code',
  },
};
