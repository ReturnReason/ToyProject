const $cardContainer = get('.card-container');
const $cards = getAll('.card');
const $skeletonContainer = get('.skeleton-container');

const CREATE_CARD_COUNT = 4;
let cardImageNumber = 0;

const io = new IntersectionObserver(ioObserver, {
  threshold: 1,
});

function get(htmlElem) {
  return document.querySelector(htmlElem);
}

function getAll(htmlElem) {
  return document.querySelectorAll(htmlElem);
}

function makeCard() {
  if (cardImageNumber >= 12) cardImageNumber = 0;
  for (let i = cardImageNumber; i < cardImageNumber + 4; i++) {
    const $card = document.createElement('div');
    $card.classList.add('card');

    $card.innerHTML = `
      <img src="images/iu${i}.png" />
      <h2 class="card-title">아이유</h2>
      <p class="card-content">손 틈새로 비치는 아이유 참 좋다.</p>
  `;
    appendCard($card);
  }

  cardImageNumber += 4;
}

function makeSkeletonCard() {
  for (let i = 0; i < CREATE_CARD_COUNT; i++) {
    const $skeletonCard = document.createElement('div');
    $skeletonCard.classList.add('skeleton-card');

    $skeletonCard.innerHTML = `
      <div class="skeleton-card-header"></div>
      <div class="skeleton-card-title"></div>
      <div class="skeleton-card-content"></div>
    `;

    appendCard($skeletonCard);
  }
}

function appendCard(cardElem) {
  $cardContainer.appendChild(cardElem);
}

function removeSkeletonCard() {
  const $skeletonCards = getAll('.skeleton-card');
  $skeletonCards.forEach((skeletonCard) => {
    $cardContainer.removeChild(skeletonCard);
  });
}

function loading() {
  makeSkeletonCard();
}

function ioObserver(entries) {
  entries.forEach((entry) => {
    const { target } = entry;

    if (entry.isIntersecting) {
      io.unobserve(target);
      loading();

      const timer = setTimeout(() => {
        makeCard();
        removeSkeletonCard();
        observeLastCard(io, getAll('.card'));
      }, 1000);
    }
  });
}

function observeLastCard(io, cards) {
  const lastItem = cards[cards.length - 1];
  io.observe(lastItem);
}

function init() {
  observeLastCard(io, $cards);
}

init();
