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

    const sodaTitle = document.createElement("h2");
    sodaTitle.innerText = "Sodas";

    const sodaInfo = document.createElement("p");
    sodaInfo.innerText = "Coke Products Available via Can";

    const sodaImg = document.createElement("img");
    sodaImg.src =
      "/home/affiasco/git_repos/affiasco.github.io/restaurant-page/src/assets/images/sodas.jpeg";

    sodaContent.appendChild(sodaTitle);
    sodaContent.appendChild(sodaInfo);
    sodaContent.appendChild(sodaImg);

    return sodaContent;
  };

  const beveragesTea = () => {
    const teaContent = document.createElement("div");
    teaContent.classList.add("bev-content");

    const teaTitle = document.createElement("h2");
    teaTitle.innerText = "Tea";

    const teaInfo = document.createElement("p");
    teaInfo.innerText = "Variety of herbal and caffinated teas";

    const teaImg = document.createElement("img");
    teaImg.src =
      "/home/affiasco/git_repos/affiasco.github.io/restaurant-page/src/assets/images/teas.jpg";

    teaContent.appendChild(teaTitle);
    teaContent.appendChild(teaInfo);
    teaContent.appendChild(teaImg);

    return teaContent;
  };

  const beveragesSection = () => {
    const beveragesSection = document.createElement("div");
    beveragesSection.classList.add("beverages-section");
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

    const friesTitle = document.createElement("h2");
    friesTitle.innerText = "Fries";

    const friesInfo = document.createElement("p");
    friesInfo.innerText = "Hand cut and deep fried in ox-fat fries";

    const friesImg = document.createElement("img");
    friesImg.src =
      "/home/affiasco/git_repos/affiasco.github.io/restaurant-page/src/assets/images/fries.jpg";

    friesContent.appendChild(friesTitle);
    friesContent.appendChild(friesInfo);
    friesContent.appendChild(friesImg);

    return friesContent;
  };

  const sidesSalad = () => {
    const sidesSalad = document.createElement("div");
    sidesSalad.classList.add("sides-content");

    const saladTitle = document.createElement("h2");
    saladTitle.innerText = "Salad";

    const saladInfo = document.createElement("p");
    saladInfo.innerText =
      "Hand picked farm fresh salad with lettuce, tomatoes, onions, and a low-cal vinegar dressing";

    const saladImg = document.createElement("img");
    saladImg.src =
      "/home/affiasco/git_repos/affiasco.github.io/restaurant-page/src/assets/images/salad.jpg";

    sidesSalad.appendChild(saladTitle);
    sidesSalad.appendChild(saladInfo);
    sidesSalad.appendChild(saladImg);

    return sidesSalad;
  };

  const sidesSoup = () => {
    const sidesSoup = document.createElement("div");
    sidesSoup.classList.add("sides-content");

    const soupTitle = document.createElement("h2");
    soupTitle.innerText = "Soup";

    const soupInfo = document.createElement("p");
    soupInfo.innerText =
      "Yummy and fresh made warm soup, ask your server about the available soup of the day!";

    const soupImg = document.createElement("img");
    soupImg.src =
      "/home/affiasco/git_repos/affiasco.github.io/restaurant-page/src/assets/images/soup.jpg";

    sidesSoup.appendChild(soupTitle);
    sidesSoup.appendChild(soupInfo);
    sidesSoup.appendChild(soupImg);

    return sidesSoup;
  };

  const sidesSection = () => {
    const sidesSection = document.createElement("div");
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
  const dishesContent = () => {
    //sandwhich
    //pasta
    //burger
  };

  const dishesSandwhich = () => {
    const dishesSandwhich = document.createElement("div");
    dishesSandwhich.classList.add("sides-content");

    const sandwhichTitle = document.createElement("h2");
    sandwhichTitle.innerText = "Sandwhich";

    const sandwhichInfo = document.createElement("p");
    sandwhichInfo.innerText =
      "Delcious and panin pressed warm sandwhich with turkey, bacon, tomato, lettuce and yogurt dressing";

    const sandwhichImg = document.createElement("img");
    sandwhichImg.src =
      "/home/affiasco/git_repos/affiasco.github.io/restaurant-page/src/assets/images/sandwhich.jpg";

    dishesSandwhich.appendChild(sandwhichTitle);
    dishesSandwhich.appendChild(sandwhichInfo);
    dishesSandwhich.appendChild(sandwhichImg);

    return dishesSandwhich;
  };

  const dishesPasta = () => {
    const dishesPasta = document.createElement("div");
    dishesPasta.classList.add("sides-content");

    const pastaTitle = document.createElement("h2");
    pastaTitle.innerText = "Pasta";

    const pastaInfo = document.createElement("p");
    pastaInfo.innerText =
      "Gluten-free hand made chickpea pasta noodles with farm fresh home-made tomato vodka sauce";

    const pastaImg = document.createElement("img");
    pastaImg.src =
      "/home/affiasco/git_repos/affiasco.github.io/restaurant-page/src/assets/images/pasta.jpg";

    dishesPasta.appendChild(pastaTitle);
    dishesPasta.appendChild(pastaInfo);
    dishesPasta.appendChild(pastaImg);

    return dishesPasta;
  };

  const dishesBurger = () => {
    const dishesBurger = document.createElement("div");
    dishesBurger.classList.add("sides-content");

    const burgerTitle = document.createElement("h2");
    burgerTitle.innerText = "Burger";

    const burgerInfo = document.createElement("p");
    burgerInfo.innerText =
      "Locally sourced bison burger included with a variety of toppings included bacon, avocado, lettuce, tommato and a garlic aioli";

    const burgerImg = document.createElement("img");
    burgerImg.src =
      "/home/affiasco/git_repos/affiasco.github.io/restaurant-page/src/assets/images/burger.jpg";

    dishesBurger.appendChild(burgerTitle);
    dishesBurger.appendChild(burgerInfo);
    dishesBurger.appendChild(burgerImg);

    return dishesBurger;
  };

  const dishesSection = () => {
    const dishesSections = document.createElement("div");
    dishesSections.appendChild(dishesHeading());
    dishesSections.appendChild(dishesSandwhich());
    dishesSections.appendChild(dishesPasta());
    dishesSections.appendChild(dishesBurger());

    return dishesSections;
  };

  return { menuPageMainContent };
};

export function renderMenuPage() {
  return MenuPage().menuPageMainContent();
}
