const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "tdh1",
  port: "3307",
});

module.exports = db;
