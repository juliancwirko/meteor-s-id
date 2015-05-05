'use strict';

Accounts.emailTemplates.resetPassword.text = function (user, url) {
    return 'Hello, ' + user.username + '\n\n'
     + ' To reset your password, simply click the link below:\n\n'
     + Meteor.absoluteUrl(url.split('#/')[1]);
};
