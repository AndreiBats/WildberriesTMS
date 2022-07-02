function renderCard(cards) {
  for (const card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("product__card");
    cardElement.innerHTML = `
    <img src="${card.image}" alt="photo">
    <h3 class="product__card__title">${card.name}</h3>
    <p class="product__card__previous"> ${card.previousPrice}</p>
    <p class="product__card__price">${card.price}</p>
    <button class="button fa-solid fa-square-plus add-cart" data-id="${card.id}"></button>
    
  `;

    productCards.append(cardElement);
  }
}

let productCards = document.querySelector(".product__cards");
let products = null;

function fetchCards() {
  return fetch("https://62b5dfa342c6473c4b3c12c2.mockapi.io/card").then(
    (response) => {
      return response.json();
    }
  );
}

fetchCards().then((json) => {
  products = json;
  renderCard(products);
});
