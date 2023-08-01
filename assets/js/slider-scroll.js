var swiperText = new Swiper(".home-benefits-image-slider", {
    slidesPerView: 1,
    initialSlide: 0,
    centeredSlides: true,
    direction: "vertical",
  
  });
  
  var swiperImage = new Swiper('.home-benefits-text-slider', {
    slidesPerView: 1,
    direction: 'vertical',
    initialSlide: 0,
  
  });
  
   swiperText.on("slideChange", function () {
          const activeIndex = swiperText.activeIndex;
          swiperImage.slideTo(activeIndex); 
        });
      
        swiperImage.on("slideChange", function () {
          const activeIndex = swiperImage.activeIndex; 
          swiperText.slideTo(activeIndex); 
        });
      
        var sliderContainer = document.querySelector('.home-benef-cont');
      sliderContainer.addEventListener('wheel', function (event) {
      event.preventDefault();
      var direction = event.deltaY > 0 ? 'next' : 'prev';
  
      if ((direction === 'next' && swiperText.isEnd) ) {
        document.getElementById('calculator-container').scrollIntoView({ behavior: 'smooth' });
  
      }
      else if((direction === 'prev' && swiperText.isBeginning)){
          document.getElementById('hover-cards').scrollIntoView({ behavior: 'smooth' });
  
      }
       else {
        swiperText.slideTo(swiperText.activeIndex + (direction === 'next' ? 1 : -1));
  
      }
    });