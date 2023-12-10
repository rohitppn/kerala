(function($) {

    "use strict";

    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($('.preloader').length) {
            $('body').addClass('page-loaded');
            $('.preloader').delay(300).fadeOut(0);
        }
    }

    //Update Header Style and Scroll to Top
    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var siteHeaderHeight = $('.main-header').height();
            var scrollLink = $('.scroll-to-top');
            var sticky_header = $('.main-header .sticky-header');
            if (windowpos > siteHeaderHeight) {
                siteHeader.addClass('fixed-header');
                sticky_header.addClass("animated slideInDown");
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('fixed-header');
                sticky_header.removeClass("animated slideInDown");
                scrollLink.fadeOut(300);
            }
        }
    }

    headerStyle();

    //Submenu Dropdown Toggle
    if ($('.main-header li.dropdown ul').length) {
        $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>');

    }

    //Mobile Nav Hide Show
    if ($('.mobile-menu').length) {

        $('.mobile-menu .menu-box').mCustomScrollbar();

        var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
        $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
        $('.sticky-header .main-menu').append(mobileMenuContent);

        //Dropdown Button
        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
            $(this).toggleClass('open');
            $(this).prev('ul').slideToggle(500);
        });
        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function() {
            $('body').addClass('mobile-menu-visible');
        });

        //Menu Toggle Btn
        $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
            $('body').removeClass('mobile-menu-visible');
        });

        $(document).keydown(function(e) {
            if (e.keyCode === 27) {
                $('body').removeClass('mobile-menu-visible');
            }
        });
    }

    //Search Popup
    if ($('#search-popup').length) {

        //Show Popup
        $('.search-toggler').on('click', function() {
            $('#search-popup').addClass('popup-visible');
            $('body').addClass('search-visible');
        });
        $(document).keydown(function(e) {
            if (e.keyCode === 27) {
                $('#search-popup').removeClass('popup-visible');
                $('body').removeClass('search-visible');
            }
        });
        //Hide Popup
        $('.close-search,.search-popup .overlay-layer').on('click', function() {
            $('#search-popup').removeClass('popup-visible');
            $('body').removeClass('search-visible');
        });
    }


    //Main Slider / Banner Carousel
    if ($('.banner-carousel').length) {
        $('.banner-carousel').owlCarousel({
            loop: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            margin: 0,
            nav: true,
            smartSpeed: 700,
            autoplay: 8000,
            autoplayTimeout: 8000,
            navText: ['<span class="icon flaticon-triangle"></span>', '<span class="icon flaticon-next"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1
                }
            }
        });
    }

    // Sponsors Carousel
    if ($('.sponsors-carousel').length) {
        $('.sponsors-carousel').owlCarousel({
            loop: true,
            margin: 40,
            nav: true,
            smartSpeed: 500,
            autoplay: 4000,
            navText: ['<span class="icon flaticon-triangle"></span>', '<span class="icon flaticon-next"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                800: {
                    items: 4
                },
                1024: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
    }

    // Featured Games Slider
    if ($('.featured-games-section .text-carousel').length && $('.featured-games-section .thumb-carousel').length) {

        var $sync1 = $(".featured-games-section .text-carousel"),
            $sync2 = $(".featured-games-section .thumb-carousel"),
            flag = false,
            duration = 500;

        $sync1
            .owlCarousel({
                loop: true,
                items: 1,
                margin: 100,
                nav: true,
                navText: ['<span class="icon flaticon-triangle"></span>', '<span class="icon flaticon-next"></span>'],
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000,
                smartSpeed: 500
            })
            .on('changed.owl.carousel', function(e) {
                if (!flag) {
                    flag = false;
                    $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });

        $sync2
            .owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                nav: false,
                navText: ['<span class="icon flaticon-triangle"></span>', '<span class="icon flaticon-next"></span>'],
                dots: false,
                center: true,
                autoplay: true,
                smartSpeed: 500,
                autoplayTimeout: 5000,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1024: {
                        items: 1
                    }
                }
            })
            .on('click', '.owl-item', function() {
                $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
            })
            .on('changed.owl.carousel', function(e) {
                if (!flag) {
                    flag = true;
                    $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });

    }



    // Testimonial Slider
    if ($('.testimonial-slider .text-carousel').length && $('.testimonial-slider .thumb-carousel').length) {

        var $sync3 = $(".testimonial-slider .text-carousel"),
            $sync4 = $(".testimonial-slider .thumb-carousel"),
            flag = false,
            duration = 500;

        $sync3
            .owlCarousel({
                loop: true,
                animateOut: 'fadeOutRight',
                animateIn: 'fadeInLeft',
                items: 1,
                margin: 10,
                nav: true,
                navText: ['<span class="icon flaticon-triangle"></span>', '<span class="icon flaticon-next"></span>'],
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000
            })
            .on('changed.owl.carousel', function(e) {
                if (!flag) {
                    flag = false;
                    $sync4.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });

        $sync4
            .owlCarousel({
                loop: true,
                margin: 20,
                items: 1,
                nav: false,
                navText: ['<span class="icon flaticon-triangle"></span>', '<span class="icon flaticon-next"></span>'],
                dots: false,
                center: true,
                autoplay: true,
                autoplayTimeout: 5000,
                responsive: {
                    0: {
                        items: 3
                    },
                    600: {
                        items: 3
                    },
                    768: {
                        items: 3
                    },
                    1024: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
            })
            .on('click', '.owl-item', function() {
                $sync3.trigger('to.owl.carousel', [$(this).index(), duration, true]);
            })
            .on('changed.owl.carousel', function(e) {
                if (!flag) {
                    flag = true;
                    $sync3.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });

    }


    //News Carousel
    if ($('.news-carousel').length) {
        $('.news-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="icon flaticon-triangle"></span>', '<span class="icon flaticon-next"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 2
                },
                1200: {
                    items: 2
                },
                1366: {
                    items: 3
                }
            }
        });
    }

    //Games Carousel
    if ($('.games-carousel').length) {
        $('.games-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="icon flaticon-triangle"></span>', '<span class="icon flaticon-next"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1024: {
                    items: 2
                },
                1366: {
                    items: 2
                },
                1500: {
                    items: 3
                }
            }
        });
    }

    //Image Carousel
    if ($('.image-carousel').length) {
        $('.image-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 700,
            autoplay: 5000,
            autoplayTimeout: 5000,
            navText: ['<span class="icon fa fa-caret-left"></span>', '<span class="icon fa fa-caret-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1
                }
            }
        });
    }

    //Game Imaegs Carousel
    if ($('.game-images-carousel').length) {
        $('.game-images-carousel').owlCarousel({
            loop: true,
            margin: 15,
            nav: true,
            smartSpeed: 700,
            autoplay: 5000,
            autoplayTimeout: 5000,
            navText: ['<span class="icon fa fa-caret-left"></span>', '<span class="icon fa fa-caret-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });
    }

    //Masonry Gallery
    function enableMasonry() {
        if ($('.masonry-container').length) {

            var winDow = $(window);
            // Needed variables
            var $container = $('.masonry-container');

            $container.isotope({
                itemSelector: '.masonry-item',
                masonry: {
                    columnWidth: '.masonry-item'
                },
                animationOptions: {
                    duration: 500,
                    easing: 'linear'
                }
            });
        }
    }

    enableMasonry();

    //Custom Seclect Box
    if ($('.custom-select-box').length) {
        $('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
    }

    //Fact Counter + Text Count
    if ($('.count-box').length) {
        $('.count-box').appear(function() {

            var $t = $(this),
                n = $t.find(".count-text").attr("data-stop"),
                r = parseInt($t.find(".count-text").attr("data-speed"), 10);

            if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function() {
                        $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $t.find(".count-text").text(this.countNum);
                    }
                });
            }

        }, {
            accY: 0
        });
    }

    //LightBox / Fancybox
    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
            openEffect: 'fade',
            closeEffect: 'fade',
            helpers: {
                media: {}
            }
        });
    }

    //Contact Form Validation
    if ($('#contact-form').length) {
        $('#contact-form').validate({
            rules: {
                username: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true
                },
                subject: {
                    required: true
                },
                message: {
                    required: true
                }
            }
        });
    }

    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1500);

        });
    }

    // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: false, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }


    /* ==========================================================================
       When document is Scrollig, do
       ========================================================================== */

    $(window).on('scroll', function() {
        headerStyle();
    });

    /* ==========================================================================
       When document is loading, do
       ========================================================================== */

    $(window).on('load', function() {
        handlePreloader();
        enableMasonry();
    });

    /* ==========================================================================
       When document is Resizing, do
       ========================================================================== */

    $(window).on('resize', function() {
        enableMasonry();
    });

})(window.jQuery);