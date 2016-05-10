//
"use strict";

var http = require('http');
var path = require('path');

var express = require('express');


var months = ["January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"
];

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var app = express();
var server = http.createServer(app);

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('/:timestamp', function(req, res) {

	let rspobj = {
		unix: null,
		natural: null
	};
	
// 	console.log("Timestamp received: " + req.params.timestamp);

	let date = new Date(req.params.timestamp);
// 	console.log(req.params.timestamp + " " + date.toString());

	if (isNaN(date)) {
	 // console.log("Invalid Date");
		date = new Date(parseInt(req.params.timestamp, 10));
	}

// 	console.log(req.params.timestamp + " " + date.toString());

	if (!isNaN(date)) {
		rspobj.unix = date.valueOf();
		rspobj.natural = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
	}
	
	res.header('Content-Type', 'application/json');

	res.send(rspobj);
});



server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
	var addr = server.address();
	console.log("Server listening at", addr.address + ":" + addr.port);
});
