// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  region: 'us-east-1',

  identityPoolId: 'us-east-1:9d24d4b9-2d86-4df9-83f5-ffc15051010a',
  userPoolId: 'us-east-1_YNTKXpJjl',
  clientId: '2mhm8uofn3un3ajs6jaj6oj9bs',

  rekognitionBucket: 'RekognitionPics',
  albumName: 'usercontent',
  bucketRegion: 'us-east-1',

  ddbTableName: 'LoginTrailcv_forum_web',

  cognito_idp_endpoint: '',
  cognito_identity_endpoint: '',
  sts_endpoint: '',
  dynamodb_endpoint: '',
  s3_endpoint: ''

};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
