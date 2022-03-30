const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    slidesPerGroup: 3,
    speed: 700,
    // loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.publication__slider-pagination',
        bulletClass: 'publication__pagination-bullet',
        bulletActiveClass: 'publication__pagination-bullet_active',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.publication__slider-button_next',
        prevEl: '.publication__slider-button_prev',
    },
});