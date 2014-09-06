Router.map(function() {
    this.route('login.view', {
        path: '/login',
        onBeforeAction: function () {
            if (Meteor.userId()) {
                Router.go('/');
            }
            if (Meteor.isClient) {
                Session.set('siteTitle', 'Login Page');
            }
        }
    });
    this.route('register.view', {
        path: '/register',
        onBeforeAction: function () {
            if (Meteor.userId()) {
                Router.go('/');
            }
            if (Meteor.isClient) {
                Session.set('siteTitle', 'Register Page');
            }
        }
    });
    this.route('forgot.password.view', {
        path: '/forgot-password',
        onBeforeAction: function () {
            if (Meteor.userId()) {
                Router.go('/');
            }
            if (Meteor.isClient) {
                Session.set('siteTitle', 'Forgot Password Page');
            }
        }
    });
    this.route('reset.password', {
        path: '/reset-password/:resetToken',
        onBeforeAction: function () {
            if (Meteor.userId()) {
                Router.go('/');
            }
            if (Meteor.isClient) {
                Session.set('siteTitle', 'Reset Password Page');
            }
        }
    });
});