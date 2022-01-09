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

// EXTERNAL MODULE: ./src/assets/new-meal-combos.jpg
var new_meal_combos = __webpack_require__(139);
// EXTERNAL MODULE: ./src/assets/special-winter-drinks.jpg
var special_winter_drinks = __webpack_require__(532);
// EXTERNAL MODULE: ./src/assets/now-hiring.jpg
var now_hiring = __webpack_require__(703);
;// CONCATENATED MODULE: ./src/section.js
const createSectionBlock = (title, text, imageSource, imageAltText, reversed) => {
  let section = document.createElement("div");
  section.classList.add("section");

  if(reversed) {
    section.classList.add("section--reversed");
  }

  let section__textContainer = document.createElement("div");
  section__textContainer.classList.add("section__text-container");
  section.append(section__textContainer);

  let section__title = document.createElement("div");
  section__title.classList.add("section__title");
  section__title.textContent = title;
  section__textContainer.append(section__title);

  let section__text = document.createElement("div");
  section__text.classList.add("section__text");
  section__text.textContent = text;
  section__textContainer.append(section__text);

  let image = document.createElement("img");
  image.classList.add("section__image");
  image.src = imageSource;
  image.alt = imageAltText;
  section.append(image);

  return section;
}


;// CONCATENATED MODULE: ./src/home.js





const createContentHome  = () => {
  let content = document.querySelector(".content");

  content.append(createSectionBlock(
    "New Meal Combos",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nisi sequi, delectus impedit exercitationem dignissimos 
    nostrum perspiciatis, quis illum ipsam et eaque deserunt fuga dolores, officiis recusandae. Voluptatem natus cum qui, quis perspiciatis mollitia eveniet 
    suscipit repellat delectus iure, dolor molestias officia, perferendis labore nihil hic a iste. Accusamus, mollitia!`,
    new_meal_combos,
    "restaurant server with two food plates",
    false));

  content.append(createSectionBlock(
    "Special Winter Drinks",
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam distinctio recusandae tempora? A animi doloremque quasi 
    dicta ratione. Ex voluptate id nobis incidunt vitae eius aspernatur possimus necessitatibus totam reprehenderit!`,
    special_winter_drinks,
    "group of people sitting at a table and drinking",
    false
  ));

  content.append(createSectionBlock(
    "Now Hiring",
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, illo quas quam, aliquam velit ut veritatis cum nemo 
    voluptate, sint quisquam voluptatum. Voluptate similique consequuntur, odio adipisci itaque exercitationem commodi dicta beatae nemo facere qui ducimus 
    hic, tenetur fuga possimus?`,
    now_hiring,
    "restaurant worker preparing dishes",
    false
  ));
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
    chicken_stew,
    "chicken stew dish",
    false
  ));

  submenu.append(createSectionBlock(
    "Pizza",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    pizza,
    "a pizza dish",
    false
  ));

  submenu.append(createSectionBlock(
    "Salad",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    salad,
    "a bowl salad",
    false
  ));
  
  submenu.append(createSectionBlock(
    "Spaghetti",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    spaghetti,
    "a spaghetti dish",
    false
  ));

  submenu.append(createSectionBlock(
    "Toast",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    toast,
    "a plate of toast",
     false
  ));
}

const createDrinks = (submenu) => {
  submenu.append(createSectionBlock(
    "Lemon Drink",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    lemon_drink,
    "a glass of lemon drink",
    false
  ));
  
  submenu.append(createSectionBlock(
    "Mixed Drinks",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    mixed_drinks,
    "many drinks of mixed flavors",
    true
  ));
  
  submenu.append(createSectionBlock(
    "Orange Drink",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    orange_drink,
    "a glass of orange drink",
    false
  ));
  
  submenu.append(createSectionBlock(
    "Orange Wine",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    orange_wine,
    "a glass of orange wine",
    true
  ));
  
  submenu.append(createSectionBlock(
    "Wine",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    wine,
    "a glass of wine",
    false
  ));
}

const createDessert = (submenu) => {
  submenu.append(createSectionBlock(
    "Brownies",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    brownies,
    "brownies in a plate",
    true
  ))
  
  submenu.append(createSectionBlock(
    "Chocolate Mousse",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    chocolate_mousse,
    "a glass of chocolate mousse",
    true
  ))
  
  submenu.append(createSectionBlock(
    "Cinnamon Rolls",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    cinnamon_rolls,
    "cinnamon rolls in a plate",
    true
  ))
  
  submenu.append(createSectionBlock(
    "Macaroons",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    macaroons,
    "macaroons in a plate",
    true
  ))
  
  submenu.append(createSectionBlock(
    "Raspberry Cupcakes",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, unde consequuntur vitae quidem recusandae nemo rem 
    nisi illo ab incidunt quae dicta sequi sed quam assumenda debitis iure maxime dolores. Vitae at voluptatem assumenda autem.`,
    raspberry_cupcakes,
    "raspberry cupcakes",
    true
  ))
}


// EXTERNAL MODULE: ./src/assets/founders.jpg
var founders = __webpack_require__(868);
// EXTERNAL MODULE: ./src/assets/company-mission.jpg
var company_mission = __webpack_require__(365);
;// CONCATENATED MODULE: ./src/aboutUs.js




const createContentAboutUs = () => {
  let content = document.querySelector(".content")

  content.append(createSectionBlock(
    "Founders",
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vero quaerat sapiente eos quibusdam excepturi ullam 
    cupiditate eius blanditiis atque. Sequi repudiandae error doloremque eum adipisci eaque, possimus sed repellendus aut ea, commodi dolorem fuga 
    distinctio sint ex. Debitis, reiciendis ipsum fugit deserunt sit odit ex ullam officia nulla magni aliquam quibusdam non consequuntur, nihil architecto! 
    Eum sed dignissimos voluptatem ex delectus, ea reprehenderit natus.`,
    founders,
    "the three founders sitting at a couch and talking",
    false
  ));

  content.append(createSectionBlock(
    "Company Mission",
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores corporis fugiat cupiditate consequuntur, 
    accusamus mollitia est, eligendi provident totam possimus quae? Ad perferendis optio odit totam. Sequi quasi officia molestiae suscipit odio, quibusdam 
    cum omnis ex, ad excepturi inventore!`,
    company_mission,
    "group of people putting their hands together in the center",
    true
  ));

  let contacts = document.createElement("div");
  contacts.classList.add("contacts");

  let contacts__title = document.createElement("div");
  contacts__title.classList.add("contacts__title");
  contacts__title.textContent = "Contacts";
  contacts.append(contacts__title);

  let contacts__list = document.createElement("div");
  contacts__list.classList.add("contacts__list");

  contacts__list.append(createContact("Fancy Restaurant at A street - 000-000-0000"));
  contacts__list.append(createContact("Fancy Restaurant at B street - 111-111-1111"));
  contacts__list.append(createContact("Complaints - 222-222-2222"));
  contacts__list.append(createContact("Careers Department - 333-333-3333"));
  contacts__list.append(createContact("Kevin - 444-444-4444"));
  contacts__list.append(createContact("Corporate Relations - 555-555-5555"));

  contacts.append(contacts__list);
  content.append(contacts);
}

const createContact = (text) => {
  let contacts__contact = document.createElement("li");
  contacts__contact.classList.add("contacts__contact");
  contacts__contact.textContent = text;

  return contacts__contact;
}


;// CONCATENATED MODULE: ./src/index.js
// import everything in assets folder
// function requireAll(r) { r.keys().forEach(r); }
// requireAll(require.context("./assets/", true, /\.*$/));







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
})();

/******/ })()
;