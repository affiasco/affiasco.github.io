import "./style.css";

const sideNav = document.querySelector(".side-nav");
const sideNavButton = document.querySelector(".side-nav-btn");

sideNav.addEventListener("click", (e) => {
  const className = e.target.className;
  if (className.includes("side-nav-btn")) {
    e.target.classList.add("active");
  }
});
