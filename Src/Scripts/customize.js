const swiper_1 = new Swiper("#slider-section", {
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


   // Responsive breakpoints
   breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      
      
    },
  
    940: {
      slidesPerView: 1,
      
    }
  }
});

const swiper_2 = new Swiper("#category--slider", {
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


  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      
    },
  
    940: {
      slidesPerView: 4,
      
    }
  }
});

const swiper_3 = new Swiper("#most--popular--slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay:true,
  // Enable lazy loading
  lazy: true,
  slidesPerView: 5,
  spaceBetween: 0,
  speed: 1500,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },


  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      
    },
  
    940: {
      slidesPerView: 5,
      
    }
  }
});

const swiper_4 = new Swiper("#best--seller--slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay:true,
  // Enable lazy loading
  lazy: true,
  slidesPerView: 5,
  spaceBetween: 0,
  speed: 1500,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },


  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      
    },
  
    940: {
      slidesPerView: 5,
      
    }
  }
});

const blog = new Swiper("#blog--slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay:true,
  // Enable lazy loading
  lazy: true,
  slidesPerView: 4,
  spaceBetween: 25,
  speed: 1500,

  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },


  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      
    },
  
    940: {
      slidesPerView: 3,
      
    }
  }
});
