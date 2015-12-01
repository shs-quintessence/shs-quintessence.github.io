function revealSite() {
    document.getElementById('siteReveal').style.top = "-100%";
    document.getElementById('about').style.height = "50px";
    document.getElementById('events').style.height = "50px";
    document.getElementById('people').style.height = "50px";
    document.getElementById('submit').style.height = "50px";
}

function openAbout() {

    if (aboutSelected === 0) {
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

        aboutSelected = 1;
        eventsSelected = 0;
        peopleSelected = 0;
        submitSelected = 0;

        window.scrollTo(0, 0);

    } else {

        about.style.width = "0";
        about.style.color = "rgba(255, 255, 255, 0)";
        aboutBack.style.background = "#fff";

        random = Math.floor(Math.random()*16777215).toString(16);
        randomColor = "#" + random;
        document.getElementById('titlePage').style.backgroundColor = randomColor;

        aboutSelected = 0;

    }

}

function openEvents() {

    if (eventsSelected === 0) {
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

        aboutSelected = 0;
        eventsSelected = 1;
        peopleSelected = 0;
        submitSelected = 0;

        window.scrollTo(0, 0);

    } else {

        events.style.width = "0";
        events.style.color = "rgba(255, 255, 255, 0)";
        eventsBack.style.background = "#fff";

        random = Math.floor(Math.random()*16777215).toString(16);
        randomColor = "#" + random;
        document.getElementById('titlePage').style.backgroundColor = randomColor;

        eventsSelected = 0;

    }

}

function openPeople() {

    if (peopleSelected === 0) {
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

        aboutSelected = 0;
        eventsSelected = 0;
        peopleSelected = 1;
        submitSelected = 0;

        window.scrollTo(0, 0);

    } else {

        people.style.width = "0";
        people.style.color = "rgba(255, 255, 255, 0)";
        peopleBack.style.background = "#fff";

        random = Math.floor(Math.random()*16777215).toString(16);
        randomColor = "#" + random;
        document.getElementById('titlePage').style.backgroundColor = randomColor;

        peopleSelected = 0;

    }

}

function openSubmit() {

    if (submitSelected === 0) {
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

        aboutSelected = 0;
        eventsSelected = 0;
        peopleSelected = 0;
        submitSelected = 1;

        window.scrollTo(0, 0);

    } else {

        submit.style.width = "0";
        submit.style.color = "rgba(255, 255, 255, 0)";
        submitBack.style.background = "#fff";

        random = Math.floor(Math.random()*16777215).toString(16);
        randomColor = "#" + random;
        document.getElementById('titlePage').style.backgroundColor = randomColor;

        submitSelected = 0;

    }

}

function closePage() {
    about.style.width = "0";
    events.style.width = "0";
    people.style.width = "0";
    submit.style.width = "0";

    about.style.color = "rgba(255, 255, 255, 0)";
    events.style.color = "rgba(255, 255, 255, 0)";
    people.style.color = "rgba(255, 255, 255, 0)";
    submit.style.color = "rgba(255, 255, 255, 0)";

    aboutBack.style.background = "#fff";
    eventsBack.style.background = "#fff";
    peopleBack.style.background = "#fff";
    submitBack.style.background = "#fff";

    random = Math.floor(Math.random()*16777215).toString(16);
    randomColor = "#" + random;
    document.getElementById('titlePage').style.backgroundColor = randomColor;

    aboutSelected = 0;
    eventsSelected = 0;
    peopleSelected = 0;
    submitSelected = 0;

}
