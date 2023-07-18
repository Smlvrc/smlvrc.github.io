// slider month section with live camera
var swiper = new Swiper(".mySwiper7", {
  slidesPerView: 1, // Display one slide at a time
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Ay düğmelerini seçme
var monthButtons = document.querySelectorAll(".month-button");

// Ay düğmelerine tıklama olayını ekleme
monthButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Seçili düğme rengini sıfırlama
    monthButtons.forEach(function (btn) {
      btn.classList.remove("selected");
    });

    // Seçilen düğmeye mavi rengi ekleme
    this.classList.add("selected");

    var selectedMonth = this.getAttribute("data-month");

    // Slaytları filtreleme
    swiper.slides.forEach(function (slide) {
      var slideMonth = slide.getAttribute("data-month");

      if (slideMonth === selectedMonth || selectedMonth === "All") {
        slide.style.display = "flex"; // Slaytı görünür yap
      } else {
        slide.style.display = "none"; // Slaytı gizle
      }
    });

    // Swiper yeniden başlatma
    swiper.update();
  });
});

// Set the first button as selected by default
monthButtons[0].classList.add("selected");

// inner card slider control
// slider month section with live camera
var swiper = new Swiper(".mySwiperslider", {
  slidesPerView: 1, // Display one slide at a time
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Ay düğmelerini seçme
var monthButtons = document.querySelectorAll(".month-button");

// Ay düğmelerine tıklama olayını ekleme
monthButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Seçili düğme rengini sıfırlama
    monthButtons.forEach(function (btn) {
      btn.classList.remove("selected");
    });

    // Seçilen düğmeye mavi rengi ekleme
    this.classList.add("selected");

    var selectedMonth = this.getAttribute("data-month");

    // Slaytları filtreleme
    swiper.slides.forEach(function (slide) {
      var slideMonth = slide.getAttribute("data-month");

      if (slideMonth === selectedMonth || selectedMonth === "All") {
        slide.style.display = "flex"; // Slaytı görünür yap
      } else {
        slide.style.display = "none"; // Slaytı gizle
      }
    });

    // Swiper yeniden başlatma
    swiper.update();
  });
});

// Set the first button as selected by default
monthButtons[0].classList.add("selected");