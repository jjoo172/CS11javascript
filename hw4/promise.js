// promise.js

var functions = require("./functions");

var Promise = require("bluebird");
// Convert fs library to a version that supports promises.
var fs = Promise.promisifyAll(require("fs"));
var file1 = fs.readFileAsync("employees.json");
var file2 = fs.readFileAsync("bonuses.json");
Promise.all([file1, file2]).spread(function(file1, file2) {
  file1 = JSON.parse(file1);
  file2 = JSON.parse(file2);
  // do stuff with file1 and file2

  files = [file1, file2];

  return files;
}).then(function(value) {
	newemployees = functions.create_new_employees(files[0], files[1]);
	console.log(newemployees);
	return newemployees;
}).then(function(value) {
	fs.writeFile("newEmployees.json", JSON.stringify(newemployees));
	console.log('It\'s saved!');

	return newemployees;
}).then(function(value) {
	fs.unlink('log.txt');
	return newemployees;
}).then(function(value) {
	for (var i = 0; i < newemployees.length; i++) {
  		fs.appendFile('log.txt', "Full Name: " + newemployees[i].fullName + "\t" +  "Salary: " + newemployees[i].salary + "\n");
  	}
  	console.log("log file saved");

  	return newemployees;
});

//.then(newemployees = functions.create_new_employees(file1, file2)
//).then(console.log(newemployees)).then(console.log("asdf"));