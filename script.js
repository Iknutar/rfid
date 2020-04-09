var express=require('express');
var app=express();

app.use(express.static('public'))

let port = 3000;


app.get('/',function (req,res){
  res.send("Hello World");
});

function minFunktion(){
  var d = new Date();
  var n = d.getDate();
  
}
console.log(minFunktion)

app.get('/tag/:id',function(req, res){
console.log("rfid" + req.params.id);
res.send('Rfid mottagen' + req.params.id);


let db = new sqlite3.Database('entries.db',(err) =>{

  if(err){
 console.error(err.message);
  }
  console.log("connected to the rfid database.");
});

db.run('INSERT INTO rfid(rfid)VALUES(?)', [req.params.id], function(err){
  if (err){
    return console.error(err.message);
  }
  console.log(`A row has been inserted with rowid ${this.lastID}`); 
});

db.close((err)=> {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection')});
});

app.get('/users/:id/', function (req, res) {
  res.send(req.params)
})

var server=app.listen(port,function() {

});
