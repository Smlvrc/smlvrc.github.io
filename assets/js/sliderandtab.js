document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const sliderContent = document.querySelector('.slider-content');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const tabs = document.querySelectorAll('.tab');

    let slideIndex = 0;

    function showSlide(index) {
      if (index < 0) {
        slideIndex = slides.length - 1;
      } else if (index >= slides.length) {
        slideIndex = 0;
      }

      sliderContent.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    function prevSlide() {
      slideIndex--;
      showSlide(slideIndex);
    }

    function nextSlide() {
      slideIndex++;
      showSlide(slideIndex);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
    
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const selectedTab = this;
        const filterClass = selectedTab.classList[1];
        
        // Aktif tab sınıfını güncelle
        tabs.forEach(tab => tab.classList.remove('active'));
        selectedTab.classList.add('active');
        
        // Slider slaytlarını filtrele
        slides.forEach(slide => {
          slide.style.display = 'none';
          if (slide.classList.contains(filterClass)) {
            slide.style.display = 'block';
          }
        });
        
        // İlk filtreye geçişte ilk slaytı göster
        slideIndex = 0;
        showSlide(slideIndex);
      });
    });
  });