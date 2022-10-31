let pageNumber = 1;
const API_URL = `https://picsum.photos/v2/list?page=${pageNumber}&limit=10​`;

const $cardContainer = get('.card-container');

function get(elem) {
  return document.querySelector(elem);
}

function makeCard(images) {
  images.forEach((info) => {
    const $cardElement = document.createElement('div');
    $cardElement.classList.add('card');

    $cardElement.innerHTML = `
      <h2 class="card-title">${info.author}</h2>
      <p class="card-content">${info.id}</p>
    `;

    $cardContainer.appendChild($cardElement);
  });
}

async function getImageData() {
  const response = await fetch(API_URL)
    .then((res) => res.json())
    .then((data) => makeCard(data))
    .catch((error) => {
      console.error(error);
    });
}

function init() {
  getImageData();
}

window.addEventListener('DOMContentLoaded', () => {
  init();

  window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      pageNumber++;
      getImageData();
    }
  });
});
