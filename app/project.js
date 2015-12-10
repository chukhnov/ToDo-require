

(function () {
    toDoListCollection = new ToDoListCollection([]);
    viewToDoListSet = new ViewToDoListSet({collection: toDoListCollection});
    toDoListViewCollection = new ToDoListViewCollection({collection: toDoListCollection});
    viewForms = new ViewForms({});
    router = new MyRouter();
    Backbone.history.start();
})();