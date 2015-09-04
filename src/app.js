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