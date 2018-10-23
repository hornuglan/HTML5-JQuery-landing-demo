function scrollSpy() {
  $('body').scrollspy({target: '.nav'});
}

window.onscroll = function() {attachingHeader()};
    header = document.getElementById("header");
    sticky = header.offsetTop;

    function attachingHeader() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

