const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')

router.use(cors())
router.use(express.json())
router.use(bodyParser.urlencoded({extended: true}))


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password1!',
    database: 'bcs'
});


router.post('/insertInteraction', (req, res) => {
    const aktion = req.body.aktion;  
    const sqlInsert = 'INSERT INTO bcs.userinteraction (Aktion, Datum) VALUES (?,now());';
    db.query(sqlInsert, [aktion], (err, result) => {
    console.log(err)
    })
});


module.exports = router;

