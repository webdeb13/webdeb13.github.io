var section = document.querySelector("#dataStats");


var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var weatherData = request.response;
    populateSection(weatherData);
}

function populateSection(jsonObj) {
  var data = jsonObj["towns"];

    for (var i = 0; i < data.length; i++){
        if (data[i].name == "Franklin" || data[i].name == "Springfield" || data[i].name == "Greenville" ){
            //document.getElementById('town').innerHTML = data[i].town;

            var myTownArticle = document.createElement("article");
            var myName = document.createElement("h1");
            var myMotto = document.createElement("p");
            var myYear = document.createElement("p");
            var myPopulation = document.createElement("p");
            var myAnnualRainfall = document.createElement("p");

            myName.textContent = data[i].name;
            myMotto.textContent = data[i].motto;
            myYear.textContent = "Year Founded: " + data[i].yearFounded;
            myPopulation.textContent = "Population: " + data[i].currentPopulation;
            myAnnualRainfall.textContent = "Average Rainfall: " + data[i].averageRainfall + " Inches";

            myTownArticle.appendChild(myName);
            myTownArticle.appendChild(myMotto);
            myTownArticle.appendChild(myYear);
            myTownArticle.appendChild(myPopulation);
            myTownArticle.appendChild(myAnnualRainfall);
            section.appendChild(myTownArticle);

        }
    }
}
