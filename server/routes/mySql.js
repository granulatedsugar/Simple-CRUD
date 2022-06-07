const dotenv = require("dotenv");
const mysql = require("mysql");

dotenv.config();

const HOST = process.env.MYSQL_HOST;
const SQL_USER = process.env.SQL_USER;
const SQL_PASSWORD = process.env.SQL_PASSWORD;
const SQL_DATABASE = process.env.SQL_DATABASE;

const mysqlConn = mysql.createConnection({
  host: HOST,
  user: SQL_USER,
  password: SQL_PASSWORD,
  database: SQL_DATABASE,
});

module.exports = mysqlConn;
