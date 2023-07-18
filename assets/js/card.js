



// Kartları seçme
var cardLocations = document.querySelectorAll(".card-location");

// İşlemleri gerçekleştirme
function handleHover() {
  var card = this.parentNode; // .card-location'ın üstündeki .card-main'i seçiyoruz
  var contentImg = card.querySelector(".content-img");
  contentImg.style.display = "none";

  var hidden=card.querySelector('.hidden-img');
  hidden.style.display= "block";

  var downhidden=card.querySelector(".down-hidden");
  downhidden.style.display="none";
}

function handleHoverOut() {
  var card = this.parentNode;
  var contentImg = card.querySelector(".content-img");
  contentImg.style.display = "block";

  var hidden=card.querySelector(".hidden-img");
  hidden.style.display= "none";

  var downhidden=card.querySelector(".down-hidden");
  downhidden.style.display="block";
}

// Her bir kart lokasyonu için olay dinleyicilerini tanımlama
cardLocations.forEach(function (cardLocation) {
  cardLocation.addEventListener("mouseover", handleHover);
  cardLocation.addEventListener("mouseout", handleHoverOut);
});

// footer-click


var hiddendivs = document.querySelectorAll(".res-hidden");
var hiddenicons = document.querySelectorAll(".hidden-icon");

hiddenicons.forEach(function(hiddenicon, index) {
  hiddenicon.addEventListener("click", function() {
    hiddendivs[index].classList.toggle("active");
  });
});

// hover building and showing card

