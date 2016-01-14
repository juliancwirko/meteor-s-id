'use strict';

Template.sIdForgotPasswordView.helpers({
    sIdForgotPasswordClass: function () {
        return sId.settings.forgotPassForm.mainClass || 's-id-forgot-password-form';
    },
    sIdForgotPasswordTitle: function () {
        return sId.settings.forgotPassForm.title || 'Request new password';
    },
    sIdForgotPasswordLeadText: function () {
        return sId.settings.forgotPassForm.leadText || '';
    },
    sIdForgotPasswordBtnLabel: function () {
        return sId.settings.forgotPassForm.submitBtnLabel || 'Send new!';
    }
});

Template.sIdForgotPasswordView.events({
    'submit #forgot-password-form': function (e, tmpl) {
        e.preventDefault();
        var email = tmpl.$('#s-id-forgot-password-email').val();
        if (!sId.settings.validateEmail(email)) {
            sId.settings.messages.validEmail && sAlert.error(sId.settings.messages.validEmail);
            return;
        }
        if (email) {
            sId.settings.messages.sending && sAlert.info(sId.settings.messages.sending);
            Accounts.forgotPassword({email: email}, function (err) {
                if (err) {
                    sId.settings.messages.somethingWrong && sAlert.error(sId.settings.messages.somethingWrong + err.reason);
                } else {
                    sId.settings.onForgotPassword();
                }
            });
        }
    }
});


