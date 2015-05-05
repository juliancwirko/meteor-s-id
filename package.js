Package.describe({
  summary: 'Simple accounts for Meteor.',
  version: '1.0.0',
  name: 'juliancwirko:s-id',
  git: 'https://github.com/juliancwirko/meteor-s-id.git'
});

Package.onUse(function(api) {
    api.use('templating@1.1.1');
    api.use('ui@1.0.6');

    api.use([
      'jquery@1.11.3_2',
      'juliancwirko:s-alert@2.3.0',
      'juliancwirko:s-alert-stackslide@1.1.1'
    ], ['client']);

    api.imply([
      'juliancwirko:s-alert@2.3.0',
      'juliancwirko:s-alert-stackslide@1.1.1'
    ], ['client']);

    api.use([
      'underscore@1.0.3',
      'accounts-base@1.2.0',
      'service-configuration@1.0.4',
      'accounts-password@1.1.1',
      'accounts-github@1.0.4',
      'accounts-google@1.0.4',
      'accounts-twitter@1.0.4',
    ], ['client', 'server']);

    api.imply([
      'accounts-base@1.2.0',
      'service-configuration@1.0.4',
      'accounts-password@1.1.1',
      'accounts-github@1.0.4',
      'accounts-google@1.0.4',
      'accounts-twitter@1.0.4',
    ], ['client', 'server']);

    api.addFiles([
        'client/style.css',
        'client/sIdSocialButtons.html',
        'client/sIdSocialButtons.js',
        'client/sIdForgotPasswordView.html',
        'client/sIdForgotPasswordView.js',
        'client/sIdResetPasswordView.html',
        'client/sIdResetPasswordView.js',
        'client/sIdLoginView.html',
        'client/sIdLoginView.js',
        'client/sIdRegisterView.html',
        'client/sIdRegisterView.js'
    ], 'client');

    api.addFiles([
      'common/s-id.js',
    ], ['client', 'server']);

    api.addFiles([
        'server/service-config.js',
        'server/accounts-config.js'
    ], 'server');

    api.export('sId');

});