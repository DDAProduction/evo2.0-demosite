
//responsive navbar
$(document).ready(function() {


    $(".navbar-burger").click(function() {


        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
});

//sticky navbar
var theNavigation = $(".navbar");
stuck = "is-fixed-top";
searchbar = $("#searchbar");
theHeader = $('.hero').height();
theText = $('p,title');


$(window).scroll(function () {
    if ($(this).scrollTop() > theHeader) {
        theNavigation.css("background", "yellow");
        theNavigation.addClass(stuck);
        searchbar.css("visibility", "visible");
        theText.text("NAVBAR IS STUCK").fadeIn(2000);

    } else {
        theNavigation.css("background", "white");
        theNavigation.removeClass(stuck);
        searchbar.css("visibility", "hidden");
        theText.text("NAVBAR").fadeIn(2000);
    }
});