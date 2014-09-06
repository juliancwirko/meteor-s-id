Template.resetPassword.helpers({
    scottyIdResetPasswordClass: function () {
        return scottyId.settings.resetPassForm.mainClass || 's-id-reset-password-form';
    },
    scottyIdResetPasswordTitle: function () {
        return scottyId.settings.resetPassForm.title || 'Set up a new password';
    },
    scottyIdResetPasswordLeadText: function () {
        return scottyId.settings.resetPassForm.leadText || '';
    },
    scottyIdResetPasswordBtnLabel: function () {
        return scottyId.settings.resetPassForm.submitBtnLabel || 'Send!';
    }
});

Template.resetPassword.events({
    'submit #reset-password-form': function (e, tmpl) {
        e.preventDefault();
        var password = tmpl.$('#s-id-reset-password-password').val(),
            token = Router.current() && Router.current().params.resetToken;
        if (token && password) {
            Accounts.resetPassword(token, password, function(err) {
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
                        message: 'Your password has been changed. Welcome back!',
                        position: 'left-top'
                    });
                }
            });
            Router.go('/');
        }
    }
});