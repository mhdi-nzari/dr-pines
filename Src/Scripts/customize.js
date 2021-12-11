const swiper = new Swiper('#slider-section', {
     // Optional parameters
     direction: 'horizontal',
     loop: true,
   
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



const swiper = new Swiper('#category-slider', {
     // Optional parameters
     direction: 'horizontal',
     loop: true,
     slidesPerView: 4,
   
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



