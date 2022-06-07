const express = require("express");
const router = express.Router();
const db = require("./mySql");

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
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: true, status: "Registration Successful!" });
    } else {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.json({ err: err });
    }
  });
});

module.exports = router;
