export default class CardTeam {
    constructor({ id, image, name, about }, tempCardSelector) {
        this._tempCardSelector = tempCardSelector;
        this._id = id;
        this._image = image;
        this._name = name;
        this._about = about;
    }

    _getTemplate() {
        return document
            .querySelector(this._tempCardSelector)
            .content
            .querySelector('.card-team')
            .cloneNode(true);
    }

    _formatName() {
        const nameArr = this._name.split(' ')
        nameArr.splice(1, 0, '<br>')
        return nameArr.join(' ')
    }

    generateCard() {
        this._element = this._getTemplate()

        this._cardImage = this._element.querySelector('.card-team__image')
        this._cardName = this._element.querySelector('.card-team__name');
        this._cardAbout = this._element.querySelector('.card-team__about');

        this._cardImage.src = this._image;
        this._cardImage.alt = this._name;
        this._cardName.innerHTML = this._formatName();
        this._cardAbout.textContent = this._about;

        return this._element
    }
}