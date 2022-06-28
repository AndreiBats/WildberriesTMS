function renderCard(cards) {
  const PRODUCT_ID = "product__cards";
  const productCards = document.getElementById(PRODUCT_ID);

  for (const card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("product__card");
    cardElement.innerHTML = `
  <div class="product__card__image">
    <img src="${card.image}" alt="photo">
  </div>
  <div class="product__card__info">
    <h3 class="product__card__title">Наименование: ${card.name}</h3>
    <p class="product__card__previous">Цена со скидкой: ${card.previousPrice}</p>
    <p class="product__card__price">Цена: ${card.price}</p>
  </div>
  <div class="product__info-plus">
      <button class="button"><i class="fa-solid fa-square-plus"></i></button>
    </div>
  `;

    productCards.append(cardElement);
  }
}

let productCards = document.querySelector(".product__cards");

productCards.addEventListener("click", (event) => {
  if (event.target.className !== "fa-solid fa-square-plus") {
    return console.log("не кнопка");
  } else console.log("кнопка");
});

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
  renderCard(json);
});
