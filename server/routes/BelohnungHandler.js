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

router.get("/getBelohnung", (req, res) => {
  const sqlSelect =
    "SELECT count(idbelohnung) FROM bcs.challenges WHERE absolviert = 1 GROUP BY idbelohnung";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

module.exports = router;
