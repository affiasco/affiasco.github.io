import { renderHomepage } from "./home";
import { renderNav } from "./nav";
import { renderMenuPage } from "./menu";
import { renderContactPage } from "./contact";

const content = document.querySelector(".content");

renderNav();
renderHomepage();

function removeRender() {
  content.innerHTML = "";
}

function hideShowPage(event) {
  const innerText = event.target.innerText;

  switch (innerText) {
    case "Home":
      removeRender();
      renderHomepage();
      break;
    case "Menu":
      removeRender();
      renderMenuPage();
      break;
    case "Contact":
      removeRender();
      renderContactPage();
      break;
  }
}

const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((navItem) =>
  navItem.addEventListener("click", (e) => hideShowPage(e))
);
