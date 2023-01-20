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


const swiperStory = new Swiper('.story__swiper', {
    slidesPerView: 1,
    autoHeight: true,
    spaceBetween: 20,

    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {

        720: {
            centeredSlides: false,
            slidesPerView: 1,
            roundLengths: false,
            loop: false,
            loopAdditionalSlides: 30,
        },

        1100: {
            centeredSlides: true,
            slidesPerView: 3,
            roundLengths: true,
            loop: true,
            loopAdditionalSlides: 30,
        },
  }
});