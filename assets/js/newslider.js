var swiper = new Swiper(".mySwipernews", {
    slidesPerView: 3,
    spaceBetween: 30,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      390: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      540: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });