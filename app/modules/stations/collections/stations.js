define([

    'parse',
    '../models/station'

], function(Parse, ToDoListModel){
    ToDoListCollection = Parse.Collection.extend({
        model: ToDoListModel
    });
    return ToDoListCollection;
});