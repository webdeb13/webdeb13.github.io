

var high = parseFloat(document.getElementById("highTemp").innerHTML);
var low = parseFloat(document.getElementById("lowTemp").innerHTML);
var speed = parseFloat(document.getElementById("windSpeed").innerHTML);
var avgTemp = (high+low)/2;

var base = Math.pow(speed, .16);
var formula = 35.74 + (0.6215 * avgTemp) - (35.75 * base) + (0.4275 * avgTemp) * base;
var equation = Math.round(formula);

document.getElementById("outputWindChill").innerHTML = equation + "&deg;F";




