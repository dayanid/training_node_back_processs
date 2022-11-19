var connection = require("./database");
var key_value = "ha"+"%";

var Query = "select * from accounts where (id LIKE '"+key_value+"+') or(name LIKE '"+key_value+"') or (email_id LIKE '"+key_value+"') "




connection.query(Query,(err,Data,field)=>{
					if (err) throw err;
						if (Data.length!=0){var i = 1; Data.forEach((data)=>{
							
							console.log(data.id+" "+data.name+" "+data.email_id+" "+data.mobile+"\n ");
							i = i+1;
						})
						}
						console.log("number of total data's = " + (i-1));
						connection.end();
					})