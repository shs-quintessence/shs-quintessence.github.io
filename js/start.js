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

var surveyRand;
var surveyShowing;
var surveyTaken;

var survey;
var inputInForm;
var inputCounter;

function define() {
    about = document.getElementById('aboutPage');
    events = document.getElementById('eventsPage');
    people = document.getElementById('peoplePage');
    submit = document.getElementById('submitPage');

    aboutBack = document.getElementById('navbar-about');
    eventsBack = document.getElementById('navbar-events');
    peopleBack = document.getElementById('navbar-people');
    submitBack = document.getElementById('navbar-submit');

    random = Math.floor(Math.random() * 16777215).toString(16);
    randomColor = "#" + random;
    document.getElementById('titlePage').style.backgroundColor = randomColor;

    aboutSelected = 0;
    eventsSelected = 0;
    peopleSelected = 0;
    submitSelected = 0;

    surveyRand = Math.floor(Math.random() * 10) + 1;

    if (surveyRand <= 6) {
        document.getElementById('surveyNotice').style.display = "block";
        surveyShowing = 1;
    }else {
        surveyShowing = 0;
    }

    surveyTaken = 0;

    survey = document.getElementById('survey');
    inputInForm = [document.getElementById('name'), document.getElementById('email'), document.getElementById('next')];
    inputText = [document.getElementById('nameText'), document.getElementById('emailText'), document.getElementById('nextText')];
    inputCounter = 0;

}

onload = define;
