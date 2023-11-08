const renderDomContent = () => {
  const mainContentContainer = document.querySelector(".main-content");

  const addTaskHeader = (headerText) => {
    const headingContainer = document.createElement("div");
    headingContainer.classList.add("heading-container");

    const newHeader = document.createElement("h1");
    newHeader.classList.add("task-header");
    newHeader.innerText = headerText;

    mainContentContainer.appendChild(headingContainer);
    headingContainer.appendChild(addTaskButtonOpenModal());
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

  const addTaskButtonOpenModal = () => {
    const taskButtonContainer = document.createElement("div");
    taskButtonContainer.classList.add("task-btn-container");

    const taskButton = document.createElement("button");
    taskButton.classList.add("add-task-btn");
    taskButton.innerText = "Add Task";

    taskButtonContainer.appendChild(taskButton);

    taskButton.addEventListener("click", () => {
      addTaskModal();
      openTaskModal();
      // closeTaskModal();
    });

    return taskButtonContainer;
  };

  const addTaskModal = () => {
    const taskModal = document.createElement("div");
    taskModal.classList.add("add-task-modal");

    const taskModalContent = document.createElement("div");
    taskModalContent.classList.add("add-task-modal-content");

    taskModal.appendChild(taskModalContent);

    const taskModalHeading = document.createElement("h1");
    taskModalHeading.classList.add("add-task-heading");
    taskModalHeading.innerText = "Create New Task";

    const modalCloseButton = document.createElement("p");
    modalCloseButton.classList.add("close-add-task-modal");
    modalCloseButton.innerText = "X";

    taskModalContent.appendChild(modalCloseButton);
    taskModalContent.appendChild(taskModalHeading);

    mainContentContainer.appendChild(taskModal);
    closeTaskModal();

    return taskModal;
  };

  const openTaskModal = () => {
    const modalContainer = document.querySelector(".add-task-modal");
    modalContainer.style.display = "block";
  };

  const closeTaskModal = () => {
    const modalContainer = document.querySelector(".add-task-modal");
    document
      .querySelector(".close-add-task-modal")
      .addEventListener("click", () => (modalContainer.style.display = "none"));
  };

  const taskForm = () => {
    // create the form to be submitted in the taskModal
  };

  const renderPage = (infoObj) => {
    mainContentContainer.innerHTML = "";
    addTaskHeader(infoObj.headerText);
    pageActions();
  };

  const showPageOnLoad = (infoObj) => {
    mainContentContainer.innerHTML = "";
    addTaskHeader(infoObj.headerText);
    addTaskButtonOpenModal();
  };

  const showCorrectPage = (infoObj) => {
    const sideNavBtn = document.querySelector(infoObj.className);

    sideNavBtn.addEventListener("click", () => renderPage(infoObj));
    addRemoveActive();
  };

  return { showCorrectPage, showPageOnLoad };
};

export { renderDomContent };
