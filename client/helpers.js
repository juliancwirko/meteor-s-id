'use strict';

// global helpers

// this is username or email
Template.registerHelper('loginNamePlaceholder', function () {
    if (sId.settings.registerEmailFieldOnly) {
        return sId.settings.messages.loginNamePlaceholderEmailOnly;
    }
    return sId.settings.messages.loginNamePlaceholder;
});

Template.registerHelper('usernamePlaceholder', function () {
    return sId.settings.messages.usernamePlaceholder;
});

Template.registerHelper('emailPlaceholder', function () {
    return sId.settings.messages.emailPlaceholder;
});

Template.registerHelper('passwordPlaceholder', function () {
    return sId.settings.messages.passwordPlaceholder;
});

Template.registerHelper('newPasswordPlaceholder', function () {
    return sId.settings.messages.newPasswordPlaceholder;
});