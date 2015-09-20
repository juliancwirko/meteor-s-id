'use strict';

// you can overwrite it in the app, but it should be the same route

Accounts.emailTemplates.resetPassword.text = function (user, url) {
    return 'Hello, ' + '\n\n'
     + ' To reset your password, simply click the link below:\n\n'
     + Meteor.absoluteUrl(url.split('#/')[1]);
};
