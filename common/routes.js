Router.map(function() {
    this.route('login.view', {
        path: '/login',
        onBeforeAction: function () {
            if (Meteor.isClient) {
                Session.set('siteTitle', 'Login Page');
            }
            if (Meteor.userId()) {
                Router.go('/');
            } else {
                this.next();
            }
        }
    });
    this.route('register.view', {
        path: '/register',
        onBeforeAction: function () {
            if (Meteor.isClient) {
                Session.set('siteTitle', 'Register Page');
            }
            if (Meteor.userId()) {
                Router.go('/');
            } else {
                this.next();
            }
        }
    });
    this.route('forgot.password.view', {
        path: '/forgot-password',
        onBeforeAction: function () {
            if (Meteor.isClient) {
                Session.set('siteTitle', 'Forgot Password Page');
            }
            if (Meteor.userId()) {
                Router.go('/');
            } else {
                this.next();
            }
        }
    });
    this.route('reset.password', {
        path: '/reset-password/:resetToken',
        onBeforeAction: function () {
            if (Meteor.isClient) {
                Session.set('siteTitle', 'Reset Password Page');
            }
            if (Meteor.userId()) {
                Router.go('/');
            } else {
                this.next();
            }
        }
    });
});