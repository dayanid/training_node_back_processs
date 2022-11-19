const express = require("express");
const app = express();
var connection = require("./database");
var key_value = ""+"%";
var Query = "select * from accounts where (id LIKE '"+key_value+"+') or(name LIKE '"+key_value+"') or (email_id LIKE '"+key_value+"') ";


connection.query(Query,(err,Data,field)=>{
	
if (err) throw err;
	if (Data.length!=0){
		var users = JSON.parse(JSON.stringify(Data));

							
			// get all results
			app.get("/users", (req, res) => { res.send(users); });

			
			// get paginated results
			app.get("/users/paginate", paginatedResults(users), (req, res) => {
			res.send(res.paginatedResults);
			});
			
			function paginatedResults(model) {
			// middleware function
				return (req, res, next) => {
					const page = parseInt(req.query.page);
					const limit = parseInt(req.query.limit);
				
					// calculating the starting and ending index
					const startIndex = (page - 1) * limit;
					const endIndex = page * limit;
				
					const results = {};
					if (endIndex < model.length) {
					results.next = {
						page: page + 1,
						limit: limit
					};
					}
				
					if (startIndex > 0) {
					results.previous = {
						page: page - 1,
						limit: limit
					};
					}
				
					results.results = model.slice(startIndex, endIndex);
					res.paginatedResults = results;
					next();
				};
			}
			
		}
		console.log("number of total data's = " + Data.length);
		connection.end();
})

// create local server..
const   port = 3000 ;
app.listen(port, (err) => {
	if (err) throw err;
  console.log("Service endpoint= http://localhost:"+port);
  console.log("http://localhost:"+port+"/users");
  console.log("http://localhost:"+port+"/users/paginate?page=1&limit=10");
});