const cartList = document.querySelector(".header__basket-cart");

function renderCart() {
  const productsStore = localStorageUtil.getProducts();
  const fullPrice = document.querySelector(".fullprice");
  let sum = 0;

  products.forEach(({ id, name, price, previousPrice }) => {
    if (productsStore.indexOf(id) !== -1) {
      const cartElement = document.createElement("li"); // li
      cartElement.classList.add("cart-product");
      cartElement.innerHTML = `
    <article class="header__basket-product cart-product">
    
    <div class="cart-product__text">
    <h3 class="cart-product__description">${name}</h3>
    <span class="cart-product__price">${previousPrice}</span>
    </div>
    <button class="cart-product__delete" data-id=${id}></button>
    </article>
    `;
      sum += Number(previousPrice);
      cartList.append(cartElement);
      fullPrice.append(sum);
    }
  });
}

const cart = document.querySelector(".header__basket-logo");

cart.addEventListener("click", () => {
  renderCart();
  cartList.style.visibility = "visible";
});

const cartButton = document.querySelector(".header__basket-button");

cartButton.addEventListener(
  "click",
  () => (cartList.style.visibility = "hidden")
);
