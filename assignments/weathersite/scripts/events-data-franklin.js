var section = document.querySelector("#eventFrank");


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
        if (data[i].name == "Franklin"){


            var myTownArticle = document.createElement("article");
            var myHeading = document.createElement("h3");
            var myEvents = document.createElement("ul");
            var mydate1 = document.createElement("li");
            var mydate2 = document.createElement("li");
            var mydate3 = document.createElement("li");

            myHeading.textContent = "Upcoming Events";
            myEvents.textContent = "Please join us: ";
            mydate1.textContent = data[i].events[0];
            mydate2.textContent = data[i].events[1];
            mydate3.textContent = data[i].events[2];



            myTownArticle.appendChild(myHeading);
            myTownArticle.appendChild(myEvents);
            myTownArticle.appendChild(mydate1);
            myTownArticle.appendChild(mydate2);
            myTownArticle.appendChild(mydate3);
            section.appendChild(myTownArticle);

        }
    }
}




