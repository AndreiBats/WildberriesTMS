function renderCard(cards) {
  const PRODUCT_ID = "product__cards";
  const productCards = document.getElementById(PRODUCT_ID);

  for (const card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("product__card");
    cardElement.innerHTML = `
    <img src="${card.image}" alt="photo">
    <h3 class="product__card__title">Наименование: ${card.name}</h3>
    <p class="product__card__previous">Цена со скидкой: ${card.previousPrice}</p>
    <p class="product__card__price">Цена: ${card.price}</p>
    <button class="button fa-solid fa-square-plus add-cart" data-id="${card.id}"></button>
    
  `;

    productCards.append(cardElement);
  }
}

let productCards = document.querySelector(".product__cards");
let products = null;

function fetchCards() {
  return fetch("https://62b5dfa342c6473c4b3c12c2.mockapi.io/card")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
}

fetchCards().then((json) => {
  products = json;
  renderCard(json);
});
