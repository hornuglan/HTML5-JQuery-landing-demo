pageNumber = 0;
queryText = "";

$(window).load(function () {
  loadImages(queryText);
});

$(".projects__button-link").click(function () {
  loadImages(queryText);
});

$(".category__item").click(function () {
  pageNumber = 0;
  const category = $(this).text();
  if (category === "All") {
    queryText = "";
  } else {
    queryText = `&q=${category}`;
  }

  $('.projects__wrapper').empty();

  loadImages(queryText);
});

function loadImages(queryText) {
  pageNumber += 1;
  $.ajax({
    url: `https://pixabay.com/api/?key=10435611-b9a609b9561aa23df5e533662&image_type=photo&page=${pageNumber}&per_page=6${queryText}`,
    success: function (msg) {
      const images = msg.hits.map(function (item) {
        return {url: item.webformatURL, tags: item.tags, title: item.user};
      });
      images.forEach(function (item) {
        const newDiv = `<div class="projects__item">
<div class="projects__item-wrapper">
<img class="projects__item-img" src="${item.url}">
</div>
<div class="projects__item-info">
<h3 class="projects__item-title">${item.title}</h3>
<p class="projects__item-tag">${item.tags}</p>
</div>
</div>`;
        $('.projects__wrapper').append(newDiv)
      })
    }
  })
}


