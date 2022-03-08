import Http from "./http.js";

class Provider {
  /**
   * Gets the weather for a given city
   * */
  static getWeather(lat, lng) {
    const key = "b419c08c07877cca671be0e4419509a7";
    let units = "metric";
    let lang = "en";
    const url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${key}&units=${units}&lang=${lang}`;

    var xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${key}&units=${units}&lang=${lang}`
    );
    xhr.send();
    xhr.onreadystatechange = processRequest;
    xhr.addEventListener("readystatechange", processRequest, false);

    function processRequest(e) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        const city = response.timezone.match(/\/(.*)/)[1];
        const weather = response.current.weather[0].description;
        console.log(`The weather for ${city} is ${weather}`);
      }
    }
  }

  /**
   * Gets the currency for a given city
   * */
  static getLocalCurrency(city) {
    return Promise.resolve(`The currency of ${city} is GBP`);
  }

  /**
   * Given latitude and longtitude, this function returns a city
   * */
  static findCity(lat, lng) {
    var xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://us1.locationiq.com/v1/reverse.php?key=pk.b3587512faa7d98cc8297d58aa1922eb&lat=" +
        lat +
        "&lon=" +
        lng +
        "&format=json",
      true
    );
    xhr.send();
    xhr.onreadystatechange = processRequest;
    xhr.addEventListener("readystatechange", processRequest, false);

    function processRequest(e) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        var city = response.address.city;
        console.log(city);
        return city;
      }
    }
  }
}

/**
 * 1.
 * Find and print in console the city located
 * at latitude/longtitude 51.5074 and 0.1278 accordingly
 *  */
// Provider.findCity("51.5074", "0.1278");

/**
 * Print in console the weather for the city
 * located at lat/long = 51.5074 and 0.1278
 *  */
Provider.getWeather("51.5074", "0.1278");
