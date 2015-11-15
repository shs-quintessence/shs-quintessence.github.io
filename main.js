function revealSite() {
    document.getElementById('siteReveal').style.top = "-100%";
    document.getElementById('about').style.height = "50px";
    document.getElementById('events').style.height = "50px";
    document.getElementById('people').style.height = "50px";
    document.getElementById('submit').style.height = "50px";
}

var about;
var events;
var people;
var submit;

var aboutBack;
var eventsBack;
var peopleBack;
var submitBack;

function define() {
    about = document.getElementById('aboutPage');
    events = document.getElementById('eventsPage');
    people = document.getElementById('peoplePage');
    submit = document.getElementById('submitPage');

    aboutBack = document.getElementById('navbar-about');
    eventsBack = document.getElementById('navbar-events');
    peopleBack = document.getElementById('navbar-people');
    submitBack = document.getElementById('navbar-submit');
}

onload = define;

function openAbout() {
    about.style.width = "calc(100% - 100px)";
    events.style.width = "0";
    people.style.width = "0";
    submit.style.width = "0";

    about.style.color = "rgba(255, 255, 255, 1)";
    events.style.color = "rgba(255, 255, 255, 0)";
    people.style.color = "rgba(255, 255, 255, 0)";
    submit.style.color = "rgba(255, 255, 255, 0)";

    aboutBack.style.background = "#000";
    eventsBack.style.background = "#fff";
    peopleBack.style.background = "#fff";
    submitBack.style.background = "#fff";
}

function openEvents() {
    about.style.width = "0";
    events.style.width = "calc(100% - 100px)";
    people.style.width = "0";
    submit.style.width = "0";

    about.style.color = "rgba(255, 255, 255, 0)";
    events.style.color = "rgba(255, 255, 255, 1)";
    people.style.color = "rgba(255, 255, 255, 0)";
    submit.style.color = "rgba(255, 255, 255, 0)";

    aboutBack.style.background = "#fff";
    eventsBack.style.background = "#000";
    peopleBack.style.background = "#fff";
    submitBack.style.background = "#fff";
}

function openPeople() {
    about.style.width = "0";
    events.style.width = "0";
    people.style.width = "calc(100% - 100px)";
    submit.style.width = "0";

    about.style.color = "rgba(255, 255, 255, 0)";
    events.style.color = "rgba(255, 255, 255, 0)";
    people.style.color = "rgba(255, 255, 255, 1)";
    submit.style.color = "rgba(255, 255, 255, 0)";

    aboutBack.style.background = "#fff";
    eventsBack.style.background = "#fff";
    peopleBack.style.background = "#000";
    submitBack.style.background = "#fff";
}

function openSubmit() {
    about.style.width = "0";
    events.style.width = "0";
    people.style.width = "0";
    submit.style.width = "calc(100% - 100px)";

    about.style.color = "rgba(255, 255, 255, 0)";
    events.style.color = "rgba(255, 255, 255, 0)";
    people.style.color = "rgba(255, 255, 255, 0)";
    submit.style.color = "rgba(255, 255, 255, 1)";

    aboutBack.style.background = "#fff";
    eventsBack.style.background = "#fff";
    peopleBack.style.background = "#fff";
    submitBack.style.background = "#000";
}
