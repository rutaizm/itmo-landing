import CardTeam from "../components/CardTeam.js";
import { teamCards } from "../utils/teamCards.js"
import CardPublication from "../components/CardPublication.js";
import PsevdoElement from "../components/PsevdoElement.js";
import { publicationCards } from "../utils/publicationCards.js";
import { cardContainer } from "../utils/constants.js";
<<<<<<< HEAD
=======
import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'
>>>>>>> 2c0d81f5a05f750c77a3ffbc9c2f131dbc6195ac

const teamCardsContainer = document.querySelector('.team__cards')

const teamSlider = new Swiper('.team__slider', {
    // Optional parameters
    // loop: true,
    spaceBetween: 30,
    slidesPerView: 4,
    threshold: 5,
    preventInteractionOnTransition: true,
    rewind: true,

    // If we need pagination
    pagination: {
        el: '.team__slider-pagination',
        bulletClass: 'team__pagination-bullet',
        bulletActiveClass: 'team__pagination-bullet_active',
<<<<<<< HEAD
      clickable: true,
      },
      navigation: {
=======
        clickable: true,
    },

    // Navigation arrows
    navigation: {
>>>>>>> 2c0d81f5a05f750c77a3ffbc9c2f131dbc6195ac
        nextEl: '.team__slider-button_next',
        prevEl: '.team__slider-button_prev',
    },
});

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

<<<<<<< HEAD

=======
>>>>>>> 2c0d81f5a05f750c77a3ffbc9c2f131dbc6195ac
// Переделается в класс Section
function renderTeamCards() {
    teamCards.forEach(card => {
        const cardElement = new CardTeam(card, '#tempCardTeam').generateCard()
        teamCardsContainer.append(cardElement)
    })
}

// Переделается в класс Section
function renderPublicationCards() {
    publicationCards.forEach(card => {
        const cardElement = new CardPublication(card, '#tempCardPublication').generateCard()
        cardContainer.append(cardElement)
    })
}

renderTeamCards()
renderPublicationCards()

// ----------------------------------

new PsevdoElement(publicationSlider, '.publication__card', 6).enabled()
<<<<<<< HEAD

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
=======
>>>>>>> 2c0d81f5a05f750c77a3ffbc9c2f131dbc6195ac
