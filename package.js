Package.describe({
  name: 'nmelo:google-maps-cordova',
  summary: 'Native Google Maps for Cordova',
  git: 'https://github.com/nmelo/meteor-google-maps-cordova.git',
  version: '0.1.6'
});

Cordova.depends({
  'cordova-plugin-googlemaps': '1.3.4'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'reactive-var',
    'templating',
    'tracker',
    'underscore'
  ], 'client');
  api.addFiles([
    'api.js'
  ], 'client');
  api.export('MapControl');
});
