'use strict';

Meteor.methods({
    createNewUser: function (username, email, password) {
        check(username, String);
        check(email, String);
        check(password, String);

        var userQuery;

        if (username === 'nousername' && sId.settings.validateEmail(email) && sId.settings.validatePassword(password)) {
            userQuery = {
                email: email,
                password: password
            };
        }

        if (sId.settings.validateUsername(username) && sId.settings.validateEmail(email) && sId.settings.validatePassword(password)) {
            userQuery = {
                username: username,
                email: email,
                password: password
            };
        }

        if (userQuery) {
            return Accounts.createUser(userQuery);
        }
    },
    emailVerification: function (userId) {
        check(userId, String);
        this.unblock();
        Accounts.sendVerificationEmail(userId);
    }
});