Package.describe({
  summary: 'Simple accounts for Meteor. Especially for Scotty boilerplate.',
  version: '0.0.2',
  name: 'juliancwirko:s-id',
  git: 'https://github.com/juliancwirko/meteor-s-id.git'
});

Package.onUse(function(api) {
    api.use('templating@1.0.0');
    api.use('ui@1.0.0');

    api.use([
      'jquery@1.0.0',
      'juliancwirko:s-alert@0.0.3'
    ], ['client']);

    api.imply([
      'juliancwirko:s-alert@0.0.3'
    ], ['client']);

    api.use([
      'underscore@1.0.0',
      'accounts-base@1.0.1',
      'iron:router@0.9.3'
    ], ['client', 'server']);

    api.imply([
      'accounts-base@1.0.1',
      'iron:router@0.9.3'
    ], ['client', 'server']);

    api.addFiles([
        'client/forgot_password_view.html',
        'client/forgot_password_view.js',
        'client/reset_password_view.html',
        'client/reset_password_view.js',
        'client/login_view.html',
        'client/login_view.js',
        'client/register_view.html',
        'client/register_view.js'
    ], 'client');

    api.addFiles([
      'common/s-id.js',
      'common/routes.js',
    ], ['client', 'server']);

    api.addFiles([
        'server/accounts-config.js'
    ], 'server');

    api.export('scottyId');

});