const swiper = new Swiper('.swiper', {
  loop: true,
  sliderPerView: 11,
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 3,
    },
    760: {
      slidesPerView: 6,
      spaceBetween: 40,
      slidesPerGroup: 6,
    },
    940: {
      slidesPerView: 8,
      spaceBetween: 40,
      slidesPerGroup: 8,
    },
    1028: {
      slidesPerView: 11,
      spaceBetween: 40,
      slidesPerGroup: 11,
    }
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});