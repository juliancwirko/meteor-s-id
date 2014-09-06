## s-id  

Simple Accounts system for Meteor. Especially for [Scotty](https://github.com/juliancwirko/scotty) boilerplate (work in progress).

This is a simple and custom Accounts system because we don't need any complicated logic and Bootstrap classes here.. but if you want something more complex try: [AccountsEntry](https://github.com/Differential/accounts-entry) by Differential (cool stuff from cool guys).

### Demo

Forms are unstyled like in the package..
[s-id-demo.meteor.com](http://s-id-demo.meteor.com/)

### Usage

Just add package:
````
meteor add juliancwirko:s-id
````
You will get four working routes (Iron Router):
- **/login** [Iron Router route name: 'login.view']
- **/register** [Iron Router route name: 'register.view']
- **/forgot-password** [Iron Router route name: 'forgot.password.view']
- **/reset-password/:resetToken** [Iron Router route name: 'reset.password']

You can also use config.

Full Config (all is optional and here you can overwrite defaults) [client, server]:
````
Meteor.startup(function () {
    scottyId.config({
        redirectPage: '/',
        registerForm: {
            mainClass: 's-id-register-form',
            title: 'Register',
            leadText: 'Hi, join us!',
            submitBtnLabel: 'Register'
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
        }
    });
});
````
You can then use (somewhere in your templates):
````
{{#if currentUser}}
    <a href="#" class="js-logout">Logout</a></li>
{{else}}
    <a href="{{pathFor 'login.view'}}">Login</a>
    <a href="{{pathFor 'register.view'}}">Register</a>
{{/if}}
````
Logout event by Meteor.logout() - see docs.meteor.com

### Styling

There will be more customization in the future. For now you can use mainClass as a namespace for DOM elements which has its own ids and classes.

It is also integrated with [s-alert](https://github.com/juliancwirko/meteor-s-alert) notifications

### Sending Emails

You can configure Mailgun with Meteor. It is very simple.

### TODO

- more customization options (templates etc.)
- sign up email confirmation
- login with external service - facebook, google, github etc.
