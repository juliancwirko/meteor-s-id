Template.socialButtons.events({
    'click #s-id-buttons-github': function (e) {
        e.preventDefault();
        Meteor.loginWithGithub({
            requestPermissions: ['user']
        });
    },
    'click #s-id-buttons-google': function (e) {
        e.preventDefault();
        Meteor.loginWithGoogle({
            requestPermissions: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email'
            ]
        });
    },
    'click #s-id-buttons-twitter': function (e) {
        e.preventDefault();
        Meteor.loginWithTwitter();
    }
});

Template.socialButtons.helpers({
    scottyIdSocialBtns: function () {
        return scottyId.settings.socialButtons;
    },
    googleBtnLabel: function () {
        return scottyId.settings.socialButtons.labels.google || 'Google Access';
    },
    twitterBtnLabel: function () {
        return scottyId.settings.socialButtons.labels.twitter || 'Twitter Access';
    },
    githubBtnLabel: function () {
        return scottyId.settings.socialButtons.labels.github || 'GitHub Access';
    }
});