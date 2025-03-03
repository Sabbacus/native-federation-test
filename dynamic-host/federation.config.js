const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    // "script" is not a valid value for the "type" field [package.json]
    // node_modules/systemjs/package.json:20:10:
    // 20 │   "type": "script",

    // 'systemjs/dist/system.min.js': {
    //   packageInfo: {
    //     entryPoint: 'systemjs/dist/system.min.js',
    //     esm: false,
    //   },
    // },
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

});
