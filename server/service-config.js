
if (typeof Meteor.settings !== 'undefined' && !_.isEmpty(Meteor.settings)) {

    // GitHub config
    ServiceConfiguration.configurations.remove({
        service: 'github'
    });
    ServiceConfiguration.configurations.insert({
        service: 'github',
        clientId: Meteor.settings.github.clientId,
        secret: Meteor.settings.github.secret
    });

    // Google config
    ServiceConfiguration.configurations.remove({
        service: 'google'
    });
    ServiceConfiguration.configurations.insert({
        service: 'google',
        clientId: Meteor.settings.google.clientId,
        secret: Meteor.settings.google.secret
    });

    // Twitter config
    ServiceConfiguration.configurations.remove({
        service: 'twitter'
    });
    ServiceConfiguration.configurations.insert({
        service: 'twitter',
        consumerKey: Meteor.settings.twitter.consumerKey,
        secret: Meteor.settings.twitter.secret
    });

}