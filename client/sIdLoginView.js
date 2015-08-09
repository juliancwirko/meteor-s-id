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
    }
});

Template.sIdLoginView.events({
    'submit #login-form': function (e, tmpl) {
        e.preventDefault();
        var user = tmpl.$('#s-id-login-username').val(),
            password = tmpl.$('#s-id-login-password').val();
        Meteor.loginWithPassword(user, password, function (err) {
            if (err) {
                sId.settings.messages.somethingWrong && sAlert.error(sId.settings.messages.somethingWrong + err);
            } else {
                sId.settings.onLogged();
            }
        });
    }
});
