const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

router.use(cors());
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password1!",
  database: "bcs",
});

// router.get("/getBelohnung", (req, res) => {
//   const sqlSelect =
//     "SELECT count(idbelohnung) FROM bcs.challenges WHERE absolviert = 1 GROUP BY idbelohnung";
//   db.query(sqlSelect, (err, result) => {
//     res.send(result);
//   });
// });

router.get("/getBelohnung", (req, res) => {
  const sqlSelect = "SELECT concat('1/', anzahl,' ',  art) as Belohnung, art FROM bcs.belohnungen";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

router.get("/getVerdienteBelohnungen", (req, res) => {
  const sqlSelect = "SELECT b.anzahl, count(c.idbelohnung) as absolviert, b.art FROM belohnungen b INNER JOIN challenges c ON c.idbelohnung LIKE b.art WHERE c.absolviert = 1 GROUP BY b.art";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

module.exports = router;
