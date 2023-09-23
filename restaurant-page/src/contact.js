const ContactPage = () => {
  const content = document.querySelector(".content");

  const contactPageMainContent = () => {
    const container = document.createElement("div");
    container.classList.add("contact-container");
    container.classList.add("content-container");

    content.appendChild(container);
    container.appendChild(contactSection());
  };

  const contactHeading = () => {};
  const contactContent = () => {};
  const contactSection = () => {};

  return { contactPageMainContent };
};

export function renderContactPage() {
  return ContactPage().contactPageMainContent();
}
