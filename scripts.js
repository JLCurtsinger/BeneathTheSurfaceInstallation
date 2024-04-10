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