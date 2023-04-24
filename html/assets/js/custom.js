/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: Hosto
Version: 1.0.0
-------------------------------------------------------------------*/
(function ($) {
    "use strict";

    // Ready Function
    jQuery(document).ready(function ($) {
        var $this = $(window);

         // Fixed Header
         $(window).scroll(function(){
            if ($(window).scrollTop() >= 200) {
                $('.header').addClass('fixed');
            }
            else {
                $('.header').removeClass('fixed');
            }
        });


        // Home page slider js
        $('.ht_home_slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        // Fancybox Video Popup
        Fancybox.bind("[data-fancybox]", {
            // Your custom options
        });


        // filter start
        $('.filters ul li').click(function () {
            // $('.filters ul li').removeClass('active');
            // $(this).addClass('active');
            $('.filters ul li').removeClass('after-click');
            $(this).addClass('after-click');
            var data = $(this).attr('data-filter');
            $grid.isotope({
                filter: data,
            });
        });

        var $grid = $('.grid').isotope({
            itemSelector: '.all',
            percentPosition: true,
            masonry: {
                columnWidth: '.all',
            },
        });

        // filter end

        // testimonial

        $(".slider").slick({
            arrows: true,
            dots: false,
            slidesToShow: 3,
            autoplay: true ,
            speed: 1000,
            autoplaySpeed: 1000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        // testimonial end



    });
})();

