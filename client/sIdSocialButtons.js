'use strict';

Template.sIdSocialButtons.events({
    'click #s-id-buttons-facebook': function (e) {
        e.preventDefault();
        Meteor.loginWithFacebook({
            requestPermissions: ['public_profile, email']
        }, function (err) {
            if (err) {
                sId.settings.messages.somethingWrong && sAlert.error(sId.settings.messages.somethingWrong + err.reason);
            } else {
                sId.settings.onLogged();
            }
        });
    },
    'click #s-id-buttons-github': function (e) {
        e.preventDefault();
        Meteor.loginWithGithub({
            requestPermissions: ['user']
        }, function (err) {
            if (err) {
                sId.settings.messages.somethingWrong && sAlert.error(sId.settings.messages.somethingWrong + err.reason);
            } else {
                sId.settings.onLogged();
            }
        });
    },
    'click #s-id-buttons-google': function (e) {
        e.preventDefault();
        Meteor.loginWithGoogle({
            requestPermissions: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email'
            ]
        }, function (err) {
            if (err) {
                sId.settings.messages.somethingWrong && sAlert.error(sId.settings.messages.somethingWrong + err.reason);
            } else {
                sId.settings.onLogged();
            }
        });
    },
    'click #s-id-buttons-twitter': function (e) {
        e.preventDefault();
        Meteor.loginWithTwitter({}, function (err) {
            if (err) {
                sId.settings.messages.somethingWrong && sAlert.error(sId.settings.messages.somethingWrong + err.reason);
            } else {
                sId.settings.onLogged();
            }
        });
    }
});

Template.sIdSocialButtons.helpers({
    sIdSocialBtns: function () {
        return sId.settings.socialButtons;
    },
    facebookBtnLabel: function () {
        return sId.settings.socialButtons.labels.facebook || 'Facebook Access';
    },
    googleBtnLabel: function () {
        return sId.settings.socialButtons.labels.google || 'Google Access';
    },
    twitterBtnLabel: function () {
        return sId.settings.socialButtons.labels.twitter || 'Twitter Access';
    },
    githubBtnLabel: function () {
        return sId.settings.socialButtons.labels.github || 'GitHub Access';
    }
});
