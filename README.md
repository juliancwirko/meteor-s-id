## s-id

Simple Accounts system for Meteor. Especially for [Scotty](https://github.com/juliancwirko/scotty) boilerplate (work in progress).

This is a simple and custom Accounts system because we don't need any complicated logic and Bootstrap classes here..

### Demo

(With minimal styling, but you can do this very simple by adding your own css classes)

[s-id-demo.meteor.com](http://s-id-demo.meteor.com/)

### Website:

[s-id.meteor.com](http://s-id.meteor.com/)

### Usage example in Scotty boilerplate

- [config file](https://github.com/juliancwirko/scotty/blob/master/common/settings/users-accounts-config.js)
- [routes](https://github.com/juliancwirko/scotty/blob/master/common/router/routes.js)
- [login theme included in secret page - example](https://github.com/juliancwirko/scotty/blob/master/client/views/secret-page/secret-page.html)
- [Scotty boilerplate](https://github.com/juliancwirko/scotty)

### Usage

Just add the package:

```
meteor add juliancwirko:s-id
```

You can configure your routes for each view if you want. You can use Iron Router or Flow Router it is up to you because. Here you will get only templates and couple of config functions which will alow you to configure your login, register callbacks. Templates to use:

- **sIdLoginView**
- **sIdRegisterView**
- **sIdForgotPasswordView**
- **sIdResetPasswordView**

### Full Config (all is optional and here you can overwrite defaults)
Place it somewhere where it will be accessible by Server and Client

```javascript
Meteor.startup(function () {
    sId.config({
        registerForm: {
            mainClass: 's-id-register-form', // css class for main container - you can change it and style it like you want in your app
            title: 'Register', // form title
            leadText: 'Hi, join us!', // form description text
            submitBtnLabel: 'Register' // button label text
        },
        loginForm: {
            mainClass: 's-id-login-form',
            title: 'Login',
            leadText: 'Beam me up, Scotty!',
            submitBtnLabel: 'Login'
        },
        forgotPassForm: {
            mainClass: 's-id-forgot-password-form',
            title: 'Forgot Password',
            leadText: 'Please fill in email address!',
            submitBtnLabel: 'Send New!'
        },
        resetPassForm: {
            mainClass: 's-id-reset-password-form',
            title: 'Reset Password',
            leadText: 'Please fill in new password!',
            submitBtnLabel: 'Set New!'
        },
        socialButtons: { // disable/enable social login/register buttons
            'github': true,
            'google': true,
            'twitter': true,
            'labels': { // labels for social buttons
                'github': 'GitHub Access',
                'google': 'Google Access',
                'twitter': 'Twitter Access'
            }
        },
        onLogged: function () {
            // callback after successful login
            // it could be for example Router.go('/') or FlowRouter.go('/dashboard') or any other
        },
        onRegistered: function () {
            // callback after successful registration
        },
        onForgotPassword: function () {
            // callback after successful on forgot password action
        },
        onResetPassword: function () {
            // callback after successful password reset
        },
        getPasswordResetToken: function () {
            // here you should return reset password tokent from your route param
            // you should have configured route: '/reset-password/:resetToken',
            // then with Iron Router you can do something like:
            //
            // With Iron Router
            // return Router.current().params.resetToken; or with Flow Router
            // or with Flow Router
            // return FlowRouter.getParam('resetToken');
        }
    });
});
```

You can then use (somewhere in your templates):

```html
{{#if currentUser}}
    <a href="#" class="js-logout">Logout</a></li>
{{else}}
    <a href="/login">Login</a>
    <a href="/register">Register</a>
{{/if}}
```

Logout event by Meteor.logout(function () { console.log('logged out!') }) - see docs.meteor.com

### Log the user in using an external service

You can log/sign in using an external service. For now it is GitHub, Google, Twitter

If you want to use social buttons (enabled by default) You have to setup your settings.json file : [Meteor Docs](https://docs.meteor.com/#/full/meteor_settings)

Example (settings.json in your app root folder):

```
{
    "github": {
        "clientId": "{your github API client id here}",
        "secret": "{your google API secret key here}"
    },
    "google": {
        "clientId": "{your google API client id here}",
        "secret": "{your google API secret key here}"
    },
    "twitter": {
        "consumerKey": "{your twitter API customer key here}",
        "secret": "{your twitter API secret key here}"
    }
}
```

You can generate your API keys on these sites:

- [Google API](https://console.developers.google.com)
- [Twitter API](https://apps.twitter.com/)
- [GitHub API](https://github.com/settings/applications/)

Then you should run your app with:
`meteor --settings settings.json`
and you can also deploy it with:
`meteor deploy --settings settings.json your-app.meteor.com`

You will find more in Meteor Docs.

**Be carefull with Twitter - the email of logged in user isn't avaible**

If you want to transform data in your user collection you can use `Accounts.onCreateUser`

Example:

```javascript
Accounts.onCreateUser(function (options, user) {
    if (user.services.github) {

        user.username = user.services.github.username;
        user.emails = [];
        user.emails.push({
            address: user.services.github.email,
            verified: true
        });

        return user;
    }

    if (user.services.google) {

        user.username = user.services.google.email;
        user.emails = [];
        user.emails.push({
            address: user.services.google.email,
            verified: true
        });

        return user;
    }

    if (user.services.twitter) {
        // your transforms
    }

    return user;
});
```

### Styling

There will be more customization in the future. For now you can use mainClass as a namespace for DOM elements which has its own ids and classes. As you can see if you provide your own css class in the config you will get simple unstyled template.

You can take the package style.css file as a reference.

It is also integrated with [s-alert](http://s-alert.meteor.com) notifications

If you want you can play with excelent package for overwriting templates: [aldeed:template-extension](https://atmospherejs.com/aldeed/template-extension)

### Sending Emails

You can configure Mailgun with Meteor. It is very simple. If you will deploy on meteor.com there should be Mailgun configured.

Example:

```javascript
Meteor.startup(function () {
    process.env.MAIL_URL = 'smtp://postmaster@{your-data}.mailgun.org:{your-data}@smtp.mailgun.org:587';
});
```

### Example routes which you can use in your app (Iron Router example)
Routes names are important here.

```javascript
Router.map(function() {
    this.route('sIdLoginView', {
        path: '/login',
    });
    this.route('sIdRegisterView', {
        path: '/register'
    });
    this.route('sIdForgotPasswordView', {
        path: '/forgot-password'
    });
    this.route('sIdResetPasswordView', {
        path: '/reset-password/:resetToken'
    });
});
```

### Example routes which you can use in your app (Flow Router and Flow Layout example)

```javascript
FlowRouter.route('/login', {
    name: 'sIdLoginView',
    action: function () {
        FlowLayout.render('layout', {main: 'sIdLoginView'});
    }
});
FlowRouter.route('/register', {
    name: 'sIdRegisterView',
    action: function () {
        FlowLayout.render('layout', {main: 'sIdRegisterView'});
    }
});
FlowRouter.route('/forgot-password', {
    name: 'sIdForgotPasswordView',
    action: function () {
        FlowLayout.render('layout', {main: 'sIdForgotPasswordView'});
    }
});
FlowRouter.route('/reset-password', {
    name: 'sIdResetPasswordView',
    action: function () {
        FlowLayout.render('layout', {main: 'sIdResetPasswordView'});
    }
});
```

Basicaly you just use ready to go templates from the package and some callbacks which you can configure.

### Changelog

- v1.0.2 fix forgot password link usage

- v1.0.1 fix onLogged() callback with external services like Google etc.

- v1.0.0 is not depended on Iron Router anymore. You should use templates and make your own routes (example above). You can use onLogged, onRegistered, onForgotPassword, onResetPassword callbacks in config to make (for example) redirections.


### TODO

- sign up email confirmation
- loginWithMeteorDeveloperAccount
- loginWithFacebook
- form validation with alerts
