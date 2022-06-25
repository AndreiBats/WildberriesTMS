document.querySelector("#searchbar").oninput = function () {
  let val = this.value.trim();
  let searchbarItem = document.querySelectorAll(".searchbar li");
  if (val != "") {
    searchbarItem.forEach(function (elem) {
      if (elem.innerText.search(val) === -1) {
        elem.classList.add("hide");
      } else {
        elem.classList.remove("hide");
      }
    });
  } else {
    searchbarItem.forEach(function (elem) {
      elem.classList.remove("hide");
    });
  }
};
