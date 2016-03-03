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

  window.addEventListener("load", function(e) {

    var table = document.getElementById(id);
    var headers = table.getElementsByTagName("thead");
    alert(headers[0]);
    var header_labels = headers[0].getElementsByTagName("th");

    for(var i = 0; i < header_labels.length; i++) {
      alert(header_labels[i].innerHTML);
      header_labels[i].addEventListener("click", (function(idx) {
        return function(e) {
          this.prototype.sortColumn(idx);
        }
      })(i));  //.bind(this) in between )( ?
    }
  });


};

SortTable.prototype.sortColumn = function(index) {
  "use strict";
  /*
   * TODO: Complete this function.
   *
   * This will probably look very similar to the previous one you wrote, but use
   * prototype methods instead. You will also probably want to use the types you
   * got in the constructor to convert from the string values that the cells
   * hold.
   */
};
