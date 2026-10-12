new Swiper(".heroSwiper", {
  loop: true,
  effect: "fade",
  fadeEffect: { crossFade: true },
  speed: 900,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: { el: ".heroSwiper .swiper-pagination", clickable: true },
  navigation: { nextEl: ".hero-next", prevEl: ".hero-prev" },
  keyboard: { enabled: true },
});
