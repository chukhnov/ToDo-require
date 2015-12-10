define([
    'backbone',
    './model_todolist'
    ],
    function(Backbone, ViewModelToDoList){
        ToDoListViewCollection = Backbone.View.extend({
        el: '.tasks',
        initialize: function () {
            this.collection.on('add', this.addOne, this);
            return this;
        },
        addOne: function (task) {
            var viewModelToDoList = new ViewModelToDoList({model: task});
            this.$el.append(viewModelToDoList.render().el);
        }
    });
        return ToDoListViewCollection;
    });