// export function navComponent() {
//   const navContainer = document.createElement("div");
//   navContainer.classList.add("nav-container");

//   const navListItems = document.createElement("ol");
//   navListItems.classList.add("nav-list-items");

//   const navHome = document.createElement("li");
//   navHome.classList.add("nav-home");

//   const navMenu = document.createElement("li");
//   navHome.classList.add("nav-menu");

//   const navContact = document.createElement("li");
//   navHome.classList.add("nav-contact");

//   navContact.appendChild(navListItems);
//   navListItems.appendChild(navHome);
//   navListItems.appendChild(navMenu);
//   navListItems.appendChild(navContact);
// }

export const NavComponent = () => {
  const navContainer = () => {
    const navContainer = document.createElement("div");
    navContainer.classList.add("nav-container");

    document.body.appendChild(navContainer);
    navContainer.innerText = "Hey";
  };
  return { navContainer };
};

const navComponent = NavComponent();
export function renderNav() {
  navComponent.navContainer();
}
