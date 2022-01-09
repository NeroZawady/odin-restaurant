// import everything in assets folder
// function requireAll(r) { r.keys().forEach(r); }
// requireAll(require.context("./assets/", true, /\.*$/));
import normalize from "./normalize.css"
import stylesheet from "./style.css";
import { createContentHome } from "./home";
import { createContentMenu } from "./menu";
import { createContentAboutUs } from "./aboutUs";


const createHeader = () => {
  let header = document.createElement("div");
  header.classList.add("header");

  let header__name = document.createElement("div");
  header__name.classList.add("header__name");
  header__name.textContent = "Fancy Restaurant";
  header.append(header__name);

  let header__menu = document.createElement("div");
  header__menu.classList.add("header__menu");

  let header__links = [];
  header__links.push(document.createElement("div"));
  header__links.push(document.createElement("div"));
  header__links.push(document.createElement("div"));

  header__links.forEach(link => link.classList.add("header__link"));
  header__links[0].classList.add("header__link--selected");

  header__links[0].textContent = "Home";
  header__links[1].textContent = "Menu";
  header__links[2].textContent = "About Us";

  header__links[0].id = "home";
  header__links[1].id = "menu";
  header__links[2].id = "aboutUs";

  header__links.forEach(link => header__menu.append(link));

  header.append(header__menu);
  document.body.append(header);

  let content = document.createElement("div");
  content.classList.add("content")
  document.body.append(content);

  header__links[0].addEventListener("click", () => {
    let content = document.querySelector(".content");
    while(content.lastChild) {
      content.removeChild(content.lastChild);
    }
    createContentHome();
    document.title = "Fancy Restaurant";

    let selectedLink = document.querySelector(".header__link--selected");
    selectedLink.classList.remove("header__link--selected");
    header__links[0].classList.add("header__link--selected");
  })
  
  header__links[1].addEventListener("click", () => {
    let content = document.querySelector(".content");
    while(content.lastChild) {
      content.removeChild(content.lastChild);
    }
    createContentMenu();
    document.title = "Menu - Fancy Restaurant";

    let selectedLink = document.querySelector(".header__link--selected");
    selectedLink.classList.remove("header__link--selected");
    header__links[1].classList.add("header__link--selected");
  })
  
  header__links[2].addEventListener("click", () => {
    console.log("A");
    let content = document.querySelector(".content");
    while(content.lastChild) {
      content.removeChild(content.lastChild);
    }
    createContentAboutUs();
    document.title = "About Us - Fancy Restaurant";

    let selectedLink = document.querySelector(".header__link--selected");
    selectedLink.classList.remove("header__link--selected");
    header__links[2].classList.add("header__link--selected");
  })
}

const createFooter = () => {
  let footer = document.createElement("div");
  footer.classList.add("footer");
  footer.textContent = "Property of Fancy Inc.";

  document.body.append(footer);
}


createHeader();


createContentHome();
createFooter();



// let menu__links = document.querySelectorAll(".menu__link");
// let submenus = document.querySelectorAll(".submenu");

// menu__links.forEach((menu__link) => {
//   menu__link.addEventListener("click", () => {
//     for(let link of menu__links.values()) {
//       if(link == menu__link) {
//         link.classList.add("menu__link--selected");
//       } else {
//         link.classList.remove("menu__link--selected");
//       }
//     }

//     for(let submenu of submenus.values()) {
//       if(submenu.id === menu__link.textContent) {
//         submenu.classList.remove("submenu--hidden");
//       } else {
//         submenu.classList.add("submenu--hidden");
//       }
//     }
//   })
// });



// let home = document.querySelector("#home");
// let menu = document.querySelector("#menu");
// let aboutUs = document.querySelector("#aboutUs");

// home.addEventListener("click", () => {
//   createContentHome();
// });

// menu.addEventListener("click", () => {
//   createContentMenu();
// });

// aboutUs.addEventListener("click", () => {
//   createContentAboutUs();
// });