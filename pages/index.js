import CardPublication from "../components/CardPublication.js";
import PsevdoElement from "../components/PsevdoElement.js";
import { publicationCards } from "../utils/publicationCards.js";

const publicationSlider = new Swiper('.publication__slider', {
    // Optional parameters
    slidesPerView: 3,
    slidesPerGroup: 3,
    speed: 700,
    spaceBetween: 30,

    threshold: 5,

    preventInteractionOnTransition: true,
    rewind: true,

    grid: {
        rows: 2,
        fill: 'row',
    },

    // If we need pagination
    pagination: {
        el: '.publication__slider-pagination',
        bulletClass: 'publication__pagination-bullet',
        bulletActiveClass: 'publication__pagination-bullet_active',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.publication__slider-button_next',
        prevEl: '.publication__slider-button_prev',
    },
});


const cardContainer = document.querySelector('.publication__cards')


function renderPublicationCards() {
    publicationCards.forEach(card => {
        const cardElement = new CardPublication(card, '#tempCardPublication').generateCard()
        cardContainer.append(cardElement)
    })
}

renderPublicationCards()


// ----------------------------------

new PsevdoElement(publicationSlider, '.publication__card', 6).enabled()

// publicationSlider.on('sliderMove', (touchmove) => {
//     console.log("событие sliderMove");
// })
// publicationSlider.on('transitionStart', () => {
//     console.log("событие transitionStart");
// })
// publicationSlider.on('transitionEnd', () => {
//     console.log("событие transitionEnd");
// })
// publicationSlider.on('touchMove', (touchMove) => {
//     console.log("событие touchMove");
// })
// publicationSlider.on('transitionEnd', () => {
//     console.log("событие transitionEnd");
// })
// publicationSlider.on('transitionEnd', () => {
//     console.log("событие transitionEnd");
// })