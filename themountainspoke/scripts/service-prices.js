var section = document.querySelector(".service-intro");


var requestURL = "https://webdeb13.github.io/themountainspoke/data/prices-index.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var servicePrices = request.response;
    populateSection(servicePrices);
}

function populateSection(jsonObj) {
    var data = jsonObj["prices"];

        //Tune-Ups JSON data
        document.getElementById('basic-tune').innerHTML = data[0].basicTune;
        document.getElementById('annual-tune').innerHTML = data[0].annualTune;
        document.getElementById('premium-tune').innerHTML = data[0].premiumTune;
        document.getElementById('overhaul').innerHTML = data[0].overhaul;
        document.getElementById('drive-train').innerHTML = data[0].drivetrainTune;

        //Accessry Installs
        document.getElementById('fender').innerHTML = data[1].fender;
        document.getElementById('rack').innerHTML = data[1].rack;
        document.getElementById('saddle').innerHTML = data[1].saddle;
        document.getElementById('cleat').innerHTML = data[1].cleat;
        document.getElementById('training').innerHTML = data[1].training;

        //Builds
        document.getElementById('assemble').innerHTML = data[2].assemble;
        document.getElementById('build-frame').innerHTML = data[2].buildFrame;
        document.getElementById('strip-frame').innerHTML = data[2].stripFrame;
        document.getElementById('front-wheel').innerHTML = data[2].frontWheel;
        document.getElementById('rear-wheel').innerHTML = data[2].rearWheel;

        //Brake
        document.getElementById('adjust').innerHTML = data[3].adjust;
        document.getElementById('bleed').innerHTML = data[3].bleed;
        document.getElementById('cable-install').innerHTML = data[3].cableInstall;
        document.getElementById('brake-install').innerHTML = data[3].brakeInstall;
        document.getElementById('pad-install').innerHTML = data[3].padInstall;
        document.getElementById('rotor-install').innerHTML = data[3].rotorInstall;

        //Wheel
        document.getElementById('wheel-build').innerHTML = data[4].wheelBuild;
        document.getElementById('spoke-replace').innerHTML = data[4].spokeReplace;
        document.getElementById('true-wheel').innerHTML = data[4].trueWheel;
        document.getElementById('tire-tube').innerHTML = data[4].tireTube;
        document.getElementById('slime').innerHTML = data[4].slime;
        document.getElementById('repair-inner').innerHTML = data[4].repairInner;
        document.getElementById('install-inner').innerHTML = data[4].installInner;

        //Drivetrain
        document.getElementById('bbadjust').innerHTML = data[5].bbAdjust;
        document.getElementById('bbinstall').innerHTML = data[5].bbInstall;
        document.getElementById('bboverhaul').innerHTML = data[5].bbOverhaul;
        document.getElementById('cassette').innerHTML = data[5].cassette;
        document.getElementById('chain').innerHTML = data[5].chain;
        document.getElementById('crankset').innerHTML = data[5].crankset;
        document.getElementById('derailleur-cable').innerHTML = data[5].derailleurCable;
        document.getElementById('derailleur-adjust').innerHTML = data[5].derailleurAdjust;

        //Fork $ Headset
        document.getElementById('fork').innerHTML = data[6].fork;
        document.getElementById('headset-adjust').innerHTML = data[6].headsetAdjust;
        document.getElementById('headset-install').innerHTML = data[6].headsetInstall;
        document.getElementById('headset-overhaul').innerHTML = data[6].headsetOverhaul;

        //Hub & Pedal
        document.getElementById('hub-adjust').innerHTML = data[7].hubAdjust;
        document.getElementById('hub-front').innerHTML = data[7].hubFront;
        document.getElementById('hub-rear').innerHTML = data[7].hubRear;
        document.getElementById('pedals-install').innerHTML = data[7].pedalsInstall;
        document.getElementById('pedals-cleats').innerHTML = data[7].pedalsCleats;
        document.getElementById('toe-clip').innerHTML = data[7].toeClip;

}


