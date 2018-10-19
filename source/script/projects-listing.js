$(".projects__button-link").click(function () {
  $.ajax({
    url: 'https://pixabay.com/api/?key=10435611-b9a609b9561aa23df5e533662&q=yellow+flowers&image_type=photo&pretty=true',
    success: function(msg){
      console.log(msg.hits);
      let arr = msg.hits;
      let images = [];
      for (let i = 0; i < arr.length; i++) {
        images.push(arr[i].webformatURL);
      }
      for (let i = 0; i < images.length; i++) {
        const newDiv = `<div><img src="${images[i]}"></div>`;
        $('.projects__wrapper').append(newDiv)
      }
    }
  })});

