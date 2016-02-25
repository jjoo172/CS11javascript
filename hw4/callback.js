// callback.js

var utils = require("./functions");


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

    var newemployees = [];

	for (var i = 0; i < file1.length; i++) {
  		for (var key in file2) {
	  		if ((file1[i].id == key) && (file2[key] == true)) {
    			var newsal = (file1[i].yearsWorking * 1000) + file1[i].salary;
    			console.log(newsal);

    			newemployees.push({"id":file1[i].id, "fullName":file1[i].name.first + " " + file1[i].name.last, "salary":file1[i].salary});
    		}
  		}
  	}

  	console.log(newemployees);

  });
});