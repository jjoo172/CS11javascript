
var cur_sorted_column = -1;
var sort_direction = -1;

function sortColumn(column) {
  "use strict";
  
  var table = document.getElementById("ourtable");
  var i;
  var headers = table.getElementsByTagName("th");
  var elements = table;

  alert(elements);
  
  var original_array = [];
  var new_array = [];

  for (var i = 1; i < table.rows.length; i++) {
    new_array.push([i, table.rows[i].cells[column].innerHTML]);
  }

  if (sort_direction === 1) {
    new_array.sort(function(a, b) {
      //TODO!
      // check if it is a number or a string
      /*
      if (parseInt(a) != NaN) {
        a = parseInt(a);
        b = parseInt(b);
      }
      */
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

  else if (sort_direction === -1) {
    new_array.sort(function(a, b) {
      //TODO!
      // check if it is a number or a string
      /*
      if (parseInt(a) != NaN) {
        a = parseInt(a);
        b = parseInt(b);
      }
      */
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


  alert(new_array);


  // column is already sorted
  if (cur_sorted_column === column) {

    // ascending -> descending
    if (sort_direction == 1) {
      headers[column].style.color = 'red';
      
      for (var i = 1; i < new_array.length; i++) {

      }
      
    }
    // descending -> ascending
    else {
      headers[column].style.color = 'blue';
      
      for (var i = 1; i < table.rows.length; i++) {
        document.getElementById("ourtable").rows[i].cells[0].innerHTML = elements.rows[new_array[i][0]].cells[0].innerHTML;
        document.getElementById("ourtable").rows[i].cells[1].innerHTML = elements.rows[new_array[i][0]].cells[1].innerHTML;
        document.getElementById("ourtable").rows[i].cells[2].innerHTML = elements.rows[new_array[i][0]].cells[2].innerHTML;
      }
      
    }
    sort_direction *= -1;

  }

  // chosen column is not already sorted
  else {
    // unsort the currently sorted column, if statement for initialization check
    if (cur_sorted_column != -1) {
      headers[cur_sorted_column].style.color = '';
      for (var i = 1; i < table.rows.length; i++) {
        //todo
      }
    }
    
    // sort corrently sorted column in ascending.
    cur_sorted_column = column;

    sort_direction = 1;

    headers[column].style.color = 'blue';

    // populate actual values
    
    for (var i = 1; i < table.rows.length; i++) {
        document.getElementById("ourtable").rows[i].cells[0].innerHTML = elements.rows[new_array[i][0]].cells[0].innerHTML;
        document.getElementById("ourtable").rows[i].cells[1].innerHTML = elements.rows[new_array[i][0]].cells[1].innerHTML;
        document.getElementById("ourtable").rows[i].cells[2].innerHTML = elements.rows[new_array[i][0]].cells[2].innerHTML;
    }
    

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

