function showCard(cardNumber) {
    const cards = document.getElementsByClassName("card");
    const displayedCard = document.getElementById("displayedCard");
  
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove("active");
    }
  
    cards[cardNumber - 1].classList.add("active");
  
    displayedCard.innerHTML = `Kart ${cardNumber} içeriği burada gösterilecek.`;
  }
  