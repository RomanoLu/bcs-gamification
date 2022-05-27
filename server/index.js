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




app.get('/api/getTickets', (req,res) => {
    const sqlSelect = 'SELECT * FROM tickets'
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.post('/api/insertChallenge', (req, res) => {
    const beschreibung = req.body.beschreibung;
    const titel = req.body.titel;
    const schwierigkeit = req.body.schwierigkeit;
    const idbelohnung = req.body.idbelohnung;
    const zeit = req.body.zeit;    
    const ende = req.body.ende;
    const sqlInsert = 'INSERT INTO challenges (beschreibung, titel, schwierigkeit, idbelohnung, zeit, ende) VALUES (?,?,?,?);';
    db.query(sqlInsert, [beschreibung, titel, schwierigkeit, idbelohnung, zeit, ende], (err, result) => {
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