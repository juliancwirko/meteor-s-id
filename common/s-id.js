'use strict';

sId = sId || {};

sId = {
    settings: {
        registerForm: {},
        loginForm: {},
        forgotPassForm: {},
        resetPassForm: {},
        socialButtons: {
            'facebook': true,
            'github': true,
            'google': true,
            'twitter': true,
            'labels': {
                'facebook': 'Facebook Access',
                'github': 'GitHub Access',
                'google': 'Google Access',
                'twitter': 'Twitter Access'
            }
        },
        emailVerification: true,
        messages: {
            verifyEmail: 'Verify your e-mail address',
            verifiedEmail: 'Your email address was verified. Thanks!',
            somethingWrong: 'Something went wrong! Here is the error message: ',
            fillAllFields: 'Fill in all fields!',
            loginNow: 'You can login now.',
            sending: 'Sending...',
            validEmail: 'E-mail should be a valid e-mail address!',
            validPassword: 'Password should be at least one number, one lowercase and one uppercase letter and at least six characters!',
            validUsername: 'Username should be at least 3 characters long and max 12 characters!',
            // placeholders
            usernamePlaceholder: 'Username',
            passwordPlaceholder: 'Password',
            emailPlaceholder: 'E-mail',
            newPasswordPlaceholder: 'New password'
        },
        // should return true or false - you can overwrite these functions in your app sId config
        validateUsername: function (username) {
            var min = 3;
            var max = 12;
            if (username && username.length >= min && username.length <= max) {
                return true;
            }
            return false;
        },
        validatePassword: function (password) {
            var r = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
            if (password && r.test(password)) {
                return true;
            }
            return false;
        },
        validateEmail: function (email) {
            var r = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (r.test(email)) {
                return true;
            }
            return false;
        },
        onLogged: function () {
            // default alert - probably you want to redirect here
            sAlert.success('Logged in!');
        },
        onRegistered: function () {
            // default alert - probably you want to redirect here
            sAlert.success('Your account has been created! You have been logged in!');
        },
        onForgotPassword: function () {
            // default alert - you can overwrite it
            sAlert.success('Email Sent. Check your mailbox.');
        },
        onResetPassword: function () {
            // default alert - you can overwrite it
            sAlert.success('Password was changed!.');
        },
        getPasswordResetToken: function () {
            // return here a reset password token from your prepared route
            // example format: '/reset-password/:resetToken'
        }
    },
    config: function (configObj) {
        if (_.isObject(configObj)) {
            this.settings = _.extend(this.settings, configObj);
            return this.settings;
        }
        throw new Meteor.Error(400, 'Config must be an object');
    }
};
