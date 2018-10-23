header = document.getElementById("header");
sticky = header.offsetTop;
headerOffset = $("header").height();

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

  $('.nav-link').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000, 'linear');
  });


