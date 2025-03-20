$(document).ready(function () {
    // Scroll Animation for .animation .anm_mod
    $(window).scroll(function () {
        $(".animation .anm_mod").each(function () {
            const position = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();

            if (scroll > position - windowHeight) {
                $(this).addClass("active");
            }
            if (scroll < 100) {
                $(this).removeClass("active");
            }
        });
    });

    // Smooth Scrolling for Navigation Links
    $('a[href^="#"]').on("click", function (event) {
        event.preventDefault();
        const target = $(this.getAttribute("href"));
        if (target.length) {
            $("html, body").animate({ scrollTop: target.offset().top - 60 }, 800); // Adjusted scroll position
        }
    });

    // Image Hover Effect
    $(".hoverImage").each(function () {
        const imageElement = $(this);

        imageElement.on("mousemove", function (e) {
            let rect = imageElement[0].getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            let dx = (x - rect.width / 2) / (rect.width / 2);
            let dy = (y - rect.height / 2) / (rect.height / 2);

            imageElement.css("transform", `perspective(500px) rotateY(${dx * 5}deg) rotateX(${-dy * 5}deg)`);
        });

        imageElement.on("mouseleave", function () {
            imageElement.css("transform", "");
        });
    });
});


$(document).ready(function () {
    // Toggle Mobile Menu
    $(".hamburger").click(function () {
        $(this).toggleClass("active");
        $(".nav-links").toggleClass("nav-active");
    });

    // Close Menu When Clicking a Link
    $(".nav-links a").click(function () {
        $(".nav-links").removeClass("nav-active");
        $(".hamburger").removeClass("active");
    });

    // Smooth Scrolling for Navigation Links
    $('a[href^="#"]').on("click", function (event) {
        event.preventDefault();
        const target = $(this.getAttribute("href"));
        if (target.length) {
            $("html, body").animate({ scrollTop: target.offset().top - 60 }, 800);
        }
    });
});
