const swiper = new Swiper('#slider-section', {
     // Optional parameters
     direction: 'horizontal',
     loop: true,
     autoplay:true,
     // Enable lazy loading
  lazy: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 60,
    slideShadows: false,
  },
   
     // If we need pagination
     pagination: {
       el: '.swiper-pagination',
       type: 'bullets',
       clickable: true,
     },
   
     // Navigation arrows
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
   
     // And if we need scrollbar
     scrollbar: {
       el: '.swiper-scrollbar',
     },
   });

const swiper1 = new Swiper('#category-slider', {
     // Optional parameters
     direction: 'horizontal',
     loop: true,
    //  autoplay:true,
     // Enable lazy loading
      lazy: true,
       slidesPerView: 5,
  spaceBetween: 0,

   
    
   
     // Navigation arrows
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
   
   });





