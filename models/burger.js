// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function (callback_function) {
        orm.selectAll(function (res) {
            callback_function(res);
        });
    },
    insertOne: function (burgerName, cb) {
        orm.insertOne(burgerName, function (res) {
            cb(res);
        });
        console.log(burgerName)
    },
    updateOne: function (burgerName, devoured, cb) {
        orm.updateOne(burgerName, devoured, function (res) {
            cb(res);
        });
    },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;