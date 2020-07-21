$(document).ready(function(){
  $('.multiple-items').slick({
      prevArrow: '.arrow_prev',
      nextArrow: '.arrow_next',
      slidesToShow: 3,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 5000,
      centerMode: true,
      speed: 500,
      swipeToSlide: true,
      cssEase: 'linear',
      responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              centerMode: true,
              centerPadding: '40px',
              prevArrow: 'false',
              nextArrow: 'false',
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              centerMode: true,
              prevArrow: 'false',
              nextArrow: 'false',
              centerPadding: '40px',
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
  });
});