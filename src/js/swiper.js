import Swiper, { Navigation, Pagination } from "swiper";

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
