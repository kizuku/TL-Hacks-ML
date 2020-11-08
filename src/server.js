// server.js -- File for pulling data from csv and serving it to frontend tables

const express = require("express");
const serveStatic = require("serve-static");
const {spawn} = require('child_process');
const fs = require('fs');
const neatCsv = require('neat-csv');
const { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } = require("constants");
var port = 8000;
var numRows = 5;

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
    for (i = teamResults.length - 1; i > teamResults.length - 1 - numRows; i--) {
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
    for (i = champResults.length - 2; i > champResults.length - 2 - numRows; i--) {
        champResults[i]['winrate'] = String((champResults[i]['winrate'] * 100).toFixed(2)) + "%";
        champWinrates.push(champResults[i]);
    }

    //console.log(champWinrates)
})

// role winrates
var roleResults;
var roleWinrates = {top: [], jg: [], mid: [], bot: [], sup: []}
var j;
const topIndex = 0;
const jgIndex = 114;
const midIndex = 215;
const botIndex = 343;
const supIndex = 445;

fs.readFile('data/champion_winrate_by_role_csv_new.csv', async (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    roleResults = await neatCsv(data)
    // top
    for (i = topIndex, j = 0; j < numRows; i++) {
        if (roleResults[i]['played'] >= 20) {
            roleResults[i]['winrate'] = String((roleResults[i]['winrate'] * 100).toFixed(2)) + "%";
            roleWinrates.top.push(roleResults[i]);
            j++;
        }
    }
    // console.log(roleWinrates.top)

    for (i = jgIndex, j = 0; j < numRows; i++) {
        if (roleResults[i]['played'] >= 20) {
            roleResults[i]['winrate'] = String((roleResults[i]['winrate'] * 100).toFixed(2)) + "%";
            roleWinrates.jg.push(roleResults[i]);
            j++;
        }
    }

    for (i = midIndex, j = 0; j < numRows; i++) {
        if (roleResults[i]['played'] >= 20) {
            roleResults[i]['winrate'] = String((roleResults[i]['winrate'] * 100).toFixed(2)) + "%";
            roleWinrates.mid.push(roleResults[i]);
            j++;
        }
    }

    for (i = botIndex, j = 0; j < numRows; i++) {
        if (roleResults[i]['played'] >= 20) {
            roleResults[i]['winrate'] = String((roleResults[i]['winrate'] * 100).toFixed(2)) + "%";
            roleWinrates.bot.push(roleResults[i]);
            j++;
        }
    }

    for (i = supIndex, j = 0; j < numRows; i++) {
        if (roleResults[i]['played'] >= 20) {
            roleResults[i]['winrate'] = String((roleResults[i]['winrate'] * 100).toFixed(2)) + "%";
            roleWinrates.sup.push(roleResults[i]);
            j++;
        }
    }

    // console.log(roleWinrates)
})

app.get('/stats', function(req, res) {
    res.send({"teamWinrate": teamWinrates, "champWinrate": champWinrates, "roleWinrate": roleWinrates})
})

app.listen(port);
console.log("server listening on port " + port);