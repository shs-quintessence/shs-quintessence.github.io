setTimeout(function(){
    $( "body" ).addClass( "loaded" )
    $(this).scrollTop(0);
}, 5000);

setTimeout(function(){
    $( "body" ).addClass( "filled" )
}, 4900);

window.onscroll = function() {navScroll()};

function navScroll() {
    var offsetHeight = document.getElementById('container').offsetHeight;
    var navFadeHeight = offsetHeight / 4;
    var nav = document.getElementById('nav');

    if (document.body.scrollTop || document.documentElement.scrollTop > navFadeHeight) {
        nav.style.background = 'rgba(0, 0, 0, 1)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0)';
    }
}

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 81
      }, 900);
        return false;
      }
    }
  });
});

var mobileNav;
var clickOut;

function mobileNavOpen() {
    mobileNav = document.getElementById('navSide');
    clickOut = document.getElementById('cover');

    mobileNav.style.right = "0";
    mobileNav.style.opacity = "1";
    clickOut.style.opacity = '0.5';
    clickOut.style.top = '0';
}

function mobileNavClose() {
    mobileNav.style.right = "-100%";
    mobileNav.style.opacity = "0";
    clickOut.style.opacity = '0';
    clickOut.style.top = '-100%';
}

var screenWidth = screen.width;

while (screenWidth < 500) {
    alert('issues on mobile browsing');
}
