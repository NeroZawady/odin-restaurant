import image1 from "./assets/founders.jpg";
import image2 from "./assets/company-mission.jpg";

import { createElement, createSectionBlock } from "./shared";


const createContentAbout = () => {
  document.body.classList.add("body--loading");

  let content = document.querySelector(".content")

  createSectionBlock(
    "Founders",
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vero quaerat sapiente eos quibusdam excepturi ullam 
    cupiditate eius blanditiis atque. Sequi repudiandae error doloremque eum adipisci eaque, possimus sed repellendus aut ea, commodi dolorem fuga 
    distinctio sint ex. Debitis, reiciendis ipsum fugit deserunt sit odit ex ullam officia nulla magni aliquam quibusdam non consequuntur, nihil architecto! 
    Eum sed dignissimos voluptatem ex delectus, ea reprehenderit natus.`,
    image1,
    "the three founders sitting at a couch and talking",
    false,
    content
  );

  createSectionBlock(
    "Company Mission",
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores corporis fugiat cupiditate consequuntur, 
    accusamus mollitia est, eligendi provident totam possimus quae? Ad perferendis optio odit totam. Sequi quasi officia molestiae suscipit odio, quibusdam 
    cum omnis ex, ad excepturi inventore!`,
    image2,
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

export { createContentAbout };