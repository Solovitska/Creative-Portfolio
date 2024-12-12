const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1.4,
  spaceBetween: 22,
  loop: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  a11y: {
    prevSlideMessage: "Попередній слайд",
    nextSlideMessage: "Наступний слайд",
  },
  breakpoints: {
    768: {
      spaceBetween: 40,
      slidesPerView: 2.5,
    },
  },
});

