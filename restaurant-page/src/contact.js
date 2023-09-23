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
    chefSection.classList.add("contact-chef");

    const chefName = document.createElement("h2");
    chefName.innerText = "Chef Name";

    const chefInfo = document.createElement("p");
    chefInfo.innerText = `Name</br>123-456-7890</br>email@email.com`;

    chefSection.appendChild(chefName);
    chefSection.appendChild(chefInfo);

    return chefSection;
  };

  const contactContent = () => {
    const contactContent = document.createElement("div");

    contactContent.appendChild(contactChef());
  };
  const contactSection = () => {
    const contentSection = document.createElement("div");
    contentSection.appendChild(contactHeading());
    contentSection.appendChild(contactContent());
  };

  return { contactPageMainContent };
};

export function renderContactPage() {
  return ContactPage().contactPageMainContent();
}
