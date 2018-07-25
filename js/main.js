function expandRightPanel() {

    if ($(window).width() >= 1024) {
        $( ".content-right__panel" ).toggle("slide", "slow"); //left -> right
    } else {
        $( ".content-right__panel" ).slideToggle('slow'); // top -> bottom

        if (!$(".expand-arrow").hasClass("rotate")) {
            $('html, body').animate({
                scrollTop: $("#content-right").offset().top
            }, 1000);
        }
    }
    $(".expand-arrow").toggleClass("rotate");
}