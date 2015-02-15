Package.describe({
  summary: 'Simple accounts for Meteor.',
  version: '0.1.2',
  name: 'juliancwirko:s-id',
  git: 'https://github.com/juliancwirko/meteor-s-id.git'
});

Package.onUse(function(api) {
    api.use('templating@1.0.9');
    api.use('ui@1.0.4');

    api.use([
      'jquery@1.0.1',
      'juliancwirko:s-alert@1.0.0'
    ], ['client']);

    api.imply([
      'juliancwirko:s-alert@1.0.0'
    ], ['client']);

    api.use([
      'underscore@1.0.1',
      'accounts-base@1.1.2',
      'service-configuration@1.0.2',
      'accounts-password@1.0.4',
      'accounts-github@1.0.2',
      'accounts-google@1.0.2',
      'accounts-twitter@1.0.2',
      'iron:router@1.0.0',
    ], ['client', 'server']);

    api.imply([
      'accounts-base@1.1.2',
      'service-configuration@1.0.2',
      'accounts-password@1.0.4',
      'accounts-github@1.0.2',
      'accounts-google@1.0.2',
      'accounts-twitter@1.0.2',
      'iron:router@1.0.0',
    ], ['client', 'server']);

    api.addFiles([
        'client/s-alert-config.js',
        'client/style.css',
        'client/social-buttons.html',
        'client/social-buttons.js',
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
        'server/service-config.js',
        'server/accounts-config.js'
    ], 'server');

    api.export('scottyId');

});