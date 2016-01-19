// Toggles the style with name styleName on the tag, with either the value or
// the default value.
function toggleStyle(el, styleName, value) {
  if (el.style[styleName] === '') {
    el.style[styleName] = value;
  }
  else {
    el.style[styleName] = '';
  }
}

function onFormSubmit(e) {
  var form = e.target;
  // TODO: Prevent the form from actually submitting!  

  e.preventDefault();

    // TODO: Print values of foo input and bar input together to response div.
  var foo_input = form.foo.value;
  var bar_input = form.bar.value;

  form.getElementById("response").innerHTML(foo_input + " " + bar_input);
}

function formAlert(e) {
  var button = e.target;

  var form = button.form;
  var foo_value = form.foo.value;
  var bar_value = form.bar.value;
  alert(foo_value + " " + bar_value);

}

function toggleBox(e) {
  
  var box = document.getElementById("box");
  toggleStyle(box, "display", "none");

}

function rotateColors(e) {
  var box = document.getElementById("box");

  // TODO: Rotate the colors of the box from red to blue to green.
  if (box.style.backgroundColor === "red") {
    box.style.backgroundColor = "blue";
  }
  else if (box.style.backgroundColor === "blue") {
    box.style.backgroundColor = "green";
  }
  else if (box.style.backgroundColor === "green") {
    box.style.backgroundColor = "red";
  }
}

function onTagButtonClick(e) {
  var el = e.target;
  var tagsEl = document.getElementById("tags");
  // TODO: Check for the id here and determine which values to toggle. Then
  // loop over all the tags you find and toggle the appropriate values.



  if (el.id === "bold-btn") {
    var bolded = document.getElementsByTagName("b");
    for (var i = 0; i < bolded.length; i++) {
      toggleStyle(bolded[i], "color", "red");
    }
  }

  else if (el.id === "italic-btn") {
    var italics = document.getElementsByTagName("i");
    for (var i = 0; i < italics.length; i++) {
      toggleStyle(italics[i], "backgroundColor", "#ddd");
    }
  }

  else if (el.id === "underline-btn") {
    var underlines = document.getElementsByTagName("u");
    for (var i = 0; i < underlines.length; i++) {
      toggleStyle(underlines[i], "border", "thin solid blue");
    }
  }

}

function initCanvas() {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  // TODO: Fill the canvas with the color #ddd

  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle="#ddd";
  ctx.fill();
}

function randomColor() {
  var r = (Math.random() * 256 | 0).toString(16);
  var g = (Math.random() * 256 | 0).toString(16);
  var b = (Math.random() * 256 | 0).toString(16);
  return "#" + r + g + b;
}

function drawBox(e) {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");

  // Firefox doesn't set offsetX/offsetY.
  if(!e.hasOwnProperty('offsetX')) {
    e.offsetX = e.layerX - e.currentTarget.offsetLeft;
    e.offsetY = e.layerY - e.currentTarget.offsetTop;
  }
  var mouseX = e.offsetX;
  var mouseY = e.offsetY;
  
  // TODO: Fill a rectangle with a random color, with a width between 50 and
  // 200 and a height between 50 and 100, such that it is centered around the
  // point (mouseX, mouseY)

  ctx.fillRect(mouseX - 50, mouseY - 37.5, 100, 75);
  ctx.fillStyle = randomColor();
  
}
