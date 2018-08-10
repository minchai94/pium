import './main.scss';

function makeImageUrl(hours){
    var url;
    if(hours>=5 && hours<=12){
        url = "";
    } else if(hours>=12 && hours<=16){
        url = "";
    } else if(hours>=16 && hours<=21){
        url = "";
    } else if(hours>=21 && hours<=24){
        url = "";
    }
    url="./img/blupunch.jpg";
    return url;
}

function makeGreeting(hours){
    var greeting;
    if(hours>=5 && hours<=12){
        greeting = "Good Morning";
    } else if(hours>=12 && hours<=17){
        greeting = "Good Afternoon";
    } else if(hours>=17 && hours<=21){
        greeting = "Good Evening";
    } else if(hours>=21 && hours<=24){
        greeting = "Good Night";
    }
    // console.log(greeting);
    return greeting;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var greeting = makeGreeting(h);

    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    document.getElementById('Greeting').innerHTML =
    greeting + "<br> Hailey";
    // document.getElementById('img').style.backgroundImage = require(url);
    
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i;};  // add zero in front of numbers < 10
    return i;
}

function setTimeNow(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    return h*3600 + m*60 +s;
}

var timeNow = setTimeNow();

$("#slider").roundSlider({
    sliderType: "min-range",
    circleShape: "custom-quarter",
    min: 0,
    max: 86400,
    value: timeNow,
    startAngle: 45,
    editableTooltip: false,
    radius: 300,
    width: 20,
    handleShape: "dot",
    showTooltip: false,
});

$("#slider").on("change", function (e) {
    console.log(e);
    console.log(e.value);
    timeNow = e.value;
    displayTime(timeNow);
});

function displayTime(time){
    var h = Math.floor(timeNow / 3600);
    var m = Math.floor(timeNow % 3600 / 60);
    var s = Math.floor(timeNow % 3600 % 60);
    console.log(h, m, s);
    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s;

}

displayTime(timeNow);