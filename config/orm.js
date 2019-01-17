var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";

        var query = connection.query(queryString, [], function (err, result) {
            if (err) throw err;

            console.log("BASE QUERY1:", queryString);
            console.log("BUILT QUERY1:", query.sql);
            console.log("QUERY RESULT1:", result);

            cb(result);
        });
    },
    insertOne: function (burgerName, cb) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false);";

        var query = connection.query(queryString, [burgerName], function (err, result) {
            console.log(queryString)
            console.log(burgerName)
            if (err) {
                console.log(err);
                throw err;
            } else {
                console.log("BASE QUERY2:", queryString);
                console.log("BUILT QUERY2:", query.sql);
                console.log("QUERY RESULT2:", result);
                cb(result);
            }


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

                console.log("BASE QUERY3:", queryString);
                console.log("BUILT QUERY3:", query.sql);
                console.log("QUERY RESULT3:", result);
            }
        );
    }
};

module.exports = orm;