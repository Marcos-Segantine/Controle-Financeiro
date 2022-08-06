const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "33564169",
  database: "database",
});

module.exports = db;
