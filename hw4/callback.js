// callback.js

var functions = require("./functions");


var fs = require("fs");

fs.readFile("employees.json", function(err, data) {
  if (err) {
    throw err;
  }
  var file1 = JSON.parse(data);

  fs.readFile("bonuses.json", function(err, data) {
    if (err) {
      throw err;
    }
    var file2 = JSON.parse(data);
    console.log(file1);
    console.log("both files read.");

    newemployees = functions.create_new_employees(file1, file2);

  	console.log(newemployees);

  	fs.writeFile("newEmployees.json", JSON.stringify(newemployees), function(err, data) {
  		if (err) {
		  throw err;
		}
  		console.log('It\'s saved!');
	});

	  	// delete if log.txt already exists.
	fs.unlink('log.txt', function(err, data){
		if (err) {
			throw err;
		}
	});

  	for (var i = 0; i < newemployees.length; i++) {
  		fs.appendFile('log.txt', "Full Name: " + newemployees[i].fullName + "\t" +  "Salary: " + newemployees[i].salary + "\n", function(err, data) {
  			if (err) {
  				throw err;
  			}
  		});
  	}

  	console.log("log file saved");
  });
});