
var cur_sorted_column = -1;
var sort_direction = -1;

function sortColumn(column) {
  "use strict";

  var table = document.getElementById("ourtable");
  var i;
  var headers = table.getElementsByTagName("th");
  var elements = table.getElementsByTagName("tr");

  for (var i = 1; i < table.rows.length; i++) {
    alert(table.rows[i].cells[column].innerHTML);
  }

  // column is already sorted
  if (cur_sorted_column === column) {

    // ascending -> descending
    if (sort_direction == 1) {
      headers[column].style.color = 'red';
    }
    // descending -> ascending
    else {
      headers[column].style.color = 'blue';
    }
    sort_direction *= -1;

  }

  // chosen column is not already sorted
  else {
    // unsort the currently sorted column, if statement for initialization check
    if (cur_sorted_column != -1) {
      headers[cur_sorted_column].style.color = '';
    }
    
    // sort corrently sorted column in ascending.
    cur_sorted_column = column;

    sort_direction = 1;

    headers[column].style.color = 'blue';

  }

  //elements = element.getElementsByTagName(tagName)
  /*
   * TODO: Sort the column given by the index, coloring the header as necessary.
   *
   * Some notes:
   * - You will have to keep track of some sort of global state in order to know
   *   which column you are currently sorting and which direction is the current
   *   sort direction. This is kind of gross, but for this particular file you
   *   can't really do much.
   * - Arrays have a sort method that normally sorts by JavaScript's default
   *   method, but you can actually provide your own function; if you provide a
   *   function to Array.prototype.sort, it will take two arguments (comparing
   *   items, say a and b), and return -1 if a < b, 1 if a > b, and 0 if a == b.
   * - There's no really nice way to actually sort rows of things, so you'll
   *   have to first store the rows in the correct order somewhere, clear out
   *   the table, and append them back in the correct order.
   */
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

  // TODO: Attach a click listener on all header cells to call
  //       bindColumnListener
});
