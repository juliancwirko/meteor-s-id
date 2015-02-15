Template.forgotPasswordView.helpers({
    scottyIdForgotPasswordClass: function () {
        return scottyId.settings.forgotPassForm.mainClass || 's-id-forgot-password-form';
    },
    scottyIdForgotPasswordTitle: function () {
        return scottyId.settings.forgotPassForm.title || 'Request new password';
    },
    scottyIdForgotPasswordLeadText: function () {
        return scottyId.settings.forgotPassForm.leadText || '';
    },
    scottyIdForgotPasswordBtnLabel: function () {
        return scottyId.settings.forgotPassForm.submitBtnLabel || 'Send new!';
    }
});

Template.forgotPasswordView.events({
    'submit #forgot-password-form': function (e, tmpl) {
        e.preventDefault();
        var email = tmpl.$('#s-id-forgot-password-email').val();
        if (email) {
            Accounts.forgotPassword({email: email}, function (err) {
                if (err) {
                    sAlert.error('Something went wrong! -' + err);
                } else {
                    sAlert.success('Email Sent. Check your mailbox.');
                }
            });
            Router.go('login.view');
        }
    }
});


