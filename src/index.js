import normalize from "./normalize.css"
import stylesheet from "./style.css";

// import everything in assets folder
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./assets/', true, /\.*$/));

let menu__links = document.querySelectorAll(".menu__link");
let submenus = document.querySelectorAll(".submenu");

menu__links.forEach((menu__link) => {
  menu__link.addEventListener("click", () => {
    for(let link of menu__links.values()) {
      if(link == menu__link) {
        link.classList.add("menu__link--highlighted");
      } else {
        link.classList.remove("menu__link--highlighted");
      }
    }

    for(let submenu of submenus.values()) {
      if(submenu.id === menu__link.textContent) {
        submenu.classList.remove("submenu--hidden");
      } else {
        submenu.classList.add("submenu--hidden");
      }
    }
  })
})