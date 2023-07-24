
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
document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.mySwiper7', {
    // Slayt geçişinin nasıl olacağına dair ayarlar
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.custom-next-button',
      prevEl: '.custom-prev-button',
    },
  });
});

// header section end


// change color when page scrolling
window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav .navbar-nav .nav-link');
  const icons = document.querySelectorAll('.icon i');
  const options = document.getElementById('options');
  const phoneNumber = document.querySelector('.navbar a');
  const ruSpan = document.querySelector('.icon span');
  const phoneNumberLink = document.querySelector('.header-num a');
  const navlink = document.querySelector('.nav-link');
  var logo1 = document.querySelector(".logo1");
  var logo2 = document.querySelector(".logo2");

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
  // When scrolled, hide logo1 and show logo2
  logo1.style.display = "none";
  logo2.style.display = "block";
    options.style.backgroundColor = scrolledBgColor;
    phoneNumber.style.color = scrolledColor;
    ruSpan.style.color = scrolledColor;
    phoneNumberLink.style.color = scrolledColor;
  } else {
    nav.style.backgroundColor = defaultBgColor;
    navLinks.forEach(function (link) {
      link.style.color = defaultColor;
    });
    icons.forEach(function (icon) {
      icon.style.color = defaultColor;
    });
     // When not scrolled, show logo1 and hide logo2
     logo1.style.display = "block";
     logo2.style.display = "none";
    options.style.backgroundColor = defaultBgColor;
    phoneNumber.style.color = defaultColor;
    ruSpan.style.color = defaultColor;
    phoneNumberLink.style.color = defaultColor;
  }
});
  

  
 // Event handler for when hovering over the .nav element
 nav.addEventListener("mouseover", function () {
  logo1.style.display = "none";
  logo2.style.display = "block";
});

// Event handler for when the mouse leaves the .nav element
nav.addEventListener("mouseout", function () {
  logo1.style.display = "block";
  logo2.style.display = "none";
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
  