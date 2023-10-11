const ContactPage = () => {
  const content = document.querySelector(".content");

  const contactPageMainContent = () => {
    const container = document.createElement("div");
    container.classList.add("contact-container");
    container.classList.add("content-container");
    content.appendChild(container);
    container.appendChild(contactSection());
  };

  const contactHeading = () => {
    const heading = document.createElement("h1");
    heading.classList.add("section-heading");
    heading.innerText = "Contact Us";

    return heading;
  };

  const contactChef = () => {
    const chefSection = document.createElement("div");
    chefSection.classList.add("contact-person");

    const chefName = document.createElement("h2");
    chefName.innerText = "Head Chef";

    const chefInfo = document.createElement("p");
    chefInfo.innerHTML = `Johnny Potatoes<br />123-456-7890<br />chef@email.com`;

    chefSection.appendChild(chefName);
    chefSection.appendChild(chefInfo);

    return chefSection;
  };

  const contactManager = () => {
    const managerSection = document.createElement("div");
    managerSection.classList.add("contact-person");

    const managerName = document.createElement("h2");
    managerName.innerText = "Manager";

    const managerInfo = document.createElement("p");
    managerInfo.innerHTML = `Matilda Barnes<br />123-456-7890<br />manager@email.com`;

    managerSection.appendChild(managerName);
    managerSection.appendChild(managerInfo);

    return managerSection;
  };

  const contactServer = () => {
    const serverSection = document.createElement("div");
    serverSection.classList.add("contact-person");

    const serverName = document.createElement("h2");
    serverName.innerText = "Lead Server";

    const serverInfo = document.createElement("p");
    serverInfo.innerHTML = `Rupert Finkle<br />123-456-7890<br />server@email.com`;

    serverSection.appendChild(serverName);
    serverSection.appendChild(serverInfo);

    return serverSection;
  };

  const contactContent = () => {
    const contactContent = document.createElement("div");
    contactContent.classList.add("content-container");
    contactContent.appendChild(contactHeading());
    contactContent.appendChild(contactChef());
    contactContent.appendChild(contactManager());
    contactContent.appendChild(contactServer());

    return contactContent;
  };
  const contactSection = () => {
    const contentSection = document.createElement("div");
    contactContent();
    contentSection.appendChild(contactContent());

    return contentSection;
  };

  return { contactPageMainContent };
};

export function renderContactPage() {
  return ContactPage().contactPageMainContent();
}
