function renderCard({ name, id, price, previousPrice, urlImage }) {
  return `
    <div class="product__card" data-id="${id}">
      <img src="${urlImage}" alt="Lime" class="product__card-img" />
      <div class="product__info">
        <div class="product__info-main">
          <h3 class="product__card-title">${name}</h3>
          <p class="product__card-price">${price}</p>
        </div>
        <div class="product__info-plus">
          <button>
            <i class="fa-solid fa-square-plus"></i>
          </button>
        </div>
      </div>
    </div>
    `;
}

function render(cards) {
  const PRODUCT_ID = "product__cards";
  const products = document.getElementById(PRODUCT_ID);
  products.innerHTML = cards.map((card) => renderCard(card)).join("");
}

const API__URL = "https://62b5dfa342c6473c4b3c12c2.mockapi.io";

async function fetchCard(id) {
  const response = await fetch(`${API__URL}/card/${id}`);
  const json = await response.json();

  return json;
}

(async () => {
  let cardIds = [];

  for (let i = 0; i <= 5; i++) {
    cardIds.push(i);
  }

  const cards = [];

  for (let cardId of cardIds) {
    const card = await fetchCard(cardId);
    cards.push(card);
    render(cards);
  }
})();
