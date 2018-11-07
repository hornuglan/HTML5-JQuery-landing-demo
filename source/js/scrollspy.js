header = document.getElementById("header");
sticky = header.offsetTop;

function scrollSpy() {
  $('body').scrollspy({
    target: '.nav'
  });
}

window.onscroll = function () {
  attachingHeader()
};

function attachingHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$('.nav-link').on('click',function(e) {
  e.preventDefault();
  let headerOffset = $("header").height();
  let target = this.hash;
  if ($(this).data('offset') !== undefined) headerOffset = $(this).data('offset');
  $('html, body').stop().animate({
    'scrollTop': $(target).offset().top - headerOffset
  }, 300);
});
