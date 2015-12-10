define([
    'backbone',
    'parse'
], function(Backbone, Parse){

ViewModelToDoList = Backbone.View.extend({
    tagName: 'li',
    initialize: function () {
        this.model.on('destroy', this.remove, this);
    },
    template: _.template('<input type="checkbox"> <span class="strike"><%= task %></span> ' +
        '<button type="button" class="share-button"><i class="fa fa-share"></i> Share</button>'),
    render: function () {
        var template = this.template(this.model.toJSON());
        this.$el.html(template);
        if (this.model.get('checked') == true) {
            this.$el.find("input[type=checkbox]").prop("checked", true);
        }
        if (this.model.get("shared")) {
            this.$el.append('<i class="fa fa-eye"><em>Shared</em></i>')
        }
        return this;
    },
    events: {
        'click [type="checkbox"]': 'clicked',
        'click .share-button': 'share'
    },
    share: function () {
        var shareTo = prompt('Enter e-mail');
        var q = new Parse.Query("User");
        var task = this.model;
        var relation = task.relation("relation");
        q.equalTo("email", shareTo);
        q.find({
            success: function (res) {
                for (var i in res)
                    console.log(res[0])
                relation.add(res[0]);
                task.set('shared', true);
                task.save();
            },
            error: function (er) {
                console.log('Query error  ' + er.message)
            }
        });
    },
    clicked: function () {
        if (this.model.get('checked') == true) {
            this.model.save('checked', false);
        }
        else {
            this.model.save('checked', true);
        }
    },
    remove: function () {
        this.$el.remove();
    }
});
    return ViewModelToDoList;
});