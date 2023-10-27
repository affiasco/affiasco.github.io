import { renderDomContent } from "./renderDomContent.js";

const allTasks = () => {
  const infoObj = {
    className: ".all-tasks",
    headerText: "All Tasks",
  };

  const domContent = renderDomContent();

  const renderPage = () => {
    domContent.showCorrectPage(infoObj);
  };

  const showPageOnLoad = () => {
    domContent.showPageOnLoad(infoObj);
  };

  return { showPageOnLoad, renderPage };
};

export { allTasks };
