function fetchCards() {
  return fetch("https://62b5dfa342c6473c4b3c12c2.mockapi.io/card").then(
    (response) => {
      return response.json();
    }
  );
}

const productCards = document.querySelector(".product__cards");

productCards.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const ID = event.target.id;
    const { pushProduct, products } = localStorageUtil.putProducts(ID);
    if (pushProduct) {
      event.target.classList.add("product__card__btn_active");
      event.target.innerHTML = "Удалить из корзины";
    } else {
      event.target.classList.remove("product__card__btn_active");
      event.target.innerHTML = "Добавить в корзину";
    }
  }
});

function renderCard(cards) {
  const productsStore = localStorageUtil.getProducts();

  cards.forEach(({ id, name, image, price, previousPrice }) => {
    let activeClass = "";
    let activeText = "";

    if (productsStore.indexOf(id) === -1) {
      activeText = "Добавить в корзину";
    } else {
      activeClass = " product__card__btn_active";
      activeText = "Удалить из корзины";
    }

    const cardElement = document.createElement("div");
    cardElement.classList.add("product__card");
    cardElement.innerHTML = `
    <h3 class="product__card__title">${name}</h3>  
    <img src="${image}" alt="photo" class="product__photo">
    <p class="product__card__price">Цена: ${price}</p>
    <span>Цена со скидкой: <p class="product__card__previous"> ${previousPrice}</p></span> 
    <button class="product__card__btn${activeClass} button" id="${id}">${activeText}</button>
  `;

    productCards.append(cardElement);
  });
}

let products = null;

fetchCards().then((json) => {
  products = json;
  renderCard(products);
});
