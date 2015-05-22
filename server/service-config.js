'use strict';

if (typeof Meteor.settings !== 'undefined' && !_.isEmpty(Meteor.settings)) {

    // Facebook config
    ServiceConfiguration.configurations.remove({
        service: 'facebook'
    });
    ServiceConfiguration.configurations.insert({
        service: 'facebook',
        clientId: Meteor.settings.private.facebook.clientId,
        secret: Meteor.settings.private.facebook.secret
    });

    // GitHub config
    ServiceConfiguration.configurations.remove({
        service: 'github'
    });
    ServiceConfiguration.configurations.insert({
        service: 'github',
        clientId: Meteor.settings.private.github.clientId,
        secret: Meteor.settings.private.github.secret
    });

    // Google config
    ServiceConfiguration.configurations.remove({
        service: 'google'
    });
    ServiceConfiguration.configurations.insert({
        service: 'google',
        clientId: Meteor.settings.private.google.clientId,
        secret: Meteor.settings.private.google.secret
    });

    // Twitter config
    ServiceConfiguration.configurations.remove({
        service: 'twitter'
    });
    ServiceConfiguration.configurations.insert({
        service: 'twitter',
        consumerKey: Meteor.settings.private.twitter.consumerKey,
        secret: Meteor.settings.private.twitter.secret
    });

}
