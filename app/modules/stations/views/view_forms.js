define([
    'backbone',
    'parse'
], function(Backbone, Parse){
ViewForms = Backbone.View.extend({
    initialize: function () {
        $(".form, .tasks, .logout-div, #log-in, #sign-up").hide();
        $(".log-sub").show();
        this.controlCurrent();

    },
    controlCurrent: function(){
        if (Parse.User.current()) {
            this.cabinet();
        }
    },
    getElements: function () {
        var query = new Parse.Query('ToDoListModel');
        var user = Parse.User.current();
        query.equalTo("relation", user);
        query.find({
            success: function (res) {
                for (var i in res)
                    toDoListCollection.add(res[i])
            },
            error: function (er) {
                console.log('Query error  ' + er.message)
            }
        });

    },
    el: "body",
    events: {
        'click #login-submit': 'login',
        'click #sign-up-submit': 'signup',
        'click #logout': 'logout',
        'click #sig': 'sig',
        'click #log': 'log'

    },
    log: function () {
        location.hash ='login';

    },
    sig: function () {
        location.hash ='sign';


    },
    cabinet: function () {
        location.hash ='cabinet';

    },
    logout: function () {
        location.hash ='logout';

    },

    login: function () {
        var name = $("#login-name").val();
        var pass = $("#login-password").val();
        Parse.User.logIn(name, pass, {
            success: function (user) {
                console.log("Log In Success!");
                this.cabinet();
            }.bind(this), error: function (user, error) {
                console.log("Log In error:" + error.message)
            }
        });

    },
    signup: function () {
        var name = $("#sign-up-name").val();
        var pass = $("#sign-up-password").val();
        var email = $("#email").val();
        var user = new Parse.User();
        user.set("username", name);
        user.set("password", pass);
        user.set("email", email);
        user.signUp(null, {
            success: function (user) {
                console.log('Sign up success!');
                this.cabinet();
            }.bind(this), error: function (user, error) {
                console.log("Sign Up error:" + error.message)
            }
        })
    }


    });
return ViewForms;

});