const MenuPage = () => {
  const content = document.querySelector(".content");

  const menuPageMainContent = () => {
    const container = document.createElement("div");
    container.classList.add("menu-container");
    container.classList.add("content-container");

    content.appendChild(container);
    container.appendChild(beveragesSection());
    container.appendChild(sidesSection());
    container.appendChild(dishesSection());
  };

  const beveragesHeading = () => {};
  const beveragesContent = () => {};
  const beveragesSection = () => {};

  const sidesHeading = () => {};
  const sidesContent = () => {};
  const sidesSection = () => {};

  const dishesHeading = () => {};
  const dishesContent = () => {};
  const dishesSection = () => {};

  return { menuPageMainContent };
};

export function renderMenuPage() {
  return MenuPage().menuPageMainContent();
}
