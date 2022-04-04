import CardTeam from "../components/CardTeam.js";
import { teamCards } from "../utils/teamCards.js"
import CardPublication from "../components/CardPublication.js";
import PsevdoElement from "../components/PsevdoElement.js";
import { publicationCards } from "../utils/publicationCards.js";
import { cardContainer } from "../utils/constants.js";
import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const teamCardsContainer = document.querySelector('.team__cards')

const teamSlider = new Swiper('.team__slider', {
    // Optional parameters
    loop: false,
    spaceBetween: 30,
    preventInteractionOnTransition: true,
    rewind: true,
    grabCursor: true,

    breakpoints: {
        1220: {
            slidesPerView: 4,
        },

        930: {
            slidesPerView: 3,
        },

        769: {
            slidesPerView: 2,
        },

        720: {
            slidesPerView: 3,
            spaceBetween: 30,
        },

        685: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

        481: {
            slidesPerView: 2,
            spaceBetween: 15,
            loop: false,
        },

        320: {
            slidesPerView: 2,
            spaceBetween: 8,
            loop: true,
        }
    },

    // If we need pagination
    pagination: {
        el: '.team__slider-pagination',
        bulletClass: 'team__pagination-bullet',
        bulletActiveClass: 'team__pagination-bullet_active',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
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
