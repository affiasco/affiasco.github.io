const HomePage = () => {
  const content = document.querySelector(".content");

  const homepageMainContent = () => {
    const container = document.createElement("div");
    container.classList.add("home-container");
    container.classList.add("content-container");

    const homePageHeading = homepageHeading();
    content.appendChild(container);
    container.appendChild(homePageHeading);
    container.appendChild(homepageAboutSection());
    container.appendChild(homepageHoursSection());
    container.appendChild(homepageLocationSection());
  };

  const homepageHeading = () => {
    const heading = document.createElement("h1");
    heading.classList.add("section-heading");
    heading.innerText = "Restaurant Page";

    return heading;
  };

  const homepageAbout = () => {
    const about = document.createElement("p");
    about.classList.add("content-para");
    about.innerText =
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quasi unde vero maxime, atque harum vel obcaecati consectetur earum magni sint minus quae cumque maiores. Quod autem consectetur repudiandae alias?";

    return about;
  };

  const homepageAboutSection = () => {
    const headingContainer = document.createElement("div");
    // const mainHeading = homepageHeading();
    const aboutSection = homepageAbout();

    headingContainer.classList.add("content-item-container");
    headingContainer.classList.add("about-container");

    // headingContainer.appendChild(mainHeading);
    headingContainer.appendChild(aboutSection);

    return headingContainer;
  };

  const homepageHoursHeading = () => {
    const hoursHours = document.createElement("h1");
    hoursHours.innerText = "Hours";
    return hoursHours;
  };

  const homepageHoursList = () => {
    const hoursList = document.createElement("ul");
    hoursList.classList.add("hours-list");

    const monday = document.createElement("li");
    hoursList.appendChild(monday);
    monday.innerText = "Monday: 8am - 8pm";

    const tuesday = document.createElement("li");
    hoursList.appendChild(tuesday);
    tuesday.innerText = "Tuesday: 8am - 8pm";

    const wednesday = document.createElement("li");
    hoursList.appendChild(wednesday);
    wednesday.innerText = "Wednesday: 8am - 8pm";

    const thursday = document.createElement("li");
    hoursList.appendChild(thursday);
    thursday.innerText = "Thursday: 8am - 8pm";

    const Friday = document.createElement("li");
    hoursList.appendChild(Friday);
    Friday.innerText = "Friday: 6am - 10pm";

    const saturday = document.createElement("li");
    hoursList.appendChild(saturday);
    saturday.innerText = "Saturday: 6am - 10pm";

    const sunday = document.createElement("li");
    hoursList.appendChild(sunday);
    sunday.innerText = "Sunday: 10am - 4pm";

    return hoursList;
  };

  const homepageHoursSection = () => {
    const hoursContainer = document.createElement("div");
    const hoursHeading = homepageHoursHeading();
    const hoursList = homepageHoursList();

    hoursContainer.classList.add("content-item-container");
    hoursContainer.classList.add("hours-container");

    // homepageHeading();

    hoursContainer.appendChild(hoursHeading);
    hoursContainer.appendChild(hoursList);

    return hoursContainer;
  };

  const homepageLocationHeading = () => {
    const heading = document.createElement("h1");
    heading.innerText = "Location";
    return heading;
  };

  const homepageLocation = () => {
    const location = document.createElement("p");
    location.innerText = "123 Forest Avenue, Forestville, Maine";
    return location;
  };

  const homepageLocationSection = () => {
    const locationContainer = document.createElement("div");
    const locationHeading = homepageLocationHeading();
    const location = homepageLocation();

    locationContainer.classList.add("content-item-container");
    locationContainer.classList.add("location-container");

    locationContainer.appendChild(locationHeading);
    locationContainer.appendChild(location);

    return locationContainer;
  };

  return { homepageMainContent };
};

export function renderHomepage() {
  return HomePage().homepageMainContent();
}
