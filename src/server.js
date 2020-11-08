// server.js -- File for pulling data from csv and serving it to frontend tables

const express = require("express");
const serveStatic = require("serve-static");
const {spawn} = require('child_process');
const fs = require('fs');
const neatCsv = require('neat-csv');
const { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } = require("constants");
var port = 8000;

app = express();
app.use(serveStatic(__dirname + "../tlhacks"))

app.get('/calc', function(req, res) {
    var result;
    const python = spawn('python', ['tempscriptname.py']);
    python.stdout.on('data', function(data) {
        result = data.toString();
    });
    python.on('close', (code) => {
        // parse result

        res.send(parsedData)
    })
})

var teamResults;
var teamWinrates = [];
var i;

// pull in csv files and create tables
// team winrates
fs.readFile('./data/team_winrates_csv.csv', async (err, data) => {
    if (err) {
        console.error(err)
        return;
    }

    teamResults = await neatCsv(data)
    for (i = teamResults.length - 1; i > teamResults.length - 11; i--) {
        teamResults[i]['winrate'] = String(teamResults[i]['winrate'] * 100) + "%";
        teamWinrates.push(teamResults[i]);
    }

    // console.log(teamWinrates);
})

// champ winrates
var champResults;
var champWinrates = [];
fs.readFile('data/champion_winrate_csv.csv', async (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    champResults = await neatCsv(data)
    for (i = champResults.length - 2; i > champResults.length - 12; i--) {
        champResults[i]['winrate'] = String((champResults[i]['winrate'] * 100).toFixed(2)) + "%";
        champWinrates.push(champResults[i]);
    }

    console.log(champWinrates)
})

app.get('/stats', function(req, res) {

})

app.listen(port);
console.log("server listening on port " + port);