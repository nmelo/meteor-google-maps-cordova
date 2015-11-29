Package.describe({
  name: 'gwendall:google-maps-cordova',
  summary: 'Native Google Maps for Cordova',
  git: 'https://github.com/gwendall/meteor-google-maps-cordova.git',
  version: '0.1.4'
});

Cordova.depends({
  'cordova-plugin-googlemaps ': '1.3.4'
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
