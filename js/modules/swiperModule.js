export default function swiperModule() {
  const swiperContent = new Swiper(".main-swiper .swiper", {
    direction: "vertical",
    slidesPerView: 1,
    mousewheel: true,
    speed: 800,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
