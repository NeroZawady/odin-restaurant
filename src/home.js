import image1 from "./assets/new-meal-combos.jpg";
import image2 from "./assets/special-winter-drinks.jpg";
import image3 from "./assets/now-hiring.jpg";
import { createSectionBlock } from "./section";

const createContentHome  = () => {
  let content = document.querySelector(".content");

  content.append(createSectionBlock(
    "New Meal Combos",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nisi sequi, delectus impedit exercitationem dignissimos 
    nostrum perspiciatis, quis illum ipsam et eaque deserunt fuga dolores, officiis recusandae. Voluptatem natus cum qui, quis perspiciatis mollitia eveniet 
    suscipit repellat delectus iure, dolor molestias officia, perferendis labore nihil hic a iste. Accusamus, mollitia!`,
    image1,
    "restaurant server with two food plates",
    false));

  content.append(createSectionBlock(
    "Special Winter Drinks",
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam distinctio recusandae tempora? A animi doloremque quasi 
    dicta ratione. Ex voluptate id nobis incidunt vitae eius aspernatur possimus necessitatibus totam reprehenderit!`,
    image2,
    "group of people sitting at a table and drinking",
    false
  ));

  content.append(createSectionBlock(
    "Now Hiring",
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, illo quas quam, aliquam velit ut veritatis cum nemo 
    voluptate, sint quisquam voluptatum. Voluptate similique consequuntur, odio adipisci itaque exercitationem commodi dicta beatae nemo facere qui ducimus 
    hic, tenetur fuga possimus?`,
    image3,
    "restaurant worker preparing dishes",
    false
  ));
}

export { createContentHome };