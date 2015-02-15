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
                sAlert.error('Something went wrong! -' + err);
            } else {
                sAlert.success('Logged in!');
                Router.go(scottyId.settings.redirectPage);
            }
        });
    }
});