pageNumber = 0;
categoryButton = 'yellow+flowers';

$(window).load(function () {
  loadImages();
});

$(".projects__button-link").click(function () {
  loadImages();
});

$(".category__item").click(function () {
  pageNumber = 0;
  const category = $(this).context.innerHTML;
  if (category === "All") {
    categoryButton = null;
  }
  else {
    categoryButton = category;
  }

  $('.projects__wrapper').empty();

  if (categoryButton) {
    loadImages();
  }
  else {
    pageNumber += 1;
    $.ajax({
      url: `https://pixabay.com/api/?key=10435611-b9a609b9561aa23df5e533662&&image_type=photo&page=${pageNumber}&per_page=6`,
      success: function (msg) {
        const images = msg.hits.map(function (item) {
          return {url: item.webformatURL, tags: item.tags, title: item.user};
        });
        images.forEach(function (item) {
          const newDiv = `<div class="projects__item col-sm-4 card-body">
<img class="projects__item-img card-img-top" src="${item.url}">
<h3 class="projects__item-title h3 card-title text-center">${item.title}</h3>
<p class="projects__item-tag card-text text-center">${item.tags}</p>
</div>`;
          $('.projects__wrapper').append(newDiv)
        })
      }
    })
  }
});

function loadImages() {
  pageNumber += 1;
  $.ajax({
    url: `https://pixabay.com/api/?key=10435611-b9a609b9561aa23df5e533662&q=${categoryButton}&image_type=photo&page=${pageNumber}&per_page=6`,
    success: function (msg) {
      const images = msg.hits.map(function (item) {
        return {url: item.webformatURL, tags: item.tags, title: item.user};
      });
      images.forEach(function (item) {
        const newDiv = `<div class="projects__item col-sm-4 card-body">
<img class="projects__item-img card-img-top" src="${item.url}">
<h3 class="projects__item-title h3 card-title text-center">${item.title}</h3>
<p class="projects__item-tag card-text text-center">${item.tags}</p>
</div>`;
        $('.projects__wrapper').append(newDiv)
      })
    }
  })
}


