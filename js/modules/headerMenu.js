export default function headerMenu() {
  // Open and Close Navbar Menu
  const navbarMenu = document.getElementById("menu");
  const burgerMenu = document.getElementById("burger");
  const bgOverlay = document.querySelector(".overlay");

  if (burgerMenu && bgOverlay && burgerMenu) {
    burgerMenu.addEventListener("click", () => {
      navbarMenu.classList.add("is-active");
      bgOverlay.classList.toggle("is-active");
      burgerMenu.classList.toggle("is-active");
    });

    bgOverlay.addEventListener("click", () => {
      navbarMenu.classList.remove("is-active");
      burgerMenu.classList.remove("is-active");
      bgOverlay.classList.toggle("is-active");
    });
  }

  // Close Navbar Menu on Links Click
  document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
      navbarMenu.classList.remove("is-active");
      bgOverlay.classList.remove("is-active");
      burgerMenu.classList.remove("is-active");
    });
  });
}
