/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');

var card = new UI.Card({
  title:'Weather',
  subtitle:'Fetching...'
});

card.show();

var ajax = require('ajax');

var cityName = 'Boulder';
var URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName;

ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    console.log('Successfully fetched weather data!');
    
    var location = data.name;
    var temperature = Math.round(data.main.temp - 273.15) + 'C';
    
    var description = data.weather[0].description;
    description = description.charAt(0).toUpperCase() + description.substring(1);
    
    card.subtitle(location + ', ' + temperature);
    card.body(description);
  },
  function(error) {
    console.log('Failed fetching weather data: ' + error);
  }
);