export default class CardPublication {
    constructor({ id, image, title, author, content, link }, tempCardSelector) {
        // this._dataCard = dataCard;
        this._tempCardSelector = tempCardSelector;
        this._id = id;
        this._image = image;
        this._title = title;
        this._author = author;
        this._content = content;
        this._link = link;
    }

    _getTemplate() {
        return document
            .querySelector(this._tempCardSelector)
            .content
            .querySelector('.card-publication')
            .cloneNode(true);
    }

    _setEventListeners() {
        this._buttonSocial.addEventListener('click', () => {
            this._boxSocial.classList.toggle('share-publication_active')

        })

        this._element.addEventListener('mouseleave', () => {
            this._boxSocial.classList.remove('share-publication_active')
        })
    }

    _setEventShare() {
        this._shareVkButton = this._element.querySelector('.share-publication__social_vk')
        this._shareFacebookButton = this._element.querySelector('.share-publication__social_facebook')
        this._shareTelegramButton = this._element.querySelector('.share-publication__social_telegram')
        // this._shareVkButton = this._element.querySelector('.share-publication__social_vk')
        // this._shareVkButton = this._element.querySelector('.share-publication__social_vk')

        this._windowParams = `width=650,height=570, left=${String(window.innerWidth / 2 - 650 / 2)}, top=${String(window.innerHeight / 2 - 570 / 2)}`

        this._shareVkButton.addEventListener('click', () => {
            window.open(`http://vk.com/share.php?url=${this._link}&title=${this._title}&image=${this._image}`, "VK", this._windowParams)
        })

        this._shareFacebookButton.addEventListener('click', () => {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${this._link}&picture=${this._image}`, "Facebook", this._windowParams)
        })

        this._shareTelegramButton.addEventListener('click', () => {
            window.open(`https://t.me/share/url?url=${this._link}&text=${this._title}`, "Telegram", this._windowParams)
        })


    }

    generateCard() {
        this._element = this._getTemplate()

        this._cardImage = this._element.querySelector('.card-publication__image')
        this._cardTitle = this._element.querySelector('.card-publication__title');
        this._cardAuthor = this._element.querySelector('.card-publication__users');
        this._cardContent = this._element.querySelector('.card-publication__text')
        this._cardLink = this._element.querySelector('.publication__link')

        this._buttonSocial = this._element.querySelector('.publication__social-button')
        this._boxSocial = this._element.querySelector('.share-publication')

        this._cardImage.src = this._image;
        this._cardImage.alt = this._title;
        this._cardTitle.textContent = this._title;
        this._cardAuthor.textContent = this._author;
        this._cardContent.textContent = this._content;
        this._cardLink.href = this._link;

        this._setEventListeners()
        this._setEventShare()
        return this._element
    }
}


