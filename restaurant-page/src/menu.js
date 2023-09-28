import burgerImage from "./assets/images/burger.jpg";
import friesImage from "./assets/images/fries.jpg";
import pastaImage from "./assets/images/pasta.jpg";
import saladImage from "./assets/images/salad.jpg";
import sandwhichImage from "./assets/images/sandwhich.jpg";
import sodaImage from "./assets/images/sodas.jpg";
import soupImage from "./assets/images/soup.jpg";
import teaImage from "./assets/images/teas.jpg";

const MenuPage = () => {
  const content = document.querySelector(".content");

  const menuPageMainContent = () => {
    const container = document.createElement("div");
    container.classList.add("menu-container");
    container.classList.add("content-container");

    content.appendChild(container);
    container.appendChild(menuHeading());
    container.appendChild(beveragesSection());
    container.appendChild(sidesSection());
    container.appendChild(dishesSection());
  };

  const menuHeading = () => {
    const menuHeading = document.createElement("h1");
    menuHeading.classList.add("menu-heading");
    menuHeading.innerText = "Menu";

    return menuHeading;
  };

  const beveragesHeading = () => {
    const beveragesHeading = document.createElement("h1");
    beveragesHeading.innerText = "Beverages";

    return beveragesHeading;
  };

  const beveragesSoda = () => {
    const sodaContent = document.createElement("div");
    sodaContent.classList.add("bev-content");
    sodaContent.classList.add("menu-item");

    const sodaTitle = document.createElement("h2");
    sodaTitle.innerText = "Sodas";

    const sodaInfo = document.createElement("p");
    sodaInfo.innerText = "Coke Products Available via Can";

    const sodaImg = document.createElement("img");
    sodaImg.src = sodaImage;

    sodaContent.appendChild(sodaTitle);
    sodaContent.appendChild(sodaInfo);
    sodaContent.appendChild(sodaImg);

    return sodaContent;
  };

  const beveragesTea = () => {
    const teaContent = document.createElement("div");
    teaContent.classList.add("bev-content");
    teaContent.classList.add("menu-item");

    const teaTitle = document.createElement("h2");
    teaTitle.innerText = "Tea";

    const teaInfo = document.createElement("p");
    teaInfo.innerText = "Variety of herbal and caffinated teas";

    const teaImg = document.createElement("img");
    teaImg.src = teaImage;

    teaContent.appendChild(teaTitle);
    teaContent.appendChild(teaInfo);
    teaContent.appendChild(teaImg);

    return teaContent;
  };

  const beveragesSection = () => {
    const beveragesSection = document.createElement("div");
    beveragesSection.classList.add("menu-section");
    beveragesSection.appendChild(beveragesHeading());
    beveragesSection.appendChild(beveragesSoda());
    beveragesSection.appendChild(beveragesTea());

    return beveragesSection;
  };

  const sidesHeading = () => {
    const sidesHeading = document.createElement("h1");
    sidesHeading.innerText = "Side Dishes";

    return sidesHeading;
  };

  const sidesFries = () => {
    const friesContent = document.createElement("div");
    friesContent.classList.add("sides-content");
    friesContent.classList.add("menu-item");

    const friesTitle = document.createElement("h2");
    friesTitle.innerText = "Fries";

    const friesInfo = document.createElement("p");
    friesInfo.innerText = "Hand cut and deep fried in ox-fat fries";

    const friesImg = document.createElement("img");
    friesImg.src = friesImage;

    friesContent.appendChild(friesTitle);
    friesContent.appendChild(friesInfo);
    friesContent.appendChild(friesImg);

    return friesContent;
  };

  const sidesSalad = () => {
    const sidesSalad = document.createElement("div");
    sidesSalad.classList.add("sides-content");
    sidesSalad.classList.add("menu-item");

    const saladTitle = document.createElement("h2");
    saladTitle.innerText = "Salad";

    const saladInfo = document.createElement("p");
    saladInfo.innerText =
      "Hand picked farm fresh salad with lettuce, tomatoes, onions, and a low-cal vinegar dressing";

    const saladImg = document.createElement("img");
    saladImg.src = saladImage;

    sidesSalad.appendChild(saladTitle);
    sidesSalad.appendChild(saladInfo);
    sidesSalad.appendChild(saladImg);

    return sidesSalad;
  };

  const sidesSoup = () => {
    const sidesSoup = document.createElement("div");
    sidesSoup.classList.add("sides-content");
    sidesSoup.classList.add("menu-item");

    const soupTitle = document.createElement("h2");
    soupTitle.innerText = "Soup";

    const soupInfo = document.createElement("p");
    soupInfo.innerText =
      "Yummy and fresh made warm soup, ask your server about the available soup of the day!";

    const soupImg = document.createElement("img");
    soupImg.src = soupImage;

    sidesSoup.appendChild(soupTitle);
    sidesSoup.appendChild(soupInfo);
    sidesSoup.appendChild(soupImg);

    return sidesSoup;
  };

  const sidesSection = () => {
    const sidesSection = document.createElement("div");
    sidesSection.classList.add("menu-section");

    sidesSection.appendChild(sidesHeading());
    sidesSection.appendChild(sidesFries());
    sidesSection.appendChild(sidesSalad());
    sidesSection.appendChild(sidesSoup());

    return sidesSection;
  };

  const dishesHeading = () => {
    const dishesHeading = document.createElement("h1");
    dishesHeading.innerText = "Main Dishes";

    return dishesHeading;
  };

  const dishesSandwhich = () => {
    const dishesSandwhich = document.createElement("div");
    dishesSandwhich.classList.add("dishes-content");
    dishesSandwhich.classList.add("menu-item");

    const sandwhichTitle = document.createElement("h2");
    sandwhichTitle.innerText = "Sandwhich";

    const sandwhichInfo = document.createElement("p");
    sandwhichInfo.innerText =
      "Delcious and panin pressed warm sandwhich with turkey, bacon, tomato, lettuce and yogurt dressing";

    const sandwhichImg = document.createElement("img");
    sandwhichImg.src = sandwhichImage;

    dishesSandwhich.appendChild(sandwhichTitle);
    dishesSandwhich.appendChild(sandwhichInfo);
    dishesSandwhich.appendChild(sandwhichImg);

    return dishesSandwhich;
  };

  const dishesPasta = () => {
    const dishesPasta = document.createElement("div");
    dishesPasta.classList.add("dishes-content");
    dishesPasta.classList.add("menu-item");

    const pastaTitle = document.createElement("h2");
    pastaTitle.innerText = "Pasta";

    const pastaInfo = document.createElement("p");
    pastaInfo.innerText =
      "Gluten-free hand made chickpea pasta noodles with farm fresh home-made tomato vodka sauce";

    const pastaImg = document.createElement("img");
    pastaImg.src = pastaImage;

    dishesPasta.appendChild(pastaTitle);
    dishesPasta.appendChild(pastaInfo);
    dishesPasta.appendChild(pastaImg);

    return dishesPasta;
  };

  const dishesBurger = () => {
    const dishesBurger = document.createElement("div");
    dishesBurger.classList.add("sides-content");
    dishesBurger.classList.add("menu-item");

    const burgerTitle = document.createElement("h2");
    burgerTitle.innerText = "Burger";

    const burgerInfo = document.createElement("p");
    burgerInfo.innerText =
      "Locally sourced bison burger included with a variety of toppings included bacon, avocado, lettuce, tommato and a garlic aioli";

    const burgerImg = document.createElement("img");
    burgerImg.src = burgerImage;

    dishesBurger.appendChild(burgerTitle);
    dishesBurger.appendChild(burgerInfo);
    dishesBurger.appendChild(burgerImg);

    return dishesBurger;
  };

  const dishesSection = () => {
    const dishesSection = document.createElement("div");
    dishesSection.classList.add("menu-section");

    dishesSection.appendChild(dishesHeading());
    dishesSection.appendChild(dishesSandwhich());
    dishesSection.appendChild(dishesPasta());
    dishesSection.appendChild(dishesBurger());

    return dishesSection;
  };

  return { menuPageMainContent };
};

export function renderMenuPage() {
  return MenuPage().menuPageMainContent();
}
