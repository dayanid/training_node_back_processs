var mysql = require("mysql");

var connection  = mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"training_sys"
});

connection.connect((err)=>{
if (err) throw err;
console.log("Database connected...");
});

module.exports = connection
