window.onscroll = function() {navScroll(), headerScroll()};

function navScroll() {
    var offsetHeight = document.getElementById('container').offsetHeight;
    var navFadeHeight = offsetHeight / 4;
    var nav = document.getElementById('nav');

    if (document.body.scrollTop || document.documentElement.scrollTop > navFadeHeight) {
        nav.style.background = "rgba(0, 0, 0, 1)";
    } else {
        nav.style.background = "rgba(0, 0, 0, 0)";
    }
}

function headerScroll() {

}
