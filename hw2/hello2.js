var fs = require("fs"); // require the fs library
var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

var buffer = fs.readFileSync("greetings.txt");
var data = buffer.toString();
var greetings = data.split("\n");

 rl.question("What is your name? ", function(data) {
 	var name = data;
 	name = ", ".concat(name);
 	for (var i = 0; i < 5; i++) {
		rand_greeting = getRandomInt(0, greetings.length);
		console.log(greetings[rand_greeting].concat(name));
	}
    rl.close();
  });



// between min (inclusive) and max(exclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}