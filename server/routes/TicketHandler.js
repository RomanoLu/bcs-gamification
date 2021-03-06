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


router.post('/insertTicket', (req, res) => {
    const betreff = req.body.betreff;
    const art = req.body.art;
    const status = req.body.status;
    const bezug = req.body.bezug;
    const beschreibung = req.body.beschreibung;
    const prio = req.body.prio;
    const sqlInsert = 'INSERT INTO tickets (Betreff, Bezug, Status, Priorität, Erstellt_am, Art, Beschreibung) VALUES (?,?,?,?,now(),?,?);';
    
   
    db.query(sqlInsert, [betreff, bezug, status, prio, art, beschreibung], (err, result) => {
    console.log(err)
    })
});


router.post('/updateTicket', (req, res) => {
    const id = req.body.id
    const betreff = req.body.betreff;
    const bezug = req.body.bezug;
    const sta = req.body.status;
    const prio = req.body.prio;
    const art = req.body.art;
    const beschreibung = req.body.beschreibung;
    const sqlInsert = 'UPDATE tickets SET Betreff = ?, Bezug = ?, Status = ?, Priorität = ?, Erstellt_am = now(), Art = ?, Beschreibung = ? WHERE idTickets = ? ;';
    db.query(sqlInsert, [betreff, bezug, sta, prio, art, beschreibung, id], (err, result) => {
    console.log(err)
    })
});


router.post('/deleteTicket', (req, res) => {
    const idTickets = req.body.idTickets;
    const sqlInsert = 'DELETE FROM tickets WHERE idTickets = ?';
    console.log(idTickets)
    db.query(sqlInsert, [idTickets], (err, result) => {
    console.log(err);
    })
});

router.get('/getTickets', (req,res) => {
    const sqlSelect = 'SELECT * FROM tickets'
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
});


module.exports = router;

