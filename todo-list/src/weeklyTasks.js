import { renderDomContent } from "./renderDomContent.js";

const weeklyTasks = () => {
  const infoObj = {
    className: ".this-week",
    headerText: "This Week's Tasks",
  };

  const domContent = renderDomContent();

  const renderPage = () => {
    domContent.showCorrectPage(infoObj);
  };

  return { renderPage };
};

export { weeklyTasks };
