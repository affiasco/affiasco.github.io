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
    menuHeading.innerText = "Menu";

    return menuHeading;
  };

  const beveragesHeading = () => {
    const beveragesHeading = document.createElement("h1");
    beveragesHeading.innerText = "Beverages";

    return beveragesHeading;
  };
  const beveragesContent = () => {
    // sodas
    // teas
  };
  const beveragesSection = () => {
    const beveragesSection = document.createElement("div");
    beveragesSection.appendChild(beveragesHeading());

    return beveragesSection;
  };

  const sidesHeading = () => {
    const sidesHeading = document.createElement("h1");
    sidesHeading.innerText = "Side Dishes";

    return sidesHeading;
  };
  const sidesContent = () => {
    // fries
    // salad
    // soup
  };
  const sidesSection = () => {
    const sidesSection = document.createElement("div");
    sidesSection.appendChild(sidesHeading());

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
  const dishesSection = () => {
    const dishesSections = document.createElement("div");
    dishesSections.appendChild(dishesHeading());

    return dishesSections;
  };

  return { menuPageMainContent };
};

export function renderMenuPage() {
  return MenuPage().menuPageMainContent();
}
