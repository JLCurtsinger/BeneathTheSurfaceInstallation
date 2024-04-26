document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelector('.nav-links ul');
    const hamburgerMenuButton = document.querySelector('.hamburger-menu');

    initializeGallery();
    initializeSwiper();
    setupMenuToggle(navLinks, hamburgerMenuButton);
    toggleNavOnScroll(navLinks, hamburgerMenuButton); // Initial check
    window.addEventListener('scroll', () => toggleNavOnScroll(navLinks, hamburgerMenuButton));
});

function initializeGallery() {
    function changeItem(index) {
        const carouselItems = document.querySelectorAll(".carousel-item");
        carouselItems.forEach((item, i) => {
            item.classList.toggle("active", i === index);
        });
    }
    changeItem(0);
}

function initializeSwiper() {
    const swiper = new Swiper('.swiper', {
        loop: true,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}

function setupMenuToggle(navLinks, hamburgerMenuButton) {
    // Initially open the nav links
    navLinks.classList.add('open');

    hamburgerMenuButton.addEventListener('click', function () {
        navLinks.classList.toggle('open');
        hamburgerMenuButton.classList.toggle('is-visible', !navLinks.classList.contains('open'));
    });
}

function toggleNavOnScroll(navLinks, hamburgerMenuButton) {
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 58) { // If there is any scroll, hide the nav links
        navLinks.classList.add('hidden');
        navLinks.classList.remove('open');
        hamburgerMenuButton.classList.add('is-visible');
    } else { // Show nav links when at the top of the page
        navLinks.classList.add('open');
        navLinks.classList.remove('hidden');
        hamburgerMenuButton.classList.remove('is-visible');
    }
}
