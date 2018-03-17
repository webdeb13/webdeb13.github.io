var now = new Date();
var year = now.getYear();
    if(year < 1000){
        year+=1900
    } // learned from https://www.youtube.com/watch?v=HyhVjHGb19k&t=958s
var day = now.getDay();
var month = now.getMonth();
var dayOfMonth = now.getDate();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var display = weekday[day] + ", " + dayOfMonth + " " + monthList[month] + " " + year;
document.getElementById("currentDate").innerHTML = display;