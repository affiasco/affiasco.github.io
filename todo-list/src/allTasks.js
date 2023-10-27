import { renderDomContent } from "./renderDomContent.js";

const infoObj = {
  className: ".all-tasks",
  headerText: "All Tasks",
};

const domContent = renderDomContent();
domContent.showCorrectPage(infoObj);

// write a function that makes main-content empty and then renders the new js page when selected
