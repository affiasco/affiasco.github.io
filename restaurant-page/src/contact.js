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
    heading.innerText = "Contact Us";

    return heading;
  };

  const contactChef = () => {
    const chefSection = document.createElement("div");
    chefSection.classList.add("contact-person");

    const chefName = document.createElement("h2");
    chefName.innerText = "Chef Name";

    const chefInfo = document.createElement("p");
    chefInfo.innerHTML = `Name<br />123-456-7890<br />chef@email.com`;

    chefSection.appendChild(chefName);
    chefSection.appendChild(chefInfo);

    return chefSection;
  };

  const contactManager = () => {
    const managerSection = document.createElement("div");
    managerSection.classList.add("contact-person");

    const managerName = document.createElement("h2");
    managerName.innerText = "Manager Name";

    const managerInfo = document.createElement("p");
    managerInfo.innerHTML = `Name<br />123-456-7890<br />manager@email.com`;

    managerSection.appendChild(managerName);
    managerSection.appendChild(managerInfo);

    return managerSection;
  };

  const contactWaiter = () => {
    const waiterSection = document.createElement("div");
    waiterSection.classList.add("contact-person");

    const waiterName = document.createElement("h2");
    waiterName.innerText = "Waiter Name";

    const waiterInfo = document.createElement("p");
    waiterInfo.innerHTML = `Name<br />123-456-7890<br />waiter@email.com`;

    waiterSection.appendChild(waiterName);
    waiterSection.appendChild(waiterInfo);

    return waiterSection;
  };

  const contactContent = () => {
    const contactContent = document.createElement("div");
    contactContent.appendChild(contactChef());
    contactContent.appendChild(contactManager());
    contactContent.appendChild(contactWaiter());

    return contactContent;
  };
  const contactSection = () => {
    const contentSection = document.createElement("div");
    contactContent();
    contentSection.appendChild(contactHeading());
    contentSection.appendChild(contactContent());

    return contentSection;
  };

  return { contactPageMainContent };
};

export function renderContactPage() {
  return ContactPage().contactPageMainContent();
}
