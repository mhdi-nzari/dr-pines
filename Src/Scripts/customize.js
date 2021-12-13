const swiper = new Swiper("#slider-section", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: true,
  // Enable lazy loading
  lazy: true,
  speed: 1500,

  effect: "coverflow",
  coverflowEffect: {
    rotate: 60,
    slideShadows: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiper1 = new Swiper("#category-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
   autoplay:true,
  // Enable lazy loading
  lazy: true,
  slidesPerView: 4,
  spaceBetween: 0,
  speed: 1500,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
