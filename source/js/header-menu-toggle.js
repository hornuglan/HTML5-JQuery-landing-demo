 $('.js-mobile-menu-button').click(function () {
    $('.menu').toggleClass("mobile-menu");
    $('body').toggleClass("no-scroll");
  });

$('.hamburger').on("click", function (e) {
  $('.hamburger').toggleClass("is-active")
});
