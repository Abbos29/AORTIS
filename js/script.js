// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  menu.addEventListener("click", (event) => {
    if(event.target){
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)




// SWIPER

const swiperPractic = new Swiper('.practic__swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    
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
        autoHeight: true,
        slidesPerView: 2,
    },
  }
});


const swiperStory = new Swiper('.story__swiper', {
    slidesPerView: 1,
    // autoHeight: true,
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


const swiperGrid = new Swiper('.grid__swiper', {
    slidesPerView: 1,
    centeredSlides: true,

    spaceBetween: 20,
    autoHeight: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        
        720: {
            slidesPerView: 2,
            centeredSlides: true,

            spaceBetween: 50,
            autoHeight: true,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },

    }
    
});