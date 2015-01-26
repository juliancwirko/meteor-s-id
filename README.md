## s-id

Simple Accounts system for Meteor. Especially for [Scotty](https://github.com/juliancwirko/scotty) boilerplate (work in progress).

This is a simple and custom Accounts system because we don't need any complicated logic and Bootstrap classes here.. but if you want something more complex try: [AccountsEntry](https://github.com/Differential/accounts-entry) by Differential (cool stuff from cool guys).

### Demo

(With minimal styling, but you can do this very simple by adding your own css classes)
[s-id-demo.meteor.com](http://s-id-demo.meteor.com/)

### Usage

Just add the package:

    meteor add juliancwirko:s-id

You will get four working routes (Iron Router):

- **/login** [Iron Router route name: 'login.view'] example: [Login page](http://s-id-demo.meteor.com/login)
- **/register** [Iron Router route name: 'register.view'] example: [Register page](http://s-id-demo.meteor.com/register)
- **/forgot-password** [Iron Router route name: 'forgot.password.view'] example: [Forgot pass page](http://s-id-demo.meteor.com/forgot-password)
- **/reset-password/:resetToken** [Iron Router route name: 'reset.password']

You can also use config.

Full Config (all is optional and here you can overwrite defaults) [on client and server - example: common/users-config.js]:

    Meteor.startup(function () {
        scottyId.config({
            redirectPage: '/',
            registerForm: {
                mainClass: 's-id-register-form', // css class for main container
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
            }
        });
    });

You can then use (somewhere in your templates):

    {{#if currentUser}}
        <a href="#" class="js-logout">Logout</a></li>
    {{else}}
        <a href="{{pathFor 'login.view'}}">Login</a>
        <a href="{{pathFor 'register.view'}}">Register</a>
    {{/if}}

Logout event by Meteor.logout() - see docs.meteor.com

### Log the user in using an external service

You can log/sign in using an external service. For now it is GitHub, Google, Twitter

If you want to use social buttons (enabled by default) You have to setup your settings.json file : [Meteor Docs](https://docs.meteor.com/#/full/meteor_settings)

Example (settings.json in your app root folder):


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

You can generate your API keys on these sites:

- [Google API](https://console.developers.google.com)
- [Twitter API](https://apps.twitter.com/)
- [GitHub API](https://github.com/settings/applications/)

Then you should run your app with:
````meteor --settings settings.json````
and you can also deploy it with:
````meteor deploy --settings settings.json your-app.meteor.com````

You will find more in Meteor Docs.

**Be carefull with Twitter - the email of logged in user isn't avaible**

If you want to transform data in your user collection you can use ````Accounts.onCreateUser````

Example:


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


### Styling

There will be more customization in the future. For now you can use mainClass as a namespace for DOM elements which has its own ids and classes.

You can take the package style.css file as a reference.

It is also integrated with [s-alert](https://github.com/juliancwirko/meteor-s-alert) notifications

### Sending Emails

You can configure Mailgun with Meteor. It is very simple. If you will deploy on meteor.com there should be Mailgun configured.

Example:


    Meteor.startup(function () {
        process.env.MAIL_URL = 'smtp://postmaster@{your-data}.mailgun.org:{your-data}@smtp.mailgun.org:587';
    });


### TODO

- more customization options (templates etc.)
- sign up email confirmation
- loginWithMeteorDeveloperAccount
- loginWithFacebook
