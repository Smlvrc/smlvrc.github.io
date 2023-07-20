document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector('.slider');
  const sliderContent = document.querySelector('.slider-content');
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const tabs = document.querySelectorAll('.tab');

  let slideIndex = 0;
  let isVerticalLayout = false; // Değişken, dikey düzenleme durumunu saklar

  function showSlide(index) {
    if (index < 0) {
      slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
      slideIndex = 0;
    }

    if (isVerticalLayout) {
      sliderContent.style.transform = `translateY(-${slideIndex * 100}%)`;
    } else {
      sliderContent.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
  }

  function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
  }

  function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
  }

  function handleResize() {
    // Ekran boyutunu alın
    const screenWidth = window.innerWidth;

    // Belirlediğiniz breakpoint değeri (örneğin, 768 piksel)
    const breakpoint = 390;

    // Ekran boyutuna göre dikey veya yatay düzenlemeyi belirle
    if (screenWidth <= breakpoint) {
      isVerticalLayout = true;
    } else {
      isVerticalLayout = false;
    }

    // Yeniden düzenle
    showSlide(slideIndex);
  }

  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const selectedTab = this;
      const filterClass = selectedTab.classList[1];

      tabs.forEach(tab => tab.classList.remove('active'));
      selectedTab.classList.add('active');

      slides.forEach(slide => {
        slide.style.display = 'none';
        if (slide.classList.contains(filterClass)) {
          slide.style.display = 'block';
        }
      });

      slideIndex = 0;
      showSlide(slideIndex);
    });
  });

  // Ekran boyutu değiştikçe handleResize işlevini çağırın
  window.addEventListener('resize', handleResize);

  // Sayfa yüklendiğinde ve herhangi bir tab seçildiğinde handleResize işlevini çağırın
  window.addEventListener('DOMContentLoaded', handleResize);
  tabs.forEach(tab => tab.addEventListener('click', handleResize));
});
