// functions.js

var create_new_employees = function(file1, file2) {
    var newemployees = new Array();

	for (var i = 0; i < file1.length; i++) {
  		for (var key in file2) {
	  		if ((file1[i].id == key) && (file2[key] == true)) {
    			var newsal = (file1[i].yearsWorking * 1000) + file1[i].salary;
    			console.log(newsal);

    			var employee = new Object();
    			employee.id = file1[i].id;
    			employee.fullName = file1[i].name.first + " " + file1[i].name.last;
    			employee.salary = file1[i].salary;
    			newemployees.push(employee);
    		}
  		}
  	}

  	return newemployees;
}


module.exports = {
  create_new_employees: create_new_employees
};


// promise.js

//var utils = require("./functions");

//functions.doStuff(4);