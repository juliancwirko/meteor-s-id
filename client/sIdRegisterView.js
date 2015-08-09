'use strict';

Accounts.onEmailVerificationLink(function (token) {
    if (sId.settings.emailVerification) {
        Accounts.verifyEmail(token, function () {
            sId.settings.messages.verifiedEmail && sAlert.success(sId.settings.messages.verifiedEmail);
        });
    }
});

Template.sIdRegisterView.helpers({
    sIdRegisterClass: function () {
        return sId.settings.registerForm.mainClass || 's-id-register-form';
    },
    sIdRegisterTitle: function () {
        return sId.settings.registerForm.title || 'Register';
    },
    sIdRegisterLeadText: function () {
        return sId.settings.registerForm.leadText || '';
    },
    sIdRegisterBtnLabel: function () {
        return sId.settings.registerForm.submitBtnLabel || 'Register';
    }
});

var createUserWithEmailVerification = function (username, email, password) {
    Meteor.call('createNewUser', username, email, password, function (err, result) {
        if (!err) {
            sId.settings.onRegistered();
            Meteor.call('emailVerification', result);
            Meteor.defer(function () {
                sId.settings.messages.verifyEmail && sAlert.success(sId.settings.messages.verifyEmail);
            });
        } else {
            sId.settings.messages.somethingWrong && sAlert.error(sId.settings.messages.somethingWrong + err);
        }
    });
};

var createUserWithoutEmailVerification = function (username, email, password) {
    Meteor.call('createNewUser', username, email, password, function (err, result) {
        if (!err) {
            sId.settings.onRegistered();
            Meteor.defer(function () {
                sId.settings.messages.loginNow && sAlert.success(sId.settings.messages.loginNow);
            });
        } else {
            sId.settings.messages.somethingWrong && sAlert.error(sId.settings.messages.somethingWrong + err);
        }
    });
}

Template.sIdRegisterView.events({
    'submit #register-form': function (e, tmpl) {
        e.preventDefault();
        var username = tmpl.$('#s-id-register-username').val(),
            email = tmpl.$('#s-id-register-email').val(),
            password = tmpl.$('#s-id-register-password').val();

        if (!username || !email || !password) {
            sId.settings.messages.fillAllFields && sAlert.error(sId.settings.messages.fillAllFields);
            return;
        }

        if (!sId.settings.validateUsername(username)) {
            sId.settings.messages.validUsername && sAlert.error(sId.settings.messages.validUsername);
            return;
        }

        if (!sId.settings.validateEmail(email)) {
            sId.settings.messages.validEmail && sAlert.error(sId.settings.messages.validEmail);
            return;
        }

        if (sId.settings.validatePassword(password)) {
            if (sId.settings.emailVerification) {
                createUserWithEmailVerification(username, email, password);
            } else {
                createUserWithoutEmailVerification(username, email, password);
            }
        } else {
            sId.settings.messages.validPassword && sAlert.error(sId.settings.messages.validPassword);
        }
    }
});
