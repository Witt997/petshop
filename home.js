function HomeIndex () {
 /* Properties */
 const heightFromTop = 300;
 /* Methods */
 this.initialiseScrollToTopButton = function () {
 /* Window Scroll Event Handler */
 $(window).scroll(function () {
    /* Show or Hide Scroll to Top Button based on scroll distance */
    var verticalHeight = $(this).scrollTop();
    if (verticalHeight > heightFromTop) {
        $("#scrollInizioPag").fadeIn();
    } else {
        $("#scrollInizioPag").fadeOut();
    }
 });
 /* Scroll to Top Click Event Handler */
 $("#scrollInizioPag").click(function () {
    $("html, body").animate({ scrollTop: 0}, "slow");
 });
 }
}

$(document).ready(function () {
    /* Instantiate new Home class */
    app.homeIndex = new HomeIndex();
    /* Initialize the Scroll to Top Button */
    app.homeIndex.initialiseScrollToTopButton();
});
