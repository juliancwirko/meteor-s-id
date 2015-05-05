'use strict';

sId = sId || {};

sId = {
    settings: {
        registerForm: {},
        loginForm: {},
        forgotPassForm: {},
        resetPassForm: {},
        socialButtons: {
            'github': true,
            'google': true,
            'twitter': true,
            'labels': {
                'github': 'GitHub Access',
                'google': 'Google Access',
                'twitter': 'Twitter Access'
            }
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
