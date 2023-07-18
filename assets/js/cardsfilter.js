var selectedFilters = [];
// showing default card in the right side
window.addEventListener('DOMContentLoaded', function() {
    var kartlarSolTaraf = document.getElementsByClassName('card-left-side')[0].getElementsByClassName('card');
    var sayi = kartlarSolTaraf.length;
    var sayiGostermeAlani = document.getElementById('sayiGostermeAlani');
    sayiGostermeAlani.textContent = sayi + " квартир";

    // Show the default card on the right side
    var defaultCard = kartlarSolTaraf[0];
    gosterKart(defaultCard);
});
function filtrele() {
    var kartlar = document.getElementsByClassName('card');
    // If no filters are selected, show all the cards
    if (selectedFilters.length === 0) {
        for (var i = 0; i < kartlar.length; i++) {
            kartlar[i].style.display = 'block';
        }
        return;
    }

    for (var i = 0; i < kartlar.length; i++) {
        var kart = kartlar[i];
        var odaSayisi = parseInt(kart.getAttribute('data-odasayisi'));
        var kartGoster = false;

        if (selectedFilters.includes('birOda') && odaSayisi === 1) {
            kart.style.display = 'block';
            kartGoster = true;
        } else if (selectedFilters.includes('ikiOda') && odaSayisi === 2) {
            kart.style.display = 'block';
            kartGoster = true;
        } else if (selectedFilters.includes('ucOda') && odaSayisi === 3) {
            kart.style.display = 'block';
            kartGoster = true;
        } else if (selectedFilters.includes('dortOda') && odaSayisi === 4) {
            kart.style.display = 'block';
            kartGoster = true;
        } else if (selectedFilters.includes('sıfır') && odaSayisi === 0) {
            kart.style.display = 'block';
            kartGoster = true;
        } else {
            kart.style.display = 'none';
        }

        if (kart.classList.contains('selected') && !kartGoster) {
            kart.classList.remove('selected');
        }
        
    }

    // Show the first card that matches the selected filters in the card-right-side section
    var kartlarSolTaraf = document.getElementsByClassName('card-left-side')[0].getElementsByClassName('card');
    var stüdyoKart = null;

    for (var i = 0; i < kartlarSolTaraf.length; i++) {
        var kart = kartlarSolTaraf[i];
        var odaSayisi = parseInt(kart.getAttribute('data-odasayisi'));

        if (selectedFilters.includes(odaSayisi.toString())) {
            gosterKart(kart);
            return;
        }

        if (odaSayisi === 0) {
            stüdyoKart = kart;
        }
    }

    if (selectedFilters.includes('sıfır') && stüdyoKart !== null) {
        gosterKart(stüdyoKart);
    }
}
function toggleFilter(filter) {
    var index = selectedFilters.indexOf(filter);
    if (index === -1) {
        selectedFilters.push(filter);
    } else {
        selectedFilters.splice(index, 1);
    }

    // Toggle the "selected" class on the button
    var button = document.querySelector('button[data-filter="' + filter + '"]');
    button.classList.toggle('selected');
    // Call the filtrele() function to apply the filters
    filtrele();
}



function gosterKart(kart) {
    var detaylar = document.getElementById('selectedCardDetails');
    detaylar.innerHTML = '';

    var kartKlon = kart.cloneNode(true);
    kartKlon.classList.remove('selected');
    detaylar.appendChild(kartKlon);

    var kartText = kart.getElementsByTagName('p')[0].innerText;

    // Update the selected card on the right side
    var selectedCard = document.querySelector('.card-right-side .card.selected');
    if (selectedCard) {
        selectedCard.style.display = 'none';
        selectedCard.classList.remove('selected');
    }
    kart.style.display = 'block';
    kart.classList.add('selected');

    // Get the data-odasayisi attribute value
    var odaSayisi = kart.getAttribute('data-odasayisi');

    // Call toggleFilter() with the corresponding filter
    toggleFilter(odaSayisi);
}
 




