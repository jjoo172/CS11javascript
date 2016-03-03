var MyCode = function() {
  "use strict";

  alert("asdf");

  var SortTable = function(id, types) {
  /*
   * TODO: Finish the constructor.
   *
   * You will have to do the following:
   * - Determine the types of each column based on the types argument; if it is
   *   empty or not an array, just assume all the types are strings. Otherwise
   *   push the type.
   * - Set up the proper handlers (as before)
   * - Set up any other variables you need (e.g. instance variables that would
   *   have been globals before)
   */

  this.iden = id;
  this.types = types;

  this.sort_direction = 1;
  this.cur_sorted_column = -1;

  var self = this;

  window.addEventListener("load", function(e) {

    var table = document.getElementById(id);
    var headers = table.getElementsByTagName("thead");
    var header_labels = headers[0].getElementsByTagName("th");

    for(var i = 0; i < header_labels.length; i++) {
      header_labels[i].addEventListener("click", (function(idx) {
        return function(e) {
          self.sortColumn(idx);
        }
      })(i));  //.bind(this) in between )( ?
    }
  });


};

SortTable.prototype.sortColumn = function(index) {
  "use strict";
  
  var table = document.getElementById(this.iden);
  var body = table.getElementsByTagName("tbody");
  var rows = body[0].getElementsByTagName("tr");
  var headers_out = table.getElementsByTagName("thead");
  var headers = headers_out[0].getElementsByTagName("th");

  var new_array = [];
  
  for (var i = 0; i < rows.length; i++) {
    new_array.push([i, rows[i].cells[index].innerHTML]);
  }

  // ascending -> descending
  if (this.sort_direction === 1) {
    // numeric sort
    if (this.types[index] === Number) {
      new_array.sort(function(a, b) {
        return parseInt(b[1]) - parseInt(a[1]);
      });
    }
    else { 
    new_array.sort(function(a, b) {
      if (a[1] > b[1]) {
       return -1;
      }

      else if (a[1] < b[1]) {
        return 1;
      }

      else { 
        return 0;
      }
    });
  }
  }

  // descending -> ascending
  else if (this.sort_direction === -1) {
    // numeric sort
    if (this.types[index] === Number) {
      new_array.sort(function(a, b) {
        return parseInt(a[1]) - parseInt(b[1]);
      });
    }
    else {
    new_array.sort(function(a, b) {
      if (a[1] > b[1]) {
       return 1;
      }

      else if (a[1] < b[1]) {
        return -1;
      }

      else { 
        return 0;
      }
    });
  }
  }

  else {
    alert("something went wrong!");
  }

  this.sort_direction *= -1;

  // at this point, sort_direction holds now the currently sorted direction of new_array

  // column is already sorted
  if (this.cur_sorted_column === index) {

    // ascending
    if (this.sort_direction === 1) {
      headers[index].style.color = 'blue';
      
      // append new rows
      for (var i = 0; i < new_array.length; i++) {
        var tableRef = table.getElementsByTagName('tbody')[0];
        var row = tableRef.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = tableRef.rows[new_array[i][0]].cells[0].innerHTML;
        cell2.innerHTML = tableRef.rows[new_array[i][0]].cells[1].innerHTML;
        cell3.innerHTML = tableRef.rows[new_array[i][0]].cells[2].innerHTML;
        cell4.innerHTML = tableRef.rows[new_array[i][0]].cells[3].innerHTML;
      }

      // get rid of old rows
      for (var i = 0; i < new_array.length; i++) {
        tableRef.deleteRow(0);
      }
      
    }
    // descending
    else {
      headers[index].style.color = 'red';
      
      // append new rows
      for (var i = 0; i < new_array.length; i++) {
        var tableRef = table.getElementsByTagName('tbody')[0];
        var row = tableRef.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = tableRef.rows[new_array[i][0]].cells[0].innerHTML;
        cell2.innerHTML = tableRef.rows[new_array[i][0]].cells[1].innerHTML;
        cell3.innerHTML = tableRef.rows[new_array[i][0]].cells[2].innerHTML;
        cell4.innerHTML = tableRef.rows[new_array[i][0]].cells[3].innerHTML;
      }

      // get rid of old rows
      for (var i = 0; i < new_array.length; i++) {
        tableRef.deleteRow(0);
      }
      
    }
  }
  
  
  // chosen column is not already sorted
  else {

    // change color back to black
    if (this.cur_sorted_column != -1) {
      headers[this.cur_sorted_column].style.color = '';
    }
    
    // sort currently sorted column in ascending.
    this.cur_sorted_column = index;

// numeric sort
    if (this.types[index] === Number) {
      new_array.sort(function(a, b) {
        return parseInt(a[1]) - parseInt(b[1]);
      });
    }

    else{
    new_array.sort(function(a, b) {
      if (a[1] > b[1]) {
       return 1;
      }

      else if (a[1] < b[1]) {
        return -1;
      }

      else { 
        return 0;
      }
    });
  }

    headers[index].style.color = 'blue';

    // populate actual values
    
      // append new rows
      for (var i = 0; i < new_array.length; i++) {
        var tableRef = table.getElementsByTagName('tbody')[0];
        var row = tableRef.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = tableRef.rows[new_array[i][0]].cells[0].innerHTML;
        cell2.innerHTML = tableRef.rows[new_array[i][0]].cells[1].innerHTML;
        cell3.innerHTML = tableRef.rows[new_array[i][0]].cells[2].innerHTML;
        cell4.innerHTML = tableRef.rows[new_array[i][0]].cells[3].innerHTML;
      }

      // get rid of old rows
      for (var i = 0; i < new_array.length; i++) {
        tableRef.deleteRow(0);
      }
    

    this.sort_direction = 1;

  }

};
new SortTable("ourtable", [null, Number])
}();
