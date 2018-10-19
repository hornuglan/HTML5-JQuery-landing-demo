$(".projects__button-link").click(function () {
  $.ajax({
    url: 'https://pixabay.com/api/?key=10435611-b9a609b9561aa23df5e533662&q=yellow+flowers&image_type=photo&pretty=true',
    success: function (msg) {
      console.log(msg.hits);
      const images = msg.hits.map(function (item) {
        return {url: item.webformatURL, tags: item.tags, title: item.user};
      });
      for (let i = 0; i < images.length; i++) {
        const newDiv = `<div class="projects__item col-sm-4 card-body">
<img class="projects__item-img card-img-top" src="${images[i].url}">
<h3 class="projects__item-title h3 card-title text-center">${images[i].title}</h3>
<p class="projects__item-tag card-text text-center">${images[i].tags}</p>
</div>`;
        $('.projects__wrapper').append(newDiv)
      }
    }
  })
});
