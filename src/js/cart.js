const cartList = document.querySelector(".header__basket-list");
const counter = document.querySelector(".header__basket-counter");
const fullPrice = document.querySelector(".header__basket-fullprice");

function fullSum(price) {
  let c = 0;
  c += Number(price);
  return fullPrice.append(c);
}

function renderCart() {
  const productsStore = localStorageUtil.getProducts();
  counter.append(productsStore.length);

  products.forEach(({ id, name, previousPrice }) => {
    if (productsStore.indexOf(id) !== -1) {
      const cartElement = document.createElement("div");
      cartElement.classList.add("cart-product");
      cartElement.innerHTML = `
    <article class="header__basket-product cart-product">
    <div class="cart-product__text">
    <h3 class="cart-product__description">${name}</h3>
    <span class="cart-product__price">Цена: ${previousPrice}</span>
    </div>
    </article>
    `;
      fullSum(previousPrice);
      cartList.append(cartElement);
    }
  });
}

const cart = document.querySelector(".header__basket-logo");

cart.addEventListener("click", () => {
  renderCart();
  cart.style.display = "none";
  cartList.style.visibility = "visible";
  cartButton.style.display = "inline";
  counter.style.display = "inline";
  fullPrice.style.display = "inline";
});

const cartButton = document.querySelector(".header__basket-button");

function deleteCartList() {
  cartList.innerHTML = "";
  counter.innerHTML = "";
  fullPrice.innerHTML = " ";
}

cartButton.addEventListener("click", () => {
  deleteCartList();
  cart.style.display = "block";
  cartList.style.visibility = "hidden";
  cartButton.style.display = "none";
  counter.style.display = "none";
  fullPrice.style.display = "none";
});
