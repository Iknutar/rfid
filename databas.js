var sqlite3 = require('sqlite3').verbose()
//ändra till din egen databas och kolla att filnamnet är rätt importerat i server.js
const DBSOURCE = "rfid.db" 


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQlite database.') 
        db.run(`CREATE TABLE entries (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          RFID text, 
          RFIDtid text UNIQUE, 
          
          )`,(err) => {
      if (err) {
          // Table already created
      }else{
          // Table just created, creating some rows
          
      }
  })  
  }
})


module.exports = db
    