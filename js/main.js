function revealSite() {
    document.getElementById('siteReveal').style.top = "-100%";
    document.getElementById('about').style.height = "50px";
    document.getElementById('events').style.height = "50px";
    document.getElementById('people').style.height = "50px";
    document.getElementById('submit').style.height = "50px";
}

if (window.innerHeight < 400) {
    function openAbout() {
        about.style.height = "100%";
        events.style.height = "0";
        people.style.height = "0";
        submit.style.height = "0";

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
        about.style.height = "0";
        events.style.height = "100%";
        people.style.height = "0";
        submit.style.height = "0";

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
        about.style.height = "0";
        events.style.height = "0";
        people.style.height = "100%";
        submit.style.height = "0";

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
        about.style.height = "0";
        events.style.height = "0";
        people.style.height = "0";
        submit.style.height = "100%";

        about.style.color = "rgba(255, 255, 255, 0)";
        events.style.color = "rgba(255, 255, 255, 0)";
        people.style.color = "rgba(255, 255, 255, 0)";
        submit.style.color = "rgba(255, 255, 255, 1)";

        aboutBack.style.background = "#fff";
        eventsBack.style.background = "#fff";
        peopleBack.style.background = "#fff";
        submitBack.style.background = "#000";
    }

} else {
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

        random = Math.floor(Math.random()*16777215).toString(16);
        randomColor = "#" + random;
        document.getElementById('titlePage').style.backgroundColor = randomColor;
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

        random = Math.floor(Math.random()*16777215).toString(16);
        randomColor = "#" + random;
        document.getElementById('titlePage').style.backgroundColor = randomColor;

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

        random = Math.floor(Math.random()*16777215).toString(16);
        randomColor = "#" + random;
        document.getElementById('titlePage').style.backgroundColor = randomColor;

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

        random = Math.floor(Math.random()*16777215).toString(16);
        randomColor = "#" + random;
        document.getElementById('titlePage').style.backgroundColor = randomColor;

    }

}
