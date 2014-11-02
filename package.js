Package.describe({
  name: 'superchris:angular-ui-bootstrap',
  summary: 'A meteorized version of angular-ui-bootstrap',
  version: '0.11.2',
  git: 'https://github.com/superchris/meteor-angular-ui-bootstrap.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use("superchris:angular@1.3.2", "client");
  api.addFiles(["angular-ui/./ui-bootstrap-tpls.js"], "client");
});
