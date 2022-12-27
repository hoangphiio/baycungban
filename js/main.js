import swapButtonModule from "./modules/swapButtonModule.js";
import dropdownModule from "./modules/dropdownModule.js";
import switchLanguages from "./modules/switchLanguages.js";
import headerMenu from "./modules/headerMenu.js";
import swiperModule from "./modules/swiperModule.js";

window.addEventListener("DOMContentLoaded", () => {
    swapButtonModule();
    dropdownModule();
    switchLanguages();
    headerMenu();
    swiperModule();
});
