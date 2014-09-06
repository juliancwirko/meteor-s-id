Template.registerView.helpers({
    scottyIdRegisterClass: function () {
        return scottyId.settings.registerForm.mainClass || 's-id-register-form';
    },
    scottyIdRegisterTitle: function () {
        return scottyId.settings.registerForm.title || 'Register';
    },
    scottyIdRegisterLeadText: function () {
        return scottyId.settings.registerForm.leadText || '';
    },
    scottyIdRegisterBtnLabel: function () {
        return scottyId.settings.registerForm.submitBtnLabel || 'Register';
    }
});

Template.registerView.events({
    'submit #register-form': function (e, tmpl) {
        e.preventDefault();
        var username = tmpl.$('#s-id-register-username').val(),
            email = tmpl.$('#s-id-register-email').val(),
            password = tmpl.$('#s-id-register-password').val();
        if (username && email && password) {
            Accounts.createUser({
                username: username,
                email: email,
                password: password
            }, function (err, result) {
                if (!err) {
                    Session.set('sAlert', {
                        condition: 'green',
                        effect: 'stackslide',
                        message: 'Your account has been created! You have been logged in!',
                        position: 'left-top'
                    });
                    Router.go(scottyId.settings.redirectPage);
                } else {
                    Session.set('sAlert', {
                        condition: 'red',
                        effect: 'stackslide',
                        message: 'Something went wrong! -' + err,
                        position: 'left-top'
                    });
                }
            });
        } else {
            Session.set('sAlert', {
                condition: 'red',
                effect: 'stackslide',
                message: 'Fill in all fields!',
                position: 'left-top'
            });
        }
    }
});