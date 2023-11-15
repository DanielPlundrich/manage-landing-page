var swiper = new Swiper(".mySwiper", {
    spaceBetween: 25,
    centerSlide: 'true',
    pagination: {
      el: ".swiper-pagination",
      color: "black",
      bulletActiveClass: 'swiper-pagination-bullet-active',
      bulletClass: 'swiper-pagination-bullet'
    },


    breakpoints:{
      0:{
        slidesPerView:1,
      },
      780:{
        slidesPerView:2,
      },
      1100:{
        slidesPerView:3,
      },

    },

    
});





