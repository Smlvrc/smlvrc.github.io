var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // visible text
  
 var section = document.querySelector ('.swiper-button-next');
 var sectionHeading = document.querySelector('.slider-heading');

 function handleScroll() {
   var sectionRect = section.getBoundingClientRect();
   if (sectionRect.top < window.innerHeight && sectionRect.bottom >= 0) {
     sectionHeading.classList.add('visible');
   } else {
     sectionHeading.classList.remove('visible');
   }
 }

 document.addEventListener('scroll', handleScroll);

