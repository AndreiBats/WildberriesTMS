const count = document.querySelector(".header__counter");
const productsStore = localStorageUtil.getProducts();
count.append(productsStore.length);
