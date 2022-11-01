const $cardContainer = get('.card-container');
const $cards = getAll('.card');

const TEMP_API_URL = `https://jsonplaceholder.typicode.com/photos`;
const TEMP_NUMBER = 4;

const io = new IntersectionObserver(ioObserver, {
  threshold: 1,
});

function get(htmlElem) {
  return document.querySelector(htmlElem);
}

function getAll(htmlElem) {
  return document.querySelectorAll(htmlElem);
}

function makeCard(data) {
  for (let i = 0; i < TEMP_NUMBER; i++) {
    const $card = document.createElement('div');
    $card.classList.add('card');

    $card.innerHTML = `
      <img src=${data[i].thumbnailUrl} />
      <h2 class="card-title">TEST</h2>
      <p class="card-content">${data[i].title}</p>
  `;

    appendCard($card);
  }
}

function appendCard(cardElem) {
  $cardContainer.appendChild(cardElem);
}

function getApiData() {
  fetch(TEMP_API_URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      makeCard(data);
    })
    .catch((error) => {
      return console.error(error);
    });
}

function ioObserver(entries) {
  entries.forEach((entry) => {
    const { target } = entry;

    if (entry.isIntersecting) {
      io.unobserve(target);
      console.log('로딩');
      getApiData();

      setTimeout(() => {
        console.log('로딩 끝');
        observeLastCard(io, getAll('.card'));
      }, 0);
    }
  });
}

function observeLastCard(io, cards) {
  const lastItem = cards[cards.length - 1];
  io.observe(lastItem);
}

observeLastCard(io, $cards);

init();
