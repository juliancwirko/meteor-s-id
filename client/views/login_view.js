Template.loginView.helpers({
    scottyIdLoginClass: function () {
        return scottyId.settings.loginForm.mainClass || 's-id-login-form';
    },
    scottyIdLoginTitle: function () {
        return scottyId.settings.loginForm.title || 'Login';
    },
    scottyIdLoginLeadText: function () {
        return scottyId.settings.loginForm.leadText || '';
    },
    scottyIdLoginBtnLabel: function () {
        return scottyId.settings.loginForm.submitBtnLabel || 'Login';
    }
});

Template.loginView.events({
    'submit #login-form': function (e, tmpl) {
        e.preventDefault();
        var user = tmpl.$('#s-id-login-username').val(),
            password = tmpl.$('#s-id-login-password').val();
        Meteor.loginWithPassword(user, password, function (err) {
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
                    message: 'Logged in!',
                    position: 'left-top'
                });
                Router.go(scottyId.settings.redirectPage);
            }
        });
    }
});