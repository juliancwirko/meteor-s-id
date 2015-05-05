'use strict';

Template.sIdRegisterView.helpers({
    sIdRegisterClass: function () {
        return sId.settings.registerForm.mainClass || 's-id-register-form';
    },
    sIdRegisterTitle: function () {
        return sId.settings.registerForm.title || 'Register';
    },
    sIdRegisterLeadText: function () {
        return sId.settings.registerForm.leadText || '';
    },
    sIdRegisterBtnLabel: function () {
        return sId.settings.registerForm.submitBtnLabel || 'Register';
    }
});

Template.sIdRegisterView.events({
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
            }, function (err) {
                if (!err) {
                    sId.settings.onRegistered();
                } else {
                    sAlert.error('Something went wrong! -' + err);
                }
            });
        } else {
            sAlert.error('Fill in all fields!');
        }
    }
});
