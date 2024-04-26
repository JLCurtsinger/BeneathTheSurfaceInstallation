"use strict";

function changeItem(index) {
    const carouselItems = document.querySelectorAll(".carousel-item");

    for (let i=0; i<carouselItems.length; i++) {
        if(i== index) {
            carouselItems[i].classList.add("active");
        }
        else {
            carouselItems[i].classList.remove("active");
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    changeItem(0);
});

// photo gallery
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });