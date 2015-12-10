require([
        'backbone',
        'modules/stations/collections/stations',
        'modules/stations/views/todolist_set',
        'modules/stations/views/todolist_view_collection',
        'modules/stations/views/view_forms',
        'modules/stations/controllers/router'
    ],

    function (Backbone, ToDoListCollection, ViewToDoListSet, ToDoListViewCollection, ViewForms, MyRouter) {
        Parse.initialize("XZWlbVV725NFLOGnspDbqxAtv7AuUJ8riWoH5buT", "7TOOE2okGv0iC30UcmqfoPbDYcWUZesinXOMnjyD");
            toDoListCollection = new ToDoListCollection([]);
            viewToDoListSet = new ViewToDoListSet({collection: toDoListCollection});
            toDoListViewCollection = new ToDoListViewCollection({collection: toDoListCollection});
            viewForms = new ViewForms({});
            router = new MyRouter();
            Backbone.history.start();

    });