var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "password"
});

connection.connect(
    function (err) {
        if (err) {
            console.log("There was an error " + err)
        }
        else {
            console.log("Connected as id " + connection.threadId)
        }
    }
);

modules.export = connection;
//require this inside orm

