const NavComponent = () => {
  const content = document.querySelector(".content");
  const navContainer = () => {
    const container = document.createElement("div");
    container.classList.add("nav-container");

    const listItems = navListItems();

    container.appendChild(listItems);

    content.appendChild(container);
  };

  const navListItems = () => {
    const listItems = document.createElement("ul");
    listItems.classList.add("nav-list-items");

    const navHome = document.createElement("li");
    navHome.classList.add("nav-home");
    navHome.innerText = "Home";

    const navMenu = document.createElement("li");
    navMenu.classList.add("nav-menu");
    navMenu.innerText = "Menu";

    const navContact = document.createElement("li");
    navContact.classList.add("nav-contact");
    navContact.innerText = "Contact";

    listItems.appendChild(navHome);
    listItems.appendChild(navMenu);
    listItems.appendChild(navContact);

    return listItems;
  };

  return { navContainer, navListItems };
};

export function renderNav() {
  const navComponent = NavComponent();
  navComponent.navContainer();
}
