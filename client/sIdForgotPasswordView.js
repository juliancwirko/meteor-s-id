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
        if (email) {
            sAlert.info('Sending...');
            Accounts.forgotPassword({email: email}, function (err) {
                if (err) {
                    sAlert.error('Something went wrong! -' + err);
                } else {
                    sId.settings.onForgotPassword();
                }
            });
        }
    }
});


