(function () {
    "use strict";

    // Vertical Slider object
    const vertical_slider = {

        // Slide class name
        slider_class: ".slider",

        // Show slide
        show_slide: function (slide_id, context_item) {
            const slide_container = context_item.closest(this.slider_class).querySelector(".slides");
            if (slide_container) {
                const slides = slide_container.querySelectorAll(".slide");
                if (slides && slides[slide_id]) {

                    // Scroll to active slide
                    slide_container.scrollTo({
                        top: slides[slide_id].offsetTop,
                        behavior: "smooth"
                    });


                    // Set active context item
                    const active_context_item = context_item.closest(".slide_navigation").querySelector(".active");
                    if (active_context_item) {
                        active_context_item.classList.remove("active");
                    }

                    context_item.classList.add("active");
                }
            }
        },

        // Initialize slide
        init_slider: function (slider) {

            const navigation_items = slider.querySelectorAll(".slide_navigation a");

            if (navigation_items) {
                Object.keys(navigation_items).forEach(function (key) {
                    navigation_items[key].onclick = function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        vertical_slider.show_slide(key, navigation_items[key]);
                    };
                });
            }

        },

        // Initialize sliders
        init: function () {

            // Iterate over each slider
            document.querySelectorAll(this.slider_class).forEach((slider) => this.init_slider(slider));

        }
    };

    // Initialize sliders
    vertical_slider.init();
}());

// text scroll

var carouselInner = document.querySelector('.carousel-inner');
var items = carouselInner.getElementsByClassName('item');

window.addEventListener('scroll', function () {
    var visibleItem = findVisibleItem(items);
    if (visibleItem) {
        setActiveItem(visibleItem);
    }
});

function findVisibleItem(items) {
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var itemRect = item.getBoundingClientRect();
        if (isElementInViewport(itemRect)) {
            return item;
        }
    }
    return null;
}

function isElementInViewport(rect) {
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function setActiveItem(item) {
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
    }
    item.classList.add('active');
}