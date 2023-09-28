const NavComponent = () => {
  const content = document.querySelector(".content");

  const navContainer = () => {
    const container = document.createElement("nav");
    container.classList.add("nav-container");

    const listItems = navListItems();
    container.appendChild(listItems);
    document.body.insertBefore(container, content);
  };

  const navListItems = () => {
    const listItems = document.createElement("ul");
    listItems.classList.add("nav-list-items");

    const navHome = document.createElement("li");
    navHome.classList.add("nav-home");
    navHome.classList.add("nav-item");
    navHome.innerText = "Home";

    const navMenu = document.createElement("li");
    navMenu.classList.add("nav-menu");
    navMenu.classList.add("nav-item");
    navMenu.innerText = "Menu";

    const navContact = document.createElement("li");
    navContact.classList.add("nav-contact");
    navContact.classList.add("nav-item");
    navContact.innerText = "Contact";

    listItems.appendChild(navHome);
    listItems.appendChild(navMenu);
    listItems.appendChild(navContact);

    return listItems;
  };

  return { navContainer };
};

export function renderNav() {
  const navComponent = NavComponent();
  navComponent.navContainer();
}
