const swiperPractic = new Swiper('.practic__swiper', {
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 20,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {

    768: {
      slidesPerView: 2,
    },
  }
});