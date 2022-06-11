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


router.get('/getChallenges', (req,res) => {
    const sqlSelect = 'SELECT * FROM challenges WHERE angenommen IS NULL';
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
});

router.post('/insertChallenge', (req, res) => {
    const beschreibung = req.body.beschreibung;
    const bewertung = req.body.bewertung;
    const art = req.body.art;
    const titel = req.body.titel;
    const priorität = req.body.priorität;
    const idbelohnung = 33;
    const anzahl = req.body.anzahl;
    const aktion = req.body.aktion;
    const zeit = req.body.zeit;    
    const buchung_über = req.body.buchung_über;
    const sqlInsert = 'INSERT INTO challenges (bewertung, beschreibung, art, titel, priorität, idbelohnung, anzahl, aktion, zeit, buchung_über) VALUES (?,?,?,?,?,?,?,?,?,?);';
    db.query(sqlInsert, [bewertung, beschreibung, art, titel, priorität, idbelohnung, anzahl, aktion, zeit, buchung_über], (err, result) => {
    console.log(err)
    })
});

router.post('/selectedChallenge', (req, res) => {
    const zeitspanne = req.body.zeitspanne;
    const angenommen = req.body.angenommen;
    const id = req.body.id;

    const sqlInsert = 'UPDATE challenges SET start = now(), ende = date_add(now(), INTERVAL ? DAY), angenommen = ? WHERE idchallenges = ?';
    db.query(sqlInsert, [zeitspanne, angenommen, id], (err, result) => {
    console.log(err)
    })
});


router.get('/getChallengeProgress', (req,res) => {
    const sqlSelect = '(SELECT (count(*)/(Select anzahl FROM bcs.challenges WHERE now() < ende & aktion = "Tickets")) AS challengeProgress FROM userinteraction WHERE (Select start FROM bcs.challenges WHERE now() < ende & aktion = "Tickets") > Datum &(Select ende FROM bcs.challenges WHERE now() < ende & aktion = "Tickets") < Datum & Aktion = "Tickets")'
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
});

router.get('/getOpenChallenges', (req,res) => {
    const sqlSelect = 'SELECT * FROM bcs.challenges WHERE angenommen = 1';
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
});

module.exports = router;

