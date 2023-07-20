



document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.mySwiper', {
      // Slayt geçişinin nasıl olacağına dair ayarlar
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: '.custom-next-button2',
        prevEl: '.custom-prev-button2',
      },
    });
  });


