(function () {
  
  const cards= document.querySelector('.education__cards');
  const tabsBar = document.querySelector('.education__tab-bar');
  const tabs = document.querySelectorAll('.education__tab');

  const removeActiveClassFromTab = (tab) => {
    tab.classList.remove('education__tab_active')
  };

  const addActiveCLassToTab = (tab) => {
    tab.classList.add('education__tab_active');
    return (tab);
  }

  const removeActiveClassFromCard = (card) => {
    card.classList.remove('education__card_active');
  };

  const changeCardContent = (oldCard, dataFieldValue) => {
    removeActiveClassFromCard(oldCard);
    cards.querySelector(`[data-tabs-field="${dataFieldValue}"]`).classList.add('education__card_active');
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', (event) => {
      removeActiveClassFromTab(tabsBar.querySelector('.education__tab_active'));
      const newActiveTab = addActiveCLassToTab(event.target.closest('.education__tab'));
      const oldCard = cards.querySelector('.education__card_active');
      const newCardDataValue = tab.querySelector('.education__tab-button').dataset.tabsHandler;
      changeCardContent(oldCard, newCardDataValue);
    });
  })

})();
