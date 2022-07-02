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
    const bezug = req.body.bezug;
    const sta = req.body.sta;
    const prio = req.body.prio;
    const sqlInsert = 'INSERT INTO tickets (Betreff, Bezug, Status, Priorität, Erstellt_am) VALUES (?,?,?,?, now());';
    
   
    db.query(sqlInsert, [betreff, bezug, sta, prio], (err, result) => {
    console.log(err)
    })
});

router.post('/updateTicket', (req, res) => {
    const id = req.body.id
    const betreff = req.body.betreff;
    const bezug = req.body.bezug;
    const sta = req.body.sta;
    const prio = req.body.prio;
    const sqlInsert = 'UPDATE tickets SET Betreff = ?, Bezug = ?, Status = ?, Priorität = ?, Erstellt_am = now() WHERE idTickets = ? ;';
    db.query(sqlInsert, [betreff, bezug, sta, prio, id], (err, result) => {
    console.log(err)
    })
});

router.delete('/deleteTicket', (req, res) => {
    const id = req.body.id
    const sqlInsert = 'DELETE FROM tickets WHERE idTickets = ?;;';
    db.query(sqlInsert, [id], (err, result) => {
    console.log(err)
    })
});

router.get('/getTickets', (req,res) => {
    const sqlSelect = 'SELECT * FROM tickets'
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
});


module.exports = router;

