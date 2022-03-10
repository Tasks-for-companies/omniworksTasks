import Http from "./http.js";

const weather_key = "b419c08c07877cca671be0e4419509a7";
class Provider {
  /**
   * 1.
   * Given latitude and longtitude, this function returns a city
   * */
  static findCity(lat, lng) {
    const url = `https://us1.locationiq.com/v1/reverse.php?key=pk.b3587512faa7d98cc8297d58aa1922eb&lat=${lat}&lon=${lng}&format=json`;

    Http.fetchData(url)
      .then((response) => {
        var city = response.address.city;
        console.log(
          `2.1) The city located at latitude: ${lat} and longtitude: ${lng} is ${city}.`
        );
      })
      .catch((error) => alert(error));
  }

  /**
   * 2.
   * Gets the weather for a given city
   * */
  static getWeather(lat, lng) {
    let units = "metric";
    let lang = "en";
    const url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${weather_key}&units=${units}&lang=${lang}`;

    Http.fetchData(url)
      .then((response) => {
        const city = response.timezone.match(/\/(.*)/)[1];
        const weather = response.current.weather[0].description;
        console.log(`2.2) The weather for ${city} is ${weather}.`);
      })
      .catch((error) => alert(error));
  }

  /**
   * 3.
   * Gets the currency for a given city
   * */
  static getLocalCurrency(city) {
    const weather_url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_key}`;
    const currency_url = `https://api.apilayer.com/geo/country/capital/${city}`;

    const myHeaders = new Headers();
    myHeaders.append("apikey", "aqTmBtMFRvfs17uBgoWnqQscgPRCIO20");

    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    Promise.all([
      fetch(weather_url).then((res1) => res1.json()),
      fetch(currency_url, requestOptions).then((res2) => res2.json()),
    ])
      .then(([result1, result2]) => {
        const weather = result1.weather[0].description;
        const code = result2[0].currencies[0].code;
        const currency = result2[0].currencies[0].name;
        console.log(
          `2.3) The weather for ${city} is ${weather}, and its currency is ${code} i.e. ${currency}.`
        );
      })
      .catch((error) => console.log("error", error));
  }
}
//////////////////////////////////////////////////////

/**
 * 1.
 * Find and print in console the city located
 * at latitude/longtitude 51.5074 and 0.1278 accordingly
 *  */
Provider.findCity("51.5074", "0.1278");

/**
 * 2.
 * Print in console the weather for the city
 * located at lat/long = 51.5074 and 0.1278
 *  */
Provider.getWeather("51.5074", "0.1278");

/**
 * 3.
 * Print in console in one line
 * the weather and currency for a given city (London).
 *  */
Provider.getLocalCurrency("London");
