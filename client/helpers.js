'use strict';

// global helpers

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