const request = require('request');

let url = "http://localhost:3000/users/paginate?page=1&limit=10";

let options = {json: true};



request(url, options, (error, res, body) => {
    if (error) {
        return  console.log(error)
    };

    if (!error && res.statusCode == 200) {
		var users = JSON.parse(JSON.stringify(body));
		console.log(body.forEach((data)=>{
							console.log(data);
						})
		);
        // do something with JSON, using the 'body' variable
    };
})