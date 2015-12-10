define([
    'backbone',
    'parse',
    '../models/station'
], function(Backbone, Parse, ToDoListModel){

    ViewToDoListSet = Backbone.View.extend({
    el: '#addTask',
    events: {
        'submit': 'submit',
        'click .button': 'button'

    },
    submit: function (e) {
        e.preventDefault();
        if (!$.trim($(e.currentTarget).find('input[type=text]').val())) {
            return
        }
        var toDoListModel = new ToDoListModel({});
        toDoListModel.save({'task': $(e.currentTarget).find('input[type=text]').val()}, {
            success: function (object) {
                $(".success").show();
            },
            error: function (model, error) {
                $(".error").show();
            }
        });
        this.collection.add(toDoListModel);
        var user = Parse.User.current();
        var relation = toDoListModel.relation("relation");
        relation.add(user);
        toDoListModel.save();
        $("#task").val(null);


    },
    button: function (e) {
        e.preventDefault();
        for (var i = 0; i < _.size(this.collection); i++) {
            if (this.collection.models[i].get('checked') == true) {
                this.collection.models[i].destroy();
                i--

            }
        }

    }
});
    return ViewToDoListSet;
});