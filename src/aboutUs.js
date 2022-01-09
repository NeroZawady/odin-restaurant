import image1 from "./assets/founders.jpg";
import image2 from "./assets/company-mission.jpg";
import { createSectionBlock } from "./section";

const createContentAboutUs = () => {
  let content = document.querySelector(".content")

  content.append(createSectionBlock(
    "Founders",
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vero quaerat sapiente eos quibusdam excepturi ullam 
    cupiditate eius blanditiis atque. Sequi repudiandae error doloremque eum adipisci eaque, possimus sed repellendus aut ea, commodi dolorem fuga 
    distinctio sint ex. Debitis, reiciendis ipsum fugit deserunt sit odit ex ullam officia nulla magni aliquam quibusdam non consequuntur, nihil architecto! 
    Eum sed dignissimos voluptatem ex delectus, ea reprehenderit natus.`,
    image1,
    "the three founders sitting at a couch and talking",
    false
  ));

  content.append(createSectionBlock(
    "Company Mission",
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores corporis fugiat cupiditate consequuntur, 
    accusamus mollitia est, eligendi provident totam possimus quae? Ad perferendis optio odit totam. Sequi quasi officia molestiae suscipit odio, quibusdam 
    cum omnis ex, ad excepturi inventore!`,
    image2,
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

export { createContentAboutUs };