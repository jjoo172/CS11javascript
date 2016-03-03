
var cur_sorted_column = -1;
var sort_direction = 1; // indicates the currently sorted direction of the column.

function sortColumn(column) {
  "use strict";
  
  var table = document.getElementById("ourtable");
  var i;
  var headers = table.getElementsByTagName("th");
  var elements = table;

  var new_array = [];

  for (var i = 1; i < table.rows.length; i++) {
    new_array.push([i, table.rows[i].cells[column].innerHTML]);
  }

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
}



window.addEventListener("load", function(e) {
  "use strict";

  var table = document.getElementById("ourtable");
  var i;
  var elements = table.getElementsByTagName("th");

  for(i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", (function(idx) {
      return function(e) {
        sortColumn(idx);
      }
    })(i));
  }
});

