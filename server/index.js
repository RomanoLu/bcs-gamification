const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password1!',
    database: 'bcs'
});


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))


app.post('/api/insertTicket', (req, res) => {
    const betreff = req.body.betreff;
    const bezug = req.body.bezug;
    const sta = req.body.sta;
    const prio = req.body.prio;
    const sqlInsert = 'INSERT INTO tickets (Betreff, Bezug, Status, Priorität, Erstellt_am) VALUES (?,?,?,?, now());';
    db.query(sqlInsert, [betreff, bezug, sta, prio], (err, result) => {
    console.log(err)
    })
});

app.post('/api/userInteraction', (req, res) => {
    const bezug = req.body.bezug;
    const aktion = req.body.action;
    const sqlInsert = 'INSERT INTO userinteraction (aktion, bezug, datum) VALUES (?,?,now());';
    db.query(sqlInsert, [aktion,bezug], (err, result) => {
    console.log(err)
    })
});

app.get('/api/getChallenges', (req,res) => {
    const sqlSelect = 'SELECT * FROM challenges WHERE angenommen IS NULL';
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})


app.get('/api/getTickets', (req,res) => {
    const sqlSelect = 'SELECT * FROM tickets'
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.post('/api/insertChallenge', (req, res) => {
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

app.listen(3001, () => {
    console.log('Server running oon port 3001')
})


    //RES: SEND To frontend //REQ: Get information from the frontend

/*
Handler Funktionen schreiben 
Start: npm run devStart
*/