

$(document).ready(function() {

    //responsive navbar
    $(".navbar-burger").click(function () {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });



    //dropdown
    $('#drop-btn').click(function () {
                $('#sort-dropdown').toggleClass('is-active');

                $('.dropdown-item').click(function () {
                    $('#sort-dropdown').removeClass('is-active');
                        })
            });


    //comment button
    $('.write-comment-block').hide();

    $('#commentBtn').click(function () {
        $('.write-comment-block').show();
    });


    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });


});