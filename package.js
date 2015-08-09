Package.describe({
    summary: 'Simple accounts for Meteor.',
    version: '3.0.0',
    name: 'juliancwirko:s-id',
    git: 'https://github.com/juliancwirko/meteor-s-id.git'
});

Package.onUse(function (api) {

    api.versionsFrom(['METEOR@1.1.0.3']);

    api.use('templating');
    api.use('ui');

    api.use([
        'jquery',
        'juliancwirko:s-alert@2.4.1'
    ], ['client']);

    api.imply([
        'juliancwirko:s-alert@2.4.1'
    ], ['client']);

    api.use([
        'underscore',
        'accounts-base',
        'service-configuration',
        'accounts-password',
        'accounts-github',
        'accounts-google',
        'accounts-twitter',
        'accounts-facebook'
    ], ['client', 'server']);

    api.imply([
        'accounts-base',
        'service-configuration',
        'accounts-password',
        'accounts-github',
        'accounts-google',
        'accounts-twitter',
        'accounts-facebook'
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
        'client/sIdRegisterView.js',
        'client/helpers.js'
    ], 'client');

    api.addFiles([
        'common/s-id.js'
    ], ['client', 'server']);

    api.addFiles([
        'server/service-config.js',
        'server/accounts-config.js',
        'server/methods.js'
    ], 'server');

    api.export('sId');

});
