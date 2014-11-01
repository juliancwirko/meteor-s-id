scottyId = scottyId || {};

scottyId = {
    settings: {
        redirectPage: '/',
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
        }
    },
    config: function (configObj) {
        if (_.isObject(configObj)) {
            return this.settings = _.extend(this.settings, configObj);
        } else {
            throw new Meteor.Error(400, "Config must be an object");
        }
    }
}