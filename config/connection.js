var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db"
});

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "hacktheplanet",
    database: "todoagain_db"
  });
}

connection.connect(function(err) {
  if (err) {
    console.log("There was an error " + err);
  } else {
    console.log("Connected as id " + connection.threadId);
  }
});

module.exports = connection;
//require this inside orm
