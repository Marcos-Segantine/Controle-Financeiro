const mysql = require("mysql2");
const config = require("./config");

const db = mysql.createConnection(config);

module.exports = db;
