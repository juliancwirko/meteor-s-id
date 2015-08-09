'use strict';

Template.sIdResetPasswordView.helpers({
    sIdResetPasswordClass: function () {
        return sId.settings.resetPassForm.mainClass || 's-id-reset-password-form';
    },
    sIdResetPasswordTitle: function () {
        return sId.settings.resetPassForm.title || 'Set up a new password';
    },
    sIdResetPasswordLeadText: function () {
        return sId.settings.resetPassForm.leadText || '';
    },
    sIdResetPasswordBtnLabel: function () {
        return sId.settings.resetPassForm.submitBtnLabel || 'Send!';
    }
});

Template.sIdResetPasswordView.events({
    'submit #reset-password-form': function (e, tmpl) {
        e.preventDefault();
        var password = tmpl.$('#s-id-reset-password-password').val(),
            token = sId.settings.getPasswordResetToken();
        if (!sId.settings.validatePassword(password)) {
            sId.settings.messages.validPassword && sAlert.error(sId.settings.messages.validPassword);
            return;
        }
        if (token && password) {
            Accounts.resetPassword(token, password, function (err) {
                if (err) {
                    sId.settings.messages.somethingWrong && sAlert.error(sId.settings.messages.somethingWrong + err);
                } else {
                    sId.settings.onResetPassword();
                }
            });
        }
    }
});
