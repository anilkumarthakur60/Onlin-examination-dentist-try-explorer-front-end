//new dropdown menu
function btnToggle() {
    document.getElementById("Dropdown").classList.toggle("show");
}

// Prevents menu from closing when clicked inside 
// document.getElementById("Dropdown").addEventListener('click', function(event) {
//     alert("click outside");
//     event.stopPropagation();
// });

// Closes the menu in the event of outside click 
window.onclick = function(event) {
    if (!event.target.matches('.dropbutton')) {

        var dropdowns =
            document.getElementsByClassName("dropdownmenu-content");

        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }

    }
}



// end of search js



jQuery(window).scroll(function() {

    // --------------------------- Scroll To Top ------------------------ //
    if (jQuery(this).scrollTop() > 100) {
        jQuery('.to-top').css({ bottom: '0px' });
    } else {
        jQuery('.to-top').css({ bottom: '-150px' });
    }

});


jQuery(document).ready(function($) {

    // --------------------------- Custom Scroll Style ------------------------ // 
    (function() {
        jQuery(window).load(function() {
            if (jQuery(window).width() < 650) {
                if (jQuery(".top-bar .navigation").length) {
                    jQuery(".top-bar .navigation").mCustomScrollbar({
                        theme: "dark-2",
                        scrollButtons: {
                            enable: false
                        }
                    });
                }
                if (jQuery(".shop_table").length) {
                    jQuery(".shop_table").mCustomScrollbar({
                        axis: "x",
                        theme: "dark-2",
                        scrollButtons: {
                            enable: false
                        }
                    });
                }
            }

            if (jQuery(".scroll-div").length) {
                jQuery(".scroll-div").mCustomScrollbar({
                    theme: "dark-2",
                    scrollButtons: {
                        enable: false
                    }
                });
            }
        });
    }());

    // --------------------------- Remove Active Class ------------------------ // 
    (function() {
        jQuery(document).click(function(e) {
            jQuery(".header-wrap .navigation").removeClass('off-canvas');
            jQuery("body").removeClass('off-canvas-body');
        });
    }());

    // --------------------------- Header Off Canvas Add ------------------------ //
    (function() {
        jQuery(".nav-trigger").on("click", function(e) {
            e.stopPropagation();
            jQuery(".header-wrap .navigation").toggleClass("off-canvas");
            jQuery("body").toggleClass("off-canvas-body");
        });
    }());

    // --------------------------- Custom Scroll Style ------------------------ // 
    (function() {
        jQuery(window).load(function() {
            if (jQuery(window).width() < 767) {
                if (jQuery(".header-wrap .navigation").length) {
                    jQuery(".header-wrap .navigation").mCustomScrollbar({
                        theme: "light",
                        scrollButtons: {
                            enable: false
                        }
                    });
                }
            }
        });
    }());

    // --------------------------- Scroll To Top Animate ------------------------ //
    (function() {
        jQuery('.to-top').click(function() {
            jQuery('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
    }());

    // --------------------------- Sticky Header ------------------------ //
    (function() {
        if (jQuery(window).width() > 760) {
            jQuery(".header-wrap").sticky({ topSpacing: 0 });
        }
    }());
});


jQuery(window).resize(function() {
    updater();
});


// js file




// Smooth scrolling
$(function() {

    $("a.smooth-scroll").click(function(event) {

        event.preventDefault();

        // get/return id 
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});












//back top top button

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});