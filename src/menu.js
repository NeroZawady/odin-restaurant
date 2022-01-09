import meals1 from "./assets/chicken-stew.jpg";
import meals2 from "./assets/pizza.jpg";
import meals3 from "./assets/salad.jpg";
import meals4 from "./assets/spaghetti.jpg";
import meals5 from "./assets/toast.jpg";

import drinks1 from "./assets/lemon-drink.jpg";
import drinks2 from "./assets/mixed-drinks.jpg";
import drinks3 from "./assets/orange-drink.jpg";
import drinks4 from "./assets/orange-wine.jpg";
import drinks5 from "./assets/wine.jpg";

import dessert1 from "./assets/brownies.jpg";
import dessert2 from "./assets/chocolate-mousse.jpg";
import dessert3 from "./assets/cinnamon-rolls.jpg";
import dessert4 from "./assets/macaroons.jpg";
import dessert5 from "./assets/raspberry-cupcakes.jpg";

import { createElement, createSectionBlock } from "./shared";


const createContentMenu = () => {
  document.body.classList.add("body--loading");

  let content = document.querySelector(".content");

  createMenu(content);
  createSubmenu("Meals", true, content);
  createSubmenu("Drinks", false, content);
  createSubmenu("Dessert", false, content);

  document.body.classList.remove("body--loading");
}

const createMenu = (parent) => {
  let menu = createElement("div", ["menu"], null, null, null, null, parent);
  let menu__links = [];
  menu__links.push(createElement("a", ["menu__link", "menu__link--selected"], null, "Meals", null, {trigger: "click", function: addMenuLinkEvent, args: []}, menu));
  menu__links.push(createElement("a", ["menu__link"], null, "Drinks", null, {trigger: "click", function: addMenuLinkEvent, args: []}, menu));
  menu__links.push(createElement("a", ["menu__link"], null, "Dessert", null, {trigger: "click", function: addMenuLinkEvent, args: []}, menu));
}

const addMenuLinkEvent = (link) => {
  let previousSelectedLink = document.querySelector(".menu__link--selected");
  previousSelectedLink.classList.remove("menu__link--selected");
  link.classList.add("menu__link--selected");

  let previousSelectedSubmenu = document.querySelector("#" + previousSelectedLink.textContent);
  previousSelectedSubmenu.classList.remove("submenu--selected");
  let selectedSubmenu = document.querySelector("#" + link.textContent);
  selectedSubmenu.classList.add("submenu--selected");
}

const createSubmenu = (category, selected, parent) => {
  let submenu = createElement("div", selected ? ["submenu", "submenu--selected"] : ["submenu"], category, null, null, null, parent);
  let submenu__title = createElement("div", ["submenu__title"], null, category, null, null, submenu);

  if(category === "Meals") {
    createMeals(submenu);
  } else if(category === "Drinks") {
    createDrinks(submenu);
  } else if (category === "Dessert") {
    createDessert(submenu);
  }
}

const createMeals = (parent) => {
  createSectionBlock(
    "Chicken Stew",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    meals1,
    "chicken stew dish",
    false,
    parent
  );

  createSectionBlock(
    "Pizza",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    meals2,
    "a pizza dish",
    false,
    parent
  );

  createSectionBlock(
    "Salad",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    meals3,
    "a bowl salad",
    false,
    parent
  );
  
  createSectionBlock(
    "Spaghetti",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    meals4,
    "a spaghetti dish",
    false,
    parent
  );

  createSectionBlock(
    "Toast",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    meals5,
    "a plate of toast",
     false,
     parent
  );
}

const createDrinks = (parent) => {
  createSectionBlock(
    "Lemon Drink",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    drinks1,
    "a glass of lemon drink",
    false,
    parent
  );
  
  createSectionBlock(
    "Mixed Drinks",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    drinks2,
    "many drinks of mixed flavors",
    true,
    parent
  );
  
  createSectionBlock(
    "Orange Drink",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    drinks3,
    "a glass of orange drink",
    false,
    parent
  );
  
  createSectionBlock(
    "Orange Wine",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    drinks4,
    "a glass of orange wine",
    true,
    parent
  );
  
  createSectionBlock(
    "Wine",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    drinks5,
    "a glass of wine",
    false,
    parent
  );
}

const createDessert = (parent) => {
  createSectionBlock(
    "Brownies",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    dessert1,
    "brownies in a plate",
    true,
    parent
  );
  
  createSectionBlock(
    "Chocolate Mousse",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    dessert2,
    "a glass of chocolate mousse",
    true,
    parent
  );
  
  createSectionBlock(
    "Cinnamon Rolls",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    dessert3,
    "cinnamon rolls in a plate",
    true,
    parent
  );
  
  createSectionBlock(
    "Macaroons",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    dessert4,
    "macaroons in a plate",
    true,
    parent
  );
  
  createSectionBlock(
    "Raspberry Cupcakes",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    dessert5,
    "raspberry cupcakes",
    true,
    parent
  );
}

export { createContentMenu };