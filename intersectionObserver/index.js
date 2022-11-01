const $cardContainer = get('.card-container');
const $cards = getAll('.card');

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

function appendCard(cardElem) {
  $cardContainer.appendChild(cardElem);
}

function ioObserver(entries) {
  entries.forEach((entry) => {
    const { target } = entry;

    if (entry.isIntersecting) {
      io.unobserve(target);
      console.log('로딩');

      const timer = setTimeout(() => {
        makeCard();

        console.log('로딩 끝');
        observeLastCard(io, getAll('.card'));
      }, 100);
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
