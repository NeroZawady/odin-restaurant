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

import { createSectionBlock } from "./section";

const createContentMenu = () => {
  let content = document.querySelector(".content");
  content.append(createMenu());
  content.append(createSubmenu("Meals", true));
  content.append(createSubmenu("Drinks", false));
  content.append(createSubmenu("Dessert", false));
}

const createMenu = () => {
  let menu = document.createElement("div");
  menu.classList.add("menu");

  menu.append(createMenuLink("Meals", true));
  menu.append(createMenuLink("Drinks", false));
  menu.append(createMenuLink("Dessert", false));

  return menu;
}

const createMenuLink = (text, selected) => {
  let menu__link = document.createElement("div");
  menu__link.classList.add("menu__link");

  if(selected) {
    menu__link.classList.add("menu__link--selected");
  }

  menu__link.textContent = text;

  menu__link.addEventListener("click", () => {
    let selectedLink = document.querySelector(".menu__link--selected");
    selectedLink.classList.remove("menu__link--selected");
    menu__link.classList.add("menu__link--selected");

    let selectedSubmenu = document.querySelector("#" + selectedLink.textContent);
    selectedSubmenu.classList.remove("submenu--selected");
    let clickedSubmenu = document.querySelector("#" + menu__link.textContent);
    clickedSubmenu.classList.add("submenu--selected");
  })

  return menu__link;
}

const createSubmenu = (id, selected) => {
  let submenu = document.createElement("div");
  submenu.classList.add("submenu");
  submenu.id = id;

  if(selected) {
    submenu.classList.add("submenu--selected");
  }

  let submenu__title = document.createElement("div");
  submenu__title.classList.add("submenu__title");
  submenu__title.textContent = id;
  submenu.append(submenu__title);

  if(id === "Meals") {
    createMeals(submenu);
  } else if(id === "Drinks") {
    createDrinks(submenu);
  } else if (id === "Dessert") {
    createDessert(submenu);
  }

  return submenu;
}

const createMeals = (submenu) => {
  submenu.append(createSectionBlock(
    "Chicken Stew",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    meals1,
    "chicken stew dish",
    false
  ));

  submenu.append(createSectionBlock(
    "Pizza",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    meals2,
    "a pizza dish",
    false
  ));

  submenu.append(createSectionBlock(
    "Salad",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    meals3,
    "a bowl salad",
    false
  ));
  
  submenu.append(createSectionBlock(
    "Spaghetti",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    meals4,
    "a spaghetti dish",
    false
  ));

  submenu.append(createSectionBlock(
    "Toast",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    meals5,
    "a plate of toast",
     false
  ));
}

const createDrinks = (submenu) => {
  submenu.append(createSectionBlock(
    "Lemon Drink",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    drinks1,
    "a glass of lemon drink",
    false
  ));
  
  submenu.append(createSectionBlock(
    "Mixed Drinks",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    drinks2,
    "many drinks of mixed flavors",
    true
  ));
  
  submenu.append(createSectionBlock(
    "Orange Drink",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    drinks3,
    "a glass of orange drink",
    false
  ));
  
  submenu.append(createSectionBlock(
    "Orange Wine",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    drinks4,
    "a glass of orange wine",
    true
  ));
  
  submenu.append(createSectionBlock(
    "Wine",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    drinks5,
    "a glass of wine",
    false
  ));
}

const createDessert = (submenu) => {
  submenu.append(createSectionBlock(
    "Brownies",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    dessert1,
    "brownies in a plate",
    true
  ))
  
  submenu.append(createSectionBlock(
    "Chocolate Mousse",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    dessert2,
    "a glass of chocolate mousse",
    true
  ))
  
  submenu.append(createSectionBlock(
    "Cinnamon Rolls",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    dessert3,
    "cinnamon rolls in a plate",
    true
  ))
  
  submenu.append(createSectionBlock(
    "Macaroons",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    dessert4,
    "macaroons in a plate",
    true
  ))
  
  submenu.append(createSectionBlock(
    "Raspberry Cupcakes",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    dessert5,
    "raspberry cupcakes",
    true
  ))
}

export { createContentMenu };