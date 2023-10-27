const renderDomContent = () => {
  const mainContentContainer = document.querySelector(".main-content");

  const addTaskHeader = (headerText) => {
    const newHeader = document.createElement("h1");

    mainContentContainer.append(newHeader);
    newHeader.innerText = headerText;
  };

  const showCorrectPage = (infoObj) => {
    const sideNavBtn = document.querySelector(infoObj.className);

    sideNavBtn.addEventListener("click", () => renderPage(infoObj));
  };

  const renderPage = (infoObj) => {
    mainContentContainer.innerHTML = "";
    addTaskHeader(infoObj.headerText);
  };

  return { showCorrectPage };
};

export { renderDomContent };
