let cart = document.querySelector(".header__basket-logo");
cart.addEventListener("click", () =>
  console.log(typeof document.querySelector(".header__basket-list"))
);

cart.style.visibility = "hidden"; // hide
