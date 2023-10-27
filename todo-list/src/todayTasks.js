import { renderDomContent } from "./renderDomContent.js";

const infoObj = {
  className: ".today",
  headerText: "Today's Tasks",
};

const domContent = renderDomContent();
domContent.showCorrectPage(infoObj);

// write a function that makes main-content empty and then renders the new js page when selected
