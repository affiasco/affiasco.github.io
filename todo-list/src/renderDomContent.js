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
    addRemoveActive();
  };

  const renderPage = (infoObj) => {
    mainContentContainer.innerHTML = "";
    addTaskHeader(infoObj.headerText);
  };

  const addRemoveActive = () => {
    const sideNavBtns = document.querySelectorAll(".side-nav-btn");

    sideNavBtns.forEach((sideNavBtn) => {
      sideNavBtn.addEventListener("click", (e) => {
        sideNavBtns.forEach((btn) => {
          btn.classList.remove("active");
        });

        e.target.classList.add("active");
      });
    });
  };

  return { showCorrectPage };
};

export { renderDomContent };
