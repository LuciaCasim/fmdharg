
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

function createSwiper() {
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: "auto",
        spaceBetween: 24,
        loop: true,
        centeredSlides: true,
        grabCursor: true,

        breakpoints: { 
            
            768: {
                centeredSlides: false,
            }
        },


    // // Navigation arrows
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },

    });
  }

  export default createSwiper;