const barTabs = document.querySelectorAll('.education__tab');
const cards = document.querySelectorAll('.education__card');

const changeTabContent = (cards, value) => {
  cards.forEach((card) => {
    console.log(card);
    if (card.dataset.tabsField === value) {
      card.classList.add('education__card_active');
    } else {
      card.classList.remove('education__card_active');
    }
  });
}

barTabs.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    const dataValue = tab.querySelector('.education__tab-button').dataset.tabsHandler;
    console.log(dataValue)
    changeTabContent(cards, dataValue);
    barTabs.forEach((tab) => {
      if (tab == event.target.closest('.education__tab')) {
        tab.classList.add('education__tab_active');
      } else {
        tab.classList.remove('education__tab_active');
      }
    });
  });
})