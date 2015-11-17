var about;
var events;
var people;
var submit;

var aboutBack;
var eventsBack;
var peopleBack;
var submitBack;

var random;

var aboutSelected;
var eventsSelected;
var peopleSelected;
var submitSelected;

function define() {
    about = document.getElementById('aboutPage');
    events = document.getElementById('eventsPage');
    people = document.getElementById('peoplePage');
    submit = document.getElementById('submitPage');

    aboutBack = document.getElementById('navbar-about');
    eventsBack = document.getElementById('navbar-events');
    peopleBack = document.getElementById('navbar-people');
    submitBack = document.getElementById('navbar-submit');

    if (window.innerHeight < 200 || window.innerWidth < 360) {

        document.getElementById('body').style.display = "none";
        alert("please try using a larger screen")

    }else if (window.innerHeight < 400 && window.innerWidth < 400) {

        document.getElementById('body').style.display = "none";
        alert("please try using a larger screen")

    }else if (window.innerWidth < 800 || window.innerHeight < 700) {

        setTimeout(revealSite, 3000);

    }

    random = Math.floor(Math.random()*16777215).toString(16);
    randomColor = "#" + random;
    document.getElementById('titlePage').style.backgroundColor = randomColor;

    aboutSelected = 0;
    eventsSelected = 0;
    peopleSelected = 0;
    submitSelected = 0;

}

onload = define;
