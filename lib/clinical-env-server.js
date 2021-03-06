// var obj = {};
//
// var dotenv = Npm.require('dotenv');
// dotenv._getKeysAndValuesFromEnvFilePath(process.env.PWD + "/.env");
// dotenv._setEnvs();
//
// // NODE_ENV DEFAULTS
// if (dotenv.environment() === "production") {
//   Env.isProduction = true;
//   Env.isDevelopment = false;
//   Env.isTesting = false;
//   Env.isTraining = false;
//   Env.isStaging = false;
// } else if (dotenv.environment() === "development") {
//   Env.isProduction = false;
//   Env.isDevelopment = true;
//   Env.isTesting = false;
//   Env.isTraining = false;
//   Env.isStaging = false;
// }
//
// // NODE_ENV OVERRIDES
// if ((dotenv.keys_and_values.NODE_ENV === "production") || (process.env.NODE_ENV === "production")) {
//   Env.isProduction = true;
//   Env.isDevelopment = false;
//   Env.isTesting = false;
//   Env.isTraining = false;
//   Env.isStaging = false;
// } else if ((dotenv.keys_and_values.NODE_ENV === "development") || (process.env.NODE_ENV === "development")) {
//   Env.isProduction = false;
//   Env.isDevelopment = true;
//   Env.isTesting = false;
//   Env.isTraining = false;
//   Env.isStaging = false;
// } else if ((dotenv.keys_and_values.NODE_ENV === "testing") || (process.env.NODE_ENV === "testing")) {
//   Env.isProduction = true;
//   Env.isDevelopment = false;
//   Env.isTesting = true;
//   Env.isTraining = false;
//   Env.isStaging = false;
// } else if ((dotenv.keys_and_values.NODE_ENV === "training") || (process.env.NODE_ENV === "training")) {
//   Env.isProduction = false;
//   Env.isDevelopment = false;
//   Env.isTesting = false;
//   Env.isTraining = true;
//   Env.isStaging = false;
// } else if ((dotenv.keys_and_values.NODE_ENV === "staging") || (process.env.NODE_ENV === "staging")) {
//   Env.isProduction = false;
//   Env.isDevelopment = false;
//   Env.isTesting = false;
//   Env.isTraining = false;
//   Env.isStaging = true;
// }
//
// // DEBUG
// if ((dotenv.keys_and_values.DEBUG === "true") ||
//   (dotenv.keys_and_values.DEBUG === "TRUE") ||
//   (dotenv.keys_and_values.DEBUG === "1")) {
//   Env.isDebug = true;
// } else {
//   Env.isDebug = false;
// }
//
// // TRACE
// if ((dotenv.keys_and_values.TRACE === "true") ||
//   (dotenv.keys_and_values.TRACE === "TRUE") ||
//   (dotenv.keys_and_values.TRACE === "1")) {
//   Env.isTrace = true;
// } else {
//   Env.isTrace = false;
// }
//
//
// /**
// * @summary Exposes server environment variables on the client.
// * @locus Server
// * @memberOf Env
// * @name allow
// * @version 1.2.3
// * @example
// * ```js
// * Env.allow({
// *   DEBUG: true,
// *   NODE_ENV: true
// * }});
// * ```
// */
// Env.allow = function (variables) {
//
//   var obj = {};
//
//   if (process.env.DEBUG) {
//     console.log('Env.allow', variables);
//   }
//
//   Object.keys(variables).forEach(function(key){
//     if (variables[key] === true) {
//       obj[key] = process.env[key];
//     }
//   });
//
//   if (process.env.DEBUG) {
//     console.log('obj', obj);
//   }
//
//   // _.each(variables, function (value, key) {
//   //   obj[key] = value ? process.env[key] : undefined;
//   // });
//
//   obj['isProduction'] = false;
//   obj['isDevelopment'] = false;
//   obj['isTesting'] = false;
//   obj['isTraining'] = false;
//   obj['isStaging'] = false;
//   obj['isDebug'] = false;
//   obj['isTrace'] = false;
//
//   if ((dotenv.keys_and_values.NODE_ENV === "production") || (process.env.NODE_ENV === "production")) {
//     obj['isProduction'] = true;
//   };
//   if ((dotenv.keys_and_values.NODE_ENV === "development") || (process.env.NODE_ENV === "development")) {
//     obj['isDevelopment'] = true;
//   };
//   if ((dotenv.keys_and_values.NODE_ENV === "testing") || (process.env.NODE_ENV === "testing")) {
//     obj['isTesting'] = true;
//   };
//   if ((dotenv.keys_and_values.NODE_ENV === "training") || (process.env.NODE_ENV === "training")) {
//     obj['isTraining'] = true;
//   };
//   if ((dotenv.keys_and_values.NODE_ENV === "staging") || (process.env.NODE_ENV === "staging")) {
//     obj['isStaging'] = true;
//   };
//   if ((dotenv.keys_and_values.DEBUG === "staging") || (process.env.DEBUG === "staging")) {
//     obj['isDebug'] = true;
//   };
//   if ((dotenv.keys_and_values.TRACE === "staging") || (process.env.TRACE === "staging")) {
//     obj['isTrace'] = true;
//   };
//
//   if (process.env.DEBUG) {
//     console.log('obj', obj);
//   }
//
//   Inject.obj('env', obj);
// };
// Env.display = function () {
//   console.log(Env.variables());
// };
// Env.variables = function () {
//   return process.env;
// };
