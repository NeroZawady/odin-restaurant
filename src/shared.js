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

export { createElement, createSectionBlock };