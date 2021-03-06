var weatherObject = new XMLHttpRequest();

weatherObject.open("GET", "http://api.wunderground.com/api/3fc4151c5f15ec4b/conditions/forecast/q/MN/Franklin.json", true);

weatherObject.send();

weatherObject.onload = function (){

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById("currentConditions").innerHTML = weatherInfo.forecast.simpleforecast.forecastday["0"].conditions;
    document.getElementById("highTemp").innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById("lowTemp").innerHTML = weatherInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById("rainInches").innerHTML = weatherInfo.current_observation.precip_today_in;
    document.getElementById("windSpeed").innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById("outputWindChill").innerHTML = weatherInfo.current_observation.windchill_f;
    document.getElementById("wu-logo").src = weatherInfo.current_observation.image.url;
    document.getElementById("wu-icon").src = weatherInfo.current_observation.icon_url;


}
