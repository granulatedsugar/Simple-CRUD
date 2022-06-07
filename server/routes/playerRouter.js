const express = require("express");
const router = express.Router();
const db = require("./mySql");

// GET PVP RANKS
router.get("/player-ranking", (req, res) => {
  db.query(
    "SELECT name, CASE WHEN class = 10 THEN 'Assassin' ELSE 'Others' END class, job_level FROM ragnarok.char;",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

module.exports = router;
