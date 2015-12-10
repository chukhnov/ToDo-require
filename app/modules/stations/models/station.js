define([

    'parse'

], function(Parse){
    ToDoListModel = Parse.Object.extend("ToDoListModel");

    return ToDoListModel;
});