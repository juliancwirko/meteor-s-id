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
                    Session.set('sAlert', {
                        condition: 'red',
                        effect: 'stackslide',
                        message: 'Something went wrong! -' + err,
                        position: 'left-top'
                    });
                } else {
                    Session.set('sAlert', {
                        condition: 'green',
                        effect: 'stackslide',
                        message: 'Email Sent. Check your mailbox.',
                        position: 'left-top'
                    });
                }
            });
            Router.go('login.view');
        }
    }
});


