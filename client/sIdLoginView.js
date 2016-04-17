'use strict';

Template.sIdLoginView.helpers({
    sIdLoginClass: function () {
        return sId.settings.loginForm.mainClass || 's-id-login-form';
    },
    sIdLoginTitle: function () {
        return sId.settings.loginForm.title || 'Login';
    },
    sIdLoginLeadText: function () {
        return sId.settings.loginForm.leadText || '';
    },
    sIdLoginBtnLabel: function () {
        return sId.settings.loginForm.submitBtnLabel || 'Login';
    },
    registerEmailFieldOnly: function () {
        return sId.settings.registerEmailFieldOnly;
    }
});

Template.sIdLoginView.events({
    'submit #login-form': function (e, tmpl) {
        e.preventDefault();
        var user = tmpl.$('#s-id-login-username').val(),
            password = tmpl.$('#s-id-login-password').val();

        if (!user || !password) {
            sId.settings.messages.fillAllFields && sAlert.error(sId.settings.messages.fillAllFields);
            return;
        }

        if (!sId.settings.validateEmail(user) && !sId.settings.validateUsername(user)) {
            sId.settings.messages.validUsername && sAlert.error(sId.settings.messages.validUsername);
            return;
        }

        if (!sId.settings.validatePassword(password)) {
            sId.settings.messages.validPassword && sAlert.error(sId.settings.messages.validPassword);
            return;
        }

        Meteor.loginWithPassword(user, password, function (err) {
            if (err) {
                sId.settings.messages.somethingWrong && sAlert.error(sId.settings.messages.somethingWrong + err.reason);
            } else {
                sId.settings.onLogged();
            }
        });
    }
});
