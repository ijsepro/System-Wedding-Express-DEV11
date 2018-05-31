// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAKiBhzcVgBZReon0oUZe--QSczrLMu_rY",
    authDomain: "wedding-express.firebaseapp.com",
    databaseURL: "https://wedding-express.firebaseio.com",
    projectId: "wedding-express",
    storageBucket: "wedding-express.appspot.com",
    messagingSenderId: "734200171622"
  }
};
