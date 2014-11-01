Package.describe({
  name: 'angular-ui',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('angular-ui.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('angular-ui');
  api.addFiles('angular-ui-tests.js');
});
