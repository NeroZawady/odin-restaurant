/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 453:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ae20bd223422a60965a0.jpg";

/***/ }),

/***/ 994:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/5be50ef8ca3a4e0f9151.jpg";

/***/ }),

/***/ 406:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/7d8e58b3676e8e895072.jpg";

/***/ }),

/***/ 507:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/64ecfba0020fb88de20b.jpg";

/***/ }),

/***/ 365:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/9c4b0ea88bdcef73cdf2.jpg";

/***/ }),

/***/ 868:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/b9bf224d2a856dbd1275.jpg";

/***/ }),

/***/ 79:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/cb6c0e0ce479121dda7c.jpg";

/***/ }),

/***/ 186:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/44ad57419dbba4c0ac86.jpg";

/***/ }),

/***/ 445:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/54830ff7be630bdd2ec7.jpg";

/***/ }),

/***/ 139:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/1c301c5406b2b16f88a6.jpg";

/***/ }),

/***/ 703:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/59dd5f792150c439e579.jpg";

/***/ }),

/***/ 217:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/648ccfd0c47767c08e5a.jpg";

/***/ }),

/***/ 324:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/06ec03913ec08c4509e2.jpg";

/***/ }),

/***/ 394:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/c019aab5e26695d56d7d.jpg";

/***/ }),

/***/ 502:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/3afb6a39f92af8f723d1.jpg";

/***/ }),

/***/ 907:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/483d9b4b08f61db18513.jpg";

/***/ }),

/***/ 470:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/d223446efae1a21d0c9f.jpg";

/***/ }),

/***/ 532:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/0f9dc6975334db697414.jpg";

/***/ }),

/***/ 269:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/14315033097704cbd056.jpg";

/***/ }),

/***/ 787:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/771dddecdb857c884f84.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: ./src/shared.js
const createElement = (tag, classes, id, text, image, event, parent) => {
  let element = document.createElement(tag);

  classes.forEach(aClass => element.classList.add(aClass));

  if(id !== null) {
    element.id = id;
  }

  if(text !== null) {
    element.textContent = text;
  }

  if(image !== null) {
    element.src = image.src;
    element.alt = image.alt;
  }

  if(event !== null) {
    element.addEventListener(event.trigger, () => event.function(element, ...event.args));
  }

  if(parent !== null) {
    parent.append(element);
  }

  return element;
}

const createSectionBlock = (title, text, imageSource, imageAltText, reversed, parent) => {
  let section = createElement("div", reversed ? ["section", "section--reversed"] : ["section"], null, null, null, null, parent);
  let section__textContainer = createElement("div", ["section__text-container"], null, null, null, null, section);
  let section__title = createElement("div", ["section__title"], null, title, null, null, section__textContainer);
  let section__text  = createElement("div", ["section__text"], null, text, null, null, section__textContainer);
  let section__image = createElement("img", ["section__image"], null, null, {src: imageSource, alt: imageAltText}, null, section);
}


// EXTERNAL MODULE: ./src/assets/new-meal-combos.jpg
var new_meal_combos = __webpack_require__(139);
// EXTERNAL MODULE: ./src/assets/special-winter-drinks.jpg
var special_winter_drinks = __webpack_require__(532);
// EXTERNAL MODULE: ./src/assets/now-hiring.jpg
var now_hiring = __webpack_require__(703);
;// CONCATENATED MODULE: ./src/home.js







const createContentHome  = () => {
  document.body.classList.add("body--loading");
  
  let content = document.querySelector(".content");

  createSectionBlock(
    "New Meal Combos",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nisi sequi, delectus impedit exercitationem dignissimos 
    nostrum perspiciatis, quis illum ipsam et eaque deserunt fuga dolores, officiis recusandae. Voluptatem natus cum qui, quis perspiciatis mollitia eveniet 
    suscipit repellat delectus iure, dolor molestias officia, perferendis labore nihil hic a iste. Accusamus, mollitia!`,
    new_meal_combos,
    "restaurant server with two food plates",
    false,
    content
    );

  createSectionBlock(
    "Special Winter Drinks",
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam distinctio recusandae tempora? A animi doloremque quasi 
    dicta ratione. Ex voluptate id nobis incidunt vitae eius aspernatur possimus necessitatibus totam reprehenderit!`,
    special_winter_drinks,
    "group of people sitting at a table and drinking",
    false,
    content
  );

  createSectionBlock(
    "Now Hiring",
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, illo quas quam, aliquam velit ut veritatis cum nemo 
    voluptate, sint quisquam voluptatum. Voluptate similique consequuntur, odio adipisci itaque exercitationem commodi dicta beatae nemo facere qui ducimus 
    hic, tenetur fuga possimus?`,
    now_hiring,
    "restaurant worker preparing dishes",
    false,
    content
  );
  
  document.body.classList.remove("body--loading");
}


// EXTERNAL MODULE: ./src/assets/chicken-stew.jpg
var chicken_stew = __webpack_require__(994);
// EXTERNAL MODULE: ./src/assets/pizza.jpg
var pizza = __webpack_require__(394);
// EXTERNAL MODULE: ./src/assets/salad.jpg
var salad = __webpack_require__(907);
// EXTERNAL MODULE: ./src/assets/spaghetti.jpg
var spaghetti = __webpack_require__(470);
// EXTERNAL MODULE: ./src/assets/toast.jpg
var toast = __webpack_require__(269);
// EXTERNAL MODULE: ./src/assets/lemon-drink.jpg
var lemon_drink = __webpack_require__(79);
// EXTERNAL MODULE: ./src/assets/mixed-drinks.jpg
var mixed_drinks = __webpack_require__(445);
// EXTERNAL MODULE: ./src/assets/orange-drink.jpg
var orange_drink = __webpack_require__(217);
// EXTERNAL MODULE: ./src/assets/orange-wine.jpg
var orange_wine = __webpack_require__(324);
// EXTERNAL MODULE: ./src/assets/wine.jpg
var wine = __webpack_require__(787);
// EXTERNAL MODULE: ./src/assets/brownies.jpg
var brownies = __webpack_require__(453);
// EXTERNAL MODULE: ./src/assets/chocolate-mousse.jpg
var chocolate_mousse = __webpack_require__(406);
// EXTERNAL MODULE: ./src/assets/cinnamon-rolls.jpg
var cinnamon_rolls = __webpack_require__(507);
// EXTERNAL MODULE: ./src/assets/macaroons.jpg
var macaroons = __webpack_require__(186);
// EXTERNAL MODULE: ./src/assets/raspberry-cupcakes.jpg
var raspberry_cupcakes = __webpack_require__(502);
;// CONCATENATED MODULE: ./src/menu.js





















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
    chicken_stew,
    "chicken stew dish",
    false,
    parent
  );

  createSectionBlock(
    "Pizza",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    pizza,
    "a pizza dish",
    false,
    parent
  );

  createSectionBlock(
    "Salad",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    salad,
    "a bowl salad",
    false,
    parent
  );
  
  createSectionBlock(
    "Spaghetti",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    spaghetti,
    "a spaghetti dish",
    false,
    parent
  );

  createSectionBlock(
    "Toast",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    toast,
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
    lemon_drink,
    "a glass of lemon drink",
    false,
    parent
  );
  
  createSectionBlock(
    "Mixed Drinks",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    mixed_drinks,
    "many drinks of mixed flavors",
    true,
    parent
  );
  
  createSectionBlock(
    "Orange Drink",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    orange_drink,
    "a glass of orange drink",
    false,
    parent
  );
  
  createSectionBlock(
    "Orange Wine",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    orange_wine,
    "a glass of orange wine",
    true,
    parent
  );
  
  createSectionBlock(
    "Wine",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    wine,
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
    brownies,
    "brownies in a plate",
    true,
    parent
  );
  
  createSectionBlock(
    "Chocolate Mousse",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    chocolate_mousse,
    "a glass of chocolate mousse",
    true,
    parent
  );
  
  createSectionBlock(
    "Cinnamon Rolls",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    cinnamon_rolls,
    "cinnamon rolls in a plate",
    true,
    parent
  );
  
  createSectionBlock(
    "Macaroons",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    macaroons,
    "macaroons in a plate",
    true,
    parent
  );
  
  createSectionBlock(
    "Raspberry Cupcakes",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    raspberry_cupcakes,
    "raspberry cupcakes",
    true,
    parent
  );
}


// EXTERNAL MODULE: ./src/assets/founders.jpg
var founders = __webpack_require__(868);
// EXTERNAL MODULE: ./src/assets/company-mission.jpg
var company_mission = __webpack_require__(365);
;// CONCATENATED MODULE: ./src/about.js






const createContentAbout = () => {
  document.body.classList.add("body--loading");

  let content = document.querySelector(".content")

  createSectionBlock(
    "Founders",
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vero quaerat sapiente eos quibusdam excepturi ullam 
    cupiditate eius blanditiis atque. Sequi repudiandae error doloremque eum adipisci eaque, possimus sed repellendus aut ea, commodi dolorem fuga 
    distinctio sint ex. Debitis, reiciendis ipsum fugit deserunt sit odit ex ullam officia nulla magni aliquam quibusdam non consequuntur, nihil architecto! 
    Eum sed dignissimos voluptatem ex delectus, ea reprehenderit natus.`,
    founders,
    "the three founders sitting at a couch and talking",
    false,
    content
  );

  createSectionBlock(
    "Company Mission",
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores corporis fugiat cupiditate consequuntur, 
    accusamus mollitia est, eligendi provident totam possimus quae? Ad perferendis optio odit totam. Sequi quasi officia molestiae suscipit odio, quibusdam 
    cum omnis ex, ad excepturi inventore!`,
    company_mission,
    "group of people putting their hands together in the center",
    true,
    content
  );

  let contacts = createElement("div", ["contacts"], null, null, null, null, content);
  let contacts__title = createElement("div", ["contacts__title"], null, "Contacts", null, null, contacts);
  let contacts__list = createElement("div", ["contacts__list"], null, null, null, null, contacts);

  createContact("Fancy Restaurant at A street - 000-000-0000", contacts__list);
  createContact("Fancy Restaurant at B street - 111-111-1111", contacts__list);
  createContact("Complaints - 222-222-2222", contacts__list);
  createContact("Careers Department - 333-333-3333", contacts__list);
  createContact("Kevin - 444-444-4444", contacts__list);
  createContact("Corporate Relations - 555-555-5555", contacts__list);

  document.body.classList.remove("body--loading");
}

const createContact = (text, parent) => {
  let contacts__contact = createElement("li", ["contacts__contact"], null, text, null, null, parent);
}


;// CONCATENATED MODULE: ./src/index.js









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
})();

/******/ })()
;