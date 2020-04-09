var express = require('express');
const sqlite3 = require('sqlite3').verbose();

var app = express();
let portnummer = 3000;


var d = new Date();
var y=d.getFullYear();
var da=(d.getDate() < 9 ? '0': '') +(d.getDate());
var m=(d.getMonth() < 9 ? '0': '') + (d.getMonth()+1);
var mi = d.getMinutes();
var s = d.getSeconds();
var mil = d.getMilliseconds();


console.log(date = y+" "+da+" "+m+" "+mi+" "+s+" "+mil);

//add public folder

app.use(express.static('public'))

app.get('/', function (req, res){
  res.send("hello world");
});

//Min db 

app.get('/tag/:id', function (req, res){//localhost:3000/tag/456456456
  console.log("rfid " + req.params.id);
  res.send("RFID mottagen" + req.params.id);

  app.get('/rfiddata', function (req, res) {
    let sql = "SELECT * FROM rfid";

    let db = new sqlite3.Database('rfid.db', (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Connected to the rfid database.');
    });
  
  let rader =[];
  
    db.all(sql, [], (err, rows) => {
      res.json({ username: rows })
    });
  
    db.close((err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Close the database connection.');
    });
      });

  //connect to database
  //https://www.sqlitetutorial.net/sqlite-nodejs/connect/
  let db = new sqlite3.Database('rfid.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the rfid database.');
  });

  db.run(`INSERT INTO rfid(rfid,datum) VALUES(?,?)`, [req.params.id, date], function(err) {
 
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });

  //close database connection
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });
});

app.get('/getrfid', function (req, res){//http://localhost:3000/getrfid
  let db = new sqlite3.Database('rfid.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the rfid database.');
  });
  let sql = "SELECT * FROM rfid ORDER BY datum";
  db.all(sql, [], (err, rows) => {
    res.json({ data: rows })
  });
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });
})



var server = app.listen(portnummer, function(){

});