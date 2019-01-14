var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    selectAll: function () {
        var queryString = "SELECT * FROM burgers";

        var query = connection.query(queryString, [], function (err, result) {
            if (err) throw err;

            console.log("BASE QUERY:", queryString);
            console.log("BUILT QUERY:", query.sql);
            console.log("QUERY RESULT:", result);
        });
    },
    insertOne: function (burgerName) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ('?', false);";

        var query = connection.query(queryString, [burgerName], function (err, result) {
            if (err) throw err;

            console.log("BASE QUERY:", queryString);
            console.log("BUILT QUERY:", query.sql);
            console.log("QUERY RESULT:", result);
        });
    },
    updateOne: function (burgerName, devoured) {
        var queryString =
            "UPDATE table_name SET burgerName = ?, devoured = ?, WHERE condition;";

        var query = connection.query(
            queryString,
            [burgerName, devoured],
            function (err, result) {
                if (err) throw err;

                console.log("BASE QUERY:", queryString);
                console.log("BUILT QUERY:", query.sql);
                console.log("QUERY RESULT:", result);
            }
        );
    }
};

module.exports = orm;