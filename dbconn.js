const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "cyrus11",
  database: "collegemate",
});

module.exports = { db };
