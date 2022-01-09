import normalize from "./normalize.css"
import stylesheet from "./style.css";

import { createElement } from "./shared";
import { createContentHome } from "./home";
import { createContentMenu } from "./menu";
import { createContentAbout } from "./about";


const createHeader = () => {
  let header = createElement("div", ["header"], null, null, null, null, document.body);
  let header__name = createElement("div", ["header__name"], null, "Fancy Restaurant", null, null, header);
  let header__menu = createElement("div", ["header__menu"], null, null, null, null, header);
  let header__links = [];
  header__links.push(createElement("a", ["header__link", "header__link--selected"], null, "Home", null, {trigger: "click", function: addHeaderLinkEvent, args: [{title: "Fancy Restaurant", function: createContentHome}]}, header__menu));
  header__links.push(createElement("a", ["header__link"], null, "Menu", null, {trigger: "click", function: addHeaderLinkEvent, args: [{title: "Menu - Fancy Restaurant", function: createContentMenu}]}, header__menu));
  header__links.push(createElement("a", ["header__link"], null, "About", null, {trigger: "click", function: addHeaderLinkEvent, args: [{title: "About - Fancy Restaurant", function: createContentAbout}]}, header__menu));
}

const addHeaderLinkEvent = (link, page) => {
  document.body.classList.add("body--loading");

  let content = document.querySelector(".content");
  while(content !== null && content.lastChild) {
    content.removeChild(content.lastChild);
  }

  page.function();
  document.title = page.title;

  let previousSelectedLink = document.querySelector(".header__link--selected");
  previousSelectedLink.classList.remove("header__link--selected");
  link.classList.add("header__link--selected");

  document.body.classList.remove("body--loading");
}

const createFooter = () => {
  let footer = createElement("div", ["footer"], null, "Property of Fancy Inc.", null, null, document.body);

  // let footer = document.createElement("div");
  // footer.classList.add("footer");
  // footer.textContent = "Property of Fancy Inc.";

  // document.body.append(footer);
}


document.body.classList.add("body--loading");

createHeader();
let content = createElement("div", ["content"], null, null, null, null, document.body);
createContentHome();
createFooter();

document.body.classList.remove("body--loading");