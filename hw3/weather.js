var appid = [APPID];  // insert valid APPID here

function onWeather(err, data) {
  alert("onWeather");
  if(err) {
    /* TODO:
     * Toggle the results display for the response display.
     * Print an error message in the error element and change its display so
     * that it is no longer hidden.
     */

    //hide #result. show #response. set #error to "could not find weather information for that Zip Code."
    document.getElementById("results").style.display = "none";
    document.getElementById("response").style.display = "";
    var el = document.getElementById("error");
    el.innerHTML = "Could not find weather information for that ZIP code";
    alert(el.innerHTML);
    return;
  }

  // TODO: Empty the error element and hide it.

  var el = document.getElementById('response');

  var temp = data.main.temp;
  document.getElementById("temp").innerHTML = temp + " &deg;F";

  var windspeed = data.wind.speed;
  // TODO: Set the element with ID windspeed's content to the windspeed above,
  // with the unit "mph" afterwards

  var iconUrl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var iconEl = document.getElementById("icon");
  // TODO: Create an img tag with src set to iconUrl, and set the content of the
  // icon element to that image.

  var locationEl = document.getElementById("location");
  locationEl.innerHTML = data.name;

  // TODO: Make the response element and results elements both visible
}

function onZipCode(err, data) {
  alert("onZipCode");
  if(err) {
    /* TODO:
     * Toggle the results display for the response display.
     * Print an error message in the error element and change its display so
     * that it is no longer hidden.
     */

    document.getElementById("results").style.display = "none";
    document.getElementById("response").style.display = "";

    var el = document.getElementById("error");
    el.innerHTML = "Provided ZIP code does not exist!";
    alert(el.innerHTML);
    return;
  }
  var firstMatch = data.places[0];

  alert(firstMatch["place name"]);

  /* TODO:
   * Get the city name, state name and country from the place data returned by
   * the Zippopotamus API.
   */
  var url = "http://api.openweathermap.org/data/2.5/weather";
  /* TODO:
   * Access the url above with the query string below:
   *   ?APPID=[APPID]&units=imperial&q=[CITY],[STATE],[COUNTRY]
   * Where the things in brackets were found above.
   */
}

function getWeather(e) {
  e.preventDefault(); // stop submit
  var zipCode = document.getElementById("zipCode").value;
  if(!zipCode) {
    
    document.getElementById("results").style.display = "none";
    document.getElementById("response").style.display = "";

    var el = document.getElementById("error");
    el.innerHTML = "ZIP code not set!";

    alert(el.innerHTML);
    return;
  }
  /* TODO:
   * Access the url http://api.zippopotam.us/us/ZZZZZ where ZZZZ is the given
   * zip code.
   */

  url = "http://api.zippopotam.us/us/" + String(zipCode);

  alert(url);

  var a = AJAX.getJSON(url, onZipCode);

  alert(a.getJSON);



}
