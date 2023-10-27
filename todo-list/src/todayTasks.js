import { renderDomContent } from "./renderDomContent.js";

const todayTasks = () => {
  const infoObj = {
    className: ".today",
    headerText: "Today's Tasks",
  };

  const domContent = renderDomContent();

  const renderPage = () => {
    domContent.showCorrectPage(infoObj);
  };

  return { renderPage };
};

export { todayTasks };
