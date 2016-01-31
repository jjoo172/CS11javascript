var fs = require("fs"); // require the fs library
var readline = require("readline");
var http = require("http");
var url = require("url");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })


fs.readFile("greetings.txt", function(err, buffer) {
    if (err === null) {
    	var data = buffer.toString();
		var greetings = data.split("\n");

		var server = http.createServer(function(req, res) {
			var query = url.parse(req.url, true).query;
			rand_greeting = getRandomInt(0, greetings.length);

			if (query.name === undefined) {
				res.writeHead(404, {'Content-Type': 'text/plain'});
				res.end(greetings[rand_greeting]);
			}
			

			else {
				var name = query.name;
 				name = ", ".concat(name);
				res.writeHead(200, {'Content-Type': 'text/plain'});
				res.end(greetings[rand_greeting].concat(name));
    			rl.close();
			}
		});

		server.listen(8080);
	}

    else {
       console.log("Error in reading file");
       return;
    }

});




// between min (inclusive) and max(exclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}