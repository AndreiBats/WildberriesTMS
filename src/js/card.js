function fetchCards() {
  return fetch("https://62b5dfa342c6473c4b3c12c2.mockapi.io/card").then(
    (response) => {
      return response.json();
    }
  );
}

const productCards = document.querySelector(".product__cards");

productCards.addEventListener("click", (event) => {
  const ID = event.target.id;
  const btn = event.target;

  const { pushProduct, products } = localStorageUtil.putProducts(ID);

  if (btn.tagName === "BUTTON") {
    if (pushProduct) {
      btn.classList.add("product__card__btn_active");
      btn.innerHTML = "Удалить из корзины";
    } else {
      btn.classList.remove("product__card__btn_active");
      btn.innerHTML = "Добавить в корзину";
    }
  }

  count.append(products.length);
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
    <p class="product__card__price">Цена ${price}</p>
    <p class="product__card__previous"> ${previousPrice}</p>
    <button class="product__card__btn${activeClass}" id="${id}">${activeText}</button>
  `;

    productCards.append(cardElement);
  });
}

let products = null;

fetchCards().then((json) => {
  products = json;
  renderCard(products);
});
