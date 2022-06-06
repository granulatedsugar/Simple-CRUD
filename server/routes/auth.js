const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const mysql = require("mysql");
const { response } = require("express");

dotenv.config();
const HOST = process.env.MYSQL_HOST;
const SQL_USER = process.env.SQL_USER;
const SQL_PASSWORD = process.env.SQL_PASSWORD;
const SQL_DATABASE = process.env.SQL_DATABASE;

const db = mysql.createConnection({
  host: HOST,
  user: SQL_USER,
  password: SQL_PASSWORD,
  database: SQL_DATABASE,
});

// Registration
router.post("/register", (req, res) => {
  const userid = req.body.userid;
  const user_pass = req.body.user_pass;
  const birthdate = req.body.birthdate;
  const email = req.body.email;
  const sex = req.body.sex;

  db.query("SELECT email FROM login WHERE email = ?", [email], (err, row) => {
    if (row.length === 0) {
      db.query(
        "INSERT INTO login (userid, user_pass, birthdate, email, sex) VALUES (?, ?, ?, ?, ?)",
        [userid, user_pass, birthdate, email, sex]
      );
      console.log("User added.");
      res.send("Values Inserted");
      // response.status(200).send({ status: 200, message: "User added." });
    } else {
      console.log("User found successfully.");
      res.send("Email already registered");

      // response
      //   .status(200)
      //   .json({ status: 200, message: "User found successfully." });
    }
  });
});

module.exports = router;
