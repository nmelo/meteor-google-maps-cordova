Package.describe({
  name: 'nmelo:google-maps-cordova',
  summary: 'Native Google Maps for Cordova',
  git: 'https://github.com/nmelo/meteor-google-maps-cordova.git',
  version: '0.1.7'
});

Cordova.depends({
  'plugin.google.maps': 'https://github.com/mapsplugin/cordova-plugin-googlemaps/commit/d59b5521f3297a406fe68d487eef13516bad033a'
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
