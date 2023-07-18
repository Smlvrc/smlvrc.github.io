
// Navbar toggler elementini seçin
// Navbar toggler elementini seçin
var navbarToggler = document.querySelector(".navbar-toggler");

// Collapse elementini seçin
var collapseElement = document.querySelector(".collapse");

// Navbar toggler elementine tıklandığında çağrılacak işlevi tanımlayın
navbarToggler.addEventListener("click", function() {
  // Collapse elementinin mevcut display değerini alın
  var currentDisplay = window.getComputedStyle(collapseElement).getPropertyValue("display");
  
  // Collapse elementinin display değerini toggle (değiştir) edin
  collapseElement.style.display = (currentDisplay === "none") ? "flex" : "none";
});


//  header section image -->
var swiper = new Swiper(".mySwiper7", {
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChange: function () {
      var activeSlide = this.slides[this.activeIndex];
      var slideText = activeSlide.innerText;
      var slideContent = document.querySelector(".swiper-slide-active h1");
      slideContent.innerHTML = slideText;
    },
  },
});

// header section end


  // change color when page scrolling
  window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav .navbar-nav .nav-link');
    const icons = document.querySelectorAll('.icon i');
    const options = document.getElementById('options');
    const phoneNumber = document.querySelector('.header-num a');
  
    const scrolledBgColor = 'white'; // Scroll yaparken navbarın arka plan rengi
    const defaultBgColor = ''; // Scroll yapmadığınızda navbarın varsayılan arka plan rengi
    const scrolledColor = 'black'; // Scroll yaparken ikonların ve etiketlerin rengi
    const defaultColor = ''; // Scroll yapmadığınızda ikonların ve etiketlerin varsayılan rengi
  
    if (window.scrollY > 0) {
      nav.style.backgroundColor = scrolledBgColor;
      navLinks.forEach(function (link) {
        link.style.color = scrolledColor;
      });
      icons.forEach(function (icon) {
        icon.style.color = scrolledColor;
      });
      options.style.backgroundColor = scrolledBgColor;
      phoneNumber.style.color = scrolledColor;
    } else {
      nav.style.backgroundColor = defaultBgColor;
      navLinks.forEach(function (link) {
        link.style.color = defaultColor;
      });
      icons.forEach(function (icon) {
        icon.style.color = defaultColor;
      });
      options.style.backgroundColor = defaultBgColor;
      phoneNumber.style.color = defaultColor;
    }
  });
  
  

  
// select language

document.addEventListener("DOMContentLoaded", function() {
    var icon = document.getElementById("icon");
    var options = document.getElementById("options");
  
    icon.addEventListener("click", function() {
      options.style.display = (options.style.display === "block") ? "none" : "block";
    });
  
    var optionItems = options.getElementsByTagName("a");
    for (var i = 0; i < optionItems.length; i++) {
      optionItems[i].addEventListener("click", function() {
        var selectedOption = this.getAttribute("data-value");
        // Seçilen seçenekle ilgili işlemleri burada gerçekleştirin.
        options.style.display = "none";
      });
    }
  });
  