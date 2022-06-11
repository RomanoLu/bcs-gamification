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

const ticketHandlerRoute = require('./routes/TicketHandler')
const challengeHandlerRoute = require('./routes/ChallengeHandler')

app.use('/api',ticketHandlerRoute);
app.use('/api',challengeHandlerRoute);


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))


app.post('/api/userInteraction', (req, res) => {
    const bezug = req.body.bezug;
    const aktion = req.body.action;
    const sqlInsert = 'INSERT INTO userinteraction (aktion, bezug, datum) VALUES (?,?,now());';
    db.query(sqlInsert, [aktion,bezug], (err, result) => {
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