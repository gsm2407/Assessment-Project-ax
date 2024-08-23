const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
     
      prevEl: '.swiper-button-prev',
    },


    
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    624:{
         slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    },
    1428: {
        slidesPerView: 4
    }

  }
  });
    
