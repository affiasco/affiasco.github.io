const renderDomContent = () => {
  const mainContentContainer = document.querySelector(".main-content");

  const addTaskHeader = (headerText) => {
    const headingContainer = document.createElement("div");
    headingContainer.classList.add("heading-container");

    const newHeader = document.createElement("h1");
    newHeader.classList.add("task-header");
    newHeader.innerText = headerText;

    mainContentContainer.appendChild(headingContainer);
    headingContainer.appendChild(addTaskButton());
    headingContainer.appendChild(newHeader);
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

  const addTaskButton = () => {
    const taskButtonContainer = document.createElement("div");
    taskButtonContainer.classList.add("task-btn-container");

    const taskButton = document.createElement("button");
    taskButton.classList.add("add-task-btn");
    taskButton.innerText = "Add Task";

    taskButtonContainer.appendChild(taskButton);

    return taskButtonContainer;
  };

  const renderPage = (infoObj) => {
    mainContentContainer.innerHTML = "";
    addTaskHeader(infoObj.headerText);
  };

  const showCorrectPage = (infoObj) => {
    const sideNavBtn = document.querySelector(infoObj.className);

    sideNavBtn.addEventListener("click", () => renderPage(infoObj));
    addRemoveActive();
  };

  return { showCorrectPage };
};

export { renderDomContent };
