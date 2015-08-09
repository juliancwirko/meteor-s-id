'use strict';

Meteor.methods({
    createNewUser: function (username, email, password) {
        check(username, String);
        check(email, String);
        check(password, String);
        if (sId.settings.validateUsername(username) && sId.settings.validateEmail(email) && sId.settings.validatePassword(password)) {
            return Accounts.createUser({
                username: username,
                email: email,
                password: password
            });
        }
    },
    emailVerification: function (userId) {
        check(userId, String);
        this.unblock();
        Accounts.sendVerificationEmail(userId);
    }
});