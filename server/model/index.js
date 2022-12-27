const mysql = require("mysql");
require('dotenv').config()

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "tdh1",
  port: process.env.PORT,
});

module.exports = db;
