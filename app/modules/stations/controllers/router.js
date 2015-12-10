define([
    'backbone',
    'parse'
], function(Backbone, Parse){
    MyRouter = Backbone.Router.extend({
        routes: {
            '': 'main',
            'login': 'login',
            'sign': 'sign',
            'cabinet': 'cabinet',
            'logout': 'logout'
        },
        main: function(){
            viewForms.initialize();

        },
        login: function(){
            $(".form, .tasks, .log-sub, .logout-div, #sign-up").hide();
            $("#log-in").show();
            viewForms.controlCurrent();
        },
        sign: function(){
            $(".form, .tasks, .log-sub, .logout-div, #log-in").hide();
            $("#sign-up").show();
            viewForms.controlCurrent();

        },
        cabinet: function(){
            $(".log-sub, #log-in, #sign-up").hide();
            $(".form, .tasks, .logout-div").show();
            toDoListCollection.reset();
            $(".tasks").html('');
            viewForms.getElements();
        },
        logout: function(){
            Parse.User.logOut({
                success: function (user) {

                }, error: function (user, error) {
                    console.log("Log Out error:" + error.message)
                }
            });
            console.log("Log Out Success!");
            location.hash ='';

        }

    });
    return MyRouter;
});