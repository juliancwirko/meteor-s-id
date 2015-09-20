'use strict';

if (typeof Meteor.settings !== 'undefined' && !_.isEmpty(Meteor.settings) && !_.isEmpty(Meteor.settings.private)) {

    if (Meteor.settings.private.facebook) {
        // Facebook config
        ServiceConfiguration.configurations.remove({
            service: 'facebook'
        });
        ServiceConfiguration.configurations.insert({
            service: 'facebook',
            appId: Meteor.settings.private.facebook.appId,
            secret: Meteor.settings.private.facebook.secret
        });
    }

    if (Meteor.settings.private.github) {
        // GitHub config
        ServiceConfiguration.configurations.remove({
            service: 'github'
        });
        ServiceConfiguration.configurations.insert({
            service: 'github',
            clientId: Meteor.settings.private.github.clientId,
            secret: Meteor.settings.private.github.secret
        });
    }

    if (Meteor.settings.private.google) {
        // Google config
        ServiceConfiguration.configurations.remove({
            service: 'google'
        });
        ServiceConfiguration.configurations.insert({
            service: 'google',
            clientId: Meteor.settings.private.google.clientId,
            secret: Meteor.settings.private.google.secret
        });
    }

    if (Meteor.settings.private.twitter) {
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

}
