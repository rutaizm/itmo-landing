export default class PsevdoElement {
    constructor(slider, cardSelector, maxCardOnSlide) {
        this._slider = slider;
        this._cards = document.querySelectorAll(cardSelector);
        this._maxCardOnSlide = maxCardOnSlide;
    }

    _defineSlideNumber() {
        return this._slider.realIndex / 3 + 1
    }

    _findCardsAfter() {
        this._arrayCardsAfter = []
        for (
            let i = 1 + (this._maxCardOnSlide * this._defineSlideNumber() - this._maxCardOnSlide);
            i <= this._maxCardOnSlide * this._defineSlideNumber();
            i++) {
            if (i % 3 === 0) {
                this._arrayCardsAfter.push(i)
            }
        }
        return this._arrayCardsAfter
    }

    _addAfter() {
        this._cards.forEach((card, i) => {
            if (i + 1 === this._findCardsAfter()[0] ||
                i + 1 === this._findCardsAfter()[1]
            ) {
                card.classList.add('publication__card_after')
            }
        })
    }

    _removePsevdoElement() {
        this._cards.forEach(card => {
            card.classList.remove('publication__card_after')
        })
    }


    _renderPsevdoElement() {
        setTimeout(() => {
            this._removePsevdoElement()
            this._addAfter()
        }, 300)
    }

    _setEventListeners() {
        this._slider.on('realIndexChange', () => {
            this._renderPsevdoElement()
        })
        this._slider.on('sliderMove', (touchmove) => {
            this._removePsevdoElement()
        })
        this._slider.on('transitionEnd', () => {
            this._addAfter()
        })
    }

    enabled() {
        this._addAfter()
        this._setEventListeners()
    }
}

