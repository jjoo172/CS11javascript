var SortTable = function(id, types) {
  "use strict";
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
  
  alert(rows);
  alert(rows[0].cells[index].innerHTML);

  var new_array = [];
  
  for (var i = 0; i < rows.length; i++) {
    alert(rows[i].cells[index].innerHTML);
    new_array.push([i, rows[i].cells[index].innerHTML]);
  }

  alert(new_array);

/*
  // ascending -> descending
  if (sort_direction === 1) {
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

  // descending -> ascending
  else if (sort_direction === -1) {
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

  else {
    alert("something went wrong!");
  }

  sort_direction *= -1;

  // at this point, sort_direction holds now the currently sorted direction of new_array

  // column is already sorted
  if (cur_sorted_column === column) {

    // ascending
    if (sort_direction === 1) {
      headers[column].style.color = 'blue';
      
      // append new rows
      for (var i = 0; i < new_array.length; i++) {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = table.rows[new_array[i][0]].cells[0].innerHTML;
        cell2.innerHTML = table.rows[new_array[i][0]].cells[1].innerHTML;
        cell3.innerHTML = table.rows[new_array[i][0]].cells[2].innerHTML;
      }

      // get rid of old rows
      for (var i = 0; i < new_array.length; i++) {
        table.deleteRow(1);
      }
      
    }
    // descending
    else {
      headers[column].style.color = 'red';
      
      // append new rows
      for (var i = 0; i < new_array.length; i++) {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = table.rows[new_array[i][0]].cells[0].innerHTML;
        cell2.innerHTML = table.rows[new_array[i][0]].cells[1].innerHTML;
        cell3.innerHTML = table.rows[new_array[i][0]].cells[2].innerHTML;
      }

      // get rid of old rows
      for (var i = 0; i < new_array.length; i++) {
        table.deleteRow(1);
      }
      
    }
  }

  // chosen column is not already sorted
  else {

    // change color back to black
    if (cur_sorted_column != -1) {
      headers[cur_sorted_column].style.color = '';
    }
    
    // sort currently sorted column in ascending.
    cur_sorted_column = column;

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

    headers[column].style.color = 'blue';

    // populate actual values
    
      // append new rows
      for (var i = 0; i < new_array.length; i++) {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = table.rows[new_array[i][0]].cells[0].innerHTML;
        cell2.innerHTML = table.rows[new_array[i][0]].cells[1].innerHTML;
        cell3.innerHTML = table.rows[new_array[i][0]].cells[2].innerHTML;
      }

      // get rid of old rows
      for (var i = 0; i < new_array.length; i++) {
        table.deleteRow(1);
      }
    

    sort_direction = 1;

  }
*/
};
