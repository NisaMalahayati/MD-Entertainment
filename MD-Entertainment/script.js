// untuk buka toggle menu
$(document).ready(function () {
    $("#navToggle").click(function () {
        $("#navbarNav").toggleClass("show");
        $(this).toggleClass("active");
    });

    // Klik di luar menu buat nutup
    $(document).click(function (event) {
        if (!$(event.target).closest("#navToggle, #navbarNav").length) {
            $("#navbarNav").removeClass("show");
            $("#navToggle").removeClass("active");
        }
    });
});

//hover animasi for solo new release
$(document).ready(function() {
    let $container = $('.album-container');
    let $cards = $container.children().clone(); // Clone semua elemen anak

    $container.append($cards); // Tambahin hasil clone ke dalam container
});

//gallery blackpink 
$(document).ready(function() {
    function revealOnScroll() {
        $(".gallery-item").each(function() {
            let windowHeight = $(window).height();
            let elementTop = $(this).offset().top;
            let scrollTop = $(window).scrollTop();

            if (elementTop < scrollTop + windowHeight - 100) {
                $(this).addClass("show");
            } else {
                $(this).removeClass("show"); // Biar animasi bisa berulang
            }
        });
    }

    $(window).on("scroll", revealOnScroll);
});


