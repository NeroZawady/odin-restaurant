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

export { createSectionBlock };