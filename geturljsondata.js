const request = require('request');

let url = "http://localhost:3000/users/paginate?page=1&limit=10";

let options = {json: true};


//send request to url..
request(url, options, (error, res,data) => {
    if (error) {
        return  console.log(error)
    };

    if (!error && res.statusCode == 200) {
		//var users = JSON.parse(JSON.stringify(data));
		console.log(data);
    
    };
})
